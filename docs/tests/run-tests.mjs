// run-tests.mjs — test các gate cưỡng chế của workflow.
// Chạy: node docs/tests/run-tests.mjs
// Exit 0 khi mọi test pass; exit 1 nếu có test fail.

import { runWorkflow, prefixScenario } from "./harness.mjs";

const WF = "workflows/dev-team.js";
const WJ = "workflows/jarvis.js";
const WS = "workflows/spec-team.js";
const WR = "workflows/release-pipeline.js";

const results = [];
function test(name, fn) {
  results.push({ name, fn });
}

function assert(cond, msg) {
  if (!cond) throw new Error("ASSERT: " + msg);
}

// ---------- mock dùng chung ----------
const plan1 = () => ({ summary: "plan", steps: [{ id: "s1", title: "S1", detail: "d", files: [] }], test_strategy: "t" });
const code1 = () => ({ step_id: "s1", summary: "coded", files_changed: ["a.js"] });
const checkPass = () => ({ passed: true, feedback: "", commands_run: ["pnpm test"] });
const reviewPass = () => ({ passed: true, must_fix: [], suggestions: [], summary: "ok" });
const verifyEvidence = (passed = true) => ({
  passed, report: "rep", commit_sha: "abc123", worktree: "/tmp/qa-t1",
  started_at: "2026-10-15T00:00:00Z", finished_at: "2026-10-15T00:01:00Z",
  failures: [], commands: [{ command: "pnpm test", exit_code: 0, stdout_tail: "ok" }]
});
const shipOk = () => ({ branch: "dev-team/t1-x", summary: "shipped", pr_url: "https://example/pr/1" });

function devTeamScenario({ check, review, verify }) {
  const repair = () => ({ summary: "fixed", files_changed: [] });
  return prefixScenario([
    ["t0-analyze-plan", plan1],
    ["t0-code-", code1],
    ["t0-check-", check],
    ["t0-review-", review],
    ["t0-repair-", repair],
    ["t0-verify-repair-", repair],
    ["t0-verify-", verify],
    ["t0-ship-github", shipOk],
  ]);
}
const baseArgs = { task: "Test task", max_repair_attempts: 1, github_repo: "o/r", create_pr: true };

// ---------- SHIP GATE ----------
test("ship-gate: review fail → không ship", async () => {
  const { result, error, calls } = await runWorkflow(WF, baseArgs,
    devTeamScenario({ check: checkPass, review: () => ({ passed: false, must_fix: ["x"], suggestions: [], summary: "bad" }), verify: () => verifyEvidence(true) }));
  assert(!error, "workflow không được throw: " + (error && error.message));
  const r = result.results[0];
  assert(r.ship === null, "ship phải là null");
  assert(r.quality_gate_passed === false, "quality_gate_passed phải false");
  assert(typeof r.ship_skipped_reason === "string" && r.ship_skipped_reason.length > 0, "phải có ship_skipped_reason");
  assert(!calls.some(k => k.startsWith("t0-ship-github")), "không được gọi ship agent");
  assert(r.status === "CẦN XEM LẠI", "status phải là CẦN XEM LẠI, thực tế: " + r.status);
});

test("ship-gate: verify fail → không ship", async () => {
  const { result, error, calls } = await runWorkflow(WF, baseArgs,
    devTeamScenario({ check: checkPass, review: reviewPass, verify: () => ({ ...verifyEvidence(false), retryable: false }) }));
  assert(!error, "workflow không được throw");
  const r = result.results[0];
  assert(r.ship === null && r.quality_gate_passed === false, "không ship khi verify fail");
  assert(!calls.some(k => k.startsWith("t0-ship-github")), "không được gọi ship agent");
});

test("ship-gate: cả hai pass → ship", async () => {
  const { result, error, calls } = await runWorkflow(WF, baseArgs,
    devTeamScenario({ check: checkPass, review: reviewPass, verify: () => verifyEvidence(true) }));
  assert(!error, "workflow không được throw");
  const r = result.results[0];
  assert(r.quality_gate_passed === true, "quality_gate_passed phải true");
  assert(r.ship !== null && r.ship.branch === "dev-team/t1-x", "ship phải chạy");
  assert(calls.some(k => k.startsWith("t0-ship-github")), "phải gọi ship agent");
  assert(r.status === "HOÀN TẤT", "status HOÀN TẤT");
});

test("ship-gate: verify passed=true nhưng thiếu evidence → fail closed, không ship", async () => {
  const noEvidence = () => ({ passed: true, report: "tự kể đã test", commit_sha: "", worktree: "", commands: [], failures: [] });
  const { result, error, calls } = await runWorkflow(WF, baseArgs,
    devTeamScenario({ check: checkPass, review: reviewPass, verify: noEvidence }));
  assert(!error, "workflow không được throw");
  const r = result.results[0];
  assert(r.verify_passed === false, "verify_passed phải false khi thiếu evidence, thực tế: " + r.verify_passed);
  assert(r.quality_gate_passed === false && r.ship === null, "không ship khi thiếu evidence");
  assert(!calls.some(k => k.startsWith("t0-ship-github")), "không được gọi ship agent");
});

