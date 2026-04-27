// /personal/life だけ再撮影（初回キャプチャ時に Fast Refresh full reload で失敗した分）
import { chromium } from "playwright"
import path from "node:path"

const URL = (process.env.NEW_BASE || "http://localhost:3001") + "/personal/life"
const OUT = path.join(process.cwd(), "output", "new", "screenshots", "06_personal_life.png")

const browser = await chromium.launch()
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  locale: "ja-JP",
  reducedMotion: "reduce",
})
const page = await context.newPage()
console.log(`再取得: ${URL}`)
await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 })
await page.waitForTimeout(800)
await page.screenshot({ path: OUT, fullPage: true })
console.log(`保存: ${OUT}`)
await browser.close()
