# CLAUDE.md - ゆめほけん（ドリームインシュアランス株式会社）コーポレートサイト

このプロジェクトは **ドリームインシュアランス株式会社（YUME★HOKEN / Dream Insurance Inc.）** のコーポレートサイト刷新案件です。
北九州市小倉南区の保険代理店で、**「安心と夢をつないで笑顔をまもる」** を経営理念とし、保険販売だけでなく**ゆめサポート**（各分野のプロフェッショナル連携）と**終活ステーション**（人生後半戦のワンストップ相談窓口）を独自展開しています。

> ⚠️ **このプロジェクトは「株式会社大上設備（建設業）」とは別会社です。** 旧テンプレートに残る建設業向け配色（深い紺＋アンバー）は一切使用せず、**ゆめほけん独自のナチュラル＆ウォームなデザイン**で構築してください。

## 重要な作業ルール

1. **日本語で対応**: ユーザーとのやり取り・コメント・コミットメッセージはすべて日本語。
2. **確認の徹底**: 仕様や実装方針が曖昧な場合、推測で進めず必ず壁打ちしてから着手。
3. **ビルド確認**: ソース修正後は `pnpm build` を実行してビルド成功を確認してから報告。
4. **既存サイトとの整合性**: yumehoken.jp の刷新案件のため、既存資産（理念・ゆめサポート・CSR・ニュースレター）は必ず継承する。
5. **建設業デザインの混入禁止**: 旧プロジェクト（大上設備）の配色（`#1a365d`, `#f59e0b` 等）・骨太フォルム・「建設業らしさ」を持ち込まない。

## Project Overview

- **クライアント**: ドリームインシュアランス株式会社（YUME★HOKEN）
- **業種**: 損害保険・生命保険代理店 + ライフサポート（終活・リスクマネジメント）
- **所在地**: 〒802-0832 福岡県北九州市小倉南区下石田1-17-17（トライアル石田前）
- **代表者**: 森 幹人（Mikito Mori）
- **創立**: 2013年2月（※詳細日付は要確認）
- **TEL**: 093-965-0660 / **FAX**: 093-965-0663
- **URL**: https://www.yumehoken.jp/（**既存サイトの完全刷新案件**）
- **LINE**: @942hvyou
- **認証**: ISO 9001:2015（2020.9 取得）
- **従業員数**: 6名

### 経営理念・ビジョン
- **理念**: 「安心と夢をつないで笑顔をまもる」
- **ビジョン**: 「目指せ！1万人の夢応援」
- **2大コンセプト**:
  - 「**ゆめつなぎ**」Dream — 様々なプロフェッショナルをお客様とつなぐハブ
  - 「**あんしんつなぎ**」Fullness — 保険総合コンサルティング

## Development Commands

```bash
pnpm install   # 依存関係のインストール
pnpm dev       # 開発サーバー起動
pnpm build     # 本番ビルド
pnpm start     # 本番サーバー起動
pnpm lint      # ESLint実行
```

## Architecture

- **Framework**: Next.js 15（App Router）
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **UI Components**: shadcn/ui（Radix UI primitives）
- **Icons**: Lucide React
- **Package Manager**: pnpm

### サイト構成（4ハブポータル）

訪問者の属性別に **4つの入口** を提示するポータル設計です。

```
/                          ポータルTOP（4つの入口提示）
├── /about                 会社概要（理念／沿革／メンバー／ログハウス／ISO）
│
├── /personal              【🏠 一般のお客様へ】= あんしんつなぎ
│   └── 生命/医療/自動車/火災/ペット保険/取扱保険会社
│
├── /shukatsu              【🌿 終活ステーション】← 独立サブブランド・木庭理恵担当
│   └── 8カテゴリ相談 / お客様の声 / エンディングノート
│
├── /business              【🛡️ 法人のお客様へ】= 経営を守るリスクヘッジ
│   └── リスクコンサル / ビジネスコンサル / 安全運転講習 / 事例
│
├── /recruit               【💼 採用情報】森社長担当
│   └── 代表メッセージ / 募集職種 / 先輩社員 / ログハウスオフィス
│
├── /news                  お知らせ（運営連絡）
├── /newsletter            ゆめほニュースレター WEB版（Blog投稿型）
├── /csr                   社会貢献（5パートナー: 西川史晃／カノアラウレアーズ／u-ta／Make-A-Wish／好きっちゃ北九州）
├── /support               事故・トラブル時の対応
├── /apply                 ネット申込
├── /policies              各種方針（FD宣言／募集方針／個人情報／情報セキュリティ）
└── /contact               お問い合わせ（ハブ別フォーム＋LINE QR）
```

