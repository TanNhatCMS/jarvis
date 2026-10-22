# Tích hợp + adoption checklist đầy đủ

> Nối hệ thống vào thực tế (CI, merge queue, flags, rollback) + lộ trình áp dụng theo giai đoạn.
> Nguồn: blog Anthropic. Phần "Áp vào jarvis" là ánh xạ sang các skill/workflow sẵn có của jarvis.

## Mục lục
1. Tích hợp
2. Setup options
3. Adoption checklist (4 giai đoạn)
4. Context sharing
5. Ánh xạ sang jarvis

---

## 1. Tích hợp

- **PR comments:** inline, gắn **severity**, mỗi comment đòi **sửa** hoặc **lý do resolve**.
- **Required status checks:** security review + bug review **chặn merge** khi còn finding mở; CI chặn khi fail.
- **Merge queue:** re-validate lại trên `main` mới nhất + thay đổi áp vào → 2 PR pass lẻ không phá main chung.
- **Sau merge:** flags (tắt không cần deploy), staged rollout (`latest` → `stable`), rollback 1 bước.

## 2. Setup options (sản phẩm/công cụ blog nêu)

- **Code Review for Claude Code** — GA trên Team/Enterprise; review AI mỗi PR, admin đặt Quick/Standard/Deep.
- **Claude Code GitHub Action** — chạy review trong CI.
- **`/code-review`** — bản local nhẹ của review AI (built-in).
- **`/security-review`** + **open-source security review GitHub Action** — tầng bảo mật.

## 3. Adoption checklist (4 giai đoạn — bắt đầu chặt, nới theo bằng chứng)

**A. Trước PR**
- [ ] Cho agent **checks chạy được** (test/build/lint) + đòi bằng chứng (không "pass" suông).
- [ ] **CLAUDE.md ngắn**; thêm formatter/linter hook.
- [ ] Chạy `/code-review` + security review (ở jarvis: `ams-imp-security-review`) **local**.
- [ ] Thêm **REVIEW.md** cho vùng quan trọng ([review-md.md](review-md.md)).

**B. Mỗi PR**
- [ ] **Require CI**; thêm "**Testing / Risk / How to revert**" vào PR template.
- [ ] **Pilot AI reviewer trên MỘT repo**, tune vài tuần, rồi mới mở rộng.
- [ ] Thêm **security review**; require thread resolved.
- [ ] **Cap vòng** (round cap 3, diff-only re-review) ([convergence.md](convergence.md)).

**C. Duyệt**
- [ ] Định **risk tier theo thay đổi**, bắt đầu strict, nới dần theo bằng chứng ([risk-tiers.md](risk-tiers.md)).
- [ ] Giữ **đường nhẹ cho tác giả tin cậy**.
- [ ] **CODEOWNERS** cho path nhạy cảm (auth/billing/CI/installer) → luôn cần người.

**D. Sau merge**
- [ ] **Merge queue** + flags + **staged rollout** + **rollback 1 bước**.
- [ ] Dựng **eval set từ incident**; đo **thời gian con người** với revert + incident làm lan can.

## 4. Context sharing (việc thứ 2 của review)

Thay vì đọc từng diff: nhờ Claude **viết explainer** cho đúng slice mình cần (phản ánh code *hiện
tại*), hoặc dựng **visualization nhỏ**. Đọc diff tầm thường dạy ít; explainer cho module sắp sửa dạy
nhiều. Kênh Slack mở để thấy việc đang làm.

**Ở jarvis:** tài liệu kiến trúc/explainer nằm ở `docs/`, đọc on-demand; chưa có skill
sơ đồ hay quy ước ARCHITECTURE.md riêng — gap cần dựng nếu muốn.

## 5. Ánh xạ sang jarvis

| Thành phần (blog) | Dùng gì ở jarvis |
|---|---|
| AI review mỗi PR (tầng 2) | [`ams-imp-security-review`](../../ams-imp-security-review/SKILL.md) cho bug + security; built-in `/code-review` cho bản nhẹ |
| find → verify → filter | đã đóng gói trong `ams-imp-security-review`; tuỳ biến bằng Workflow ([find-verify-filter.md](find-verify-filter.md)) |
| CI bắt buộc + branch protection | [validate.yml](../../../.github/workflows/validate.yml), [agent-approval-check.yml](../../../.github/workflows/agent-approval-check.yml) |
| Risk tier + CODEOWNERS + dismiss-on-new-commit | [risk-tiers.md](risk-tiers.md) + branch protection (theo [validate.yml](../../../.github/workflows/validate.yml)) |
| Staged rollout / rollback | **Gap: jarvis chưa có** quy trình deploy/rollback đóng gói sẵn — áp theo từng repo |
| Merge queue + feature-flag | **Gap: repo chưa có merge-queue + feature-flag system thật** — cần dựng khi áp dụng (device-fingerprint KHÔNG phải feature-flag) |
| Phát hiện & incident review (tầng 7) | Thủ công theo `docs/` từng repo (chưa có prod-incident/monitoring đóng gói), [addyosmani-observability](../../addyosmani-observability/SKILL.md) |
| Eval-from-incidents | [ecc-eval-harness](../../ecc-eval-harness/SKILL.md) (golden dataset = incident set) |
| Pre-PR verify (test đúng tầng) | [ecc-verification-loop](../../ecc-verification-loop/SKILL.md), [superpowers-tdd](../../superpowers-tdd/SKILL.md) |
| Audit repo lạ trước khi tin | [`ecc-repo-scan`](../../ecc-repo-scan/SKILL.md) |
| Nightly review code cũ (cron) | GitHub Actions scheduled workflow |

> Skill này **không thay** các command trên — nó là **lớp phương pháp** gắn chúng thành một hệ thống
> review 7 tầng mạch lạc. Khi review một PR cụ thể → vẫn gọi `/security-review-pro` / `/code-review`.
