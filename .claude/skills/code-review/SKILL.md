---
name: code-review
description: コード変更後に実行するコードレビュー。デザイン、a11y、TypeScriptの準拠をチェック。手動で呼び出して総合レビューを実行。
---

# コードレビュー Skill

## 概要

コード変更に対する総合的なレビューを実行するSkillです。
Hookによる自動レビューの補完として、手動で詳細なレビューを行う場合に使用します。

## チェック項目

### 1. TypeScript型安全性

```bash
pnpm tsc --noEmit
```

- 型エラーがないこと
- `any` の使用を最小限に
- 適切な型定義

### 2. ESLint

```bash
pnpm lint
```

- エラー 0件
- 警告は可能な限り解消

### 3. デザインガイドライン準拠（2025年1月改定・トップページ準拠）

**チェックポイント:**
- [ ] 背景色: `bg-white`, `bg-slate-50`, `bg-gray-50`, `bg-[#0f1723]` のみ
- [ ] テキスト見出し: `text-[#0f1723]`
- [ ] テキスト本文: `text-slate-700`, `text-slate-600`
- [ ] 強調色: `text-orange-500`
- [ ] ボタン: オレンジCTA / ネイビー塗り / ネイビーアウトライン
- [ ] 過度なグラデーションなし
- [ ] テキストグラデーションなし
- [ ] 複雑なアニメーションなし

**禁止パターン検索:**
```bash
grep -rE "bg-blue-[0-9]|text-blue-[0-9]|border-blue-" components/
grep -r "text-gray-900\|border-gray-200" components/
grep -r "bg-gradient-\|bg-clip-text" components/
```

### 4. アクセシビリティ

- [ ] 画像に alt 属性
- [ ] インタラクティブ要素にフォーカス表示
- [ ] タッチターゲット 44x44px 以上
- [ ] セマンティック HTML

### 5. ビルド確認

```bash
pnpm build
```

## レビュー実行手順

1. 変更ファイルを確認
   ```bash
   git diff --name-only
   ```

2. 各チェックを順次実行

3. 問題があれば修正

4. 再度チェックを実行

5. 全てパスしたら完了

## レポートフォーマット

```markdown
## コードレビュー結果

### 対象ファイル
- file1.tsx
- file2.tsx

### チェック結果

| 項目 | 状態 | 備考 |
|------|------|------|
| TypeScript | OK/NG | |
| ESLint | OK/NG | |
| デザイン | OK/NG | |
| a11y | OK/NG | |
| ビルド | OK/NG | |

### 修正が必要な箇所
1. ...
2. ...
```

## 関連Skill

- `/design-review` - デザイン準拠チェック（詳細）
- `/a11y-check` - アクセシビリティ検証（詳細）
- `/build-check` - ビルド確認