詳細は `docs/proposal/concept.md` および `memory/site_structure.md` を参照。

### ディレクトリ構成

- `/app`: Next.js App Router 配下の各ページ
- `/components`: 共通コンポーネント（`/ui` は shadcn/ui プリミティブ）
- `/lib`: ユーティリティ
- `/public/images`: 画像アセット（ログハウス・メンバー・OG画像など）
- `/docs`: 紙パンフのスキャン画像・既存サイトから取得した素材・提案資料
  - `/docs/existing-site/`: 既存ロゴ・既存トップ画像
  - `/docs/proposal/`: 新サイトの提案ドキュメント

## Design System（保険×ナチュラル×木のぬくもり・2026年4月版）

### コンセプト
**「ログハウスから届く、夢のおまもり」**
**ナチュラル × 信頼 × 温かみ** を視覚化した、保険代理店としての誠実さと、ログハウス事務所が体現する家庭的な安心感を融合したデザイン。

- ✅ ナチュラルグリーン（葉）＋ウッドブラウン（幹）の有機的な配色
- ✅ 木のぬくもりを感じる柔らかいフォルム（角丸は中庸：`rounded-md` ～ `rounded-xl`）
- ✅ 余白を活かした明朝体見出し（信頼感）
- ✅ ログハウス・自然・笑顔の写真を主役に
- ✅ メンバー一人ひとりの顔が見える親しみやすさ
- ❌ 旧大上設備の建設業配色（深い紺・アンバー）
- ❌ 派手すぎるグラデーション・ITサービス的なシャープさ
- ❌ 過度な装飾・流行りのミニマル過剰
- ❌ 角ばりすぎ／硬すぎる印象（保険代理店としての近寄りがたさを生む）

### カラーパレット

ロゴ（緑の3葉＋木のY型トランク＋茶字「ゆめほけん YUME★HOKEN Dream Insurance Inc.」）から抽出した、ナチュラルで温かみのある配色。

#### ブランドカラー
| 用途 | カラー | クラス例 |
|------|--------|----------|
| プライマリ（葉のフレッシュグリーン） | `#95C11F` | `bg-[#95C11F]` |
| プライマリホバー | `#7DA519` | `hover:bg-[#7DA519]` |
| プライマリダーク（深緑） | `#5C7A14` | `text-[#5C7A14]` |
| セカンダリ（木のウッドブラウン） | `#8B5A2B` | `text-[#8B5A2B]` |
| セカンダリホバー | `#6F4621` | `hover:text-[#6F4621]` |
| アクセント（キャラメル茶） | `#C8956B` | `text-[#C8956B]` |
| 法人ハブ用（ログハウスのグレーブルー） | `#6B7B8C` | `bg-[#6B7B8C]` |

#### 背景色
| 用途 | カラー | クラス例 |
|------|--------|----------|
| ベース | 白 | `bg-white` |
| ベース（クリーム・木の温かみ） | `#FAF7F0` | `bg-[#FAF7F0]` |
| ベース（薄緑・葉） | `#F4F8E8` | `bg-[#F4F8E8]` |
| ストーン背景 | `stone-50` / `stone-100` | `bg-stone-50` |
| ダーク（フッター等） | `#3D3D3D`（チャコール） | `bg-[#3D3D3D]` |

#### テキスト色
| 用途 | カラー |
|------|--------|
| 見出し | `text-[#3D3D3D]`（濃チャコール）または `text-[#8B5A2B]`（ウッドブラウン） |
| 本文 | `text-stone-700` または `text-[#3D3D3D]` |
| 補足 | `text-stone-500` / `text-stone-600` |
| ダーク背景上 | `text-white` / `text-stone-200` |
| 強調ラベル | `text-[#5C7A14]`（深緑）または `text-[#C8956B]`（キャラメル） |
| リンク | `text-[#5C7A14]` hover で `text-[#95C11F]` |

#### ボーダー・装飾
- ボーダー基本: `border-stone-200`
- 区切り線: `border-t border-stone-200`（線は細めで優しく）
- アクセント装飾: `border-l-4 border-[#95C11F]`（葉色のアクセント）
- 葉モチーフ装飾: ロゴの葉を SVG で抽出し、見出し横に控えめに配置

### ボタンスタイル

