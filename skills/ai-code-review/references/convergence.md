# Convergence — chống vòng lặp review vô tận + đo noise + eval-from-incidents

> Review tự động có thể lặp mãi. Phần này giữ nó **hội tụ** và **cải thiện theo thời gian**.
> Nguồn: blog Anthropic (kèm số thật).

## Mục lục
1. Vì sao lặp vô tận
2. Convergence controls
3. Đo noise
4. Eval-from-incidents
5. Nightly agent cho code cũ

---

## 1. Vì sao lặp vô tận

Một PR CLI từng chạy **>50 vòng review qua đêm**. Phân tích git-blame: **~59%** thứ reviewer cứ flag
là code **có trước** lần review đầu → càng về sau càng chỉ moi thêm bug **cũ**, không liên quan PR.
Mỗi vòng với tác giả agent = thêm 1 commit + 1 lượt review → đốt token, nhiễu, không hội tụ.

## 2. Convergence controls (bắt buộc khi review tự động)

- **Round cap:** sau **3 vòng**, reviewer dừng flag chi tiết, bảo tác giả **xem lại cách tiếp cận**.
- **Diff-only re-review:** sau vài vòng đầu, chỉ review **phần diff mới**, không quét lại cả repo.
- **Flag-the-class:** báo **loại** bug (vd "mọi chỗ nối chuỗi SQL") để tác giả sửa **tất cả** instance
  một lần, thay vì reviewer flag từng dòng qua nhiều vòng.
- **No repeats:** không post lại finding đã post.
- Tách **bug pre-existing** ra khỏi vòng PR (gắn nhãn Pre-existing, hoặc để nightly agent lo — mục 5).

Kết quả sau convergence work (PR nội bộ):

| Chỉ số | Trước | Sau |
|---|---|---|
| Pass sau 1 vòng review-and-fix | 65% | **78%** |
| Cần ≥5 vòng | 8.9% | **1.5%** |
| Trung bình số vòng để pass | 2.08 | **1.32** |

**Ưu tiên viết (blog):** *bắt bug thật trước, cắt vòng review sau* — nhưng noise đắt hơn với tác giả
agent nên cả hai đều quan trọng.

## 3. Đo noise

Phân loại **mỗi comment của reviewer** theo phản hồi của tác giả:
- **fixed** (sửa thật) · **wrong** (sai) · **intentional** (cố ý vậy) · **doesn't matter** (không quan trọng).

Tỉ lệ `wrong + doesn't matter` cao = reviewer ồn → chỉnh prompt/bộ lọc. Thêm: chạy reviewer trên
**PR biết chắc sạch** (known-clean), đếm bao lần nó báo thứ dẫn đến **thay đổi có hại** (false positive
nguy hiểm). Đây là guardrail ngược với "bỏ sót bug".

## 4. Eval-from-incidents (cách reviewer tự tốt lên)

**Incident → eval case.** Quy trình:
1. Gom các PR **từng gây incident** + fix-forward + revert của chúng.
2. **Kỹ sư rành code xác nhận** từng case (ground truth, không để AI tự phán).
3. Mỗi incident thành **một case** trong eval set.
4. **Mọi thay đổi** prompt/tool/model của reviewer được **chấm lại trên toàn bộ eval set**; có
   **daily eval run**. Điểm lên → giữ; không → bỏ.

→ Reviewer không "trôi" chất lượng: mỗi lần sửa đều bị đo lại trên tập lỗi thật đã biết.

**Ở jarvis:** chưa có thư mục incident riêng — incident/lessons nằm rải trong `docs/` và
ghi chú dự án; mỗi incident ở đó là một eval case ứng viên. Khớp luôn với
[ecc-eval-harness](../../ecc-eval-harness/SKILL.md) (golden dataset + baseline + chặn
regression) — dùng chính pipeline đó để chấm reviewer, incident set là golden dataset.

## 5. Nightly agent cho code cũ

Vì ~59% flag là pre-existing: cho **agent chạy đêm** quét code **đã có** để bắt bug cũ, **tách** khỏi
vòng review của PR đang mở. Như vậy:
- PR review chỉ lo thứ PR *gây ra* → hội tụ nhanh.
- Bug cũ vẫn được dọn, nhưng ở luồng riêng (giống cron automation bằng GitHub Actions scheduled workflow).

**Ở jarvis:** đặt nightly review như một GitHub Actions scheduled workflow
(cron-driven automation, mọi exit path báo kết quả).
