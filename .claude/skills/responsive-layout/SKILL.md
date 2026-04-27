---
name: responsive-layout
description: モバイルファーストのレスポンシブ設計を支援する。レイアウト作成時やデザイン調整時に自動で使用。
---

# レスポンシブレイアウト Skill

## 概要

Tailwind CSSを使用したモバイルファーストのレスポンシブ設計を支援するSkillです。

## ブレークポイント

| プレフィックス | 最小幅 | 用途 |
|--------------|--------|------|
| (なし) | 0px | モバイル（基準） |
| `sm:` | 640px | 大きめのスマホ |
| `md:` | 768px | タブレット |
| `lg:` | 1024px | 小さめのPC |
| `xl:` | 1280px | デスクトップ |
| `2xl:` | 1536px | 大画面 |

## 基本原則

**モバイルファースト**: 小さい画面から設計し、大きい画面へ拡張

```tsx
// 良い例（モバイルファースト）
className="text-base md:text-lg lg:text-xl"

// 悪い例（デスクトップファースト）
className="text-xl lg:text-lg md:text-base"  // 避ける
```

## 詳細は [breakpoints.md](breakpoints.md) を参照

## コンテナ設定

```tsx
// 標準コンテナ
<div className="container px-4 md:px-6">
  <div className="max-w-6xl mx-auto">
    {/* コンテンツ */}
  </div>
</div>
```

## グリッドパターン

```tsx
// 2カラム（モバイルは1カラム）
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// 3カラム
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 4カラム
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

## テキストサイズ

| 要素 | クラス |
|------|--------|
| h1 | `text-3xl md:text-4xl lg:text-5xl xl:text-6xl` |
| h2 | `text-2xl md:text-3xl lg:text-4xl` |
| h3 | `text-xl md:text-2xl lg:text-3xl` |
| h4 | `text-lg md:text-xl lg:text-2xl` |
| body | `text-base` |
| small | `text-sm` |

## 関連Skill

- `/design-component` - コンポーネント生成
- `/page-section` - セクション生成
