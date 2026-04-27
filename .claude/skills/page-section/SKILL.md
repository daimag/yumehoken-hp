---
name: page-section
description: 統一されたセクション構造（ヒーロー、コンテンツ、CTA等）を生成する。ページ作成時やセクション追加時に自動で使用。
---

# ページセクション生成 Skill

## 概要

daimagプロジェクトの統一デザインガイドラインに準拠したセクション構造を生成するSkillです。

## ヒーローセクションのデザイン方針（2025年1月改定）

**全ページで統一されたヒーローセクションデザインを採用します。**

### 基本構造：背景画像＋オーバーレイ方式

トップページを基準として、以下の構造を全ページで統一：

```tsx
<section className="relative pt-20 pb-16 min-h-[500px] flex items-center overflow-hidden">
  {/* 背景画像 */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/[ページ名]-hero.webp"
      alt="[適切な説明]"
      fill
      className="object-cover"
      priority
    />
    {/* オーバーレイ（テキストの可読性向上） */}
    <div className="absolute inset-0 bg-white/70" />
  </div>

  {/* コンテンツ（中央配置） */}
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      {/* パンくずリスト */}
      {/* バッジ（オプション） */}
      {/* タイトル */}
      {/* サブタイトル */}
      {/* CTAボタン */}
    </div>
  </div>
</section>
```

### ヒーロー画像のガイドライン

| 項目 | 推奨値 |
|------|--------|
| 形式 | WebP |
| サイズ | 1920×1080px 以上 |
| 配置場所 | `/public/images/[ページ名]-hero.webp` |
| オーバーレイ | `bg-white/60` ～ `bg-white/80`（画像の明るさに応じて調整） |

### ヒーロー画像がない場合

背景画像がない場合は、シンプルな背景色で対応：

```tsx
<section className="relative bg-slate-50 pt-20 pb-16 overflow-hidden">
  {/* コンテンツ（中央配置） */}
</section>
```

## セクションタイプ一覧

| タイプ | 背景色 | パディング | 用途 |
|--------|--------|-----------|------|
| Hero | 背景画像 + `bg-white/70` | `pt-20 pb-16 min-h-[500px]` | ページ冒頭 |
| Hero (画像なし) | `bg-slate-50` | `pt-20 pb-16` | ページ冒頭（画像なし） |
| Content | `bg-white` | `py-24` | 通常コンテンツ |
| Alternate | `bg-slate-50` | `py-24` | 背景色を交互に |
| CTA Dark | `bg-[#0f1723]` | `py-24` | 行動喚起（ダーク） |
| CTA Light | `bg-[#e8f4fc]` | `py-16` | 行動喚起（ライト） |

## 共通構造

すべてのセクションは以下の構造に従います：

```tsx
<section className="[背景色] [パディング]">
  <div className="container px-4 md:px-6">
    <div className="max-w-6xl mx-auto">
      {/* コンテンツ */}
    </div>
  </div>
</section>
```

## セクション作成手順

### 1. セクションタイプを選択

ユーザーの要件に基づいて適切なタイプを選択。

### 2. テンプレートを適用

詳細なテンプレートは [templates.md](templates.md) を参照。

### 3. コンテンツを配置

- 見出しは適切なレベル（h1-h4）を使用
- テキストは `text-[#0f1723]`（見出し）、`text-slate-700`（本文）
- ラベルは `text-slate-500`（英語ラベル）、`text-[#1a5490]`（強調）
- ボタンはデザインガイドラインに準拠（ブルーCTA / ネイビー塗り / ネイビーアウトライン）

### 4. レスポンシブ対応

- グリッドは `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- テキストサイズは `text-base md:text-lg` など

## カラー規定（再掲）

| カテゴリ | 使用カラー |
|---------|-----------|
| CTA（最重要） | `bg-[#1a5490] hover:bg-[#15406d]` |
| 通常ボタン | `bg-[#0f1723] hover:bg-[#1a2836]` |
| アウトライン | `border-[#0f1723] text-[#0f1723]` |
| 強調ラベル | `text-[#1a5490]` |
| ハイライト背景 | `bg-[#e8f4fc]` |

## ファイル構成

- `SKILL.md` - このファイル
- [templates.md](templates.md) - セクションテンプレート集

## 関連Skill

- `/design-component` - コンポーネント生成
- `/responsive-layout` - レスポンシブ設計
