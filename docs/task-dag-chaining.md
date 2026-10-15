# Task DAG Chaining — ghi chú thiết kế

> **Nguồn ý tưởng:** [microsoft/JARVIS](https://github.com/microsoft/JARVIS)
> (`hugginggpt/server/awesome_chat.py`: `parse_task`, `fix_dep`, `unfold`, vòng scheduler
> trong `chat_huggingface`), paper [HuggingGPT](https://arxiv.org/abs/2303.17580).
> License nguồn: **MIT** — xem [ATTRIBUTION.md](../ATTRIBUTION.md).
> Bóc tách ngày 2026-10-15. Chỉ lấy **ý tưởng thiết kế**, không lấy code.

## Ý tưởng gốc

HuggingGPT biểu diễn một yêu cầu phức tạp thành **DAG các task**, mỗi task có:

```json
{"id": 0, "task": "image-to-text",
 "dep": [-1],
 "args": {"image": "/examples/e.jpg"}}
```

- `dep`: id các task tiền đề. `[-1]` = task gốc, không phụ thuộc ai.
- Tag `<GENERATED>-N` trong `args`: "lấy output của task N" — cơ chế **nối dữ liệu giữa task**.

Ví dụ 3 task (pose từ ảnh D + caption từ ảnh E → sinh ảnh mới):

```json
[{"args":{"image":"/examples/d.jpg"},"dep":[-1],"id":0,"task":"openpose-control"},
 {"args":{"image":"/examples/e.jpg"},"dep":[-1],"id":1,"task":"image-to-text"},
 {"args":{"image":"<GENERATED>-0","text":"<GENERATED>-1"},"dep":[1,0],"id":2,
  "task":"openpose-text-to-image"}]
```

Task 0 và 1 chạy song song; task 2 chờ cả hai, với `image`/`text` được thay bằng
kết quả thật trước khi thực thi.

## Ba kỹ thuật đi kèm (đáng học / đáng tránh)

1. **`fix_dep()` — tính lại dependency từ tag, ghi đè LLM.**
   Sau khi LLM sinh plan, code quét `<GENERATED>-N` trong `args` và **tính lại `dep`,
   ghi đè dep do LLM đưa ra**. Đây là lớp "sửa lỗi LLM": dependency suy từ dữ liệu
   thật đáng tin hơn dependency do LLM đoán.
   ⚠️ Con dao hai lưỡi: nếu LLM quên tag thì dependency thật bị mất → task chạy sớm
   với dữ liệu sai. Trong JARVIS: chỉ dùng kèm validation (task không được đọc output
   của task chưa DONE).

2. **`unfold()` — fan-out.**
   Nếu một arg chứa nhiều `<GENERATED>` cách nhau dấu phẩy, nhân bản task thành nhiều bản,
   mỗi bản dep vào một task nguồn. Pattern này dùng được khi một step cần quạt ra N step
   con độc lập (ví dụ: review từng file trong một PR).

3. **Scheduler theo DAG (bản gốc thô, cần cải tiến khi áp dụng).**
   Bản gốc: vòng lặp `while`, task nào đủ điều kiện (`dep` đã xong hết) thì spawn thread;
   timeout cứng ~80s; **mutate list khi đang iterate** (có thể skip task); không phát hiện
   deadlock chu trình. Khi áp dụng vào workflow JARVIS: thay bằng hàng đợi rõ ràng,
   phát hiện chu trình trước khi chạy, timeout theo từng task thay vì toàn cục.

## Áp dụng vào JARVIS

- Workflow `dev-team.js` hiện chạy task **nối tiếp**. Nếu sau này cần song song hoá các task
  độc lập (ví dụ implement nhiều module không phụ thuộc nhau), DAG + tag tham chiếu output
  là thiết kế đã được chứng minh — thay `<GENERATED>-N` bằng tham chiếu artifact/commit
  của step trước.
- Quy ước đặt tên: thay vì tag string dễ sai chính tả, dùng structured reference
  (ví dụ `{"from_step": 2, "artifact": "diff"}`) và validate schema trước khi chạy —
  khắc phục điểm yếu "few-shot bẩn dạy LLM sinh format sai" của bản gốc.
- Xem prompt 4 stage đầy đủ tại [prompts/hugginggpt-4stage.md](../prompts/hugginggpt-4stage.md).
