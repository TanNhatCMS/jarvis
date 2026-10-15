# Ghi chú adapt cho JARVIS

Skill gốc viết cho **Muse AI** (có CLI `media-generation` của Meta). Khi dùng trong
JARVIS, map như sau:

| Skill gốc dùng | Trong JARVIS dùng |
|---|---|
| `media-generation` (gen ảnh/video, `--orientation landscape\|vertical`) | skill `media` (xem `/opt/muse/skills/media/` hoặc media pipeline của Muse) — giữ nguyên luật **STRICT ASPECT RATIO LOCK** |
| TTS cho VO | skill `spoken-audio` |
| Dựng phim `ffmpeg` | chạy trực tiếp qua terminal (`ffmpeg` có sẵn trên VM) |

Pipeline 7 giai đoạn, output contract và operating rules giữ nguyên — đã kiểm chứng
trong dự án mẫu `examples/the-last-lantern/` (8 cảnh).

Không mang theo `docs/` (landing page quảng bá 2.5MB, không phải phần chức năng
của skill).
