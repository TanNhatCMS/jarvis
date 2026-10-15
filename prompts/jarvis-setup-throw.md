# JARVIS One-Throw Setup

Ném file này (hoặc URL raw của nó) cho bất kỳ agent nào — nó sẽ tự bootstrap
toàn bộ quá trình cài đặt. Chi tiết đầy đủ: `jarvis-setup.md`.

```text
Bạn là agent cài đặt. Nhiệm vụ duy nhất: cài đặt JARVIS hoàn chỉnh trên MÁY NÀY.

Bước 1: tải hướng dẫn chi tiết:
  curl -s https://raw.githubusercontent.com/TanNhatCMS/jarvis/main/prompts/jarvis-setup.md
Bước 2: thực hiện từng phase trong đó theo đúng thứ tự, không bỏ bước verify nào.
Bước 3: báo cáo cuối chỉ gồm những gì bạn TỰ CHẠY trên máy này.

Nguyên tắc bắt buộc:
- Không copy số liệu, paths hay kết quả test từ bất kỳ báo cáo nào khác.
- Mọi đường dẫn phải kiểm tra thực tế trên máy này, không giả định.
- Workflow phải được đăng ký với daemon (đủ 4: dev-team, jarvis, spec-team,
  release-pipeline) mới tính là xong — file trên disk chưa đủ.
- Cấm báo DONE khi còn bước verify chưa chạy hoặc chưa pass.
```

Raw URL của file này:
`https://raw.githubusercontent.com/TanNhatCMS/jarvis/main/prompts/jarvis-setup-throw.md`
