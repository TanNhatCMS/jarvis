# JARVIS

> Đội agent dev tái dùng được — gọi bằng một câu lệnh, không cần dựng team mới mỗi lần.

JARVIS là bộ workflow điều phối agent AI làm phần mềm theo pipeline cố định:
lập kế hoạch → viết code → review → kiểm thử → ship. Viết một lần, mỗi lần giao
việc chỉ cần gọi tên workflow, không cần dựng team mới.

## Thành phần

| Workflow | Mô tả | Pipeline |
|---|---|---|
| `workflows/jarvis.js` | **Full-auto**: gộp spec-team + dev-team, chạy xuyên suốt không dừng | discover → constitution → specify → clarify-auto → plan → tasks → audit → implement → ship |
| `workflows/dev-team.js` | Đội dev thực thi task | analyze → implement → review → verify → ship (tùy chọn) |
| `workflows/spec-team.js` | Lập kế hoạch spec-driven (có cổng người duyệt) | discover → constitution → specify → clarify → plan → tasks → analyze |

### jarvis (full-auto)

Gộp hai workflow trên thành một pipeline duy nhất, theo lựa chọn "chạy xuyên
suốt không dừng":

- **clarify-auto**: thay vì hỏi người, agent tự quyết mọi điểm mơ hồ bằng phán
  đoán tốt nhất, ghi vào spec.md dưới mục `## Giả định đã chốt (auto)`.
- **discover**: tự chọn ứng viên #1 (xếp hạng theo giá trị/effort) rồi đi tiếp.
- **audit**: kiểm toán spec↔plan↺tasks, tự sửa đến khi đạt (giới hạn vòng).
- Mỗi task từ spec được coder đọc spec + plan trước khi code.
- Nếu chỉ truyền `task`/`tasks` (không có `feature`/`spec_dir`/`discover`),
  workflow tự chuyển sang chế độ **dev-only**: bỏ qua spec, chạy thẳng dev-team.

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

## Skills

Playbook cho agent, đặt trong `skills/<tên>/SKILL.md`:

### Core (JARVIS)

| Skill | Mô tả |
|---|---|
| `agent-browser` | Tự động hóa trình duyệt (Chrome/Chromium qua CDP): điều hướng, snapshot, tương tác |
| `ai-elements` | Component UI cho giao diện AI (chat, prompt input...) |
| `dogfood` | Rà soát web app có hệ thống, tìm bug và lập báo cáo kèm bằng chứng tái hiện |
| `feature-boundary-planner` | Lập kế hoạch ranh giới tính năng trước khi code |
| `react-best-practices` | Quy ước React tốt nhất (theo Vercel) |

Nguồn: trích từ [zai-org/ZCode](https://github.com/zai-org/ZCode) (Apache-2.0);
đã lược bỏ các skill gắn cứng nội bộ ZCode (architecture-governance, dep-refs, electron).

### ECC (bóc tách từ affaan-m/ECC, MIT)

55 skills trong `skills/ecc-<tên>/` + 71 agents trong `agents/ecc/` — bao gồm
tdd-workflow, security-review, git-workflow, context-budget, council,
verification-loop, dev-team, unified-memory... Nguồn: [affaan-m/ECC](https://github.com/affaan-m/ECC).

### 40 Things to Install in Claude (chọn lọc — license từng nguồn xem ATTRIBUTION.md)

| Skill | Nguồn | Mô tả |
|---|---|---|
| `karpathy` | [jidechao/karpathy-skills](https://github.com/jidechao/karpathy-skills) | 10 behavioral rules giảm lỗi coding LLM |
| `superpowers-brainstorming` | [obra/superpowers](https://github.com/obra/superpowers) | Brainstorming ý tưởng → spec |
| `superpowers-tdd` | [obra/superpowers](https://github.com/obra/superpowers) | Test-driven development |
| `superpowers-debugging` | [obra/superpowers](https://github.com/obra/superpowers) | Systematic debugging |
| `superpowers-code-review` | [obra/superpowers](https://github.com/obra/superpowers) | Requesting code review |
| `ponytail` | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | YAGNI "lazy senior dev", chống over-engineering |
| `taste-design` | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Anti-slop frontend design |
| `anthropics-mcp-builder` | [anthropics/skills](https://github.com/anthropics/skills) | Xây MCP server (Apache-2.0) |
| `anthropics-skill-creator` | [anthropics/skills](https://github.com/anthropics/skills) | Tạo skill mới (Apache-2.0) |
| `addyosmani-api-design` | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Thiết kế API/interface |
| `addyosmani-security` | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Security hardening |
| `addyosmani-observability` | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Observability & instrumentation |
| `addyosmani-constraints` | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Constraint-driven development |
| `addyosmani-performance` | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Performance optimization |
| `mattpocock-grill-docs` | [mattpocock/skills](https://github.com/mattpocock/skills) | Đối chiếu docs khi code |
| `mattpocock-domain-model` | [mattpocock/skills](https://github.com/mattpocock/skills) | Domain modeling |
| `mattpocock-wayfinder` | [mattpocock/skills](https://github.com/mattpocock/skills) | Định hướng codebase |
| `mattpocock-triage` | [mattpocock/skills](https://github.com/mattpocock/skills) | Triage vấn đề |
| `caveman` | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Trả lời cực ngắn, tiết kiệm token |
| `headroom` | [roman-ryzenadvanced/headroom-skill](https://github.com/roman-ryzenadvanced/headroom-skill) | Nén context cho agent |
| `rtk` | [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | Lọc output lệnh dev trước khi vào context |
| `dev-best-practices` | [MG-Cafe/claude-code-best-practices](https://github.com/MG-Cafe/claude-code-best-practices) | 9 rules thực hành cho agent dev |
| `codex-review` | [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | Review code bằng model thứ hai (codex CLI) |
| `web-scrape` | [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | Web → markdown qua Firecrawl API |
| `serena` | [oraios/serena](https://github.com/oraios/serena) | Semantic code toolkit qua LSP (skill là tài liệu wrapper, tool GPL-3.0 chạy độc lập) |

Attribution và license của từng skill xem [ATTRIBUTION.md](ATTRIBUTION.md).
Một số skill giữ file LICENSE riêng trong thư mục của nó
(`anthropics-*`, `caveman`, `dev-best-practices`, `headroom`, `karpathy`,
`taste-design`); các skill còn lại được kê tập trung trong ATTRIBUTION.md.

## Cách dùng

Các script chạy trên workflow runtime (đăng ký bằng `workflow.create`, gọi bằng
`workflow.launch`). Ví dụ:

```js
// Full-auto: từ ý tưởng tới code tới ship, không dừng hỏi
workflow.launch("jarvis", {
  feature: "Cho phép user upload ảnh đại diện",
  repo: "workspace/projects/my-app",
  github_repo: "my-org/my-app",
  create_pr: true
})

// Chế độ dev-only: có task sẵn, bỏ qua spec
workflow.launch("jarvis", {
  tasks: ["Sửa lỗi đăng nhập", "Thêm trang cài đặt"],
  repo: "workspace/projects/my-app"
})

// Chạy 1 task (dev-team thuần)
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

Code gốc của repo: MIT — xem [LICENSE](LICENSE).

Các skills/agents bóc tách từ dự án nguồn mở giữ nguyên license của nguồn:
xem bảng attribution đầy đủ trong [ATTRIBUTION.md](ATTRIBUTION.md)
(MIT / Apache-2.0; hai tool dùng ngoài `serena` là GPL-3.0-or-later,
`web-scrape` gọi Firecrawl API — cả hai đều không copy code vào repo).
