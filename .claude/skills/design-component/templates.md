# コンポーネントテンプレート集（2025年1月改定・トップページ準拠）

## 基本コンポーネント構造

```tsx
"use client"

import { cn } from "@/lib/utils"

interface ComponentNameProps {
  className?: string
  children?: React.ReactNode
}

export function ComponentName({ className, children }: ComponentNameProps) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  )
}
```

## ボタンスタイル

### プライマリCTAボタン（オレンジ）

最重要アクション（無料相談、申し込みなど）に使用。

```tsx
<button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
  無料相談
</button>
```

### セカンダリボタン（ネイビー塗り）

通常アクションに使用。

```tsx
<button className="bg-[#0f1723] hover:bg-[#1a2836] text-white px-6 py-3 rounded-lg font-medium transition-colors">
  サービスを見る
</button>
```

### アウトラインボタン（ネイビー枠）

控えめなアクション、CTAの隣に配置する場合に使用。

```tsx
<button className="border border-[#0f1723] text-[#0f1723] hover:bg-[#0f1723] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
  詳細を見る
</button>
```

### ダーク背景上のボタン

CTAセクションなどダーク背景で使用。

```tsx
{/* プライマリ（オレンジ） */}
<button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
  無料相談
</button>

{/* セカンダリ（白アウトライン） */}
<button className="border-2 border-white/80 text-white hover:bg-white hover:text-[#0f1723] px-6 py-3 rounded-lg font-medium transition-colors">
  詳細を見る
</button>
```

### リンクボタン（矢印付き）

```tsx
import { ArrowRight } from "lucide-react"

<a href="/path" className="inline-flex items-center gap-2 text-[#0f1723] hover:text-orange-500 font-medium group">
  詳細を見る
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</a>
```

## カードスタイル

### 基本カード

```tsx
<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6">
  <h3 className="text-lg font-semibold text-[#0f1723] mb-2">タイトル</h3>
  <p className="text-slate-700">説明文</p>
</div>
```

### ホバーカード

```tsx
<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
  {/* コンテンツ */}
</div>
```

### アイコン付きカード

```tsx
import { Icon } from "lucide-react"

<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6">
  <div className="w-14 h-14 bg-[#0f1723] rounded-xl flex items-center justify-center mb-4">
    <Icon className="w-7 h-7 text-white" />
  </div>
  <h3 className="text-lg font-bold text-[#0f1723] mb-2">タイトル</h3>
  <p className="text-slate-700">説明文</p>
</div>
```

### サービスカード（トップページ準拠）

```tsx
import { ArrowRight, LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  items: string[]
}

<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all">
  <div className="w-14 h-14 bg-[#0f1723] rounded-xl flex items-center justify-center mb-4 mx-auto">
    <Icon className="w-7 h-7 text-white" />
  </div>
  <h3 className="text-xl font-bold text-[#0f1723] text-center mb-1">{title}</h3>
  <p className="text-sm text-slate-600 text-center mb-4">{description}</p>
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="text-sm text-slate-700 flex items-start">
        <ArrowRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0 text-slate-400" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>
```

## 見出しスタイル

```tsx
// h1（ページタイトル）
<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0f1723]">

// h2（セクションタイトル）
<h2 className="text-3xl md:text-4xl font-bold text-[#0f1723]">

// h3（サブセクション）
<h3 className="text-xl md:text-2xl font-semibold text-[#0f1723]">

// h4（カードタイトル）
<h4 className="text-lg md:text-xl font-semibold text-[#0f1723]">

// セクションラベル（英語）
<p className="text-slate-500 text-sm mb-4">Services</p>

// 強調ラベル
<p className="text-orange-500 font-medium mb-2">INSIGHT DX</p>
```

## セクションヘッダー

```tsx
<div className="text-center mb-16">
  <p className="text-slate-500 text-sm mb-4">Services</p>
  <h2 className="text-3xl md:text-4xl font-bold text-[#0f1723] mb-4">
    セクションタイトル
  </h2>
  <p className="text-slate-600 text-lg max-w-2xl mx-auto">
    セクションの説明文がここに入ります。
  </p>
</div>
```

## グリッドレイアウト

```tsx
// 2カラム
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// 3カラム
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 4カラム
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
```

## アイコン背景

```tsx
// 大サイズ（サービスカード等）
<div className="w-14 h-14 bg-[#0f1723] rounded-xl flex items-center justify-center">
  <Icon className="w-7 h-7 text-white" />
</div>

// 中サイズ
<div className="w-10 h-10 bg-[#0f1723] rounded-lg flex items-center justify-center">
  <Icon className="w-5 h-5 text-white" />
</div>

// オレンジアクセント
<div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
  <Icon className="w-7 h-7 text-white" />
</div>
```

## バッジ・タグ

```tsx
// ハイライトバッジ
<span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
  New
</span>

// 標準タグ
<span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">
  カテゴリ
</span>
```

## cn() ユーティリティ

```tsx
import { cn } from "@/lib/utils"

<div className={cn(
  "base-class",
  isActive && "active-class",
  className
)}>
```