```tsx
// プライマリCTA（フレッシュグリーン）
className="bg-[#95C11F] hover:bg-[#7DA519] text-white px-8 py-4 rounded-md font-bold transition-colors shadow-sm hover:shadow-md"

// セカンダリCTA（ウッドブラウン・控えめ）
className="bg-[#8B5A2B] hover:bg-[#6F4621] text-white px-8 py-4 rounded-md font-bold transition-colors"

// アウトライン（葉色の線）
className="border-2 border-[#95C11F] text-[#5C7A14] hover:bg-[#95C11F] hover:text-white px-8 py-4 rounded-md font-bold transition-colors"

// 法人ハブ用（ややフォーマル）
className="bg-[#6B7B8C] hover:bg-[#56657A] text-white px-8 py-4 rounded-md font-bold transition-colors"

// ダーク背景上（ログハウスの暗い背景に）
className="bg-white text-[#5C7A14] hover:bg-stone-100 px-8 py-4 rounded-md font-bold transition-colors"

// LINE CTA（公式LINE @942hvyou 用）
className="bg-[#06C755] hover:bg-[#05A847] text-white px-8 py-4 rounded-md font-bold transition-colors"
```

**ポイント**:
- 角丸は `rounded-md` または `rounded-lg`（保険らしい安心感、ITサービスほど角丸ではない）
- ボタンは `py-3` ～ `py-4`（適度な存在感、骨太すぎない）
- ホバー時の影は控えめに（`shadow-sm` → `shadow-md`）

### カード・コンテナ

```tsx
// 基本カード（ナチュラル・優しい）
className="bg-white border border-stone-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"

// アクセントカード（葉色のアクセント線）
className="bg-white border border-stone-200 border-l-4 border-l-[#95C11F] rounded-lg"

// クリーム背景カード（木のぬくもり）
className="bg-[#FAF7F0] border border-stone-200 rounded-lg p-8"

// 終活ステーション用（より柔らかく）
className="bg-white border border-stone-100 rounded-2xl shadow-sm"
```

### タイポグラフィ

- **見出し（日本語）**: Noto Serif JP（明朝体・信頼感／木のぬくもり）
- **本文（日本語）**: Noto Sans JP（ゴシック・可読性）
- **欧文**: Inter または Outfit（ロゴと相性の良いモダンサンセリフ）

| 要素 | サイズ | ウェイト | フォント |
|------|--------|----------|----------|
| h1（ページタイトル） | `text-4xl md:text-5xl lg:text-6xl` | `font-bold` | Noto Serif JP |
| h2（セクション） | `text-3xl md:text-4xl` | `font-bold` | Noto Serif JP |
| h3（カード見出し） | `text-xl md:text-2xl` | `font-semibold` | Noto Serif JP |
| body | `text-base md:text-lg` | `font-normal` | Noto Sans JP |
| ラベル | `text-sm tracking-widest` | `font-semibold` | Inter |
| 数値強調 | `text-5xl md:text-6xl` | `font-bold` | Outfit |

### レイアウト

#### ヒーロー
- **理想**: ログハウス外観の写真（`docs/existing-site/top1.jpg` ベース）+ 葉色オーバーレイ + 白文字キャッチ「安心と夢で笑顔をつなぐ」
- 高さ: `min-h-[600px] md:min-h-[700px]`
- キャッチコピーは Noto Serif JP の縦組み or 大きめ横組み

