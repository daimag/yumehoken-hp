---
name: design-component
description: プロジェクトのデザインシステムに準拠したReactコンポーネントを生成する。新規コンポーネント作成時に自動で使用。
---

# コンポーネント生成 Skill

## 概要

daimagプロジェクトのデザインシステムに準拠したReactコンポーネントを生成するSkillです。

## コンポーネント作成手順

### 1. 要件の確認

ユーザーに以下を確認：
- コンポーネントの目的と機能
- 配置場所（ページ/セクション）
- インタラクティブ要素の有無

### 2. ファイル作成

**命名規則:**
- ファイル名: `kebab-case.tsx`
- コンポーネント名: `PascalCase`
- 配置: `/components/` または `/components/ui/`

### 3. 基本構造

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

### 4. スタイル適用

デザインガイドラインに従う（CLAUDE.md「デザイン方針厳守規定」参照）：

- **ブランドカラー**: `#0f1723`（ネイビー）, `orange-500`（アクセント）
- **背景色**: `bg-white`, `bg-slate-50`, `bg-[#0f1723]`（ダーク）
- **テキスト色**: `text-[#0f1723]`（見出し）, `text-slate-700`（本文）
- **ボタン**: オレンジCTA, ネイビー塗り, ネイビーアウトライン

**重要**: `blue-*` 系カラーの使用は禁止

詳細は [templates.md](templates.md) を参照。

### 5. ビルド確認

コンポーネント作成後、`/build-check` を実行。

## ファイル構成

- `SKILL.md` - このファイル
- [templates.md](templates.md) - コードテンプレート集
- [examples.md](examples.md) - 実装例

## 関連Skill

- `/build-check` - ビルド確認
- `/design-review` - デザイン準拠チェック
- `/a11y-check` - アクセシビリティ検証
