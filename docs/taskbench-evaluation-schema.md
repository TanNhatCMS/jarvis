# TaskBench — Schema đánh giá task automation (tham khảo)

> **Nguồn:** [microsoft/JARVIS](https://github.com/microsoft/JARVIS) (`taskbench/`),
> paper [TaskBench: Benchmarking Large Language Models for Task Automation](https://arxiv.org/abs/2311.18760).
> License nguồn: **MIT** — xem [ATTRIBUTION.md](../ATTRIBUTION.md).
> Bóc tách ngày 2026-10-15. Chỉ lấy **schema đánh giá**, không lấy dataset (data 2023, tĩnh)
> và không lấy code inference (dựa trên OpenAI API cũ).

## Đóng góp phương pháp luận

TaskBench là benchmark đầu tiên hệ thống hoá "task automation" thành **3 stage đo được
riêng biệt** thay vì một điểm pass/fail chung. Khi đánh giá agent/workflow dùng tool trong
JARVIS, nên chấm riêng từng stage để biết hỏng ở đâu.

| Stage | Đo gì | Metric gốc | Áp dụng cho JARVIS |
|---|---|---|---|
| **Task decomposition** | Phân rã request thành các bước đúng và đủ | Rouge-1/2, BertScore F1 | So plan của planner với plan chuẩn (dùng LLM-judge thay vì Rouge cho tiếng Việt) |
| **Tool invocation** | Chọn đúng tool (node) và đúng quan hệ phụ thuộc (edge) | n-F1 (node), e-F1 (edge) | Chấm workflow: step nào gọi sai skill/agent, edge nào thiếu/thừa |
| **Parameter prediction** | Điền đúng tên (t-F1) và giá trị (v-F1) tham số | binary F1 trên chuỗi `"task-arg"` / `"task-arg-value"` | Chấm args truyền giữa các step |

## Phát hiện định lượng đáng nhớ (leaderboard trong README gốc)

- GPT-4 dẫn đầu mọi domain nhưng e-F1 chỉ ~55–80, v-F1 ~61–72.
- Model open-source 7B gần như **0 điểm** ở e-F1/v-F1.
- **Kết luận: nút thắt của LLM nằm ở suy luận dependency và điền giá trị parameter —
  không phải ở chọn tool.** Khi viết test cho workflow JARVIS, dồn trọng số vào hai chỗ này.

## Khái niệm "tool graph" (tái dùng khi thiết kế test)

- **Node** = một tool/skill, kèm mô tả và đặc tả tham số.
- **Edge** = phụ thuộc có hướng, hai loại:
  - *Resource dependency*: output-type(A) ∩ input-type(B) ≠ ∅ (nối qua kiểu dữ liệu).
  - *Temporal dependency*: thứ tự gọi do ngữ cảnh quyết định (graph đầy đủ).
- Đánh giá = so **tool invocation graph** mà agent sinh ra với **sampled tool graph** chuẩn.

## Back-Instruct (kỹ thuật sinh test data có kiểm soát)

Thay vì người viết instruction rồi gán nhãn, cho LLM một **đồ thị tool có sẵn** và bắt nó
sinh ngược: `user_request` + lời giải khớp graph. Kiểm soát được cấu trúc
(single / chain / DAG, số tool 2–10) → sinh test rẻ và có chủ đích. Sau sinh: LLM tự
đóng vai "teacher nghiêm khắc" chấm Executable/Correct + rule-based so khớp nodes/edges +
human review mẫu.

Dùng được khi cần bộ test regression cho workflow mới: dựng graph các skill liên quan,
sinh request, chạy workflow, chấm theo 3 stage trên.

## Hạn chế của nguồn (không mang theo)

- Evaluation hoàn toàn tĩnh trên JSON — **không thực thi tool thật**, v-F1 chỉ là string-match
  với label do GPT-4 sinh. Trong JARVIS nên chấm trên execution thật (workflow có verify gate).
- Bias teacher model: data và critic đều từ họ GPT.
- Edge resource sinh tự động bằng giao input/output type có thể vô nghĩa nếu không review tay.
