# Duyệt phân tầng theo rủi ro — tier, classifier, approval invalidation

> Tầng 5 chi tiết. Nguyên tắc gốc: **rủi ro set theo THAY ĐỔI, không theo tác giả.** Tác giả không
> tự chọn tier của mình. Nguồn: blog Anthropic.

## Mục lục
1. Ba tier
2. Hai classifier
3. Path luôn cần người
4. Approval chỉ cover 1 commit
5. Agent vs người
6. Áp vào jarvis

---

## 1. Ba tier

| Rủi ro | Ví dụ | Số người duyệt |
|---|---|---|
| **Low** | docs, copy, tính năng chỉ-internal, thay đổi additive **sau flag** | **0** — merge khi auto + security xanh |
| **Medium** | thay đổi sản phẩm thường; vùng nhạy cảm: cache, auto-updater, system prompt | **1 người** |
| **High** | code rủi ro nhất + path luôn cần 2 người | **2 người** |

Triết lý: **bar scale theo blast radius.** Thay đổi nhỏ + reversible (sau flag) → ít/không cần người;
thay đổi chạm tiền/bảo mật/hạ tầng → nhiều người. Bắt đầu **chặt**, **nới dần theo bằng chứng**
(eval cho thấy lớp tự động đủ tin thì hạ bar).

## 2. Hai classifier

1. **Classifier tier:** đọc *thay đổi* (diff + path chạm) → gán Low/Medium/High. **Không** đọc tác giả.
2. **Classifier "cần người không?":** hỏi riêng *"thay đổi này có cần một người xem, bất kể tier?"*
   — bắt case tier thấp nhưng vẫn cần mắt người (vd đổi hành vi tinh vi).

Hai tầng classifier độc lập: một cái định *mức*, một cái định *có bắt buộc người hay không*.

## 3. Path luôn cần người (bất kể classifier)

- Path nhạy cảm do **owner liệt kê** (CODEOWNERS).
- **Mọi file CI workflow** (`.github/workflows/**`).
- Thường gồm: **auth, billing, auto-updater, installer, release workflow**.

→ Dùng **CODEOWNERS + branch protection** để ép: các path này *luôn* cần người, classifier không nới được.

## 4. Approval chỉ cover 1 commit (dismiss-on-new-commit)

- Approval gắn với **đúng commit được duyệt**. Có **commit mới** mà hệ thống không bảo chứng
  (agent push, merge giải tay) → **approval cũ bị dismiss**, phải duyệt lại.
- Cấu hình GitHub: branch protection → *"Dismiss stale pull request approvals when new commits are
  pushed"* (theo branch protection của repo + [validate.yml](../../../.github/workflows/validate.yml)).

## 5. Agent vs người

- **Approval của agent KHÔNG tính là của người bắt buộc.** Bot approve ≠ người approve.
- Người **prompt ra PR do agent viết** được tính là **reviewer bắt buộc** cho PR đó.
- Chỉ **tác giả tin cậy** (thường team sở hữu code) mới được đường nhẹ (ít người duyệt hơn).

## 6. Áp vào jarvis

- **CODEOWNERS** cho path nhạy cảm (theo cấu trúc repo ở [AGENTS.md](../../../AGENTS.md)):
  auth, payment, CI (`.github/workflows/**`, [validate.yml](../../../.github/workflows/validate.yml)),
  infra/deploy.
- **Branch protection** `main`/`prod`: require PR, dismiss stale approvals,
  required status checks, include administrators.
- **Cổng duyệt agent** của jarvis ([agent-approval-check.yml](../../../.github/workflows/agent-approval-check.yml))
  là một "tier" sẵn: commit do agent viết cần người duyệt mới merge — cùng tinh thần
  "high-risk cần người".
- Prod deploy: giữ cổng người (environment approval do người bấm) — đó chính là
  tier High áp cho hành động deploy.

> **Classifier có thể là một agent** đọc diff + path rồi trả `{tier, needs_human, reasons[]}`
> (JSON schema), chạy ở CI. Bắt đầu strict; chỉ nới sau khi eval ([convergence.md](convergence.md))
> chứng minh lớp tự động bắt đủ.
