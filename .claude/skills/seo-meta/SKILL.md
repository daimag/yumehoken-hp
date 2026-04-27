---
name: seo-meta
description: ページ用のSEO最適化メタデータ・OGP・JSON-LD構造化データを生成する。新規ページ作成時や既存ページのSEO改善時に使用。
allowed-tools: Read, Glob, Grep, Edit, Write
---

# SEOメタデータ生成 Skill

## 概要

Next.js 15（App Router）のページに対して、SEO最適化されたメタデータ・OGP・JSON-LD構造化データを生成するSkillです。

## サイト基本情報

```
サイト名: ダイマグ | DAIMAG INSTRATEGY
ドメイン: https://daimag-hp.vercel.app
言語: ja
企業名: 株式会社ダイマグ
所在地: 山口県下関市
電話: 083-252-5324
```

## メタデータ生成テンプレート

### 基本テンプレート（全ページ共通）

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "[ページ固有タイトル] | ダイマグ",
  description: "[120字以内のページ説明文。キーワードを自然に含める]",
  openGraph: {
    title: "[ページ固有タイトル] | ダイマグ",
    description: "[120字以内の説明文]",
    url: "https://daimag-hp.vercel.app/[パス]/",
    siteName: "ダイマグ | DAIMAG INSTRATEGY",
    images: [
      {
        url: "https://daimag-hp.vercel.app/images/og/[ページ名].jpg",
        width: 1200,
        height: 630,
        alt: "[画像の説明]",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "[ページ固有タイトル] | ダイマグ",
    description: "[120字以内の説明文]",
    images: ["https://daimag-hp.vercel.app/images/og/[ページ名].jpg"],
  },
  alternates: {
    canonical: "https://daimag-hp.vercel.app/[パス]/",
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

## ページ別 title・description ガイドライン

### title の書き方
- **形式**: `[固有キーワード] | ダイマグ`
- **文字数**: 35〜60字（日本語）
- **NG**: 「株式会社ダイマグ」だけ、空白、重複

| ページ | title例 |
|--------|---------|
| トップ | `山口・北九州のDX・ネットワーク・セキュリティ｜ダイマグ` |
| サービス一覧 | `サービス一覧 – DX・Network・Security・Procurement｜ダイマグ` |
| ネットワーク | `法人向けネットワーク構築・回線サービス｜ダイマグ` |
| ダイマグ光 | `ダイマグ光 – 通信コスト10%削減の法人向け光コラボ｜ダイマグ` |
| 10G | `フレッツ光クロス10G対応プラン – 法人向け超高速化｜ダイマグ` |
| UTM | `UTM-BUFFALO – 法人向けセキュリティ月額サービス｜ダイマグ` |
| 会社概要 | `会社概要 – 1952年創業・山口県下関市の商社｜ダイマグ` |

### description の書き方
- **文字数**: 80〜120字（日本語）
- **含めるもの**: 主要キーワード・場所・ベネフィット
- **NG**: 「詳しくはこちら」「〜です。〜します。」だけ

## JSON-LD 構造化データテンプレート

### Organization（トップページ・会社概要）

```tsx
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社ダイマグ",
  alternateName: "DAIMAG INSTRATEGY",
  url: "https://daimag-hp.vercel.app",
  logo: "https://daimag-hp.vercel.app/images/logo.png",
  foundingDate: "1952",
  description: "1952年創業。山口県下関市を拠点にDX・ネットワーク・セキュリティ・調達サービスを提供。",
  address: {
    "@type": "PostalAddress",
    addressLocality: "下関市",
    addressRegion: "山口県",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "083-252-5324",
    contactType: "customer service",
    availableLanguage: "Japanese",
    hoursAvailable: "Mo-Fr 09:00-18:00",
  },
  sameAs: [],
}

// JSX内での使用
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
/>
```

### Service（サービスページ）

```tsx
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "[サービス名]",
  description: "[サービス説明]",
  provider: {
    "@type": "Organization",
    name: "株式会社ダイマグ",
    url: "https://daimag-hp.vercel.app",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 33.953,
      longitude: 130.929,
    },
    geoRadius: "200000",
  },
  serviceType: "[DX支援/ネットワーク構築/セキュリティ対策/IT調達]",
}
```

### LocalBusiness（会社概要・耐火物事業）

```tsx
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "株式会社ダイマグ",
  image: "https://daimag-hp.vercel.app/images/og/default.jpg",
  telephone: "083-252-5324",
  email: "info@daimag.co.jp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "山の田東町11番8号",
    addressLocality: "下関市",
    addressRegion: "山口県",
    postalCode: "751-0834",
    addressCountry: "JP",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  url: "https://daimag-hp.vercel.app",
}
```

## 実装手順

1. 対象ページの現在のmetadata確認
2. ページ内容（h1・説明文）を読み取りキーワードを抽出
3. title・descriptionを生成（文字数確認）
4. OGPを生成
5. 必要に応じてJSON-LDを追加
6. `metadata` export に適用

## OG画像について

OG画像がない場合はデフォルト画像を使用:
```
/images/og/default.jpg  （1200×630px）
```

ページ固有OG画像の命名規則:
```
/images/og/top.jpg
/images/og/services-network.jpg
/images/og/services-security.jpg
/images/og/about.jpg
```

## 関連Skill

- `/seo-check` - SEO問題の診断
- `/a11y-check` - altテキスト等のアクセシビリティ確認
- `/design-review` - デザインガイドライン準拠確認
