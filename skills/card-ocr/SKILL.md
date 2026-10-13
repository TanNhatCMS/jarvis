---
name: "card-ocr"
description: "Trích xuất thông tin liên hệ có cấu trúc (họ tên, chức danh, công ty, email, SĐT, địa chỉ, website) từ ảnh card visit, kèm độ tin cậy từng trường."
---

# Card OCR

## Purpose

Đọc ảnh card visit (danh thiếp) và trích xuất thông tin liên hệ thành JSON có cấu trúc.
Dùng khi agent cần biến ảnh chụp danh thiếp thành dữ liệu để xử lý tiếp.

## Workflow

1. Mở và quan sát ảnh bằng tool đọc file/ảnh. Nếu ảnh mờ, xoay, chói sáng — ghi nhận
   vào `notes` và làm tốt nhất có thể.
2. Trích xuất 7 trường: `fullName`, `jobTitle`, `companyName`, `email`, `phone`,
   `address`, `website`.
3. Mỗi trường ghi: `value` (giữ nguyên văn bản trên card), `confidence` (0–1).
4. Trường nào không đọc được: `value: null, confidence: 0`.
5. Phát hiện ngôn ngữ chính trên card: `detectedLanguage` (`vi` | `en` | `ko` | `ja` | `zh` | `unknown`).

## Output Contract

```json
{
  "fullName": {"value": "Nguyễn Văn An", "confidence": 0.95},
  "jobTitle": {"value": "Giám đốc Kinh doanh", "confidence": 0.9},
  "companyName": {"value": "Công ty Cổ phần Sao Việt", "confidence": 0.92},
  "email": {"value": "an.nguyen@saoviet.vn", "confidence": 0.98},
  "phone": {"value": "0912 345 678", "confidence": 0.97},
  "address": {"value": null, "confidence": 0},
  "website": {"value": "https://saoviet.vn", "confidence": 0.9},
  "detectedLanguage": "vi",
  "notes": "Góc phải hơi chói, chữ website mờ"
}
```

## Operating Rules

1. Không suy đoán thông tin không có trên card (ví dụ: không tự thêm website từ tên công ty).
2. Giữ nguyên văn bản gốc ở `value`; mọi chuẩn hóa để skill `vn-contact-normalize` lo.
3. Trường có `confidence` < 0.5 phải ghi rõ lý do vào `notes` (mờ, bị che, chữ nghệ thuật khó đọc).
4. Nếu ảnh có 2 mặt, đọc cả hai và gộp lại; khi trùng trường, ưu tiên mặt có nhiều thông tin liên hệ hơn.
