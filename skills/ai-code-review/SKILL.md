---
name: ai-code-review
description: >-
  Dựng hệ thống code review bằng AI theo cách Anthropic làm cho Claude Code — review như lớp
  liên tục (spellcheck-while-you-write), không phải một cổng cuối. Gồm: 7 tầng (verify trước PR →
  AI review mỗi PR → security review → CI → duyệt theo rủi ro → merge queue/flags → phát hiện &
  rollback), cơ chế find → vote-verify → drop-noise → rank-label để giảm false positive, duyệt
  phân tầng theo rủi ro của THAY ĐỔI (không theo tác giả), chống vòng lặp review vô tận
  (round cap, diff-only re-review, flag-the-class), REVIEW.md steering, và biến incident thành
  eval. Kích hoạt khi user nói "code review", "review PR tự động", "AI review", "quy trình review",
  "giảm review rounds", "review noise", "risk-tiered approval", "REVIEW.md", "convergence review",
  hoặc muốn dựng/chuẩn hoá pipeline review cho một repo.
argument-hint: "[setup|review-pr|tune-noise|risk-tiers|review-md]"
---

# ai-code-review — Hệ thống review nhiều lớp (theo Anthropic)

> **Một câu:** review không phải cổng cuối, mà là **nhiều lớp chạy liên tục** — mỗi lớp bắt một
> loại lỗi khác nhau; con người chỉ giữ thứ máy không bắt được.
>
> **Nguồn:** "How the Claude Code team does code review" (claude.dev/blog). Mọi con số/khái niệm
> dưới đây lấy từ bài đó; phần "Adapter" là cách áp vào repo đích.
>
> **Bản jarvis:** các tham chiếu tới commands/rules/skill của repo nguồn đã được sửa sang
> tương đương trong jarvis; chỗ nào jarvis chưa có tương đương thì ghi rõ là gap.

Câu hỏi gốc không phải *"đã có người đọc code chưa?"* mà là **"thay đổi này có thể hỏng ở đâu, và
lớp nào — tự động hay người — nên bắt được?"** Review làm 2 việc: (1) bắt lỗi trước khi ship,
(2) xây hiểu biết chung về codebase. Skill này tập trung (1), có đụng (2) ở phần context-sharing.

**Thước đo đúng:** *thời gian con người* / PR (median + p95 approvals, số comment, thời gian chờ
người). **Lan can:** tỉ lệ revert + incident. Nếu revert/incident tăng → chỉ **dời** việc cho máy
chứ chưa **tiết kiệm** được gì. Mục tiêu: phần lớn PR merge với **≤1 người** trong vòng lặp, không
tăng revert.

---

## When to Trigger

- User nói: "code review", "AI review PR", "quy trình review", "giảm số vòng review", "review bị
  noise", "risk-tiered approval", "REVIEW.md", "dựng pipeline review cho repo".
- Task: chuẩn hoá review một repo, giảm false positive, giảm review rounds, quyết khi nào cần người.

**KHÔNG dùng cho:** review một diff/PR cụ thể ngay bây giờ → dùng built-in `/code-review` (correctness)
hoặc [`/security-review-pro`](../ams-imp-security-review/SKILL.md) (security). Viết/chạy test trước PR
(tầng 1) → [ecc-verification-loop](../ecc-verification-loop/SKILL.md). Audit repo lạ trước khi tin →
[`ecc-repo-scan`](../ecc-repo-scan/SKILL.md). Skill này là **lớp phương pháp** gắn các thứ đó thành một
hệ thống, không phải một lượt review đơn lẻ.

---

## 7 tầng — layers, không phải một cổng

Review chạy **liên tục** ("giống spellcheck khi gõ"), không dồn vào cuối. Mỗi lớp bắt một loại lỗi:

| # | Tầng | Bắt gì | Chặn merge? |
|---|---|---|---|
| 1 | **Trước PR (verify)** | lỗi tác giả tự bắt được: test/build/lint + subagent review diff ở context mới | — (local) |
| 2 | **AI review mỗi PR** | diff so với *cả repo* + *ý định PR*: giải đúng vấn đề? hợp hệ thống? phá chỗ khác? bug-fix có đúng root cause? | **có** (finding mở) |
| 3 | **Security review** | pass bảo mật riêng, độc lập với tầng 2 | **có** (finding mở) |
| 4 | **CI bắt buộc** | lint, type, test đa nền tảng, build, packaging | **có** |
| 5 | **Duyệt theo rủi ro** | thứ máy không quyết được: hướng đi, taste, blast radius | **có** (xem rủi ro) |
| 6 | **Merge queue + flags** | PR A+B đều pass lẻ nhưng hỏng khi gộp; ship sau flag, internal trước | **có** |
| 7 | **Phát hiện & rollback** | lỗi lọt lưới: flag tắt không cần deploy, on-call, incident review | — (sau merge) |

