# find → verify → filter → rank — lõi làm AI review ít false positive

> Đây là thứ biến "AI đọc diff rồi phun comment" thành review **chuẩn**. Bốn bước, và là chỗ
> multi-agent có giá trị rõ nhất. Nguồn: blog Anthropic.

## Mục lục
1. Bốn bước
2. Vì sao vote-verify (adversarial)
3. Severity + nhãn
4. Hiện thực bằng Workflow
5. Dùng command sẵn có thay vì tự dựng

---

## 1. Bốn bước

```
1. PARALLEL DETECT   nhiều agent cùng săn bug, mỗi agent một góc nhìn (không agent nào thấy hết)
2. VOTE-VERIFY       nhóm agent KHÁC bỏ phiếu từng finding — chỉ post nếu đủ phiếu đồng ý "thật"
3. DROP NOISE        bỏ finding chỉ là style / diagnostic / cleanup (A/B test nội bộ trước khi giữ bộ lọc)
4. RANK + LABEL      sort theo severity, gắn nhãn: Important · Nit · Pre-existing
```

- **Detect** và **verify** do **hai nhóm agent khác nhau** — người tìm ra không được tự phán finding của mình là thật.
- **Drop noise** là bộ lọc đã được **A/B test** trên PR nội bộ rồi mới giữ — không bỏ bừa.
- **Pre-existing** = bug PR *không* gây ra → gắn nhãn để **không đổ lỗi tác giả**.
- **Mọi finding sống sót phải được trả lời**: fix, hoặc resolve kèm lý do. Agent thường nhặt fix qua đêm.

Kết quả thật (blog): PR nội bộ có review comment *thực chất* **16% → 54%** sau khi launch. PR >1000
dòng hầu hết có finding; PR nhỏ hầu hết về sạch.

## 2. Vì sao vote-verify (adversarial)

Một agent vừa tìm vừa tự chấm sẽ thiên vị giữ finding của mình. Tách ra + prompt verifier **phản
bác** (mặc định "nghi ngờ, refuted=true nếu không chắc") → finding plausible-nhưng-sai bị loại.
Giữ chỉ khi **đa số** verifier đồng ý thật.

Biến thể mạnh hơn — **perspective-diverse**: khi một finding có thể sai theo nhiều kiểu, cho mỗi
verifier một **lăng kính khác nhau** (correctness · security · performance · "có repro được không")
thay vì N bản sao giống hệt. Đa dạng bắt được failure mode mà lặp lại không bắt được.

## 3. Severity + nhãn

Post survivor dưới dạng **inline comment**, sort **severity giảm dần**, gắn đúng 1 nhãn:
- **Important** — bug thật, đáng chặn/đáng sửa.
- **Nit** — nhỏ; **cap số nit** (noise đắt, nhất là với tác giả agent).
- **Pre-existing** — có trước PR; không tính cho tác giả.

Severity nên impact-driven (giống [ams-imp-security-review](../../ams-imp-security-review/SKILL.md)):
HIGH = exploit/hỏng trực tiếp; MEDIUM = cần điều kiện nhưng tác động lớn; LOW = defense-in-depth
(thường không post trừ khi chắc chắn).

## 4. Hiện thực bằng Workflow

Khớp với orchestration của jarvis: workflow runtime điều phối nhiều agent
([docs/runtime-interface.md](../../../docs/runtime-interface.md); blog Anthropic chạy pool lớn hơn). Shape chuẩn (pipeline không barrier trừ chỗ cần dedup):

```js
export const meta = {
  name: 'pr-review',
  description: 'Review PR: parallel-detect bugs, adversarially verify, drop noise, rank',
  phases: [{ title: 'Detect' }, { title: 'Verify' }, { title: 'Rank' }],
}
// 1. PARALLEL DETECT — mỗi agent một góc (correctness / integration / bug-fix-root-cause / edge)
const DIMS = ['correctness','fits-the-system','root-cause','edge-cases']
const found = (await parallel(DIMS.map(d => () =>
  agent(`Review diff vs whole repo + PR intent, lens=${d}. Return findings with file:line, severity.`,
        { phase: 'Detect', schema: FINDINGS_SCHEMA })))).filter(Boolean).flatMap(r => r.findings)

// barrier ĐÚNG CHỖ: dedup theo file+line TRƯỚC khi verify (cần toàn bộ finding cùng lúc)
const fresh = dedupeByFileLine(found)

// 2. VOTE-VERIFY — adversarial, mỗi finding do nhóm verifier KHÁC phản bác; 3. DROP NOISE ngay trong verdict
const verified = (await parallel(fresh.map(f => () =>
  parallel(['correctness','security','repro'].map(lens => () =>
    agent(`Try to REFUTE finding "${f.title}" via ${lens}. refuted=true if uncertain. Is it noise (style/cleanup)?`,
          { phase: 'Verify', schema: VERDICT_SCHEMA })))
  .then(vs => ({ f, real: vs.filter(Boolean).filter(v => !v.refuted && !v.noise).length >= 2 })))))
  .filter(Boolean).filter(v => v.real).map(v => v.f)

// 4. RANK + LABEL
return rankBySeverity(verified)   // Important > Nit; gắn Pre-existing bằng git-blame
```

- **Round cap / diff-only / flag-the-class** (chống lặp vô tận) đặt ở tầng điều phối, không ở script
  một-lượt — xem [convergence.md](convergence.md).
- Gắn **Pre-existing** bằng git-blame: nếu dòng bị flag có trước commit đầu của PR → nhãn Pre-existing.

## 5. Dùng command sẵn có thay vì tự dựng

Jarvis **đã có** bản đóng gói cho **một diff/PR** — chọn đúng theo chiều:
- **Correctness** (đúng/sai, hợp hệ thống, root-cause — chính là `DIMS` ở §4): built-in **`/code-review`**.
- **Security**: [`ams-imp-security-review`](../../ams-imp-security-review/SKILL.md) — find (1 agent) →
  filter (1 sub-agent/finding, prompt refute, giữ confidence ≥8) → report, cap 5 song song.

Dùng command sẵn cho lượt review cụ thể (security-review-pro = chiều bảo mật; /code-review = chiều
correctness). **Chỉ dựng Workflow trên đây khi cần dimension/độ sâu vượt cả hai command** — đừng tự
viết lại thứ `/code-review` đã làm.
