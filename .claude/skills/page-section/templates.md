# セクションテンプレート集（2025年1月改定・トップページ準拠）

## ヒーローセクション（背景画像＋オーバーレイ方式）【推奨】

全ページでこの方式を採用します。

```tsx
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ArrowRight, IconName } from "lucide-react"

export default function PageHero() {
  const breadcrumbItems = [
    { label: "ホーム", href: "/" },
    { label: "現在のページ", current: true }
  ]

  return (
    <section className="relative pt-20 pb-16 min-h-[500px] flex items-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/page-hero.webp"
          alt="ページの背景画像の説明"
          fill
          className="object-cover"
          priority
        />
        {/* オーバーレイ（テキストの可読性向上） */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* コンテンツ */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={breadcrumbItems}
              separator="chevron"
            />
          </div>

          {/* Badge（オプション） */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#e8f4fc] mb-6">
            <IconName className="w-4 h-4 mr-2 text-[#1a5490]" />
            <span className="text-[#15406d] text-sm font-medium">バッジテキスト</span>
          </div>

          {/* Main Title */}
          <h1 className="text-[#0f1723] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            ページタイトル
          </h1>

          {/* Subtitle */}
          <p className="text-slate-700 text-lg md:text-xl mb-4 font-medium">
            サブタイトル（短い説明）
          </p>
          <p className="text-slate-600 text-base md:text-lg mb-10">
            より詳細な説明文がここに入ります。
            <br className="hidden sm:block" />
            必要に応じて改行を入れます。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base border-[#0f1723] text-[#0f1723] hover:bg-[#0f1723] hover:text-white rounded-lg transition-all duration-300"
            >
              <Link href="#section">
                詳細を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base bg-[#1a5490] hover:bg-[#15406d] text-white rounded-lg transition-all duration-300"
            >
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

## ヒーローセクション（画像なし・フォールバック）

背景画像がない場合のシンプルなバージョン：

```tsx
<section className="relative bg-slate-50 pt-20 pb-16 overflow-hidden">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-4xl mx-auto text-center">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Breadcrumb items={breadcrumbItems} separator="chevron" />
      </div>

      {/* タイトル */}
      <h1 className="text-[#0f1723] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
        ページタイトル
      </h1>

      <p className="text-slate-600 text-lg md:text-xl mb-10">
        説明文がここに入ります。
      </p>

      {/* CTAボタン */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* ボタン */}
      </div>
    </div>
  </div>
</section>
```

## コンテンツセクション（白背景）

```tsx
<section className="bg-white py-24">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-6xl mx-auto">
      {/* セクションヘッダー */}
      <div className="text-center mb-16">
        <p className="text-slate-500 text-sm mb-4">Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f1723] mb-4">
          セクションタイトル
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          セクションの説明文がここに入ります。
        </p>
      </div>

      {/* グリッドコンテンツ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* カードなどを配置 */}
      </div>
    </div>
  </div>
</section>
```

## 交互背景セクション（グレー背景）

```tsx
<section className="bg-slate-50 py-24">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-6xl mx-auto">
      {/* 2カラムレイアウト */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* テキスト側 */}
        <div>
          <p className="text-[#1a5490] font-medium mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1723] mb-4">
            セクションタイトル
          </h2>
          <p className="text-slate-700 mb-6">
            説明文がここに入ります。
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 bg-[#1a5490] rounded-full flex-shrink-0" />
              <span className="text-slate-700">特徴1</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 bg-[#1a5490] rounded-full flex-shrink-0" />
              <span className="text-slate-700">特徴2</span>
            </li>
          </ul>
        </div>

        {/* 画像側 */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-8">
          {/* 画像やイラスト */}
        </div>
      </div>
    </div>
  </div>
</section>
```

## CTAセクション（ダーク背景）

```tsx
<section className="bg-[#0f1723] py-24">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-[#5ba3d9] text-sm font-medium tracking-wider uppercase mb-4">
        Contact Us
      </p>
      <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        お気軽にご相談ください
      </h2>
      <p className="text-slate-300 text-base md:text-lg mb-10 max-w-2xl mx-auto">
        DX推進に関するご質問・ご相談はこちらから。
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#1a5490] hover:bg-[#15406d] text-white px-8 py-4 rounded-lg font-semibold transition-colors">
          無料相談を申し込む
        </a>
        <a href="/services" className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-[#0f1723] px-8 py-4 rounded-lg font-semibold transition-colors">
          サービス詳細を見る
        </a>
      </div>
    </div>
  </div>
</section>
```

## CTAセクション（ライト背景）

```tsx
<section className="bg-[#e8f4fc] py-16">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f1723] mb-4">
        お気軽にご相談ください
      </h2>
      <p className="text-slate-700 mb-8">
        DX推進に関するご質問・ご相談はこちらから。
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="/contact" className="bg-[#1a5490] hover:bg-[#15406d] text-white px-8 py-4 rounded-lg font-medium transition-colors">
          お問い合わせ
        </a>
        <a href="/services" className="border border-[#0f1723] text-[#0f1723] hover:bg-[#0f1723] hover:text-white px-8 py-4 rounded-lg font-medium transition-colors">
          サービス一覧
        </a>
      </div>
    </div>
  </div>
</section>
```

## 統計・数字セクション

```tsx
<section className="bg-slate-50 py-16">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-slate-500 text-sm mb-4">Track Record</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f1723]">
          信頼の実績
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl md:text-5xl font-bold text-[#0f1723] mb-2">70+</p>
          <p className="text-slate-600">年の歴史</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-[#0f1723] mb-2">100+</p>
          <p className="text-slate-600">導入実績</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-[#0f1723] mb-2">98%</p>
          <p className="text-slate-600">顧客満足度</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-[#0f1723] mb-2">24h</p>
          <p className="text-slate-600">サポート対応</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

## FAQ セクション

```tsx
<section className="bg-slate-50 py-24">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-slate-500 text-sm mb-4">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f1723]">
          よくあるご質問
        </h2>
      </div>

      <div className="space-y-4">
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[#0f1723] mb-2">
            Q. 質問内容がここに入ります
          </h3>
          <p className="text-slate-700">
            A. 回答内容がここに入ります。
          </p>
        </div>
        {/* 繰り返し */}
      </div>
    </div>
  </div>
</section>
```
