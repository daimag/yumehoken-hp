---
name: pr-review
description: PR作成前の総合レビュー。ビルド、Lint、デザイン、セキュリティの全チェックを実行し、PR準備状況を確認。
---

# PRレビュー Skill

## 概要

プルリクエスト作成前に実行する総合レビューです。
全てのチェックをパスしていることを確認してからPRを作成します。

## PRレビューチェックリスト

### 1. コード品質

- [ ] **ビルド成功**: `pnpm build` がエラーなく完了
- [ ] **Lintパス**: `pnpm lint` がエラーなし
- [ ] **型チェック**: TypeScriptエラーなし

### 2. デザイン準拠

- [ ] デザインガイドライン準拠
- [ ] レスポンシブ対応
- [ ] アクセシビリティ基準クリア

### 3. セキュリティ

- [ ] 機密情報のハードコードなし
- [ ] XSS脆弱性なし
- [ ] console.log削除済み

### 4. コミット品質

- [ ] コミットメッセージが規約に準拠
- [ ] 論理的な単位でコミット分割
- [ ] 不要なファイルがコミットされていない

### 5. 変更内容

- [ ] 変更ファイル一覧を確認
- [ ] 意図しない変更がないか確認
- [ ] テストが必要な場合は実行済み

## 実行手順

### Step 1: 変更内容の確認

```bash
# 変更ファイル一覧
git diff --name-only main...HEAD

# 変更内容の詳細
git diff main...HEAD
```

### Step 2: 自動チェック実行

```bash
# ビルド
pnpm build

# Lint
pnpm lint

# 型チェック
pnpm tsc --noEmit
```

### Step 3: 手動チェック

1. `/design-review` を実行
2. `/security-check` を実行
3. `/a11y-check` を実行

### Step 4: コミット確認

```bash
# コミット履歴
git log --oneline main...HEAD

# コミットメッセージ形式確認
# - feat: / fix: / refactor: / style: / docs: / chore:
```

### Step 5: PR作成

```bash
gh pr create --title "タイトル" --body "説明"
```

## PRテンプレート

```markdown
## Summary
- 変更内容の概要

## Changes
- 変更点1
- 変更点2

## Checklist
- [ ] ビルド成功
- [ ] Lint パス
- [ ] デザインガイドライン準拠
- [ ] アクセシビリティ確認
- [ ] セキュリティチェック完了

## Screenshots (if applicable)
<!-- スクリーンショットを貼り付け -->

## Test Plan
- テスト方法の説明
```

## レポートフォーマット

```markdown
## PR準備状況レビュー

### ブランチ情報
- **ブランチ**: feature/xxx
- **ベース**: main
- **コミット数**: 3

### チェック結果

| 項目 | 状態 | 備考 |
|------|------|------|
| ビルド | OK | |
| Lint | OK | |
| TypeScript | OK | |
| デザイン | OK | |
| a11y | OK | |
| セキュリティ | OK | |

### 変更ファイル
- components/xxx.tsx
- app/yyy/page.tsx

### 結論
✅ PR作成可能

or

❌ 以下の修正が必要:
1. xxx
2. yyy
```

## 関連Skill

- `/code-review` - コードレビュー
- `/design-review` - デザイン準拠チェック
- `/security-check` - セキュリティチェック
- `/a11y-check` - アクセシビリティ検証
- `/commit` - コミットメッセージ生成