**Nguyên tắc:** finding mở từ **tầng 2 HOẶC 3** đều chặn merge. Clear một finding bằng **(a) sửa**,
hoặc **(b) đóng thread kèm lý do ngắn** (đường false-positive). Commit sau sửa đúng vấn đề → tự
clear. **Mọi finding phải được trả lời** — không bỏ lửng.

Chi tiết từng tầng + checklist áp dụng: [references/layers.md](references/layers.md).

---

## Lõi tầng 2: find → verify → filter → rank

Đây là phần làm AI review **chuẩn** (ít false positive), và là chỗ dùng multi-agent rõ nhất:

```
1. PARALLEL DETECT   nhiều agent cùng săn bug (mỗi agent một góc)
2. VOTE-VERIFY       nhóm agent KHÁC bỏ phiếu từng finding — chỉ giữ nếu đủ phiếu "thật"
3. DROP NOISE        bỏ finding chỉ-là-style / diagnostic / cleanup (đã A/B test nội bộ)
4. RANK + LABEL      sort theo severity, gắn nhãn: Important · Nit · Pre-existing
```

- **Pre-existing**: bug PR **không** gây ra — gắn nhãn để không đổ lỗi cho tác giả.
- Verify-by-vote là **adversarial**: agent verify được prompt để **phản bác**, mặc định "nghi ngờ".
- Kết quả thật khi launch: PR nội bộ có comment review *thực chất* tăng **16% → 54%**. PR >1000 dòng
  hầu hết có finding; PR nhỏ hầu hết sạch.

Cách hiện thực pipeline này bằng Workflow (parallel-detect → adversarial-verify → dedup → rank):
xem [references/find-verify-filter.md](references/find-verify-filter.md). Bản review một-diff đã
đóng gói sẵn: [`/security-review-pro`](../ams-imp-security-review/SKILL.md) (cùng triết lý
find → adversarially filter → report).

---

## Tầng 5: duyệt phân tầng theo RỦI RO của thay đổi

> **Rủi ro set theo chính thay đổi, KHÔNG theo tác giả.** Tác giả **không** tự đặt tier của mình.

| Rủi ro | Ví dụ | Số người duyệt |
|---|---|---|
| **Low** | docs, copy, tính năng internal, thay đổi additive sau flag | **0** — chỉ cần auto + security xanh |
| **Medium** | thay đổi sản phẩm thường; vùng nhạy cảm (cache, auto-updater, system prompt) | **1 người** |
| **High** | vùng rủi ro nhất + path owner bắt buộc "luôn 2 người" | **2 người** |

Quy tắc cứng (đều từ blog):
- **Classifier** đặt tier từ thay đổi; **classifier thứ 2** hỏi "thay đổi này có cần người không, bất
  kể tier?". Path nhạy cảm do owner liệt kê + **mọi file CI workflow** luôn cần **ít nhất 1 người**
  (đây là mức ≥1, KHÁC với tier High=2 người). Vùng rủi ro cao như billing/auto-updater: owner có thể
  đặt thành High (2 người).
- **Approval của agent KHÔNG tính là của người.** Người **prompt** ra PR do agent viết được tính là
  reviewer bắt buộc.
- **Approval chỉ cover đúng 1 commit.** Commit mới mà hệ thống không bảo chứng (agent push, merge
  giải tay) → **phải duyệt lại** (dismiss approval cũ).
- Chỉ **tác giả tin cậy** (thường là team sở hữu) mới được đường nhẹ.

Mô hình tier đầy đủ + 2 classifier + CODEOWNERS/branch-protection: [references/risk-tiers.md](references/risk-tiers.md).

---

## Chống vòng lặp review vô tận (convergence)

Review bằng agent có thể lặp mãi: một PR CLI từng chạy **>50 vòng qua đêm**; git-blame cho thấy
**~59%** thứ bị flag là code **có trước** lần review đầu → càng về sau chỉ moi thêm bug cũ.

Controls (bắt buộc khi review tự động, nếu không sẽ đốt token + spam commit):
- **Round cap:** sau **3 vòng**, reviewer bảo tác giả *xem lại cách tiếp cận* thay vì flag tiếp.
- **Diff-only re-review** sau vài vòng đầu (đừng quét lại cả repo mỗi vòng).
- **Flag-the-class:** báo *loại* bug để tác giả sửa **mọi** chỗ, không sửa từng dòng.
- **No repeats:** không báo lại finding đã post.
- **Nightly agent** quét code cũ riêng để bắt bug pre-existing (tách khỏi vòng review PR).

Kết quả sau khi làm convergence (PR nội bộ): pass sau 1 vòng **65% → 78%**; cần ≥5 vòng
**8.9% → 1.5%**; trung bình số vòng **2.08 → 1.32**.

> **Noise đắt hơn với tác giả là agent** — mỗi nit kéo thêm 1 commit + 1 vòng. Ưu tiên viết:
> **bắt bug thật trước, cắt vòng review sau.**

Đo noise + eval-from-incidents + nightly: [references/convergence.md](references/convergence.md).

---

## Steering reviewer bằng instruction files

