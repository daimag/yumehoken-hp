---
name: seo-check
description: 既存ページのSEO問題を診断する。メタデータ・OGP・見出し階層・alt属性・構造化データをチェックし、改善点をレポートする。
allowed-tools: Read, Glob, Grep
---

# SEO診断 Skill

## 概要

Next.js 15（App Router / Static Export）のページに対してSEO観点の診断を行い、問題点と改善提案をレポートするSkillです。

## チェック項目

### 1. メタデータ（metadata export）

各ページの `metadata` または `generateMetadata()` を確認する。

```tsx
// OK: 適切なメタデータ
export const metadata: Metadata = {
  title: "ページタイトル | ダイマグ",  // 60字以内
  description: "説明文（120字以内）",
  openGraph: { ... },
}
```

**チェックポイント:**
- [ ] `title` が存在するか（60字以内推奨）
- [ ] `description` が存在するか（120字以内推奨）
- [ ] `title` がデフォルトの "Daimag" や空でないか
- [ ] ページごとに固有のtitleか（重複していないか）

### 2. OGP（Open Graph Protocol）

```tsx
// OK
openGraph: {
  title: "ページタイトル",
  description: "説明文",
  images: [{ url: "/images/og/page-name.jpg" }],
  locale: "ja_JP",
  type: "website",
}
```

**チェックポイント:**
- [ ] `og:title` が設定されているか
- [ ] `og:description` が設定されているか
- [ ] `og:image` が設定されているか（1200×630px推奨）
- [ ] `og:locale` が `ja_JP` になっているか

### 3. 見出し階層（h1→h2→h3）

```tsx
// OK: 正しい階層
<h1>ページタイトル</h1>
  <h2>セクション</h2>
    <h3>サブセクション</h3>

// NG: h1が複数 / h1をスキップ
<h1>タイトル1</h1>
<h1>タイトル2</h1>  // ← h1は1ページ1つ
<h3>サブ</h3>       // ← h2をスキップ
```

**チェックポイント:**
- [ ] `h1` がページに1つだけあるか
- [ ] `h1 → h2 → h3` の順序が守られているか
- [ ] セクションタイトルがボタンやdivでなくhタグになっているか

### 4. 画像 alt 属性

```tsx
// OK
<Image src="..." alt="説明テキスト" />

// NG
<Image src="..." alt="" />      // 空のalt（装飾画像を除く）
<Image src="..." />             // altなし
<Image src="..." alt="image" /> // 意味のないalt
```

**チェックポイント:**
- [ ] すべての `<Image>` に `alt` 属性があるか
- [ ] 内容を説明するaltか（"image", "photo" などはNG）
- [ ] 装飾画像は `alt=""` + `aria-hidden="true"` になっているか

### 5. 内部リンク

**チェックポイント:**
- [ ] `<Link href="">` のような空のhrefがないか
- [ ] テキストが「こちら」「詳しく」だけのリンクがないか（アンカーテキストにキーワードを含める）

### 6. canonical / robots

```tsx
// OK
export const metadata: Metadata = {
  robots: { index: true, follow: true },
  alternates: { canonical: "https://daimag-hp.vercel.app/page-name/" },
}
```

**チェックポイント:**
- [ ] 重複コンテンツがある場合 `canonical` が設定されているか
- [ ] `noindex` を意図せず設定していないか

### 7. 構造化データ（JSON-LD）

**チェックポイント:**
- [ ] トップページに `Organization` の JSON-LD があるか
- [ ] サービスページに `Service` の JSON-LD があるか
- [ ] 会社概要ページに `LocalBusiness` の JSON-LD があるか

## 診断コマンド

```bash
# metadataの設定漏れ確認
grep -rL "metadata" app/**/page.tsx

# title未設定のページ確認
grep -rL "title:" app/**/page.tsx

# description未設定のページ確認
grep -rL "description:" app/**/page.tsx

# alt属性が空の画像確認
grep -rn 'alt=""' app/ components/

# altなし画像確認
grep -rn '<Image' app/ components/ | grep -v 'alt='

# h1の複数使用確認
grep -rn '<h1' components/ app/
```

## レポートフォーマット

```markdown
## SEO診断レポート

### 対象ページ
- /（トップ）
- /services/network
- ...

### チェック結果サマリー

| 項目 | 状態 | 問題件数 |
|------|------|---------|
| メタデータ (title) | OK/NG | - |
| メタデータ (description) | OK/NG | - |
| OGP設定 | OK/NG | - |
| 見出し階層 | OK/NG | - |
| 画像alt属性 | OK/NG | - |
| 内部リンク | OK/NG | - |
| 構造化データ | OK/NG | - |

### 検出された問題

| ページ | 問題 | 優先度 | 修正提案 |
|--------|------|--------|---------|
| /services/network | descriptionなし | 高 | `description: "..."` を追加 |
| /about | og:imageなし | 中 | OGP画像を設定 |
| components/hero.tsx | alt="" | 中 | 適切なaltテキストを設定 |

### 優先修正リスト
1. 【高】...
2. 【中】...
3. 【低】...
```

## 関連Skill

- `/seo-meta` - メタデータ・構造化データの生成
- `/a11y-check` - アクセシビリティ検証（altテキストと連携）
- `/code-review` - 総合コードレビュー
