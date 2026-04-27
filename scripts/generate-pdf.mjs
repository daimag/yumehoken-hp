// 既存HP（yumehoken.jp）と新HP（localhost:3000）の全ページを
// フルページスクリーンショット → 1本のHTMLレポートに集約 → A4縦のPDF化
//
// 使い方:
//   1) 別ターミナルで `pnpm dev` を起動しておく（新HP用）
//   2) `node scripts/generate-pdf.mjs`
//
// 出力:
//   output/new/screenshots/*.png
//   output/existing/screenshots/*.png
//   output/yumehoken-new.pdf
//   output/yumehoken-existing.pdf

import { chromium } from "playwright"
import fs from "node:fs/promises"
import path from "node:path"

const ROOT = process.cwd()
const OUT = path.join(ROOT, "output")

// ===== 新HP（本リポジトリ）の全ルート =====
const NEW_BASE = process.env.NEW_BASE || "http://localhost:3001"
const newRoutes = [
  { path: "/", label: "TOP" },
  { path: "/about", label: "会社概要" },
  { path: "/about/message", label: "代表メッセージ" },
  { path: "/about/members", label: "メンバー紹介" },
  { path: "/personal", label: "一般のお客様 TOP" },
  { path: "/personal/life", label: "一般 — 生命保険" },
  { path: "/personal/medical", label: "一般 — 医療・傷害保険" },
  { path: "/personal/auto", label: "一般 — 自動車保険" },
  { path: "/personal/home", label: "一般 — 火災・地震保険" },
  { path: "/personal/pet", label: "一般 — ペット保険" },
  { path: "/shukatsu", label: "終活ステーション TOP" },
  { path: "/shukatsu/services", label: "終活 — 7サービス" },
  { path: "/shukatsu/voices", label: "終活 — お客様の声" },
  { path: "/shukatsu/koba", label: "終活 — 木庭プロフィール" },
  { path: "/shukatsu/ending-note", label: "終活 — エンディングノート" },
  { path: "/business", label: "法人のお客様 TOP" },
  { path: "/business/risk", label: "法人 — リスクコンサル" },
  { path: "/business/consulting", label: "法人 — ビジネスコンサル" },
  { path: "/business/safe-driving", label: "法人 — 安全運転講習" },
  { path: "/business/cases", label: "法人 — 支援事例" },
  { path: "/recruit", label: "採用情報" },
  { path: "/contact", label: "お問い合わせ" },
  { path: "/news", label: "お知らせ" },
  { path: "/newsletter", label: "ニュースレター" },
  { path: "/csr", label: "CSR一覧" },
  { path: "/csr/nishikawa", label: "CSR — 西川史晃" },
  { path: "/csr/kanoa", label: "CSR — カノアラウレアーズ" },
  { path: "/csr/uta", label: "CSR — u-ta" },
  { path: "/csr/make-a-wish", label: "CSR — Make-A-Wish" },
  { path: "/csr/sukiccha", label: "CSR — 好きっちゃ北九州" },
  { path: "/support", label: "事故・トラブル時" },
  { path: "/apply", label: "ネット申込" },
  { path: "/policies", label: "各種方針 一覧" },
  { path: "/policies/fd-2025", label: "FD宣言2025" },
  { path: "/policies/fd-2024-results", label: "FD宣言2024 取組実績" },
  { path: "/policies/privacy", label: "個人情報" },
  { path: "/policies/security", label: "情報セキュリティ" },
  { path: "/policies/sales", label: "募集方針" },
]

