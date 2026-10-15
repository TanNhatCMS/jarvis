# Prompt Changelog

Mọi thay đổi prompt/policy của workflow đều ghi ở đây (kèm version).
Xem quy trình tại [../learning-loop.md](../learning-loop.md).

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
