---
name: phpcheck-url
description: Check the advertised PHP version from a URL or hostname. Use for php2shell patch checks when only a URL/hostname is available (no server access) — reads Server / X-Powered-By headers first, then escalates to a passive deep check (CMS fingerprint, version-leak files, phpinfo exposure) when the version is hidden. Never runs exploit probes.
---

> **Nguồn / bản jarvis:** bóc nguyên văn từ [openai/php2shell-checker](https://github.com/openai/php2shell-checker) @ `40a4746` (Apache-2.0) — xem `ATTRIBUTION.md`. `scripts/phpcheck.js` là code upstream nguyên văn (kèm `LICENSE` Apache-2.0 trong thư mục này), không sửa. Bản jarvis mở rộng dòng `description` ở frontmatter và thêm mục "Mở rộng jarvis" ở cuối file (kỹ thuật kiểm tra sâu đúc kết từ thực địa 22/10/2026, không thuộc upstream).

From this skill's directory, run:

```sh
node scripts/phpcheck.js "https://example.com" --json
```

Use HTTPS for a bare hostname. The checker reads `Server` and `X-Powered-By`
headers. If the version is hidden, report unknown.

Compare the reported version with current PHP security guidance. Headers
can be changed and vendor backports may fix an older version, so a server-side
version and package check is stronger evidence. Do not run exploit probes.

Exit codes 1 and 3 mean vulnerable and unknown, not execution failures.

## Mở rộng jarvis — kiểm tra sâu bị động khi header không lộ phiên bản

Script ở trên chỉ đọc header; đa số site production ẩn cả `Server` lẫn
`X-Powered-By` nên kết quả thường là `unknown`. Trước khi chốt `unknown`,
moi thêm bằng chứng từ các kênh công khai dưới đây. Vẫn bị động tuyệt đối:
chỉ GET tài nguyên public, không exploit probe. (Đúc kết từ đợt rà soát
thật 22/10/2026 trên WordPress, Joomla và site tĩnh.)

1. **Xác nhận có PHP + CMS/framework**: meta generator trong HTML;
   WordPress (`wp-content/`, `wp-includes/`, asset `?ver=`); Joomla
   (`/media/`, `option=com_`, trang 404 kiểu Joomla); cookie `PHPSESSID`
   (chỉ ghi tên cookie, không ghi giá trị). Không có dấu hiệu PHP
   (HTML tĩnh thuần) → bề mặt php2shell gần như bằng 0.
2. **Moi phiên bản CMS** — không kết luận trực tiếp được php2shell nhưng
   định hướng dải PHP và mức rủi ro đi kèm:
   - WordPress: RSS `/feed/` →
     `<generator>https://wordpress.org/?v=X.Y.Z</generator>` (chắc nhất);
     plugin: `/wp-content/plugins/<slug>/readme.txt` → dòng `Stable tag:`.
   - Joomla: `/language/en-GB/en-GB.xml` → version trong metafile tương
     ứng bản lõi Joomla đang chạy.
3. **Moi phiên bản PHP trực tiếp**: `/phpinfo.php`, `/info.php` — nếu in
   `PHP Version x.y.z` thì dứt điểm (và tự nó là lỗi lộ thông tin cần báo
   tắt). Đọc cả status code như bằng chứng: 401/403 ở đường dẫn nhạy cảm
   = file tồn tại nhưng được bảo vệ; 405 ở `xmlrpc.php` = endpoint bật.
4. **Kết luận đúng 3 trạng thái**: đối chiếu phiên bản moi được với bảng
   vulnerable-range trong skill `phpcheck-server`. Các nhánh ≤ 8.1 nằm
   trọn trong vùng vulnerable của bảng và không có bản phát hành vá
   chính thức → kết luận vulnerable, trừ khi vendor chứng minh đã
   backport (số hiệu không đổi sau backport nên không tự kiểm chứng được
   từ bên ngoài). Không moi được phiên bản → giữ `unknown`, tuyệt đối
   không suy thành an toàn.
5. **Đa tuyến khi mạng chập chờn**: request trực tiếp (retry ≥ 2 lần) +
   dịch vụ fetch từ hạ tầng ngoài + trình duyệt thật để xác nhận hành vi
   (redirect http→https, form đăng nhập). Trình duyệt không đọc được
   header thô nên không thay thế được bước kiểm header của skill này.
6. **Giảm thiểu tạm** — chỉ là biện pháp chờ, không phải bằng chứng đã
   vá (đúng lưu ý của `phpcheck-server`): đặt
   `session.upload_progress.enabled=0` (đường khai thác đã xác nhận của
   CVE-2026-109619), `memory_limit=-1` ở tầng server không cho ứng dụng
   ghi đè (CVE-2026-109618), restart toàn bộ worker PHP sau khi đổi, đặt
   site sau WAF có rule php2shell. Vá triệt để duy nhất: nâng PHP đạt
   ngưỡng an toàn của nhánh, hoặc bản backport của vendor.
7. **Báo cáo riêng từng site** (không so sánh chéo giữa các site): nền
   tảng + phiên bản kèm bằng chứng (URL + chuỗi ký tự quan sát được),
   phiên bản PHP lộ hay không, kết luận 3 trạng thái, và mục chưa xác
   minh được ghi rõ lý do.