// ===== 既存HP（yumehoken.jp）の主要ページ =====
const EXISTING_BASE = "https://www.yumehoken.jp"
const existingRoutes = [
  { path: "/", label: "TOP" },
  { path: "/about-2/", label: "会社概要" },
  { path: "/product-2/", label: "商品案内" },
  { path: "/news-2/", label: "お知らせ" },
  { path: "/newslettaers-list/", label: "ニュースレター一覧" },
  { path: "/csr/", label: "CSR" },
  { path: "/accidentprocedureguide/", label: "事故対応ガイド" },
  { path: "/night_holiday/", label: "夜間・休日対応" },
  { path: "/towing_service/", label: "ロードサービス" },
  { path: "/fddeclaration2024/", label: "FD宣言2024" },
  { path: "/solicitation-salespolicies/", label: "募集方針" },
  { path: "/results2022/", label: "FD取組実績" },
  { path: "/kojin_kihonhushin/", label: "個人情報" },
  { path: "/jouhou_securty/", label: "情報セキュリティ" },
  { path: "/apply/", label: "ネット申込" },
  { path: "/moushikomi/", label: "申込" },
]

const VIEWPORT = { width: 1280, height: 800 }

function slug(p) {
  return (p.replace(/\//g, "_").replace(/^_/, "") || "index").replace(/_$/, "")
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true })
}

async function captureSite({ browser, base, routes, dir, label }) {
  const ssDir = path.join(dir, "screenshots")
  await ensureDir(ssDir)

  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
    locale: "ja-JP",
    reducedMotion: "reduce", // カルーセルを止めて最初のスライドで撮る
  })
  const page = await context.newPage()

  const results = []
  for (const [i, r] of routes.entries()) {
    const url = base + r.path
    const filename = `${String(i + 1).padStart(2, "0")}_${slug(r.path)}.png`
    const filepath = path.join(ssDir, filename)
    process.stdout.write(`[${label}] (${i + 1}/${routes.length}) ${r.path} ... `)
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 })
      await page.waitForTimeout(800) // 描画安定待ち
      await page.screenshot({ path: filepath, fullPage: true })
      results.push({ ...r, file: filename })
      console.log("OK")
    } catch (e) {
      console.log("FAIL: " + e.message.split("\n")[0])
      results.push({ ...r, file: null, error: e.message.split("\n")[0] })
    }
  }

  await context.close()
  return results
}

