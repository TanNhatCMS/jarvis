# System Prompts

Các system prompt dùng lại được cho JARVIS — phiên bản có kiểm soát, mọi thay
đổi ghi vào [docs/prompts/CHANGELOG.md](../docs/prompts/CHANGELOG.md) theo
[docs/learning-loop.md](../docs/learning-loop.md).

| File | Dùng cho |
|---|---|
| `jarvis-pipeline-system.md` | Audit/harden pipeline: discovery → hypothesis → trust boundary → fail-closed gates → regression test → adversarial review → pre-mortem → final verification → báo cáo theo format chuẩn |
| `jarvis-setup.md` | Agent tự cài đặt JARVIS trên máy của mình: khảo sát → clone → install → verify tests → đăng ký 4 workflows → báo cáo trung thực. Có khối **one-throw** ở đầu file — chỉ cần copy/paste cho agent là nó tự bootstrap toàn bộ |

## Quy tắc

- System prompt là **policy ổn định**, không phải bản vá tạm.
- Không để agent tự sửa các file này sau mỗi run (xem learning-loop).
- Muốn dùng: copy toàn bộ nội dung file vào system prompt của agent/task,
  kèm `<task_envelope>` đã điền đúng repo/mode/mục tiêu.
