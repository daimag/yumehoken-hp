---
name: design-review
description: コンポーネントがCLAUDE.mdのデザインガイドライン（2025年1月改定・トップページ準拠）に準拠しているかチェックする。
allowed-tools: Read, Glob, Grep
---

# デザインガイドライン準拠チェック Skill

## 概要

CLAUDE.md の「デザイン方針厳守規定」への準拠を検証するSkillです。

## 禁止カラーパターン検出

以下のパターンを検出したらNG:

| 検出パターン | 修正先 | 理由 |
|-------------|--------|------|
| `bg-blue-600` | `bg-[#0f1723]` または `bg-orange-500` | 旧ブランドカラー |
| `bg-blue-700` | `bg-[#1a2836]` | 旧ブランドカラー |
| `text-blue-600` | `text-orange-500` または `text-[#0f1723]` | 旧アクセント |
| `border-blue-*` | `border-[#0f1723]` | 旧ボーダー色 |
| `text-gray-900` | `text-[#0f1723]` | 旧見出し色 |
| `border-gray-200` | `border-slate-200` | 旧ボーダー色 |
| `hover:bg-blue-50` | `hover:bg-slate-50` | 旧ホバー背景 |
| `bg-gradient-*`（3色以上） | 単色背景 | グラデーション禁止 |
| `bg-clip-text` | 削除 | テキストグラデーション禁止 |

## 許可カラーチェック

### 背景色

| 用途 | 許可されたクラス |
|------|-----------------|
| プライマリ背景 | `bg-white` |
| セカンダリ背景 | `bg-slate-50`, `bg-gray-50` |
| ダーク背景 | `bg-[#0f1723]` |
| アクセント背景 | `bg-orange-50` |

### テキスト色

| 用途 | 許可されたクラス |
|------|-----------------|
| 見出し | `text-[#0f1723]` |
| 本文 | `text-slate-700`, `text-slate-600` |
| 補足 | `text-slate-500` |
| 強調 | `text-orange-500`, `text-orange-600` |
| ダーク背景上 | `text-white`, `text-slate-300` |

### ボタンスタイル

```tsx
// OK: プライマリCTA（オレンジ）
"bg-orange-500 hover:bg-orange-600 text-white"

// OK: セカンダリ（ネイビー塗り）
"bg-[#0f1723] hover:bg-[#1a2836] text-white"

// OK: アウトライン（ネイビー枠）
"border border-[#0f1723] text-[#0f1723] hover:bg-[#0f1723] hover:text-white"

// NG: 旧デザイン（blue系）
"bg-blue-600 hover:bg-blue-700 text-white" // ← 要修正
"border-blue-600 text-blue-600" // ← 要修正
```

### カードスタイル

```tsx
// OK: 新デザイン
"bg-white border border-slate-200 shadow-sm"
"hover:shadow-md hover:-translate-y-1 transition-all"

// NG: 旧デザイン
"bg-white border border-gray-200 shadow-sm" // ← gray→slateに変更
```

### アイコン背景

```tsx
// OK: 新デザイン
"bg-[#0f1723]"  // ブランドネイビー
"bg-orange-500" // アクセントオレンジ

// NG: 旧デザイン
"bg-blue-600"   // ← 要修正
```

## チェックリスト

### 禁止事項

- [ ] `bg-blue-*` を使用していないか
- [ ] `text-blue-*` を使用していないか
- [ ] `border-blue-*` を使用していないか
- [ ] `text-gray-900` を使用していないか
- [ ] `border-gray-200` を使用していないか
- [ ] `bg-gradient-*`（3色以上）を使用していないか
- [ ] `bg-clip-text` を使用していないか

### セクション構造

- [ ] コンテナ: `container px-4 md:px-6`
- [ ] 最大幅: `max-w-6xl mx-auto`
- [ ] セクションパディング: `py-24`（通常）または `pt-8 pb-16`（ヒーロー）

## 実行方法

### 1. 禁止パターンを検索

```bash
# blue系カラー使用箇所
grep -rE "bg-blue-[0-9]|text-blue-[0-9]|border-blue-" components/

# 旧グレー系
grep -r "text-gray-900\|border-gray-200" components/

# グラデーション
grep -r "bg-gradient-\|bg-clip-text" components/
```

### 2. レポート出力

```markdown
## デザインレビュー結果

### 検出された問題

| ファイル | 行 | 検出パターン | 推奨修正 |
|----------|-----|-------------|----------|
| xxx.tsx | 42 | `bg-blue-600` | `bg-[#0f1723]` |
| xxx.tsx | 56 | `text-gray-900` | `text-[#0f1723]` |

### 準拠状況

- 禁止カラー: OK / NG
- ボタンスタイル: OK / NG
- カードスタイル: OK / NG
- グラデーション不使用: OK / NG
```

## 自動修正パターン

### blue → ブランドカラー変換

```tsx
// Before
className="bg-blue-600 hover:bg-blue-700 text-white"

// After（CTAの場合）
className="bg-orange-500 hover:bg-orange-600 text-white"

// After（通常ボタンの場合）
className="bg-[#0f1723] hover:bg-[#1a2836] text-white"
```

### gray → slate変換

```tsx
// Before
className="text-gray-900 border-gray-200"

// After
className="text-[#0f1723] border-slate-200"
```

### アイコン背景変換

```tsx
// Before
<div className="bg-blue-600 rounded-xl">
  <Icon className="text-white" />
</div>

// After
<div className="bg-[#0f1723] rounded-xl">
  <Icon className="text-white" />
</div>
```

## 関連リソース

- CLAUDE.md: デザイン方針厳守規定セクション
- `/design-component` Skill: 正しいテンプレート
- トップページコンポーネント: リファレンス実装
