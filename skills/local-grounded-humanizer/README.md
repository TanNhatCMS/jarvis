# local-grounded-humanizer

Bóc tách từ [monasprox/humanizer](https://github.com/monasprox/humanizer)
(@ `4784ca7`, 10/10/2026) — bản mở rộng của
[blader/humanizer](https://github.com/blader/humanizer) sang hội thoại có ngữ
cảnh, đặc biệt tiếng Việt. License: **MIT** (xem [LICENSE](LICENSE)).

Skill dạy agent **hành xử hội thoại có căn cứ**: đọc cả chuỗi trao đổi thay vì
chỉ câu cuối, giữ một lập trường nhất quán, phát ngôn từ đúng cương vị chịu
trách nhiệm (không "em đã kiểm tra" khi chưa kiểm tra), và xử lý tiếng Việt
(xưng hô, trợ từ, vùng miền, văn phong chat) dựa trên nghiên cứu ngôn ngữ học
có trích dẫn. Nói thẳng: không dùng để qua mặt AI detector hay giả mạo người thật.

## Lấy gì / bỏ gì

| Lấy (nguyên văn) | Ghi chú |
|---|---|
| `SKILL.md` | Thân file nguyên văn; chỉ đổi frontmatter `name: humanizer` → `grounded-humanizer` (tránh đè `ams-humanizer` đã có) và thêm `extracted_from` |
| `references/` (7 file) | Nguyên văn |
| `evals/behavior-cases.md` | 80 ca kiểm tra hành vi, nguyên văn |
| `LICENSE` | MIT, nguyên văn (dual copyright: Siqi Chen 2025 + Grounded Humanizer contributors 2026) |

| Bỏ | Lý do |
|---|---|
| `agents/openai.yaml` | Manifest khai báo agent cho nền tảng OpenAI-style, không phù hợp chuẩn agent của repo này |

## Khác gì `ams-humanizer` đã có

`ams-humanizer` (từ awesome-muse-skills) sửa **văn bản tiếng Anh** cho đỡ "mùi
AI". Skill này dạy **hành vi hội thoại**: sequence-aware replies, operational
voice / cương vị phát ngôn, và tiếng Việt — thứ kho skill hiện tại chưa có.

## Cách gọi

```text
Use $grounded-humanizer to rewrite this passage for its actual reader.
```

```text
Dùng $grounded-humanizer để trả lời đoạn hội thoại này theo đúng quan hệ và diễn tiến.
```
