import type { Metadata } from "next"
import { Mountain } from "lucide-react"
import CsrPartnerLayout from "@/components/csr-partner-layout"

export const metadata: Metadata = {
  title: "登山家 西川 史晃｜社会貢献パートナー",
  description:
    "ゆめほけんが応援する登山家・西川史晃さん。七大陸最高峰登頂を目指し、2022年エベレスト登頂を成功。「夢を持つ大人を増やす」をテーマに講演活動を行っています。",
}

export default function NishikawaPage() {
  return (
    <CsrPartnerLayout
      name="登山家 西川 史晃"
      englishLabel="FUMIAKI NISHIKAWA — MOUNTAINEER"
      role="登山家・コーチ"
      icon={Mountain}
      accent="#5C7A14"
      lead="「夢を持つ大人を増やす」をテーマに、登山とコーチングを通じて多くの人々の挑戦をサポートするプロフェッショナル。"
    >
      <h2>プロフィール</h2>
      <p>
        西川 史晃さんは「夢想家」を名乗り、人と自然をつなげる登山家として活動しています。
        登山とコーチングを組み合わせた事業を通じて、これまで500名以上の人生に関わってきた経歴を持ちます。
      </p>
      <ul>
        <li>七大陸最高峰登頂を目指す「チームセブンサミット」を立ち上げ</li>
        <li>2022年、40歳でエベレスト登頂を成功</li>
        <li>2019年、合同会社山学ラボを起業（理念：山登りをとおして人を幸せに）</li>
      </ul>

      <h2>主な活動</h2>
      <p>
        登山家としての挑戦と並行して、企業・学校・コミュニティへの講演活動、
        登山×コーチングの研修プログラムなどを展開。
        「夢を持ち、挑戦する大人」を一人でも増やすことをミッションとしています。
      </p>

      <h2>ゆめほけんとの関わり</h2>
      <p>
        ゆめほけんの「お客さまの夢を応援する」という理念に共感し、
        西川さんの活動を継続的に支援しています。
        2025年には登頂凱旋報告のため、ログハウスにご来店いただきました。
      </p>

      <p className="note">
        最新情報は西川さんご自身の発信（合同会社山学ラボ等）をご覧ください。
      </p>
    </CsrPartnerLayout>
  )
}
