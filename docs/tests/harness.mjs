// harness.mjs — chạy workflow JARVIS với mock agent có kịch bản.
// Dùng cho test gate và benchmark. Không gọi AI thật.

import { readFile } from "node:fs/promises";

export function extractJson(text) {
  const m = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const body = m ? m[1] : text;
  const start = body.indexOf("{");
  const end = body.lastIndexOf("}");
  if (start < 0 || end < 0) throw new Error("Không tìm thấy JSON object trong response của agent.");
  return JSON.parse(body.slice(start, end + 1));
}

// scenario: { respond(key, prompt, opts) -> object | string | throws }
export function makeAgent(scenario) {
  const calls = [];
  const prompts = {};
  const agent = (prompt, opts = {}) => {
    calls.push(opts.key);
    prompts[opts.key] = prompt;
    const raw = scenario.respond(opts.key, prompt, opts);
    const text = typeof raw === "string" ? raw : JSON.stringify(raw);
    const obj = extractJson(text);
    const required = (opts.schema && opts.schema.required) || [];
    const missing = required.filter((k) => !(k in obj));
    if (missing.length) throw new Error(`Schema validation fail (key=${opts.key}): thiếu ${missing.join(", ")}`);
    return obj;
  };
  return { agent, calls, prompts };
}

// prefixMap: [[prefix, responderFn], ...] — khớp theo tiền tố key.
export function prefixScenario(prefixMap) {
  return {
    respond(key) {
      for (const [prefix, fn] of prefixMap) {
        if (key.startsWith(prefix)) return fn(key);
      }
      throw new Error(`Mock chưa định nghĩa cho key: ${key}`);
    }
  };
}

export async function runWorkflow(path, args, scenario) {
  let src = await readFile(path, "utf8");
  src = src.replace(/^export\s+const\s+meta/m, "const meta");
  if (/^\s*(import|export)\s/m.test(src)) throw new Error("Script chứa import/export không hỗ trợ.");
  const { agent, calls, prompts } = makeAgent(scenario);
  const phase = () => {};
  const log = () => {};
  const runner = new Function("agent", "args", "phase", "log", `"use strict";\n${src}\n`);
  let result = null;
  let error = null;
  try {
    result = runner(agent, args, phase, log);
  } catch (e) {
    error = e;
  }
  return { result, error, calls, prompts };
}