function buildReportHtml({ siteLabel, captured, baseLabel }) {
  const today = new Date().toISOString().slice(0, 10)
  const items = captured
    .map((r, idx) => {
      const numLabel = String(idx + 1).padStart(2, "0")
      if (!r.file) {
        return `
          <section class="page">
            <header class="page-header">
              <span class="num">${numLabel}</span>
              <h2>${escape(r.label)}</h2>
              <span class="path">${escape(r.path)}</span>
            </header>
            <div class="error">
              <p>取得失敗: ${escape(r.error || "不明なエラー")}</p>
            </div>
          </section>
        `
      }
      return `
        <section class="page">
          <header class="page-header">
            <span class="num">${numLabel}</span>
            <h2>${escape(r.label)}</h2>
            <span class="path">${escape(r.path)}</span>
          </header>
          <div class="shot">
            <img src="screenshots/${r.file}" alt="${escape(r.label)}" />
          </div>
        </section>
      `
    })
    .join("\n")

  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>${escape(siteLabel)} — 全ページPDF</title>
<style>
  @page { size: A4 portrait; margin: 8mm; }
  * { box-sizing: border-box; }
  body { font-family: "Hiragino Sans", "Yu Gothic", sans-serif; margin: 0; color: #2d2d2d; }

  .cover { padding: 60mm 15mm; page-break-after: always; }
  .cover h1 { font-size: 28pt; margin: 0 0 6mm; }
  .cover .meta { color: #666; font-size: 11pt; line-height: 1.8; }
  .cover .base { font-family: monospace; font-size: 10pt; color: #888; margin-top: 4mm; }

  .toc { padding: 8mm 6mm; page-break-after: always; }
  .toc h2 { font-size: 16pt; border-bottom: 1px solid #ccc; padding-bottom: 2mm; }
  .toc ol { padding-left: 8mm; font-size: 10pt; line-height: 1.7; }
  .toc li .pp { color: #888; font-family: monospace; margin-left: 4mm; font-size: 9pt; }

  section.page { page-break-after: always; padding: 4mm 2mm; }
  section.page:last-child { page-break-after: auto; }

  .page-header { display: flex; align-items: baseline; gap: 6mm; padding: 2mm 4mm; border-bottom: 2px solid #95C11F; margin-bottom: 4mm; }
  .page-header .num { font-family: monospace; font-size: 14pt; color: #95C11F; font-weight: bold; }
  .page-header h2 { font-size: 14pt; margin: 0; flex-grow: 1; }
  .page-header .path { font-family: monospace; font-size: 9pt; color: #888; }

  .shot { width: 100%; }
  .shot img { width: 100%; max-height: 245mm; object-fit: contain; display: block; box-shadow: 0 0 0 1px #ddd; }

  .error { padding: 20mm; text-align: center; color: #c00; border: 1px dashed #c00; border-radius: 4px; }
</style>
</head>
<body>
  <div class="cover">
    <h1>${escape(siteLabel)}</h1>
    <p class="meta">
      生成日: ${today}<br>
      対象URL数: ${captured.length} ページ<br>
      ビューポート: ${VIEWPORT.width}×${VIEWPORT.height}
    </p>
    <p class="base">${escape(baseLabel)}</p>
  </div>

  <div class="toc">
    <h2>目次</h2>
    <ol>
      ${captured.map((r) => `<li>${escape(r.label)}<span class="pp">${escape(r.path)}</span></li>`).join("\n")}
    </ol>
  </div>

  ${items}
</body>
</html>`
}

function escape(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c]))
}

async function reportToPdf({ browser, dir, html, pdfPath, label }) {
  const reportPath = path.join(dir, "report.html")
  await fs.writeFile(reportPath, html, "utf-8")

  const context = await browser.newContext({ viewport: VIEWPORT })
  const page = await context.newPage()
  await page.goto("file:///" + reportPath.replace(/\\/g, "/"), { waitUntil: "networkidle" })
  await page.waitForTimeout(500)
  console.log(`[${label}] PDF出力中: ${pdfPath}`)
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: { top: "8mm", bottom: "8mm", left: "8mm", right: "8mm" },
  })
  await context.close()
}

async function main() {
  await ensureDir(OUT)
  const browser = await chromium.launch()

  // ===== 新HP =====
  const newDir = path.join(OUT, "new")
  await ensureDir(newDir)
  const newCaptured = await captureSite({
    browser,
    base: NEW_BASE,
    routes: newRoutes,
    dir: newDir,
    label: "新HP",
  })
  const newHtml = buildReportHtml({
    siteLabel: "ゆめほけん 新HP — 全ページプレビュー",
    captured: newCaptured,
    baseLabel: `${NEW_BASE} (Next.js dev server)`,
  })
  await reportToPdf({
    browser,
    dir: newDir,
    html: newHtml,
    pdfPath: path.join(OUT, "yumehoken-new.pdf"),
    label: "新HP",
  })

  // ===== 既存HP =====
  const existingDir = path.join(OUT, "existing")
  await ensureDir(existingDir)
  const existingCaptured = await captureSite({
    browser,
    base: EXISTING_BASE,
    routes: existingRoutes,
    dir: existingDir,
    label: "既存HP",
  })
  const existingHtml = buildReportHtml({
    siteLabel: "ゆめほけん 既存HP — 全ページキャプチャ",
    captured: existingCaptured,
    baseLabel: EXISTING_BASE,
  })
  await reportToPdf({
    browser,
    dir: existingDir,
    html: existingHtml,
    pdfPath: path.join(OUT, "yumehoken-existing.pdf"),
    label: "既存HP",
  })

  await browser.close()
  console.log("\n✅ 完了")
  console.log("  - output/yumehoken-new.pdf")
  console.log("  - output/yumehoken-existing.pdf")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
