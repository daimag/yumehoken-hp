# ブレークポイント詳細

## Tailwind CSSブレークポイント

```
0px     640px    768px    1024px   1280px   1536px
|-------|--------|--------|--------|--------|------->
  (base)   sm:      md:      lg:      xl:     2xl:
```

## レスポンシブパターン集

### 表示/非表示

```tsx
// モバイルのみ表示
<div className="block md:hidden">

// タブレット以上で表示
<div className="hidden md:block">

// デスクトップのみ表示
<div className="hidden lg:block">
```

### Flexbox方向

```tsx
// モバイル: 縦積み → PC: 横並び
<div className="flex flex-col md:flex-row gap-6">

// 逆順
<div className="flex flex-col-reverse md:flex-row gap-6">
```

### スペーシング

```tsx
// パディング
<div className="p-4 md:p-6 lg:p-8">

// マージン
<div className="my-8 md:my-12 lg:my-16">

// ギャップ
<div className="gap-4 md:gap-6 lg:gap-8">
```

### 幅

```tsx
// フル幅 → 制限幅
<div className="w-full md:w-1/2 lg:w-1/3">

// 最大幅
<div className="max-w-full md:max-w-md lg:max-w-lg">
```

### テキスト配置

```tsx
// モバイル: 中央 → PC: 左寄せ
<div className="text-center md:text-left">
```

## グリッド詳細パターン

### 基本グリッド

```tsx
// 1→2カラム
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// 1→2→3カラム
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 1→2→4カラム
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

// 2→3→4カラム
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
```

### 非対称グリッド

```tsx
// サイドバーレイアウト
<div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">

// コンテンツ優先
<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
```

## 画像のレスポンシブ対応

```tsx
import Image from "next/image"

// アスペクト比を維持
<div className="relative aspect-video">
  <Image
    src="/image.jpg"
    alt="説明"
    fill
    className="object-cover"
  />
</div>

// サイズ指定
<Image
  src="/image.jpg"
  alt="説明"
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

## ナビゲーションパターン

```tsx
// ハンバーガーメニュー
<nav>
  {/* モバイル: ハンバーガー */}
  <button className="md:hidden">
    <MenuIcon />
  </button>

  {/* PC: 横並びメニュー */}
  <ul className="hidden md:flex gap-6">
    <li><a href="/">ホーム</a></li>
    <li><a href="/services">サービス</a></li>
  </ul>
</nav>
```

## ヒーローセクションパターン

```tsx
<section className="pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
  <div className="container px-4 md:px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* テキスト */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            タイトル
          </h1>
        </div>

        {/* 画像 */}
        <div className="order-first lg:order-last">
          <Image ... />
        </div>
      </div>
    </div>
  </div>
</section>
```

## デバッグ用クラス

開発時のみ使用し、本番では削除：

```tsx
// ブレークポイント確認
<div className="fixed bottom-4 right-4 bg-black text-white p-2 text-xs z-50">
  <span className="sm:hidden">XS</span>
  <span className="hidden sm:inline md:hidden">SM</span>
  <span className="hidden md:inline lg:hidden">MD</span>
  <span className="hidden lg:inline xl:hidden">LG</span>
  <span className="hidden xl:inline 2xl:hidden">XL</span>
  <span className="hidden 2xl:inline">2XL</span>
</div>
```
