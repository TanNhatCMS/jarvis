# JARVIS

> Đội agent dev tái dùng được — gọi bằng một câu lệnh, không cần dựng team mới mỗi lần.

JARVIS là bộ workflow điều phối agent AI làm phần mềm theo pipeline cố định:
lập kế hoạch → viết code → review → kiểm thử → ship. Viết một lần, mỗi lần giao
việc chỉ cần gọi tên workflow, không cần dựng team mới.

## Thành phần

| Workflow | Mô tả | Pipeline |
|---|---|---|
| `workflows/dev-team.js` | Đội dev thực thi task | analyze → implement → review → verify → ship (tùy chọn) |
| `workflows/spec-team.js` | Lập kế hoạch spec-driven | discover → constitution → specify → clarify → plan → tasks → analyze |

### dev-team

Nhận 1 hoặc nhiều task (`task` hoặc `tasks`), xử lý nối tiếp từng task:

1. **analyze** — planner đọc codebase, lập kế hoạch chia steps
2. **implement** — coder làm từng step, build-check nhanh sau mỗi step
3. **review** — reviewer khó tính, vòng sửa lỗi giới hạn (`max_repair_attempts`, mặc định 2)
4. **verify** — QA chạy build/test tổng thể
5. **ship** (tùy chọn) — release engineer tạo nhánh `dev-team/tN-<slug>`, commit, push, mở PR (kèm `Closes #`)

Task lỗi được ghi nhận và tiếp tục task sau, không dừng cả batch.

Tham số chính: `task` / `tasks`, `repo`, `branch`, `max_repair_attempts`,
`github_repo` (`"owner/repo"` để bật phase ship), `create_issue`, `create_pr`,
`issue_number`, `base_branch`.

### spec-team

Planning theo phong cách spec-driven (lấy cảm hứng từ
[GitHub Spec Kit](https://github.com/github/spec-kit)):

1. **discover** (tùy chọn) — đọc README/roadmap/issues, đề xuất tính năng kèm priority P0–P2 / effort S–L, dừng để con người chọn
2. **constitution** — dùng lại nguyên tắc dự án nếu đã có, không viết lại
3. **specify** — tạo `specs/<NNN>-<slug>/spec.md` (chỉ what/why, cấm tech stack)
4. **clarify** — tối đa 5 câu hỏi cho con người, đánh dấu `[NEEDS CLARIFICATION]`
5. **plan** — `plan.md` + `research.md` / `data-model.md` / `contracts/` khi cần
6. **tasks** — `tasks.md` dạng `T001...` kèm đánh dấu `[P]` cho task song song
7. **analyze** — kiểm toán chéo spec ↔ plan ↔ tasks, vòng sửa giới hạn

Output trả về `dev_team_tasks` — mảng task ném thẳng vào `dev-team` để thực thi.

## Cách dùng

Các script chạy trên workflow runtime (đăng ký bằng `workflow.create`, gọi bằng
`workflow.launch`). Ví dụ:

```js
// Chạy 1 task
workflow.launch("dev-team", {
  task: "Thêm trang đăng nhập với email + password",
  repo: "workspace/projects/my-app",
  github_repo: "my-org/my-app",
  create_pr: true
})

// Chạy batch nhiều task
workflow.launch("dev-team", {
  tasks: ["Task A", { task: "Task B", base_branch: "develop" }],
  repo: "workspace/projects/my-app"
})

// Lập spec cho tính năng mới
workflow.launch("spec-team", {
  feature: "Cho phép user upload ảnh đại diện",
  repo: "workspace/projects/my-app"
})
```

## Lưu ý kỹ thuật

- Script dùng `export const meta` (ES module). `node --check` không kiểm tra được
  cú pháp ES module trên Node 24 (luôn exit 0) — cần strip `export` hoặc dùng
  dynamic `import()` để check thật.
- Tránh `pipeline()` đa stage của daemon (từng gây lỗi `not a callable function`);
  dùng vòng lặp `for` thường chạy nối tiếp các stage thay thế.

## License

MIT — xem [LICENSE](LICENSE).
