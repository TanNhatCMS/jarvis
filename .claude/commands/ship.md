---
name: ship
description: Chạy dây chuyền 4 agent (Planner → Coder → Tester → Reviewer) cho một yêu cầu. Dùng: /ship <mô tả việc cần làm>. Không merge, không push, không mở PR — con người quyết định.
---

Chạy dây chuyền 4 agent cho yêu cầu sau: $ARGUMENTS

## Bước 0 — Kiểm tra và dọn dẹp

1. Từ chối chạy nếu đang ở nhánh `main` hoặc `master`. Dây chuyền chỉ chạy trên nhánh tính năng.
2. Dọn thư mục `.bangiao/` — xóa `ke-hoach.md`, `thay-doi.md`, `ket-qua-test.md`, `danh-gia.md` nếu có, để không đọc nhầm file cũ từ lần chạy trước. (Thư mục này đã có trong `.gitignore`, không commit.)

## Chặng 1 — Planner

Chạy agent `planner` với yêu cầu trên. Sau đó kiểm tra file `.bangiao/ke-hoach.md` có tồn tại không.

- Không có file → dừng, báo lỗi.
- File có mục `CÂU HỎI CÒN BỎ NGỎ` → dừng, đưa câu hỏi cho con người trả lời. Không đoán, không chạy tiếp.

## Chặng 2 — Coder

Chạy agent `coder` với kế hoạch trong `.bangiao/ke-hoach.md`. Sau đó kiểm tra file `.bangiao/thay-doi.md` có tồn tại không.

- Không có file → dừng, báo lỗi.

## Chặng 3 — Tester

Chạy agent `tester` với kế hoạch và file thay đổi. Sau đó kiểm tra file `.bangiao/ket-qua-test.md` có tồn tại không.

- Không có file → dừng, báo lỗi.
- Test đỏ → dừng, báo lỗi cho con người. Không chạy tiếp, không tự sửa code.

## Chặng 4 — Reviewer

Chạy agent `reviewer` với 3 file bàn giao. Sau đó đọc dòng đầu tiên của `.bangiao/danh-gia.md`:

- `PHAN QUYET: CHOT` → báo xong, tóm tắt thay đổi và phán quyết. Dừng ở đây.
- `PHAN QUYET: CAN SUA` → quay lại chặng 2 (coder sửa theo nhận xét), rồi chạy lại chặng 3 và 4. Tối đa 2 vòng sửa. Quá 2 vòng vẫn chưa đạt thì dừng, báo cho con người.
- `PHAN QUYET: CHAN` → dừng hẳn, báo lý do chặn.

## Quy tắc chung

- Các chặng chạy TUẦN TỰ, mỗi chặng kiểm tra file bàn giao của chặng trước rồi mới chạy. Không chạy song song.
- **Không bao giờ merge, push, hoặc mở PR.** Con người xem phán quyết rồi tự quyết định.
- Task song song: mỗi tính năng làm trên một git worktree riêng, để `.bangiao/` của các task không đè lên nhau.
- Bẫy qua đêm: máy ngủ sẽ dừng dây chuyền (giữ máy thức khi chạy dài); dialog xin quyền sẽ chặn agent (cấp quyền trước bằng allowlist, hoặc ghi `.claude/settings.local.json` — deny luôn thắng allow; không dùng chế độ bypass trừ khi repo riêng, nhánh riêng, commit sạch).
