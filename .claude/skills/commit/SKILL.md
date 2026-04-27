---
name: commit
description: プロジェクト規約に沿ったコミットメッセージを生成する。コミット作成時に使用。
---

# コミットメッセージ生成 Skill

## 概要

daimagプロジェクトの規約に沿ったコミットメッセージを生成するSkillです。

## コミットメッセージフォーマット

```
<type>: <summary>

<body>

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

## Type一覧

| Type | 用途 | 例 |
|------|------|-----|
| `feat` | 新機能追加 | 新しいコンポーネント、ページ |
| `fix` | バグ修正 | 不具合の修正 |
| `refactor` | リファクタリング | 機能変更なしのコード改善 |
| `style` | スタイル変更 | CSS、デザイン調整 |
| `docs` | ドキュメント | README、コメント |
| `chore` | 設定・ビルド | 依存関係、設定ファイル |
| `perf` | パフォーマンス | 最適化 |
| `test` | テスト | テストコード追加・修正 |

## 作成手順

### 1. 変更内容を確認

```bash
git status
git diff --staged
```

### 2. 適切なtypeを選択

変更内容に最も合うtypeを選択。

### 3. summaryを作成

- 日本語で記述
- 50文字以内を目安
- 「〜を追加」「〜を修正」「〜を改善」など動詞で終わる

### 4. bodyを作成（任意）

- 変更の理由や背景を説明
- 箇条書きも可

## 例

### 新機能追加

```
feat: サービスカードコンポーネントを追加

- アイコン付きカードデザイン
- ホバーエフェクト対応
- レスポンシブ対応

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

### バグ修正

```
fix: モバイルでのナビゲーション表示を修正

ハンバーガーメニューが正しく開閉しない問題を修正。
z-indexの競合が原因だった。

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

### スタイル変更

```
style: ヒーローセクションの余白を調整

- モバイルでのパディングを増加
- デスクトップでの最大幅を調整

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

### リファクタリング

```
refactor: ボタンコンポーネントのvariant処理を整理

条件分岐をオブジェクトマップに変更し、
可読性と保守性を向上。

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

### 設定変更

```
chore: Tailwind設定にカスタムカラーを追加

プロジェクトのカラーパレットに合わせた
カスタムカラー定義を追加。

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

## 注意事項

- コミット前に `pnpm build` でビルド確認
- 1コミット = 1つの論理的な変更
- 関係のない変更は別コミットに分ける
- WIP（作業中）コミットは避ける

## 関連Skill

- `/build-check` - コミット前のビルド確認
