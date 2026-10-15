// benchmark.mjs — chạy bộ fixture cố định qua mock agent, báo cáo metrics
// để so sánh trước/sau khi đổi prompt (xem docs/learning-loop.md).
// Chạy: node docs/tests/benchmark.mjs
// Output: JSON { prompt_versions, fixtures: [{name, agent_calls, gate_results...}] }

import { runWorkflow, prefixScenario } from "./harness.mjs";

const plan1 = () => ({ summary: "plan", steps: [{ id: "s1", title: "S1", detail: "d", files: [] }], test_strategy: "t" });
const code1 = () => ({ step_id: "s1", summary: "coded", files_changed: ["a.js"] });
const checkPass = () => ({ passed: true, feedback: "", commands_run: ["pnpm test"] });
const reviewPass = () => ({ passed: true, must_fix: [], suggestions: [], summary: "ok" });
const verifyEvidence = () => ({
  passed: true, report: "rep", commit_sha: "abc123", worktree: "/tmp/qa-t1",
  started_at: "2026-10-15T00:00:00Z", finished_at: "2026-10-15T00:01:00Z",
  failures: [], commands: [{ command: "pnpm test", exit_code: 0, stdout_tail: "ok" }]
});

const fixtures = [
  {
    name: "dev-team happy path",
    path: "workflows/dev-team.js",
    args: { task: "T", max_repair_attempts: 1, github_repo: "o/r", create_pr: true },
    scenario: prefixScenario([
      ["t0-analyze-plan", plan1], ["t0-code-", code1], ["t0-check-", checkPass],
      ["t0-review-", reviewPass], ["t0-verify-", verifyEvidence],
      ["t0-ship-github", () => ({ branch: "b", summary: "s" })],
    ]),
    expect: (r) => r.results[0].status === "HOÀN TẤT" && r.results[0].ship !== null,
  },
  {
    name: "dev-team review fail → blocked",
    path: "workflows/dev-team.js",
    args: { task: "T", max_repair_attempts: 1, github_repo: "o/r", create_pr: true },
    scenario: prefixScenario([
      ["t0-analyze-plan", plan1], ["t0-code-", code1], ["t0-check-", checkPass],
      ["t0-review-", () => ({ passed: false, must_fix: ["x"], suggestions: [], summary: "bad" })],
      ["t0-repair-", () => ({ summary: "f", files_changed: [] })],
      ["t0-verify-", verifyEvidence],
      ["t0-ship-github", () => ({ branch: "b", summary: "s" })],
    ]),
    expect: (r) => r.results[0].ship === null && r.results[0].quality_gate_passed === false,
  },
  {
    name: "release-pipeline full to merge gate",
    path: "workflows/release-pipeline.js",
    args: { request: "X", spec_approved: true, github_repo: "o/r" },
    scenario: prefixScenario([
      ["rp-spec", () => ({ spec_path: "s.md", summary: "s", acceptance_criteria: ["AC"], open_questions: [] })],
      ["rp-analyze", () => ({ summary: "p", steps: [], impacted_files: [], risks: [], test_strategy: "t" })],
      ["rp-code", () => ({ branch: "release/a", summary: "c", files_changed: [], commit_sha: "abc", tests_run: [] })],
      ["rp-review-", () => ({ passed: true, blocking: [], suggestions: [], summary: "ok" })],
      ["rp-test", verifyEvidence],
      ["rp-ship", () => ({ branch: "release/a", pr_url: "https://x/pr/1", summary: "s" })],
    ]),
    expect: (r) => r.status === "awaiting_merge_approval",
  },
];

const out = { fixtures: [], prompt_versions: {} };
for (const f of fixtures) {
  const { result, error, calls } = await runWorkflow(f.path, f.args, f.scenario);
  const ok = !error && f.expect(result);
  out.fixtures.push({ name: f.name, ok, agent_calls: calls.length, error: error ? String(error.message).slice(0, 120) : null });
  if (result && result.prompt_version) out.prompt_versions[f.path] = result.prompt_version;
}
const passed = out.fixtures.filter((f) => f.ok).length;
console.log(JSON.stringify(out, null, 2));
console.log(`\nbenchmark: ${passed}/${out.fixtures.length} fixtures ok`);
process.exit(passed === out.fixtures.length ? 0 : 1);
