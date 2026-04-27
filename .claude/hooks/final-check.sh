#!/bin/bash
#
# final-check.sh - セッション終了前の最終確認
#
# 実行タイミング: Stop
# 処理内容:
#   1. ビルド成功確認
#   2. 未コミット変更の表示
#   3. レビュー結果サマリー
#

set -e

# 環境変数
PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
cd "$PROJECT_DIR" || exit 1

echo "" >&2
echo "========================================" >&2
echo "    Final Pre-Completion Check" >&2
echo "========================================" >&2
echo "" >&2

# 1. ビルド確認
echo "[1/3] Building project..." >&2

BUILD_LOG=$(mktemp)
if pnpm build > "$BUILD_LOG" 2>&1; then
    echo "  ✓ Build successful" >&2
else
    echo "  ✗ Build FAILED" >&2
    echo "" >&2
    echo "Build errors:" >&2
    tail -30 "$BUILD_LOG" >&2
    rm -f "$BUILD_LOG"
    echo "" >&2
    echo "Please fix build errors before completing." >&2
    exit 2  # ブロック - 修正が必要
fi
rm -f "$BUILD_LOG"

# 2. 未コミット変更の確認
echo "" >&2
echo "[2/3] Checking uncommitted changes..." >&2

CHANGES=$(git status --short 2>/dev/null | wc -l | tr -d ' ')
if [ "$CHANGES" -gt 0 ]; then
    echo "  ⚠ $CHANGES uncommitted file(s):" >&2
    git status --short >&2
else
    echo "  ✓ No uncommitted changes" >&2
fi

# 3. サマリー
echo "" >&2
echo "[3/3] Review Summary" >&2
echo "  - Project: $(basename "$PROJECT_DIR")" >&2
echo "  - Branch: $(git branch --show-current 2>/dev/null || echo 'N/A')" >&2
echo "  - Build: PASSED" >&2
echo "" >&2
echo "========================================" >&2
echo "    Ready for completion" >&2
echo "========================================" >&2
echo "" >&2

# 成功
exit 0
