// workflow-shim.mjs — chạy workflow JARVIS ngoài Muse workflow daemon.
//
// LƯU Ý QUAN TRỌNG: workflow script gọi `agent()` ĐỒNG BỘ (blocking) —
// daemon đợi subagent xong mới trả object về. Shim này giữ nguyên ngữ nghĩa
// đó: spawnAgentSync PHẢI là hàm sync (ví dụ gọi CLI agent qua execFileSync).
//
// Cách dùng:
//   node docs/workflow-shim.mjs workflows/dev-team.js --args '{"task":"...","repo":"..."}' --agent-module ./my-agent.mjs
//   node docs/workflow-shim.mjs workflows/dev-team.js --args-file args.json --agent-cmd "opencode run --format json"
//   node docs/workflow-shim.mjs workflows/dev-team.js --dry-run   (không gọi AI: chỉ check load + luồng điều phối)
//
// --agent-module: module ESM/CJS export `function spawnAgentSync(prompt, opts)` -> string
//   (message cuối của subagent, chứa đúng một JSON object).
// --agent-cmd: command template; shim truyền prompt qua stdin (execFileSync), đọc stdout.
//   Ví dụ: --agent-cmd "python3 my_agent_cli.py"

import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const argv = process.argv.slice(2);
const scriptPath = argv[0];
if (!scriptPath || scriptPath.startsWith("--")) {
  console.error("Dùng: node docs/workflow-shim.mjs <workflow.js> [--args JSON|--args-file F] [--agent-module M|--agent-cmd CMD] [--dry-run]");
  process.exit(2);
}
const getFlag = (name) => {
  const i = argv.indexOf(name);
  return i >= 0 && i + 1 < argv.length ? argv[i + 1] : null;
};

let args = {};
const argsJson = getFlag("--args");
const argsFile = getFlag("--args-file");
if (argsJson) args = JSON.parse(argsJson);
else if (argsFile) args = JSON.parse(await readFile(argsFile, "utf8"));

const dryRun = argv.includes("--dry-run") || (!getFlag("--agent-module") && !getFlag("--agent-cmd"));

let spawnAgentSync = null;
const agentModule = getFlag("--agent-module");
const agentCmd = getFlag("--agent-cmd");
if (!dryRun && agentModule) {
  const mod = await import(pathToFileURL(agentModule).href);
  spawnAgentSync = mod.spawnAgentSync || mod.default;
  if (typeof spawnAgentSync !== "function")
    throw new Error("--agent-module phải export function spawnAgentSync(prompt, opts) (đồng bộ).");
} else if (!dryRun && agentCmd) {
  const [cmd, ...cmdArgs] = agentCmd.split(" ");
  spawnAgentSync = (prompt) =>
    execFileSync(cmd, cmdArgs, { input: prompt, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
}

let src = await readFile(scriptPath, "utf8");
// Runtime bọc script trong function body: strip `export `, giữ `const meta`.
src = src.replace(/^export\s+const\s+meta/m, "const meta");
if (/^\s*(import|export)\s/m.test(src))
  throw new Error("Script chứa import/export ngoài `export const meta` — runtime không hỗ trợ.");

// Đọc meta riêng (object literal thuần — an toàn khi eval cô lập).
const metaMatch = src.match(/const meta = (\{[\s\S]*?\n\});/);
if (!metaMatch) throw new Error("Không tìm thấy `export const meta`.");
const meta = new Function(`return (${metaMatch[1]});`)();
const phaseNames = new Set((meta.phases || []).map((p) => p.name));

const calls = [];
const phase = (name) => {
  if (!phaseNames.has(name)) console.error(`[warn] phase "${name}" không có trong meta.phases`);
  console.error(`[phase] ${name}`);
};
const log = (msg) => console.error(`[log] ${msg}`);

function extractJson(text) {
  const m = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const body = m ? m[1] : text;
  const start = body.indexOf("{");
  const end = body.lastIndexOf("}");
  if (start < 0 || end < 0) throw new Error("Không tìm thấy JSON object trong response của agent.");
  return JSON.parse(body.slice(start, end + 1));
}

const agent = (prompt, opts = {}) => {
  calls.push({ key: opts.key, label: opts.label, phase: opts.phase, promptChars: prompt.length });
  if (dryRun) return {}; // chỉ kiểm tra luồng điều phối, không gọi AI thật
  const raw = String(spawnAgentSync(prompt, opts));
  const obj = extractJson(raw);
  const required = (opts.schema && opts.schema.required) || [];
  const missing = required.filter((k) => !(k in obj));
  if (missing.length)
    throw new Error(`Agent response thiếu key bắt buộc: ${missing.join(", ")} (key=${opts.key})`);
  return obj;
};

// Chạy script như function body với 4 globals (agent đồng bộ, đúng ngữ nghĩa daemon).
const runner = new Function("agent", "args", "phase", "log", `"use strict";\n${src}\n`);
const result = runner(agent, args, phase, log);

console.log(JSON.stringify({ workflow: meta.name, result, agentCalls: calls }, null, 2));