- **`CLAUDE.md`** (repo-level): stack, convention, goal + **non-goal**. Mọi lượt review đều nạp →
  **giữ ngắn**, link sang doc khác. Reviewer cũng flag vi phạm convention + dòng lỗi thời trong nó.
- **`REVIEW.md`** (do code owner viết): điều gì quan trọng ở phần code của họ. Guidance viết REVIEW.md
  tốt (nêu "hỏng trông như thế nào", cap nit, list path skip, đòi **file:line** làm bằng chứng,
  summary mở đầu bằng *số đếm* và nói thẳng khi không có gì sửa): [references/review-md.md](references/review-md.md).

Khớp với jarvis: [AGENTS.md](../../AGENTS.md) giữ quy ước repo gọn (mục "Thêm skill mới"),
[docs/learning-loop.md](../../docs/learning-loop.md) quản thay đổi prompt/policy — vai trò
tương đương các "REVIEW.md theo domain" ở repo nguồn.

---

## Con người vẫn giữ gì (đừng tự động hoá)

- **Có nên làm không:** hướng đi, taste, scope. Thay đổi đến từ ngoài team vẫn cần hỏi "nên làm không?".
- **Code rủi ro:** billing, auto-updater, CI workflow, installer.
- **Kiến trúc đặt pattern** cho người khác copy theo.
- **Đọc bằng chứng:** test output, lệnh đã chạy + kết quả, screenshot, finding. *Không nói được
  checks sẽ bỏ sót gì → đừng quick-approve, hãy xin review thật.*
- **Chịu trách nhiệm kết quả.** "You land it, you own it" — thay đổi nhỏ/vừa mà hỏng thì tác giả
  thường tự fix (chạy được vì thay đổi nhỏ + mọi thứ reversible: flag, revert, staged release).

---

## Tích hợp (CI · merge queue · flags · rollback)

- **PR comments:** inline, gắn severity, mỗi cái đòi *sửa* hoặc *lý do resolve*.
- **Status checks bắt buộc:** security + bug review **chặn** khi còn finding mở; CI chặn khi fail.
- **Merge queue:** re-run mọi check trên `main` mới nhất + thay đổi áp vào → 2 PR pass lẻ không phá main.
- **Sau merge:** flags (tắt không cần deploy) · staged rollout (`latest` trước, `stable` sau) ·
  rollback 1 bước · incident review hỏi "lớp nào lẽ ra phải bắt?".

Setup options + adoption checklist đầy đủ + ánh xạ sang jarvis (GitHub Actions, các skill sẵn
có): [references/integration.md](references/integration.md).

---

## Anti-patterns (từ blog)

- **Approval của bot thay cho người bắt buộc** — agent approve không bao giờ tính là người.
- **Để tác giả tự đặt risk tier của mình.**
- **Chạy review rounds mặc định trên PR low-risk** — low-risk merge khi auto xanh, đừng bắt vòng.
- **Nêu một hướng đi MỚI dưới dạng comment chặn trên PR đã xong** — raise sớm trong thread, không chặn phút cuối.
- **Tuyên bố "test pass" mà không chạy** — luôn chạy + cho xem output (giống [ecc-verification-loop](../ecc-verification-loop/SKILL.md)).
- **Review như một cổng cuối** thay vì nhiều lớp liên tục.
- **Không cap vòng** → review tự động lặp vô tận, moi bug pre-existing, spam commit.
- **Giữ finding noise (style/cleanup)** trong khi bug thật bị chôn — drop noise, rank theo severity.
- **Đổ bug pre-existing cho tác giả PR** — gắn nhãn Pre-existing.

---

## Checklist dựng hệ thống (rút gọn — bản đầy đủ ở references/integration.md)

```
Trước PR
- [ ] Agent có cách tự verify (test/build/lint chạy được) + đòi bằng chứng
- [ ] CLAUDE.md ngắn; REVIEW.md cho vùng code quan trọng
- [ ] Viết/chạy test đúng tầng ([ecc-verification-loop](../ecc-verification-loop/SKILL.md)); chạy /code-review + /security-review-pro local trước khi mở PR

Mỗi PR
- [ ] CI bắt buộc; template PR có "Testing / Risk / How to revert"
- [ ] AI review: find → vote-verify → drop-noise → rank (Important/Nit/Pre-existing)
- [ ] Security review riêng; finding mở (bug HOẶC security) chặn merge
- [ ] Cap vòng (3), diff-only re-review sau vài vòng, flag-the-class

Duyệt
- [ ] Tier theo THAY ĐỔI (classifier), không theo tác giả; bắt đầu chặt, nới dần theo bằng chứng
- [ ] CODEOWNERS cho auth/billing/CI/installer → luôn cần người
- [ ] Dismiss approval khi có commit mới; agent-approval không tính là người

Sau merge
- [ ] Merge queue + flags + staged rollout + rollback 1 bước
- [ ] Eval set từ incident; rescore mỗi lần đổi reviewer
- [ ] Đo thời gian con người; revert + incident là lan can
```
