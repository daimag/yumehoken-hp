#!/bin/bash
#
# auto-review.sh - コード変更後の自動レビュー
#
# 実行タイミング: PostToolUse (Edit|Write)
# 処理内容:
#   1. 変更ファイルの拡張子チェック
#   2. ESLint 実行
#   3. デザインガイドライン準拠チェック
#   4. ビルド確認
#

set -e

# 環境変数
PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
cd "$PROJECT_DIR" || exit 1

# 入力をJSONとして読み取り
INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# ファイルパスが空の場合はスキップ
if [ -z "$FILE_PATH" ]; then
    exit 0
fi

# 対象拡張子のチェック (.tsx, .ts, .css, .js, .jsx)
if ! echo "$FILE_PATH" | grep -qE '\.(tsx?|jsx?|css)$'; then
    exit 0
fi

echo "=== Auto Review: $FILE_PATH ===" >&2

# 1. ESLint チェック（ファイル単位）
echo "Running ESLint..." >&2
if command -v pnpm &> /dev/null; then
    LINT_OUTPUT=$(pnpm lint "$FILE_PATH" 2>&1) || true
    if echo "$LINT_OUTPUT" | grep -q "error"; then
        echo "ESLint errors detected:" >&2
        echo "$LINT_OUTPUT" | grep -E "(error|warning)" >&2
    fi
fi

# 2. デザインガイドライン チェック
echo "Checking design guidelines..." >&2

# 禁止パターンのチェック
DESIGN_ERRORS=""

# 過度なグラデーション
if grep -q "bg-gradient-to-br.*via-" "$FILE_PATH" 2>/dev/null; then
    DESIGN_ERRORS="${DESIGN_ERRORS}\n- 禁止: 過度なグラデーション (via-) を検出"
fi

# テキストグラデーション
if grep -q "bg-clip-text" "$FILE_PATH" 2>/dev/null; then
    DESIGN_ERRORS="${DESIGN_ERRORS}\n- 禁止: テキストグラデーション (bg-clip-text) を検出"
fi

# 複雑なアニメーション
if grep -qE "animate-pulse|blur-3xl" "$FILE_PATH" 2>/dev/null; then
    DESIGN_ERRORS="${DESIGN_ERRORS}\n- 禁止: 複雑なアニメーション (animate-pulse, blur-3xl) を検出"
fi

if [ -n "$DESIGN_ERRORS" ]; then
    echo "Design guideline violations:" >&2
    echo -e "$DESIGN_ERRORS" >&2
fi

# 3. TypeScript型チェック（オプション - 重い場合はコメントアウト）
# echo "Running TypeScript check..." >&2
# pnpm tsc --noEmit 2>&1 || true

echo "=== Review Complete ===" >&2

# 成功（stdoutの内容はClaudeのコンテキストに追加される）
echo "Auto-review completed for: $FILE_PATH"

exit 0
