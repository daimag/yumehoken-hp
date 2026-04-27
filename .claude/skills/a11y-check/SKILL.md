---
name: a11y-check
description: WCAG AA準拠のアクセシビリティチェックリストを適用する。コンポーネント作成後やレビュー時に使用。
allowed-tools: Read, Glob, Grep
---

# アクセシビリティ検証 Skill

## 概要

WCAG AA準拠のアクセシビリティ要件をチェックするSkillです。

## チェックリスト

### 1. コントラスト比（4.5:1以上）

| 組み合わせ | 準拠状態 |
|-----------|---------|
| `text-[#0f1723]` on `bg-white` | OK |
| `text-slate-700` on `bg-white` | OK |
| `text-slate-600` on `bg-white` | OK |
| `text-orange-500` on `bg-white` | OK |
| `text-white` on `bg-[#0f1723]` | OK |
| `text-white` on `bg-orange-500` | OK |

**チェック方法:**
```bash
grep -r "text-\[#0f1723\]\|text-slate-\|text-orange-\|text-white" components/
```

### 2. フォーカス表示

```tsx
// 必須: フォーカス時に視覚的なインジケーター
className="focus:ring-2 focus:ring-orange-500 focus:outline-none"

// または
className="focus:border-orange-500 focus:outline-none"
```

**チェック対象:**
- `<a>` タグ
- `<button>` タグ
- `<input>` タグ
- `<textarea>` タグ
- `<select>` タグ

### 3. タッチターゲット（44x44px以上）

```tsx
// 最小サイズを確保
className="min-w-[44px] min-h-[44px]"

// パディングで確保
className="px-4 py-3"  // 約48x44px
```

### 4. 画像のalt属性

```tsx
// 必須: 意味のあるalt
<img src="..." alt="サービス紹介の図解" />

// 装飾的な画像
<img src="..." alt="" aria-hidden="true" />

// Next.js Image
<Image src="..." alt="説明" width={...} height={...} />
```

### 5. セマンティックHTML

| 要素 | 用途 |
|------|------|
| `<header>` | ページヘッダー |
| `<nav>` | ナビゲーション |
| `<main>` | メインコンテンツ |
| `<section>` | セクション |
| `<article>` | 独立したコンテンツ |
| `<aside>` | 補足コンテンツ |
| `<footer>` | ページフッター |

### 6. ARIA属性

```tsx
// ボタンの状態
<button aria-expanded={isOpen} aria-controls="menu">

// モーダル
<div role="dialog" aria-modal="true" aria-labelledby="title">

// ローディング
<div aria-busy={isLoading} aria-live="polite">

// アイコンボタン
<button aria-label="メニューを開く">
  <MenuIcon aria-hidden="true" />
</button>
```

### 7. キーボード操作

- Tab: フォーカス移動
- Enter/Space: アクティベート
- Escape: モーダル/ドロップダウンを閉じる
- 矢印キー: メニュー内移動

```tsx
<button
  onKeyDown={(e) => {
    if (e.key === 'Escape') onClose()
  }}
>
```

### 8. スキップリンク

```tsx
// ページ先頭に配置
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#0f1723] text-white px-4 py-2 rounded"
>
  メインコンテンツへスキップ
</a>

// メインコンテンツ
<main id="main-content">
```

## レポートフォーマット

```markdown
## アクセシビリティチェック結果

### ファイル: [ファイル名]

| 項目 | 状態 | 詳細 |
|------|------|------|
| コントラスト比 | OK/NG | |
| フォーカス表示 | OK/NG | |
| タッチターゲット | OK/NG | |
| alt属性 | OK/NG | |
| セマンティックHTML | OK/NG | |
| ARIA属性 | OK/NG | |
| キーボード操作 | OK/NG | |

### 修正が必要な箇所

1. [行番号]: [問題] → [推奨修正]
```

## 自動チェックコマンド

```bash
# alt属性の欠落
grep -rn "<img" components/ | grep -v "alt="

# フォーカス指定の欠落（インタラクティブ要素）
grep -rn "<button\|<a href" components/ | grep -v "focus:"

# aria-label の欠落（アイコンボタン）
grep -rn "Icon.*\/>" components/ | grep -v "aria-"
```
