# HuggingGPT 4-Stage Orchestration — Prompt tham khảo

> **Nguồn:** [microsoft/JARVIS](https://github.com/microsoft/JARVIS) (`hugginggpt/server/configs/config.default.yaml`),
> paper [HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in HuggingFace](https://arxiv.org/abs/2303.17580).
> License nguồn: **MIT** (Copyright (c) Microsoft Corporation) — xem [ATTRIBUTION.md](../ATTRIBUTION.md).
> Bóc tách ngày 2026-10-15. Chỉ lấy **thiết kế prompt**, không lấy code (stack gốc đã chết: `text-davinci-003`).

Tài liệu này trích nguyên văn 4 prompt điều phối của HuggingGPT (2023) — một trong những hệ
"LLM làm controller, model expert làm executor" đầu tiên — để tham khảo khi thiết kế workflow
đa-agent mới trong JARVIS. Template gốc nằm hoàn toàn trong YAML (`tprompt.*` = system prompt,
`prompt.*` = user prompt với slot `{{...}}`, `demos_or_presteps.*` = few-shot): đổi hành vi
không cần sửa code — pattern "prompt-as-config" đáng học theo.

## Stage 1 — Task Planning (`tprompt.parse_task` + `prompt.parse_task`)

System prompt (nguyên văn):

```
#1 Task Planning Stage: The AI assistant can parse user input to several tasks:
[{"task": task, "id": task_id, "dep": dependency_task_id,
  "args": {"text": text or <GENERATED>-dep_id,
           "image": image_url or <GENERATED>-dep_id,
           "audio": audio_url or <GENERATED>-dep_id}}].
The special tag "<GENERATED>-dep_id" refer to the one generated text/image/audio
in the dependency task (Please consider whether the dependency task generates
resources of this type.) and "dep_id" must be in "dep" list.
The "dep" field denotes the ids of the previous prerequisite tasks which generate
a new resource that the current task relies on.
The "args" field must in ["text", "image", "audio"], nothing else.
The task MUST be selected from the following options: "token-classification",
"text2text-generation", "summarization", ... (35 options).
There may be multiple tasks of the same type.
Think step by step about all the tasks needed to resolve the user's request.
Parse out as few tasks as possible while ensuring that the user request can be resolved.
Pay attention to the dependencies and order among tasks.
If the user input can't be parsed, you need to reply empty JSON [].
```

User prompt (nguyên văn, slot `{{context}}` = lịch sử chat, `{{input}}` = yêu cầu mới):

```
The chat log [ {{context}} ] may contain the resources I mentioned.
Now I input { {{input}} }.
Pay attention to the input and output types of tasks and the dependencies between tasks.
```

Điểm kỹ thuật đáng chú ý (2023): gọi LLM với `temperature=0` **+ `logit_bias`** —
mã hoá toàn bộ tên task và từ khoá schema (`"task"`, `"args"`, `"dep"`, `"<GENERATED>-"`, …)
bằng tiktoken rồi cộng bias vào các token đó. Đây là *constrained decoding thủ công*,
thời model còn yếu về structured output. **Ngày nay thay bằng structured output / JSON mode
của chat model** — đừng copy `logit_bias`.

## Stage 2 — Model Selection (`tprompt.choose_model` + `prompt.choose_model`)

System prompt (nguyên văn):

```
#2 Model Selection Stage: Given the user request and the parsed tasks, the AI assistant
helps the user to select a suitable model from a list of models to process the user request.
The assistant should focus more on the description of the model and find the model that has
the most potential to solve requests and tasks.
Also, prefer models with local inference endpoints for speed and stability.
```

User prompt (nguyên văn, `{{metas}}` = danh sách ứng viên gồm id/description/tags/endpoint):

```
Please choose the most suitable model from {{metas}} for the task {{task}}.
The output must be in a strict JSON format: {"id": "id", "reason": "your detail reasons for the choice"}.
```

Pattern đáng lấy: **probe ứng viên trước khi chọn** — HuggingGPT kiểm tra model nào đang
"alive" (request `/status`) rồi mới đưa top-N vào prompt cho LLM chọn, kèm mô tả cắt ngắn
(`max_description_length: 100`). Nhánh tắt: task nào LLM tự làm được (tóm tắt, dịch, …)
thì bỏ qua expert, gọi thẳng chat.

## Stage 3 — Task Execution (không có prompt riêng — là code điều phối)

Scheduler chạy task theo DAG bằng thread: task nào `dep == [-1]` hoặc mọi `dep` đã có kết quả
thì chạy; tag `<GENERATED>-N` được thay bằng output thật của task N trước khi gọi model.
Xem chi tiết cơ chế DAG tại [docs/task-dag-chaining.md](../docs/task-dag-chaining.md).

## Stage 4 — Response Generation (`tprompt.response_results` + `prompt.response_results`)

System prompt (nguyên văn):

```
#4 Response Generation Stage: With the task execution logs, the AI assistant needs to
describe the process and inference results.
```

User prompt (nguyên văn):

```
Yes. Please first think carefully and directly answer my request based on the inference results.
Some of the inferences may not always turn out to be correct and require you to make careful
consideration in making decisions. Then please detail your workflow including the used models
and inference results for my request in your friendly tone.
Please filter out information that is not relevant to my request.
Tell me the complete path or urls of files in inference results.
If there is nothing in the results, please tell me you can't make it.
```

Điểm hay: ép LLM **trả lời trực tiếp trước, kể lại workflow sau**, và **thừa nhận khi không làm được**
thay vì bịa. Mọi case success/fail đều ghi JSONL vào `logs/` (audit trail).

## Ghi chú khi áp dụng vào JARVIS (2026)

1. Thay controller `text-davinci-003` + Completion API bằng chat model hiện tại + structured output.
2. "Expert models" trong ngữ cảnh JARVIS = các agent con / MCP tools / skill — không phải model HuggingFace.
3. Few-shot demo gốc (`demos/demo_parse_task.json`) có lỗi cú pháp JSON thật — đừng copy nguyên văn;
   viết lại demo sạch cho domain của mình.
4. `fix_dep()` (tính lại dependency từ tag, ghi đè LLM) là con dao hai lưỡi: hữu ích khi LLM
   đưa dep sai, nhưng sẽ làm mất dependency thật nếu LLM quên tag. Dùng kèm validation.
