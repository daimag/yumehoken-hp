import type { Metadata } from "next"
import { Palette } from "lucide-react"
import CsrPartnerLayout from "@/components/csr-partner-layout"

export const metadata: Metadata = {
  title: "u-ta（木村ゆうた）｜社会貢献パートナー",
  description:
    "ゆめほけんが応援するアーティスト u-ta（木村ゆうた）さん。「絵と詩で穏やかな時間をつくる」をコンセプトに、絵本『空の国のハルメン』などの作品を制作しています。",
}

export default function UtaPage() {
  return (
    <CsrPartnerLayout
      name="u-ta（木村ゆうた）"
      englishLabel="U-TA — POET & ARTIST"
      role="詩人・画家"
      icon={Palette}
      accent="#C8956B"
      lead="「絵と詩で穏やかな時間をつくる」を活動テーマに、見る人の想像を膨らませる作品を生み出すアーティスト。"
    >
      <h2>プロフィール</h2>
      <p>
        u-taさん（木村ゆうた）は、絵と詩、物語の創作活動を行う詩人・画家です。
        余白を活かした構図と柔らかな色彩で、見る人に静寂と安定感をもたらす作品を制作しています。
      </p>

      <h2>代表作</h2>
      <ul>
        <li>絵本『空の国のハルメン』とそのCD化作品</li>
        <li>個展・コラボレーション作品多数</li>
      </ul>

      <h2>創作理念</h2>
      <blockquote>
        見る人によって想像を膨らませられるよう、たっぷりと余白を残す。
      </blockquote>

      <h2>ゆめほけんとの関わり</h2>
      <p>
        ゆめほけんは、u-taさんの「穏やかな時間をつくる」という創作理念に共感し、
        アーティストとしての活動を支援しています。
        ログハウスのあたたかい空間とも親和性のある作風で、お客さまにも感動を届けています。
      </p>

      <p className="note">
        作品情報や展示スケジュール等は、u-taさん公式の発信をご確認ください。
      </p>
    </CsrPartnerLayout>
  )
}
