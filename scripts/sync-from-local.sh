#!/usr/bin/env bash
# scripts/sync-from-local.sh — đồng bộ skills/agents/workflows từ máy local vào repo.
# Dùng khi skills local (~/workspace/skills, ~/workspace/custom-skills) có cập nhật
# muốn đẩy lên repo JARVIS. Luôn chạy --dry-run trước để xem diff.
#
# Cách dùng:
#   ./scripts/sync-from-local.sh --dry-run
#   ./scripts/sync-from-local.sh --apply
set -euo pipefail

MODE="${1:---dry-run}"
REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SKILLS_SRC="${SKILLS_SRC:-$HOME/workspace/skills}"
WORKFLOWS_SRC="${WORKFLOWS_SRC:-$HOME/workspace/.jarvis/workflows}"

echo "sync: $SKILLS_SRC/skills → $REPO_DIR/skills"
echo "sync: $WORKFLOWS_SRC → $REPO_DIR/workflows"
echo ""

sync_one() {
  local src="$1" dest="$2" label="$3"
  [[ -d "$src" ]] || { echo "  skip $label (không có $src)"; return; }
  if [[ "$MODE" == "--dry-run" ]]; then
    echo "  [dry] $label: $(diff -rq "$src" "$dest" 2>/dev/null | wc -l) file khác nhau"
  else
    mkdir -p "$dest"
    cp -r "$src/." "$dest/"
    echo "  ok $label"
  fi
}

sync_one "$SKILLS_SRC" "$REPO_DIR/skills" "skills"
sync_one "$WORKFLOWS_SRC" "$REPO_DIR/workflows" "workflows"

if [[ "$MODE" == "--dry-run" ]]; then
  echo ""
  echo "Chạy với --apply để ghi thật, rồi kiểm tra lại bằng git diff trước khi commit."
fi
