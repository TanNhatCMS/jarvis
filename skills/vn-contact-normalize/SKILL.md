---
name: "vn-contact-normalize"
description: "Chuẩn hóa thông tin liên hệ Việt Nam: SĐT về +84, tên riêng viết hoa đúng, địa chỉ gọn, email chữ thường — kèm cờ needs_review cho trường nghi ngờ."
---

# VN Contact Normalize

## Purpose

Chuẩn hóa các trường liên hệ đã trích xuất từ card visit theo quy ước Việt Nam,
để dữ liệu đồng nhất trước khi lưu hoặc đối chiếu. Chỉ biến đổi hình thức,
không thay đổi ý nghĩa.

## Workflow

1. **SĐT**: bỏ mọi ký tự không phải số (giữ dấu `+` ở đầu). `0xxx` → `+84xxx`;
   đã `+84`/`84` thì chuẩn về `+84`. Nếu chuỗi còn chữ cái (VD `+84 935 667 78B`)
   → giữ nguyên, đưa vào `needs_review`, không tự sửa.
2. **Email**: chữ thường toàn bộ, bỏ khoảng trắng thừa.
3. **Họ tên**: viết hoa chữ cái đầu mỗi từ, giữ nguyên trật tự họ tên
   (VD `NGUYỄN VĂN AN` → `Nguyễn Văn An`).
4. **Tên công ty**: giữ nguyên cách viết thương hiệu nếu nhận diện được
   (FPT, VNG, Vinamilk...), còn lại Title Case tiếng Việt.
5. **Địa chỉ**: gộp khoảng trắng thừa, thống nhất viết tắt phổ biến
   (`TP.` thành phố, `Q.` quận — chỉ gọn format, không tự thêm tỉnh/thành còn thiếu).
6. **Website**: thêm `https://` nếu thiếu scheme, bỏ `/` ở cuối.

## Output Contract

```json
{
  "fullName": "Nguyễn Văn An",
  "jobTitle": "Giám đốc Kinh doanh",
  "companyName": "Công ty Cổ phần Sao Việt",
  "email": "an.nguyen@saoviet.vn",
  "phone": "+84 912 345 678",
  "address": "Tầng 12, Tòa nhà Bitexco, Quận 1, TP. Hồ Chí Minh",
  "website": "https://saoviet.vn",
  "flags": ["phone_normalized", "email_lowercased"],
  "needs_review": ["address: thiếu phường/xã, không tự bổ sung"]
}
```

`flags`: những gì đã tự động chuẩn hóa. `needs_review`: trường không chắc chắn,
cần con người kiểm tra — luôn ghi rõ lý do.

## Operating Rules

1. Không đoán phần còn thiếu: không tự thêm số điện thoại, không "sửa" tên người
   khi không chắc (VD `Phuc` có thể là Phúc hoặc Phục — giữ nguyên và flag).
2. Trường nào mâu thuẫn với dữ liệu gốc thì giữ dữ liệu gốc và đưa vào `needs_review`.
3. Luôn trả về đủ 7 trường, kể cả khi giá trị là `null`.
