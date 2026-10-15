# JARVIS Setup Prompt — agent tự cài đặt trên máy của mình

## Cách dùng (one-throw — chỉ cần ném cho agent)

Copy nguyên khối dưới, paste cho bất kỳ agent nào, nó sẽ tự tải hướng dẫn đầy
đủ và setup từ đầu đến cuối:

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

---

```text
<task_envelope>
TASK CLASS: install and verify JARVIS on THIS machine
SOURCE: https://github.com/TanNhatCMS/jarvis (branch main)
COMPLETION STANDARD: every claim backed by a command you actually ran here
</task_envelope>
```

## Nguyên tắc vàng

1. **Mọi claim phải có execution result trên CHÍNH máy này.** Không copy số
   liệu, paths hay kết quả test từ báo cáo của máy khác. Báo cáo của máy khác
   chỉ để tham khảo, không phải bằng chứng.
2. **Paths là machine-specific.** Đừng giả định `~/.jarvis`,
   `~/workspace/jarvis-main` hay bất kỳ đường dẫn nào tồn tại — kiểm tra thực tế.
3. **File có trên disk ≠ đã sẵn sàng.** Workflow phải được đăng ký với daemon
   (`workflow.create`) mới dùng được; test phải chạy mới biết pass.

## Phase 0 — Khảo sát máy hiện tại (không sửa gì)

Chạy và ghi lại:

- `pwd`, `whoami`, `uname -a`
- `ls -d ~/.jarvis ~/workspace/jarvis ~/workspace/jarvis-main 2>&1` — cái nào tồn tại?
- `git --version`, `node --version`
- Liệt kê workflows đã đăng ký với daemon (nếu có tool `workflow.list`).
- Nếu đã có bản cài cũ: ghi lại version (git rev-parse HEAD trong thư mục repo nếu có).

## Phase 1 — Lấy repo mới nhất

```bash
# Nếu chưa có:
git clone https://github.com/TanNhatCMS/jarvis.git <thư-mục-repo>
# Nếu đã có:
cd <thư-mục-repo> && git pull
```

Verify:

- `git rev-parse HEAD` — ghi SHA lại.
- So với main mới nhất trên GitHub (qua API hoặc `git ls-remote origin main`).
- Kiểm tra `install.sh` có dòng `install_dir "prompts"` không (bản cũ thiếu —
  nếu thiếu, `git pull` chưa đủ mới, kiểm tra lại remote).

## Phase 2 — Chạy cài đặt

```bash
cd <thư-mục-repo> && bash install.sh
# hoặc: bash install.sh --prefix <đường-dẫn-tùy-chọn>
```

Lưu ý:

- Chạy bằng `bash install.sh`, **không** `./install.sh` — file push qua
  GitHub API bị mất bit `+x` nên hay gặp `Permission denied`.
- Ghi lại output: số files mỗi thư mục.

Kỳ vọng (main hiện tại):

| Thành phần | Số files |
|---|---|
| skills/ | ~469 |
| agents/ | 71 |
| workflows/ | 4 (`dev-team.js`, `jarvis.js`, `spec-team.js`, `release-pipeline.js`) |
| docs/ | 8 |
| prompts/ | 2 |

Nếu số lượng lệch đáng kể, dừng và báo — không tự suy là "chắc vẫn ổn".

## Phase 3 — Verify cài đặt (bắt buộc)

Từ thư mục đã cài (`PREFIX`, mặc định `~/.jarvis`):

1. **Syntax 4 workflows** (node --check không dùng được với ESM):
   ```bash
   for f in workflows/*.js; do node -e "
   const fs=require('fs');
   let s=fs.readFileSync('$f','utf8').replace(/^export\s+const\s+meta/m,'const meta');
   new Function('agent','args','phase','log',s);" && echo "$f OK"; done
   ```
2. **Gate tests:** `node docs/tests/run-tests.mjs` — kỳ vọng `18 pass, 0 fail`.
3. **Benchmark:** `node docs/tests/benchmark.mjs` — kỳ vọng `3/3 fixtures ok`.

Nếu test nào fail: báo FAIL kèm output thực, không sửa expected test để cho pass.

## Phase 4 — Đăng ký workflows với daemon (bắt buộc)

File trên disk chưa đủ — phải đăng ký từng workflow:

- Đăng ký cả **4** file: `dev-team.js`, `jarvis.js`, `spec-team.js`,
  **`release-pipeline.js`** (file mới hay bị sót nhất).
- Dùng tool đăng ký workflow của runtime (`workflow.create` hoặc tương đương),
  trỏ tới đường dẫn file thật trên máy này.
- Verify bằng `workflow.list` — phải thấy đủ 4. Nếu chỉ thấy 3, nghĩa là
  `release-pipeline.js` chưa được đăng ký: làm lại bước này, không bỏ qua.

## Phase 5 — (Tùy chọn) Wire skill thật vào prompt

Trong 4 file `workflows/*.js` **của bản đã cài** (không phải repo gốc), sửa:

```
skillsRepo: "<PREFIX-đã-cài>"   # vd "/home/user/.jarvis"
```

Verify: chạy một workflow với mock/dry-run, kiểm tra prompt của reviewer chứa
đường dẫn `.../skills/superpowers-code-review/SKILL.md`, QA chứa
`.../skills/ecc-verification-loop/SKILL.md`.

Không sửa file này trong repo gốc rồi push nếu chưa được yêu cầu — đây là
config machine-specific.

## Phase 6 — Báo cáo

Báo cáo chỉ gồm những gì **bạn đã chạy trên máy này**:

- Paths thực tế (repo ở đâu, PREFIX là gì).
- SHA của repo đã cài.
- Kết quả test thực: pass/fail/skip + exit code.
- Danh sách workflows đã registered (từ `workflow.list`, không phải từ `ls`).
- Những gì CHƯA làm (nếu có).

Không dùng số liệu từ máy khác. Không báo DONE nếu còn bước verify chưa chạy.

## Gotchas đã biết

- `install.sh` mất bit `+x` sau khi push qua GitHub API → luôn chạy bằng `bash`.
- GitHub App không có quyền ghi `.github/workflows/` (403) — file CI phải thêm
  thủ công qua web UI, không cố lách qua API khác.
- `node --check` luôn exit 0 với ES module trên Node 24 — phải strip `export`
  rồi parse như Phase 3.
- Daemon `pipeline()` đa stage từng lỗi `not a callable function` — workflows
  trong repo đã dùng vòng lặp `for` thay thế, không cần sửa.