#### 4ハブ入口セクション（TOPページの中核）
- ヒーロー直下に **4枚カード**を配置（一般／終活／法人／採用）
- 各カードに代表的アイコン or 写真 + キャッチ + リンク
- グリッド: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`

#### セクション
- パディング: `py-16 md:py-24`
- コンテナ: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- 背景交互: 白 → `bg-[#FAF7F0]`（クリーム）→ `bg-[#F4F8E8]`（薄緑）

#### セクションタイトル装飾（ナチュラル・葉モチーフ）
```tsx
<div>
  <p className="text-[#5C7A14] text-sm font-semibold tracking-widest mb-2">DREAM INSURANCE</p>
  <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-3">わたしたちの想い</h2>
  <div className="w-12 h-0.5 bg-[#95C11F]" />
</div>
```

### ハブ別カラーアクセント
4ハブはそれぞれ微妙にアクセントカラーを変えて差別化：
- 一般: メインの葉グリーン `#95C11F`
- 終活: 柔らかい桃色寄りのアクセント（または薄黄色 `#F4D58D`）+ 花や自然のモチーフ
- 法人: グレーブルー `#6B7B8C`（ややフォーマル）
- 採用: ウッドブラウン `#8B5A2B`（オフィスの木の温かみ）

### 禁止事項
1. ❌ **旧大上設備の建設業配色**（`#1a365d`, `#0f2441`, `#f59e0b`, `#d97706`, `#92400e`）→ 完全削除
2. ❌ ダイマグ系の配色（`#0f1723`, `#1a5490`, `#5ba3d9`）→ 完全削除
3. ❌ NTT系カラー（`nttBlue`, `nttOrange`, `flets-*`）→ 完全削除
4. ❌ 「建設業らしい骨太・力強さ」の表現（保険代理店には不適）
5. ❌ 過度なグラデーション（3色以上、`bg-clip-text`）
6. ❌ 強すぎるアニメーション（`animate-pulse`, `blur-3xl`）
7. ❌ 角ばりすぎ（`rounded-none` 多用）／丸すぎ（`rounded-full` 多用）

### アクセシビリティ
- WCAG AA 準拠（コントラスト比 4.5:1 以上）
- フォーカスリング: `focus:ring-2 focus:ring-[#95C11F]`
- タッチターゲット: 最小 44×44px
- 画像には適切な `alt` 属性
- メンバー紹介・代表メッセージは画像化せず**テキストで実装**（既存サイトの大きな課題）

### レスポンシブ
- **モバイルファースト**: 最小幅 `375px` 想定で設計、`md:` (768px) `lg:` (1024px) `xl:` (1280px) で拡張
- 高齢層（終活ターゲット）も多いため、本文 `text-base` 以上、行間 `leading-relaxed` 以上を確保

## Skills

このプロジェクトでは以下の Skills が利用可能です（`.claude/skills/`）。
**注意**: スキル定義は旧プロジェクト（大上設備）由来のため、参照する際は **本ファイルのデザインガイドラインを必ず優先**してください。

| Skill | 用途 |
|-------|------|
| `/build-check` | ビルド確認 |
| `/a11y-check` | アクセシビリティ検証 |
| `/responsive-layout` | レスポンシブ設計支援 |
| `/commit` | コミットメッセージ生成 |
| `/code-review` | コードレビュー |
| `/security-check` | セキュリティ検証 |
| `/seo-check` | SEO診断 |
| `/seo-meta` | SEOメタデータ生成 |

## Coding Standards

### Component Design
1. **Reusability**: 4ハブで共通コンポーネントを最大限再利用
2. **TypeScript**: Props は interface で明示
3. **Composition**: 小さな部品を組み合わせる（`PageHero`, `HubCard`, `MemberCard`, `ServiceCard` など）
4. **Naming**: コンポーネント=PascalCase / ファイル=kebab-case

### Style Guidelines
1. **Tailwind優先**: インラインstyleは使用禁止
2. **デザイントークン**: 上記カラーパレットを必ず使用、ハードコードした旧カラーは混入禁止
3. **モバイルファースト**: 最小幅から設計、`md:` `lg:` で拡張
4. **アニメーション**: 控えめで意味のあるもののみ（フェードイン程度）

### Performance
- 画像: `next/image` を使用、ログハウス写真は適切に最適化
- 動的インポート: 大型コンポーネントには `dynamic()` 検討

### SEO / 移行
- 既存サイトからの **301リダイレクト** を `next.config.mjs` で実装（旧URL → 新URL対応表は `memory/existing_site.md` 参照）
- 各ページにメタタグ（title, description, OG image）を必ず設定
- 構造化データ（LocalBusiness, FinancialService）を会社概要ページに実装
- GSC（Google Search Console）はユーザー側で設定する

## Hooks（自動実行）

| Hook | タイミング | 処理 |
|------|-----------|------|
| `auto-review.sh` | Edit/Write後 | ESLint + デザインチェック |
| `protect-files.sh` | Edit/Write前 | .env等の保護 |
| `final-check.sh` | セッション終了時 | ビルド確認 |

## docs/ 配下の資料

`docs/` には紙パンフのスキャン画像、既存サイトから取得した素材、提案ドキュメントが格納されています。
**`docs/` は絶対に削除しないこと**（ユーザーから明示的に指示されている）。

詳細は `memory/docs_inventory.md` 参照。

## 進行中の作業

- ✅ プロジェクトクリーンアップ（旧大上設備資料の削除）
- ✅ 既存 yumehoken.jp の分析
- ✅ ブランド資産（ロゴ・カラー）の確定
- ✅ サイト構成案（4ハブポータル）の合意
- ✅ メモリ・CLAUDE.md・README.md の整備
- 🔄 TOPページプロトタイプの実装（次フェーズ）
- ⏳ 各ハブページの段階的実装

詳細は `memory/decisions.md` および `docs/proposal/concept.md` 参照。
