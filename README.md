# ゆめほけん コーポレートサイト

**ドリームインシュアランス株式会社（YUME★HOKEN / Dream Insurance Inc.）** の公式コーポレートサイト刷新プロジェクト。

## 概要

- **会社**: ドリームインシュアランス株式会社
- **業種**: 損害保険・生命保険代理店 + ライフサポート（終活・リスクマネジメント）
- **所在地**: 福岡県北九州市小倉南区下石田1-17-17
- **代表**: 森 幹人
- **理念**: 「安心と夢をつないで笑顔をまもる」
- **ビジョン**: 「目指せ！1万人の夢応援」
- **既存サイト**: https://www.yumehoken.jp/（本プロジェクトで全面刷新）

## サイトコンセプト

訪問者の属性別に **4つの入口** を提示するポータル設計：

1. 🏠 **一般のお客様向け**（あんしんつなぎ）
2. 🌿 **終活ステーション**（独自サブブランド）
3. 🛡️ **法人のお客様向け**（経営を守るリスクヘッジ）
4. 💼 **採用情報**

詳細は [`docs/proposal/concept.md`](docs/proposal/concept.md) を参照。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UIコンポーネント**: shadcn/ui (Radix UI)
- **アイコン**: Lucide React
- **パッケージマネージャ**: pnpm

## 開発環境のセットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# 本番サーバーの起動
pnpm start

# Lint実行
pnpm lint
```

## プロジェクト構成

```
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx           # ポータルTOP（4ハブ入口）
│   ├── about/             # 会社概要
│   ├── personal/          # 一般のお客様向け
│   ├── shukatsu/          # 終活ステーション
│   ├── business/          # 法人のお客様向け
│   ├── recruit/           # 採用情報
│   ├── newsletter/        # ゆめほニュースレター
│   ├── csr/               # 社会貢献
│   ├── contact/           # お問い合わせ
│   └── ...
├── components/            # 共通コンポーネント
│   ├── ui/               # shadcn/ui プリミティブ
│   ├── header.tsx
│   └── footer.tsx
├── lib/                  # ユーティリティ
├── public/images/        # 画像アセット
└── docs/                 # 紙パンフ・既存サイト素材・提案資料
    ├── existing-site/    # 既存ロゴ・トップ画像
    └── proposal/         # 新サイトの提案ドキュメント
```

## ブランド・デザイン

詳細は [`CLAUDE.md`](CLAUDE.md) のデザインシステムセクションを参照。

- **メインカラー**: フレッシュリーフ `#95C11F`（ロゴの葉）
- **サブカラー**: ウッドブラウン `#8B5A2B`（ロゴの幹）
- **タイポグラフィ**: Noto Serif JP（見出し）/ Noto Sans JP（本文）

## デプロイ

Next.js のため Vercel デプロイ最適化済み。

```bash
pnpm build
```

## 関連ドキュメント

- [`CLAUDE.md`](CLAUDE.md) — Claude Code 用の開発ガイドライン・デザインシステム
- [`docs/proposal/concept.md`](docs/proposal/concept.md) — サイトコンセプト
- `memory/` — プロジェクト進捗・意思決定ログ（Claude のローカルメモリ）

## ライセンス

© 2026 ドリームインシュアランス株式会社. All rights reserved.
