# Prompt Changelog

Mọi thay đổi prompt/policy của workflow đều ghi ở đây (kèm version).
Xem quy trình tại [../learning-loop.md](../learning-loop.md).

## 2026-10-22 — nạp pipeline-system cho 3 workflow còn lại

`workflows/dev-team.js` (2.0.0 → 2.1.0), `workflows/spec-team.js`
(2.0.0 → 2.1.0), `workflows/release-pipeline.js` (1.0.0 → 1.1.0): nạp
`prompts/jarvis-pipeline-system.md` theo đúng cơ chế của `jarvis.js` v2.1.0
(`PLATFORM.pipelineSystem` + `pipelineSystemHint(sections)` + `PIPELINE_CORE`,
hint luôn có hiệu lực, không nhúng toàn văn file vào script).

- `dev-team.js`: gắn 9 điểm gọi agent — planner (mục 4, 5, 6), coder (2, 9),
  build-check (8, 10), reviewer (7, 8, 11), repair sau review (9),
  QA verify (8 — gồm 8.2/8.3, 10, 13), sửa theo QA (9), verify lại (10, 13),
  ship (15, 16).
- `spec-team.js`: chỉ các pha kỹ thuật — plan (4, 5, 6), tasks (5),
  analyze/audit (5, 7, 8), sửa artifacts sau audit (8). Các pha spec
  (discover, constitution, specify, clarify) giữ nguyên như tiền lệ jarvis.js.
- `release-pipeline.js`: analyzer (4, 5, 6), coder (2, 9), reviewer (7, 8, 11),
  repair (9), review lại (7, 8, 11), tester (8 — gồm 8.2/8.3, 10, 13),
  shipper (15, 16). Pha spec giữ nguyên.
- Lý do: user yêu cầu hoàn tất việc nạp cho cả 4 workflow (tiếp nối mục
  2.1.0 ở dưới). Benchmark trước/sau: 3/3 fixtures, `agent_calls` không đổi;
  gate tests 19/19.

## 2.1.0 — 2026-10-22

`workflows/jarvis.js`: nạp `prompts/jarvis-pipeline-system.md` vào pipeline.

- Thêm `PLATFORM.pipelineSystem` + `pipelineSystemHint(sections)` +
  `PIPELINE_CORE`: mọi agent thuộc pha kỹ thuật (audit, planner, coder,
  build-check, reviewer, repair, QA verify + re-verify, ship) đều nhận lệnh
  đọc & tuân thủ file, trỏ đúng các mục hợp vai trò. Hint **luôn có hiệu lực**
  (chưa cấu hình `skillsRepo` thì trỏ về bản cài mặc định `~/.jarvis/`) —
  khác `skillHint` vốn tắt khi chưa cấu hình.
- KHÔNG nhúng toàn văn 720 dòng vào script: file .md giữ là nguồn chuẩn duy
  nhất; `PIPELINE_CORE` chỉ là fallback tối thiểu khi agent không đọc được file.
- Phạm vi: chỉ `jarvis.js`. Các pha spec (discover → tasks) giữ nguyên;
  `dev-team.js` / `spec-team.js` / `release-pipeline.js` chưa nạp (việc riêng).
- Lý do: yêu cầu trực tiếp của user — file có từ 2026-10-15 nhưng chưa từng
  được workflow nào nạp. Benchmark trước/sau: 3/3 fixtures, `agent_calls`
  không đổi (6/7/6); gate tests 19/19.

## 2026-10-16 — prompts/bot-templates/ (mới, bóc tách)

14 bot brief template từ Anil-matcha/awesome-muse-connectors (MIT, của Anil-matcha),
copy nguyên văn từ `templates/` @ commit `0ffbcc0`. Mỗi template: Category,
Integrations, Approval level, Prompt copy-paste, First supervised run.
Tài liệu tham khảo, không phải policy chạy.

## 2026-10-15 — prompts/hugginggpt-4stage.md (mới, bóc tách)

Prompt tham khảo 4-stage orchestration từ microsoft/JARVIS (MIT): trích nguyên văn
`tprompt`/`prompt` của HuggingGPT (task planning, model selection, response generation),
kèm ghi chú port sang chat model + structured output (bỏ `logit_bias` thủ công) và
cảnh báo few-shot demo gốc có lỗi JSON. Tài liệu tham khảo, không phải policy chạy.

## 2026-10-15 — prompts/jarvis-pipeline-system.md (mới)

System prompt dùng lại được cho audit/harden pipeline: task envelope,
18-phase (discovery → hypothesis → trust boundary → fail-closed gates →
regression → adversarial review → pre-mortem → final verification),
instruction/data boundary, completion gate DONE/PARTIAL/BLOCKED, và format
báo cáo chuẩn 13 mục. Bổ sung theo yêu cầu trực tiếp của user.

## 2.0.0 — 2026-10-15

Tất cả workflow (`dev-team.js`, `jarvis.js`, `spec-team.js`):

- **Gate cưỡng chế bằng code:**
  - Ship chỉ chạy khi `review.passed === true && verify.passed === true`
    (trước đây chỉ cần `create_pr/github_repo`); fail → `ship_skipped_reason`.
  - `jarvis.js`: audit spec không đạt sau tối đa vòng → dừng pipeline,
    trả `mode: "audit-failed"` (trước đây vẫn implement tiếp).
    Thêm arg `audit_strict` (mặc định `true`).
  - Step chỉ DONE khi `check_passed === true` (trước đây mọi result khác
    `null` đều tính DONE).
- **Bằng chứng cứng cho QA:** `verifySchema` yêu cầu `commit_sha`,
  `worktree`, `started_at/finished_at`, `commands[{command, exit_code,
  stdout_tail}]`, `failures`; prompt bắt buộc clean worktree tại SHA đã pin;
  `no_tests` → `passed=false` (không được báo PASS).
- **Độc lập reviewer/QA:** prompt yêu cầu tự kiểm chứng diff/commit bằng git,
  không tin tóm tắt của coder; trust boundary chống prompt injection cho mọi
  prompt đọc nội dung repo.
- **Wire skill thật:** `PLATFORM.skillsRepo` + `skillHint()` — reviewer, QA,
  coder, planner đọc skill tương ứng khi được cấu hình.
- **PLATFORM config:** tách mọi chuỗi gắn môi trường Muse ra khỏi prompt.
- **Run report:** kết quả cuối có `run_report` + `prompt_version`.

## 1.0.0 — 2026-10-13

Bản đầu tiên: `dev-team.js`, `spec-team.js`, `jarvis.js` (full-auto).
Chưa có gate cưỡng chế (đã liệt kê trong 2.0.0).
