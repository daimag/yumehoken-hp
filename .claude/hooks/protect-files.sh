#!/bin/bash
#
# protect-files.sh - 危険ファイルの保護
#
# 実行タイミング: PreToolUse (Edit|Write)
# 処理内容:
#   機密ファイルや重要ファイルへの編集をブロック
#

set -e

# 入力をJSONとして読み取り
INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# ファイルパスが空の場合はスキップ
if [ -z "$FILE_PATH" ]; then
    exit 0
fi

# 保護対象パターン
PROTECTED_PATTERNS=(
    ".env"
    ".env.local"
    ".env.production"
    ".env.development"
    "package-lock.json"
    "pnpm-lock.yaml"
    ".git/"
    "node_modules/"
)

# パターンマッチング
for pattern in "${PROTECTED_PATTERNS[@]}"; do
    if echo "$FILE_PATH" | grep -q "$pattern"; then
        echo "BLOCKED: $FILE_PATH is a protected file" >&2
        echo "This file is protected and cannot be modified automatically." >&2
        echo "Protected patterns: ${PROTECTED_PATTERNS[*]}" >&2
        exit 2  # exit 2 = ブロック（Claudeに理由を伝える）
    fi
done

# 許可
exit 0