test("ship-gate: review trả thiếu field → fail closed", async () => {
  const { result, error, calls } = await runWorkflow(WF, baseArgs,
    devTeamScenario({ check: checkPass, review: () => ({}), verify: () => verifyEvidence(true) }));
  // schema validation throw → task catch → status LỖI, không ship
  assert(!error, "workflow tổng không được throw");
  const r = result.results[0];
  assert(r.status === "LỖI", "status phải là LỖI khi review malformed, thực tế: " + r.status);
  assert(!calls.some(k => k.startsWith("t0-ship-github")), "không được gọi ship agent");
});

// ---------- DONE STEPS ----------
test("steps: check passed → DONE 1/1", async () => {
  const { result } = await runWorkflow(WF, { task: "t", max_repair_attempts: 1 },
    devTeamScenario({ check: checkPass, review: reviewPass, verify: () => verifyEvidence(true) }));
  const r = result.results[0];
  assert(r.steps_done === "1/1", "steps_done phải 1/1, thực tế: " + r.steps_done);
  assert(r.steps_failed.length === 0, "không có step failed");
});

test("steps: check failed → không DONE", async () => {
  const { result } = await runWorkflow(WF, { task: "t", max_repair_attempts: 1 },
    devTeamScenario({ check: () => ({ passed: false, feedback: "lỗi", commands_run: [] }), review: reviewPass, verify: () => verifyEvidence(true) }));
  const r = result.results[0];
  assert(r.steps_done === "0/1", "steps_done phải 0/1, thực tế: " + r.steps_done);
  assert(r.steps_failed.includes("s1"), "steps_failed phải chứa s1");
});

test("steps: check throw → không DONE", async () => {
  const { result } = await runWorkflow(WF, { task: "t", max_repair_attempts: 1 },
    devTeamScenario({ check: () => { throw new Error("agent timeout"); }, review: reviewPass, verify: () => verifyEvidence(true) }));
  const r = result.results[0];
  assert(r.steps_done === "0/1", "steps_done phải 0/1 khi check throw");
});

test("steps: check malformed → không DONE", async () => {
  const { result } = await runWorkflow(WF, { task: "t", max_repair_attempts: 1 },
    devTeamScenario({ check: () => "không phải json", review: reviewPass, verify: () => verifyEvidence(true) }));
  const r = result.results[0];
  assert(r.steps_done === "0/1", "steps_done phải 0/1 khi check malformed");
});

// ---------- AUDIT GATE (jarvis.js) ----------
const jarvisSpecMocks = (auditFn) => prefixScenario([
  ["s-specify", () => ({ spec_dir: "specs/001-x", spec_number: "001", slug: "x", path: "specs/001-x/spec.md", summary: "s" })],
  ["s-clarify-auto", () => ({ assumptions: ["a1"], spec_updated: true })],
  ["s-plan", () => ({ path: "specs/001-x/plan.md", summary: "p", files: ["plan.md"] })],
  ["s-tasks", () => ({ path: "specs/001-x/tasks.md", count: 1, tasks: [{ id: "T001", title: "T", detail: "d" }] })],
  ["s-audit-repair-", () => ({ spec_dir: "specs/001-x", spec_number: "001", slug: "x", path: "specs/001-x/tasks.md", summary: "fixed" })],
  ["s-audit-", auditFn],
  ["t0-analyze-plan", plan1],
  ["t0-code-", code1],
  ["t0-check-", checkPass],
  ["t0-review-", reviewPass],
  ["t0-verify-", () => verifyEvidence(true)],
  ["t0-ship-github", shipOk],
]);
const jarvisArgs = { feature: "Test feature", skip_constitution: true, max_repair_attempts: 1 };

test("audit-gate: audit luôn fail → không implement", async () => {
  const { result, error, calls } = await runWorkflow(WJ, jarvisArgs,
    jarvisSpecMocks(() => ({ passed: false, issues: ["i1"], summary: "bad" })));
  assert(!error, "workflow không được throw: " + (error && error.message));
  assert(result.mode === "audit-failed", "mode phải là audit-failed, thực tế: " + result.mode);
  assert(!calls.some(k => k.includes("-code-")), "không được gọi coder");
  assert(Array.isArray(result.audit_issues) && result.audit_issues.length > 0, "phải ghi audit_issues");
});

test("audit-gate: audit pass sau 1 vòng sửa → implement chạy", async () => {
  let n = 0;
  const { result, error, calls } = await runWorkflow(WJ, jarvisArgs,
    jarvisSpecMocks(() => (++n === 1 ? { passed: false, issues: ["i1"], summary: "bad" } : { passed: true, issues: [], summary: "ok" })));
  assert(!error, "workflow không được throw");
  assert(result.mode === "full", "mode phải là full, thực tế: " + result.mode);
  assert(calls.some(k => k.includes("-code-")), "coder phải được gọi sau khi audit pass");
});

