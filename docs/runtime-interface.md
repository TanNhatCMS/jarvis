# Workflow Runtime Interface

Các script trong `workflows/` (`dev-team.js`, `spec-team.js`, `jarvis.js`) không
phải module ESM thông thường. Chúng chạy trên một **workflow runtime** cung cấp
các global dưới đây. Muốn chạy JARVIS ngoài Muse (ví dụ trên nền tảng kiểu
OpenClaw / MUSE AI), bạn phải implement đúng interface này — xem
[porting.md](porting.md) và shim mẫu [workflow-shim.mjs](workflow-shim.mjs).

## Hình dạng script

```js
export const meta = {
  name: "dev-team",                 // tên workflow, dùng khi gọi workflow.launch(name, args)
  description: "...",               // mô tả ngắn
  phases: [                         // các phase hiển thị tiến trình
    { name: "analyze", title: "...", detail: "..." },
    ...
  ]
};

const inputs = args ?? {};          // args: object tham số khi launch
// ... logic điều phối, gọi agent() ...
return { message: "...", results: [...] };   // top-level return = kết quả trả về
```

- `export const meta` — runtime đọc để đăng ký workflow (tên + danh sách phase).
- Phần thân script chạy top-level; câu `return` ở top-level là **kết quả cuối**
  của workflow. (Runtime bọc script trong một hàm — code không dùng
  `import`/`export` nào khác ngoài `export const meta`.)
- Script là ES module syntax nhưng **không** dùng `node --check` để kiểm tra
  (Node luôn exit 0 với ESM). Cách check thật: strip `export ` rồi
  `node --check`, hoặc chạy qua shim ở chế độ `--dry-run`.

## Globals

### `args` — object

Tham số truyền vào lúc launch. Ví dụ `dev-team`:

| Key | Kiểu | Mặc định | Ý nghĩa |
|---|---|---|---|
| `task` / `tasks` | string \| array | — | 1 hoặc nhiều task (string hoặc object) |
| `repo` | string | `""` | thư mục repo làm việc |
| `branch` | string | `""` | nhánh git yêu cầu |
| `github_repo` | string | `""` | `"owner/repo"` — bật phase ship |
| `base_branch` | string | `""` | nhánh cơ sở cho PR |
| `max_repair_attempts` | number | `2` | số vòng sửa lỗi tối đa |
| `create_issue` / `create_pr` | boolean | `false` | tạo issue / mở PR ở phase ship |
| `issue_number` | number | `0` | issue có sẵn để gắn |

`spec-team` thêm: `feature`, `spec_dir`, `discover` (bool),
`discover_count` (mặc định 5), `skip_constitution` (bool), `clarify_answers`
(array). `jarvis` gộp cả hai bộ trên.

### `agent(prompt, opts)` → object

Spawn một subagent với prompt cho trước, đợi nó trả lời, parse JSON theo schema.

```js
const plan = agent(
  "Bạn là kiến trúc sư phần mềm...",   // prompt: string
  {
    key: "t1-analyze-plan",            // string — khóa idempotency/dedup của lần gọi
    label: "T1 phân tích & lập kế hoạch", // string — nhãn hiển thị tiến trình
    phase: "analyze",                  // string — tên phase (khớp meta.phases[].name)
    timeoutMs: 1200000,                // number — timeout, hết giờ thì throw
    schema: {                          // JSON Schema (subset) cho kết quả
      type: "object",
      required: ["summary", "steps"],
      properties: {
        summary: { type: "string" },
        steps: { type: "array", items: { type: "object" } }
      }
    }
  }
);
// plan === { summary: "...", steps: [...] }  (object đã parse)
```

Ngữ nghĩa:
- Subagent nhận đúng `prompt` (string). Prompt luôn kết thúc bằng yêu cầu
  "phản hồi cuối cùng phải là đúng một JSON object khớp schema, không thêm
  chữ giải thích ngoài JSON".
- Runtime parse JSON từ message cuối của agent (chấp nhận bọc trong code fence),
  validate tối thiểu theo `schema` (kiểm tra `required`), trả về object.
- Parse thất bại / timeout / agent lỗi → **throw**; script tự `try/catch`
  ở biên task (task lỗi được ghi nhận, tiếp tục task sau — không dừng cả batch).
- `key` phải duy nhất trong một lần chạy (dùng để dedup/retry an toàn).
- Tổng số lần gọi `agent()` mỗi file: dev-team 9 điểm gọi (trong vòng lặp
  task/step nên thực tế nhiều hơn), spec-team 8, jarvis ~15.

### `phase(name)` → void

Đánh dấu chuyển phase (hiển thị tiến trình). `name` khớp một trong
`meta.phases[].name`. Không ảnh hưởng logic.

### `log(message)` → void

Ghi log tiến trình (string). Không ảnh hưởng logic.

## Những gì script KHÔNG dùng

- Không `import`/`require`, không đọc file trực tiếp, không gọi mạng —
  mọi tương tác với thế giới ngoài (đọc code, git, GitHub) đều do **subagent**
  thực hiện theo prompt. Script chỉ điều phối: chia task, gọi agent nối tiếp,
  kiểm tra schema, gom kết quả.
- Không dùng `pipeline()` đa stage của daemon (từng gây lỗi
  `not a callable function`) — các stage chạy nối tiếp bằng vòng lặp `for`.

## PLATFORM CONFIG

Mỗi workflow file có một khối `PLATFORM` ở đầu file — các chuỗi prompt gắn
với môi trường Muse (quy ước đường dẫn `workspace/...`, lưu ý gateway GitHub
chặn `.github/workflows/`...). Khi port sang nền tảng khác, sửa duy nhất khối
này thay vì đi lùng từng prompt. Xem [porting.md](porting.md).
