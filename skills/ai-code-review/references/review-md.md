# Steering reviewer — CLAUDE.md + REVIEW.md

> Reviewer chỉ tốt khi biết repo này coi trọng gì. Hai file lái nó. Nguồn: blog Anthropic.

## Mục lục
1. CLAUDE.md (repo-level)
2. REVIEW.md (code owner viết)
3. Verify reviewer thật sự theo file
4. Áp vào jarvis

---

## 1. CLAUDE.md (repo-level)

- Chứa: **stack, convention, goal, và non-goal**.
- **Mọi lượt review đều nạp** CLAUDE.md → **giữ NGẮN**, link sang doc khác thay vì nhồi.
- Reviewer cũng **flag vi phạm convention** + **dòng lỗi thời** trong chính CLAUDE.md.

→ Khớp [AGENTS.md](../../../AGENTS.md) của jarvis: file quy ước là entry point gọn, chi tiết
để ở file con nạp on-demand. Đừng biến CLAUDE.md thành kho — nó tốn context mỗi lượt.

## 2. REVIEW.md (do code owner viết)

Nói **điều gì quan trọng ở phần code của họ**. Guidance viết REVIEW.md **tốt** (từ blog):

- **Nêu "hỏng trông như thế nào" trong repo đó.** Cụ thể theo domain:
  - docs → *"it lies"* (nói sai sự thật);
  - config → *"it misroutes"* (định tuyến sai).
- **Cap nit** — giới hạn số nit để không ngập comment vặt.
- **List path để SKIP** (generated, vendor, fixture…).
- **Đòi file + line làm bằng chứng**, không đoán từ cái tên.
- **Summary mở đầu bằng SỐ ĐẾM**, và nói **thẳng khi không có gì sửa** (đừng bịa finding cho có).
- (Và: verify riêng rằng reviewer **thật sự theo** file — mục 3.)

### Khung REVIEW.md gợi ý

```markdown
# REVIEW.md — <tên vùng code / domain>

## Hỏng ở đây trông như thế nào
- <mô tả failure cụ thể của domain này, vd "route sai tenant", "tính sai tiền", "lộ PII">

## Luôn soi kỹ
- <path/pattern>: <lý do — bug ở đây tốn nhất>

## Bỏ qua (đừng flag)
- <glob generated/vendor/fixture>

## Luật
- Mỗi finding phải có `file:line` làm bằng chứng — không đoán từ tên.
- Cap nit: tối đa <N>.
- Summary bắt đầu bằng số đếm; nếu không có gì sửa, nói rõ "không có finding".
```

## 3. Verify reviewer thật sự theo file

Viết REVIEW.md chưa đủ — phải **kiểm riêng** rằng reviewer đọc và tuân nó (vd đưa một PR cố tình vi
phạm một luật trong REVIEW.md, xem reviewer có bắt không). Đây là một case trong eval set
([convergence.md](convergence.md)).

## 4. Áp vào jarvis

Ở jarvis, vai trò "REVIEW.md theo domain" do các file quy ước sau đảm nhận — reviewer nên nạp đúng cái liên quan:
- [AGENTS.md](../../../AGENTS.md) — quy ước làm việc trong repo: không tuyên bố xong khi chưa kiểm chứng; không bịa path/field.
- Quy ước naming/cấu trúc thư mục: trong [AGENTS.md](../../../AGENTS.md) và `docs/` của từng repo áp dụng.
- [docs/learning-loop.md](../../../docs/learning-loop.md) — "hỏng trông như thế nào" cho tài liệu/prompt:
  tài liệu lệch với code/thực tế.
- [agent-approval-check.yml](../../../.github/workflows/agent-approval-check.yml) — cổng duyệt chặn thao tác của agent ngoài tầm kiểm soát.

> Khi dựng reviewer cho một repo khác: giữ CLAUDE.md gọn, thêm REVIEW.md cho mỗi vùng mà "một bug
> lọt tốn nhất", và đưa một case vi-phạm-REVIEW.md vào eval để chắc reviewer thực sự theo.