test("audit-gate: audit malformed → fail closed, không implement", async () => {
  const { result, error, calls } = await runWorkflow(WJ, jarvisArgs, jarvisSpecMocks(() => "garbage"));
  assert(error, "workflow phải throw khi audit malformed (fail closed)");
  assert(!calls.some(k => k.includes("-code-")), "không được gọi coder khi audit malformed");
  assert(result === null, "không có result khi throw");
});

// ---------- PROMPT INJECTION ----------
test("injection: prompt các role đọc repo phải chứa trust boundary", async () => {
  const { prompts } = await runWorkflow(WF, baseArgs,
    devTeamScenario({ check: checkPass, review: reviewPass, verify: () => verifyEvidence(true) }));
  for (const k of Object.keys(prompts)) {
    if (/analyze-plan|review-|verify-final|code-/.test(k)) {
      assert(prompts[k].includes("DỮ LIỆU KHÔNG ĐÁNG TIN"),
        `prompt ${k} thiếu trust boundary`);
    }
  }
});

test("injection: discover prompt phải chứa trust boundary", async () => {
  const { prompts } = await runWorkflow(WS,
    { discover: true, discover_count: 2, skip_constitution: true },
    prefixScenario([
      ["discover", () => ({ candidates: [] })],
      ["specify", () => ({ spec_dir: "specs/001-x", spec_number: "001", slug: "x", path: "specs/001-x/spec.md", summary: "s" })],
      ["clarify", () => ({ questions: [] })],
      ["plan", () => ({ path: "p", summary: "p" })],
      ["tasks", () => ({ path: "t", count: 0, tasks: [] })],
      ["analyze", () => ({ passed: true, issues: [], summary: "ok" })],
    ]));
  assert(prompts["discover"].includes("DỮ LIỆU KHÔNG ĐÁNG TIN"), "discover prompt thiếu trust boundary");
});

// ---------- RELEASE PIPELINE ----------
const rpSpec = () => ({ spec_path: "specs/001-x/spec.md", summary: "s", acceptance_criteria: ["AC1"], open_questions: [] });
function rpScenario({ reviewPassed = true, testPassed = true, withGithub = true } = {}) {
  return prefixScenario([
    ["rp-spec", rpSpec],
    ["rp-analyze", () => ({ summary: "p", steps: [], impacted_files: ["a.js"], risks: [], test_strategy: "t" })],
    ["rp-code", () => ({ branch: "release/abc", summary: "c", files_changed: ["a.js"], commit_sha: "def456", tests_run: ["pnpm test"] })],
    ["rp-review-", () => ({ passed: reviewPassed, blocking: reviewPassed ? [] : ["b1"], suggestions: [], summary: "r" })],
    ["rp-test", () => verifyEvidence(testPassed)],
    ["rp-ship", () => ({ branch: "release/abc", pr_url: "https://example/pr/9", pr_number: 9, summary: "s" })],
  ]);
}

test("release-pipeline: chưa duyệt spec → awaiting_spec_approval", async () => {
  const { result, error, calls } = await runWorkflow(WR, { request: "X" }, rpScenario());
  assert(!error, "không throw");
  assert(result.status === "awaiting_spec_approval", "status phải là awaiting_spec_approval");
  assert(!calls.includes("rp-analyze"), "không được chạy analyzer khi chưa duyệt spec");
});

test("release-pipeline: duyệt spec → chạy tới awaiting_merge_approval", async () => {
  const { result, error, calls } = await runWorkflow(WR,
    { request: "X", spec_approved: true, github_repo: "o/r" }, rpScenario());
  assert(!error, "không throw: " + (error && error.message));
  assert(result.status === "awaiting_merge_approval", "status phải là awaiting_merge_approval, thực tế: " + result.status);
  assert(calls.includes("rp-ship"), "shipper phải mở PR");
  assert(result.pr_url === "https://example/pr/9", "phải có pr_url");
});

test("release-pipeline: test fail → dừng, không ship", async () => {
  const { result, error, calls } = await runWorkflow(WR,
    { request: "X", spec_approved: true, github_repo: "o/r" }, rpScenario({ testPassed: false }));
  assert(!error, "không throw");
  assert(result.status === "test-failed", "status phải là test-failed");
  assert(!calls.includes("rp-ship"), "không được ship khi test fail");
});

test("release-pipeline: review fail → dừng, không test tiếp", async () => {
  const { result, error, calls } = await runWorkflow(WR,
    { request: "X", spec_approved: true, github_repo: "o/r", max_repair_attempts: 0 }, rpScenario({ reviewPassed: false }));
  assert(!error, "không throw");
  assert(result.status === "review-failed", "status phải là review-failed, thực tế: " + result.status);
  assert(!calls.includes("rp-test"), "không được test khi review fail");
  assert(!calls.includes("rp-ship"), "không được ship khi review fail");
});

// ---------- chạy ----------
let pass = 0, fail = 0;
for (const t of results) {
  try {
    await t.fn();
    pass++;
    console.log("PASS " + t.name);
  } catch (e) {
    fail++;
    console.log("FAIL " + t.name + " — " + e.message);
  }
}
console.log(`\n${pass} pass, ${fail} fail, ${results.length} total`);
process.exit(fail > 0 ? 1 : 0);
