---
name: easytool-skill-author
description: >
  Rewrite verbose, noisy tool/API documentation into concise, standardized
  tool-use instructions with examples, before an agent ever sees them.
  Use when onboarding a new MCP server, CLI, or API as a JARVIS skill;
  when an agent keeps picking the wrong tool or filling parameters wrong;
  or when auditing/improving an existing skill's tool description.
  Two-stage pipeline adapted from Microsoft EasyTool (arXiv 2401.06201, MIT).
---

# easytool-skill-author

Ý tưởng gốc (Microsoft EasyTool): agent dùng tool kém phần lớn không phải vì model yếu,
mà vì **tài liệu tool đưa cho nó quá dài, không thống nhất, thiếu ví dụ**.
Giải pháp: dùng chính LLM viết lại doc gốc thành **instruction ngắn gọn, chuẩn hoá, có ví dụ**
— một lần duy nhất (offline) — rồi mới cho agent dùng. Không fine-tune, cắm vào agent nào cũng được.

Skill này áp dụng pipeline đó để **soạn hoặc cải tiến SKILL.md / mô tả tool** trong JARVIS.

## Pipeline 2 bước

### Bước 1 — Tool description generation

Tóm tắt toàn bộ doc gốc thành một đoạn mô tả ngắn về **chức năng tổng thể** của tool.
Quy tắc:

- ≤ 3 câu, chỉ nói tool *làm được gì*, không liệt kê parameter.
- Nêu rõ domain và đối tượng dùng (ví dụ: "e-commerce API để xây dựng và quản lý cửa hàng online").
- Bỏ mọi chi tiết auth/rate-limit/version — những thứ đó thuộc về bước 2 hoặc tài liệu vận hành.

Ví dụ đầu ra:

> `'Cartify' can be used as an e-commerce API to build and manage your online store,
>  including products, orders and customers.`

### Bước 2 — Functionality guidelines construction

Với **từng hàm/endpoint**, sinh một guideline gồm đúng 3 phần:

1. **Mô tả chức năng** — một câu, động từ đầu câu.
2. **Parameters** — chia hai nhóm `required` / `optional`, mỗi param: tên, kiểu, mô tả một dòng.
   Đổi tên param trùng keyword của ngôn ngữ gọi (ví dụ `from` → `is_from`).
3. **Example** — một ví dụ hoàn chỉnh, format cố định:
   `Scenario: <tình huống cụ thể>` + `Parameters: <JSON đầy đủ>`.

Ví dụ đầu ra (hàm `add_`):

> **API_description:** `'add_' returns the sum of all the arguments passed to it, normalized to 2 decimal places.`
> **Usage:** `required_parameters: [{name: input, type: List}]`
> **Example:** `Scenario: if you want to add 2 to 1.` / `Parameters: {input: [2, 1]}`

## Quy trình làm việc

1. **Thu thập doc gốc**: README, OpenAPI spec, `--help`, MCP tool schema — giữ nguyên văn vào file tạm.
2. **Chạy Bước 1** cho toàn bộ tool → một description.
3. **Chạy Bước 2** cho từng hàm/endpoint → các guideline.
4. **Kiểm tra chéo** (bắt buộc, làm bằng tay hoặc agent thứ hai):
   - Mọi required parameter trong doc gốc đều xuất hiện trong guideline?
   - Example có chạy được thật không (tên hàm, tên param khớp implementation)?
   - Không có parameter nào bị LLM bịa thêm?
5. **Ghi vào SKILL.md**: description lên frontmatter `description`, guidelines vào phần "Tool reference".

## Những gì KHÔNG làm theo bản gốc

- Bản gốc dùng `eval()` để parse output LLM trong code đánh giá (`funcQA.py`, `toolbench.py`)
  — **tuyệt đối không dùng**: parse bằng JSON strict / `ast.literal_eval`.
- Bước sinh 2-stage của bản gốc không có trong repo nguồn (chỉ có output) — skill này
  định nghĩa lại quy trình để chạy được bằng tay với bất kỳ LLM nào.
- Instruction là **tĩnh**: khi API đổi version, chạy lại pipeline cho endpoint đổi thay vì
  vá tay từng chỗ.

## Khi nào dùng

- Onboard MCP server / CLI / API mới thành skill: chạy pipeline trước khi viết SKILL.md.
- Agent chọn sai tool hoặc điền sai param lặp lại: audit lại Bước 1 (description quá chung
  chung?) và Bước 2 (thiếu Example?).
- Review skill có sẵn: đối chiếu guideline với implementation thật.

## Nguồn

Ý tưởng và ví dụ từ [microsoft/JARVIS](https://github.com/microsoft/JARVIS) (`easytool/`),
paper [EasyTool](https://arxiv.org/abs/2401.06201). License nguồn: **MIT**.
Xem [ATTRIBUTION.md](../ATTRIBUTION.md).
