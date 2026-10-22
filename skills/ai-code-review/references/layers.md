# 7 tầng review — chi tiết từng lớp

> Bản chi tiết của bảng trong SKILL.md. Mỗi tầng: bắt gì · ai chạy · có chặn merge không · áp vào jarvis.
> Nguyên tắc xuyên suốt: **mỗi lớp bắt một loại lỗi khác nhau** — không lớp nào gánh hết.

## Mục lục
1. Stage 1 — Trước PR (verify)
2. Stage 2 — AI review mỗi PR
3. Stage 3 — Security review
4. Stage 4 — CI bắt buộc
5. Stage 5 — Duyệt theo rủi ro
6. Stage 6 — Merge queue · flags · gradual release
7. Stage 7 — Phát hiện nhanh & rollback

---

## 1. Stage 1 — Trước PR (verification)

Tác giả (người hoặc agent) tự bắt lỗi rẻ nhất trước khi mở PR.

- Chạy **test + build + linter**, và **cho xem output** — không tuyên bố "pass" suông.
- Một **subagent review diff ở context MỚI** (không mang bias của người vừa viết).
- Các skill nội bộ: một **hunt bug**, một **simplify diff**, một **check hành vi end-to-end**.
  UI thì đối chiếu design guideline.
- **Fix tại gốc:** finding lặp đi lặp lại → sửa vào một *skill*, một *lint rule*, hoặc một
  *instruction file* (để không phải bắt lại thủ công mỗi lần).

**Ở jarvis:** [ecc-verification-loop](../../ecc-verification-loop/SKILL.md) (chạy test đúng tầng + verdict), `/code-review`
(subagent review diff), `ams-imp-security-review` local, quy ước [AGENTS.md](../../../AGENTS.md)
"test code trước khi nói done".

## 2. Stage 2 — AI review mỗi PR

Đọc **diff so với cả repo** + **ý định PR** (không chỉ đọc diff cô lập). Hỏi:
- Thay đổi có **giải đúng vấn đề** nó đặt ra không?
- Có **hợp hệ thống** không, hay phá chỗ khác?
- Với **bug fix**: có chạm **root cause** không, hay chỉ vá triệu chứng?

Độ sâu đặt theo repo: **Quick / Standard / Deep**. Deep cho nơi *một bug lọt tốn hơn thời gian
review*. Lõi find→verify→filter→rank: xem [find-verify-filter.md](find-verify-filter.md).

**Chặn merge:** finding mở ở tầng này chặn (xem Stage 3 cho quy tắc clear).

## 3. Stage 3 — Security review

Một pass bảo mật **riêng và độc lập** với tầng 2.

- Finding mở từ **bug review (2) HOẶC security review (3)** đều **chặn merge**.
- **Clear** một finding: (a) **sửa**, hoặc (b) **đóng thread kèm lý do ngắn** (đường false-positive).
  Commit sau sửa đúng vấn đề → **tự clear**.

**Ở jarvis:** [`ams-imp-security-review`](../../ams-imp-security-review/SKILL.md) (find → adversarial
filter → report). Dùng nó làm tầng 3.

## 4. Stage 4 — CI bắt buộc (chặn)

Lint, type check, test **đa nền tảng**, build + packaging. Một PR CLI điển hình chạy **hàng chục**
check. Template PR hỏi: **thay đổi được test thế nào** + **revert thế nào**.

**Ở jarvis:** [validate.yml](../../../.github/workflows/validate.yml) (required status checks),
[agent-approval-check.yml](../../../.github/workflows/agent-approval-check.yml) (cổng duyệt commit của agent).

## 5. Stage 5 — Duyệt theo rủi ro

Tier theo **thay đổi**, không theo tác giả. Chi tiết + 2 classifier: [risk-tiers.md](risk-tiers.md).

## 6. Stage 6 — Merge queue · flags · gradual release

- **Merge queue** re-run mọi check trên `main` mới nhất + thay đổi áp vào → 2 PR pass lẻ không thể
  cùng phá main.
- Hành vi mới **sau flag**, internal user trước.
- Release ra `latest` trước; `stable` theo sau.

**Ở jarvis:** chưa có deploy-workflow đóng gói sẵn (rc → stable, tag-based) — gap, áp theo quy trình của từng repo.
**Gap:** repo chưa có **merge-queue + feature-flag system** thật — cần dựng khi áp dụng (internal-first
rollout); device-fingerprint KHÔNG phải feature-flag.

## 7. Stage 7 — Phát hiện nhanh & rollback

- **Flag tắt không cần deploy.** On-call xoay vòng (vd hằng tuần).
- **Incident review** hỏi: *"lớp nào lẽ ra phải bắt được?"* → thêm lớp/eval còn thiếu.
- Gap blog tự thừa nhận: chưa có **circuit breaker** tự siết mức duyệt khi revert/incident tăng.

**Ở jarvis:** incident review làm thủ công theo `docs/` của từng repo (chưa có
prod-incident/ha/monitoring đóng gói sẵn — gap), cộng
[addyosmani-observability](../../addyosmani-observability/SKILL.md) (telemetry để phát hiện).

---

## Nguyên tắc chung cho cả 7 tầng

- **Mọi finding phải được trả lời** — fix hoặc resolve kèm lý do; không bỏ lửng.
- **Review liên tục**, không dồn cuối. Lớp sớm (1,4) rẻ → chạy trước; lớp đắt (2,3,5) có mục tiêu rõ.
- Khi incident lọt lưới → hỏi lớp nào thiếu, vá lớp đó (thường thêm eval ở [convergence.md](convergence.md)).
