---
name: "lead-research"
description: "Tìm kiếm thông tin công khai bổ sung về người/công ty từ dữ liệu card visit: website, lĩnh vực, quy mô — kèm nguồn trích dẫn cho mỗi phát hiện."
---

# Lead Research

## Purpose

Từ thông tin đã trích xuất ở card visit, tìm kiếm thêm thông tin công khai về con người
và công ty để làm giàu hồ sơ lead. Chỉ dùng nguồn công khai, không truy cập nguồn yêu
cầu đăng nhập hoặc trả phí.

## Workflow

1. Từ `companyName` + `website`/domain trong email, tạo 2–4 câu query tìm kiếm
   (tiếng Việt; thêm tiếng Anh nếu công ty có yếu tố quốc tế).
2. Tìm kiếm trên web, ưu tiên theo thứ tự: website chính thức của công ty → hồ sơ
   doanh nghiệp công khai → tin tức/bài viết.
3. Với tên người: chỉ kết luận khi có thêm yếu tố định danh (công ty + chức danh khớp).
   Nếu nhiều người trùng tên mà không phân biệt được — ghi `ambiguous: true`, không đoán.
4. Mỗi phát hiện ghi: `fact`, `value`, `source` (tên nguồn + URL), `confidence` (0–1).

## Output Contract

```json
{
  "company": {
    "website": {"value": "https://saoviet.vn", "source": "saoviet.vn", "confidence": 0.95},
    "industry": {"value": "Công nghệ phần mềm", "source": "saoviet.vn/gioi-thieu", "confidence": 0.8},
    "size": {"value": "50–200 nhân sự", "source": "tin tuyển dụng", "confidence": 0.6}
  },
  "person": {
    "role_confirmed": {"value": true, "source": "linkedin.com/...", "confidence": 0.7},
    "ambiguous": false,
    "notes": ""
  },
  "queries_used": ["Công ty Cổ phần Sao Việt", "saoviet.vn tuyển dụng"]
}
```

## Operating Rules

1. Mọi fact đều phải có nguồn; fact không có nguồn thì loại bỏ, không đưa vào kết quả.
2. "Không tìm thấy gì" cũng là kết quả hợp lệ — ghi rõ thay vì bịa.
3. Không dùng dữ liệu rò rỉ, không suy đoán thông tin nhạy cảm (tuổi, gia đình, tài chính cá nhân).
4. Giới hạn: tối đa ~8 lượt tìm kiếm cho một card ở depth standard (depth deep: ~14).
