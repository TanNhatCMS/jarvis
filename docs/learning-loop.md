# Learning Loop — quy trình cải tiến workflow có kiểm soát

> Nguyên tắc: **không để agent tự sửa `AGENTS.md` / prompt sau mỗi run.**
> File policy sẽ nhanh chóng thành tập hợp bản vá vụn và tự đầu độc hành vi
> các run sau. Mọi thay đổi policy/prompt ổn định đều đi qua vòng sau.

## Vòng lặp

```
run → run report → gom pattern qua nhiều run → con người duyệt
  → version prompt + changelog → benchmark trước/sau → merge
```

### 1. Run report (mỗi lần chạy)

Mỗi workflow trả về `run_report` trong kết quả cuối (xem `prompt_version`,
`gates`, `tasks_passed/failed`). Người vận hành lưu kết quả vào
`reports/<workflow>-<YYYYMMDD-HHmm>.json` để làm dữ liệu đầu vào cho bước 2.

Không run nào được tự ý sửa prompt, `AGENTS.md`, hay `PLATFORM` config dựa
trên kết quả của chính nó.

### 2. Gom pattern (định kỳ, qua nhiều run)

Đọc nhiều run report, chỉ ghi nhận pattern **lặp lại** (ví dụ: "reviewer bỏ
sót lỗi null-check 3/5 run", "QA báo pass nhưng thiếu exit code 2/4 run").
Một sự cố đơn lẻ → ghi vào run report, không đổi policy.

### 3. Con người duyệt

Mọi đề xuất đổi prompt/policy phải được con người duyệt trước khi áp dụng.
Đề xuất gồm: pattern quan sát được (kèm run report dẫn chứng), thay đổi cụ
thể, rủi ro.

### 4. Version prompt + changelog

- Mỗi workflow có `const PROMPT_VERSION` (vd `"2.0.0"`).
- Mọi thay đổi prompt/policy: tăng version + ghi vào
  [prompts/CHANGELOG.md](prompts/CHANGELOG.md) (ngày, version, lý do, run
  dẫn chứng).
- Không sửa expected test để làm implementation hiện tại pass.

### 5. Benchmark trước/sau

Trước khi merge thay đổi prompt, chạy benchmark:

```bash
node docs/tests/benchmark.mjs            # baseline (trước đổi)
# ... sửa prompt, tăng PROMPT_VERSION, ghi CHANGELOG ...
node docs/tests/benchmark.mjs            # sau đổi
```

Benchmark chạy cùng bộ fixture qua mock agent, báo cáo số gate pass/fail và
số lần gọi `agent()` — so sánh để chắc thay đổi không làm hỏng gate cũ.
Chỉ merge khi benchmark sau không tệ hơn trước.

## Cấm

- Agent tự append "bài học" vào `AGENTS.md` sau mỗi run.
- Đổi prompt vì một run đơn lẻ thất bại (chưa thành pattern).
- Version prompt mà không ghi changelog.
- Merge thay đổi prompt khi benchmark sau tệ hơn trước.
