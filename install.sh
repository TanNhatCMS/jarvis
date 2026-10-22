#!/usr/bin/env bash
# install.sh — cài đặt JARVIS skills/connectors/agents/workflows vào máy local.
# Cách dùng:
#   ./install.sh                       # cài vào ~/.jarvis
#   ./install.sh --prefix ~/my-dir     # cài vào thư mục tùy chọn
#   ./install.sh --dry-run             # chỉ in ra những gì sẽ làm
set -euo pipefail

PREFIX="$HOME/.jarvis"
DRY=0
while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run) DRY=1; shift ;;
    --prefix) PREFIX="$2"; shift 2 ;;
    *) PREFIX="$1"; shift ;;
  esac
done

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "JARVIS install → $PREFIX"
[[ "$DRY" == "1" ]] && echo "(dry-run: không ghi file thật)"

install_dir() {
  local src="$1" dest="$2"
  if [[ "$DRY" == "1" ]]; then echo "  [dry] $src → $dest"; return; fi
  mkdir -p "$dest"
  cp -r "$REPO_DIR/$src/." "$dest/"
  echo "  ok $src → $dest ($(find "$dest" -type f | wc -l) files)"
}

install_dir "skills" "$PREFIX/skills"
install_dir "connectors" "$PREFIX/connectors"
install_dir "agents" "$PREFIX/agents"
install_dir "workflows" "$PREFIX/workflows"
install_dir "docs" "$PREFIX/docs"
install_dir "prompts" "$PREFIX/prompts"

for f in README.md ATTRIBUTION.md SKILLS_INDEX.md AGENTS.md; do
  [[ -f "$REPO_DIR/$f" ]] || continue
  if [[ "$DRY" == "1" ]]; then echo "  [dry] $f → $PREFIX/$f"; else cp "$REPO_DIR/$f" "$PREFIX/$f"; echo "  ok $f"; fi
done

echo ""
echo "Xong. Bước tiếp theo:"
echo "  1. Đọc docs/porting.md để chạy workflow ngoài Muse workflow daemon."
echo "  2. (Tùy chọn) trỏ PLATFORM.skillsRepo trong workflows/*.js tới $PREFIX"
echo "     để workflow tự wire skill thật vào prompt reviewer/QA/coder."
echo "  3. Chạy test gate: node $PREFIX/docs/tests/run-tests.mjs"
