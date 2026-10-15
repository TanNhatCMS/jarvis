# Porting JARVIS sang nền tảng khác

Các workflow `workflows/*.js` được viết cho Muse workflow daemon. Muốn chạy trên
nền tảng agent khác (kiểu OpenClaw / MUSE AI / CLI agent), bạn cần làm 2 việc:

1. **Implement runtime interface** — 4 globals: `args`, `agent()`, `phase()`,
   `log()` + `export const meta` + top-level `return`.
   Chi tiết từng hàm: [runtime-interface.md](runtime-interface.md).
2. **Sửa khối `PLATFORM`** ở đầu mỗi workflow file cho khớp môi trường mới
   (quy ước đường dẫn, cách truy cập GitHub, binary ngoài...).

## Cách nhanh nhất: dùng shim mẫu

`docs/workflow-shim.mjs` implement sẵn interface trên Node.js. Bạn chỉ cần
cung cấp **một** hàm spawn subagent đồng bộ:

```bash
# 1) Viết my-agent.mjs export function spawnAgentSync(prompt, opts)
# 2) Chạy:
node docs/workflow-shim.mjs workflows/dev-team.js \
  --args '{"task":"Thêm trang đăng nhập","repo":"/path/to/repo","github_repo":"my-org/my-app","create_pr":true}' \
  --agent-module ./my-agent.mjs
```

`spawnAgentSync(prompt, opts)` nhận đúng prompt mà workflow đã soạn sẵn, phải
trả về string — message cuối của subagent, chứa **đúng một JSON object** khớp
`opts.schema` (shim tự bóc code fence và kiểm tra `required`).

Ví dụ `my-agent.mjs` dùng CLI agent có sẵn (đồng bộ qua stdin/stdout):

```js
import { execFileSync } from "node:child_process";
export function spawnAgentSync(prompt) {
  // Thay bằng CLI agent của nền tảng bạn (opencode, claude, codex...).
  // Quan trọng: CLI phải chạy ĐỒNG BỘ và in ra message cuối của agent.
  return execFileSync("opencode", ["run", "--format", "json"],
    { input: prompt, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
}
```

Hoặc không cần module riêng:

```bash
node docs/workflow-shim.mjs workflows/dev-team.js --args-file args.json \
  --agent-cmd "python3 my_agent_cli.py"   # shim pipe prompt qua stdin, đọc stdout
```

Chế độ `--dry-run` (không gọi AI): kiểm tra script load được, `meta` hợp lệ,
và liệt kê mọi lần gọi `agent()` sẽ xảy ra — dùng để smoke-test sau khi sửa
workflow.

## Gợi ý mapping theo nền tảng

| Nền tảng | `agent()` | `args` | `phase`/`log` |
|---|---|---|---|
| OpenClaw (opencode) | `opencode run` (sync qua execFileSync) | `--args JSON` / file | console |
| CLI agent bất kỳ | wrapper sync qua stdin/stdout | như trên | console |
| Nền tảng có subagent API bất đồng bộ | bọc bằng `execFileSync` gọi chính CLI của nó, hoặc deasync | như trên | webhook/UI của nền tảng |

Điểm cần chú ý duy nhất: workflow gọi `agent()` **đồng bộ** (daemon block cho
tới khi subagent xong). Adapter bất đồng bộ phải được bọc thành sync ở biên.

## Khối PLATFORM trong từng workflow

Mỗi workflow file có khối `const PLATFORM = {...}` ngay sau `export const meta`.
Các giá trị mặc định khớp môi trường Muse ban đầu:

- `workspacePathNote` — quy ước đường dẫn agent phải dùng khi đọc/ghi file
  (mặc định: dạng `workspace/...` vì tool file resolve từ thư mục home).
- `githubWorkflowsNote` — lưu ý khi chạm `.github/workflows/`
  (mặc định: gateway MCP chặn ghi — dùng git trực tiếp).
- `gitNote` — cách làm việc với git (mặc định: dùng git trực tiếp,
  tự đặt user.name/user.email local nếu thiếu).
- `responseLanguage` — ngôn ngữ báo cáo của agent (mặc định: tiếng Việt).

Khi port, sửa các chuỗi này cho đúng nền tảng mới — không cần lùng từng prompt.

## Agents (`agents/ecc/`)

71 agents dùng frontmatter kiểu **Claude Code subagent**:

```md
---
name: architect
description: ...
tools: Read, Grep, Glob
model: opus
---
```

- Nền tảng hỗ trợ Claude Code format: dùng nguyên.
- Nền tảng khác: `name` + `description` dùng để chọn agent (giống trigger
  description của skill); `tools` là gợi ý giới hạn công cụ; `model` là gợi ý
  model (có thể bỏ qua). Phần thân markdown là system prompt của agent.

## Skills (`skills/`)

Chuẩn `SKILL.md` (frontmatter `name` + `description`, thân markdown) — tương
thích với quy ước Agent Skills đang phổ biến. Danh mục đầy đủ:
[SKILLS_INDEX.md](../SKILLS_INDEX.md).

## Checklist porting

- [ ] Shim chạy `--dry-run` pass cho cả 3 workflow (meta hợp lệ, không crash
      luồng điều phối).
- [ ] `spawnAgentSync` trả JSON đúng schema (test với 1 task nhỏ trước).
- [ ] Sửa khối `PLATFORM` trong 3 workflow files.
- [ ] Chạy thử 1 task dev-only thật, đối chiếu kết quả với kỳ vọng.
- [ ] Ghi lại mapping của nền tảng bạn vào file này (PR welcome).

## Giới hạn đã biết

- `jarvis.js` full-auto chưa từng chạy end-to-end với agent thật (chỉ mới
  kiểm chứng luồng điều phối bằng harness mock — xem `docs/tests/`).
- Không dùng `pipeline()` đa stage (bug daemon gốc) — các stage đã chạy nối
  tiếp bằng vòng lặp `for`, giữ nguyên khi port.
