---
name: security-check
description: セキュリティ観点でのコードレビュー。XSS、機密情報漏洩、安全でないパターンをチェック。
allowed-tools: Read, Grep, Glob
---

# セキュリティチェック Skill

## 概要

セキュリティ観点からコードをレビューするSkillです。
OWASP Top 10を参考に、Webアプリケーションの一般的な脆弱性をチェックします。

## チェック項目

### 1. XSS（クロスサイトスクリプティング）

**危険なパターン:**
```tsx
// 危険: dangerouslySetInnerHTML
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

**検索コマンド:**
```bash
grep -rn "dangerouslySetInnerHTML" components/ app/
```

**対策:**
- ユーザー入力を直接HTMLとして挿入しない
- 必要な場合は DOMPurify などでサニタイズ

### 2. 機密情報の露出

**危険なパターン:**
```tsx
// 危険: APIキーのハードコード
const API_KEY = "sk-xxxxx"

// 危険: 環境変数をクライアントに露出
console.log(process.env.SECRET_KEY)
```

**検索コマンド:**
```bash
# APIキーらしき文字列
grep -rn "API_KEY\|SECRET\|PASSWORD\|TOKEN" --include="*.ts" --include="*.tsx" .

# クライアントコンポーネントでの環境変数使用
grep -rn "process.env" components/
```

**対策:**
- 機密情報は環境変数で管理
- クライアントには `NEXT_PUBLIC_` プレフィックスの変数のみ

### 3. console.log の残存

**問題:**
- デバッグ情報の漏洩
- パフォーマンス影響

**検索コマンド:**
```bash
grep -rn "console\.\(log\|debug\|info\)" components/ app/
```

**対策:**
- 本番コードからは削除
- 必要な場合はロガーライブラリを使用

### 4. 安全でないリダイレクト

**危険なパターン:**
```tsx
// 危険: ユーザー入力を直接リダイレクト
window.location.href = userInput
```

**検索コマンド:**
```bash
grep -rn "window.location\|location.href" components/ app/
```

### 5. eval の使用

**危険なパターン:**
```tsx
// 危険: 動的コード実行
eval(userInput)
new Function(userInput)
```

**検索コマンド:**
```bash
grep -rn "\beval\b\|new Function" components/ app/
```

## レポートフォーマット

```markdown
## セキュリティチェック結果

### 検出された問題

| 重要度 | 問題 | ファイル | 行 |
|--------|------|----------|-----|
| HIGH | dangerouslySetInnerHTML | xxx.tsx | 42 |
| MEDIUM | console.log | yyy.tsx | 15 |
| LOW | 未使用の環境変数参照 | zzz.tsx | 8 |

### 推奨アクション

1. [HIGH] xxx.tsx:42 - DOMPurifyでサニタイズを追加
2. [MEDIUM] yyy.tsx:15 - console.logを削除
```

## 自動チェックスクリプト

```bash
#!/bin/bash
echo "=== Security Check ==="

echo ""
echo "[1] dangerouslySetInnerHTML"
grep -rn "dangerouslySetInnerHTML" components/ app/ || echo "  OK: Not found"

echo ""
echo "[2] Hardcoded secrets"
grep -rn "API_KEY\|SECRET\|PASSWORD" --include="*.ts" --include="*.tsx" . | grep -v node_modules || echo "  OK: Not found"

echo ""
echo "[3] console.log"
grep -rn "console\.log" components/ app/ || echo "  OK: Not found"

echo ""
echo "[4] eval usage"
grep -rn "\beval\b" components/ app/ || echo "  OK: Not found"

echo ""
echo "=== Check Complete ==="
```

## 関連リソース

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/pages/building-your-application/configuring/content-security-policy)
