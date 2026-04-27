import type { Metadata } from "next"
import { TreePine } from "lucide-react"
import CsrPartnerLayout from "@/components/csr-partner-layout"

export const metadata: Metadata = {
  title: "NPO法人 好きっちゃ北九州｜社会貢献パートナー",
  description:
    "ゆめほけんが応援するNPO法人 好きっちゃ北九州。北九州市の子どもと住民が「自分のまち」を愛するための活動を、防災・ESD・SDGsの視点で展開しています。",
}

export default function SukicchaPage() {
  return (
    <CsrPartnerLayout
      name="NPO法人 好きっちゃ北九州"
      englishLabel="SUKICCHA KITAKYUSHU"
      role="地域・教育NPO"
      icon={TreePine}
      accent="#95C11F"
      lead="「わたしのまち北九州が大好き！」という郷土愛を、子どもから大人まで育む地域密着NPO。"
    >
      <h2>団体紹介</h2>
      <p>
        NPO法人 好きっちゃ北九州は、北九州市内の子どもたちと住民が
        <strong>「自分のまち」を愛するようになる</strong>ことを目指して活動しています。
      </p>

      <h2>主な活動</h2>
      <h3>1. 地域子ども交流事業</h3>
      <p>
        子どもたちが地域住民と協働し、郷土の魅力を発見する取り組みを実施しています。
      </p>

      <h3>2. 防災・防犯まちづくり</h3>
      <p>
        事件や事故を防ぐ環境づくりと、地域コミュニティの育成に取り組んでいます。
      </p>

      <h3>3. 未来ディスカッション</h3>
      <p>
        ESD（持続可能な開発のための教育）やSDGsなど、社会課題をテーマにしたディスカッションを実施。
      </p>

      <h3>4. 好きっちゃアカデミー</h3>
      <p>
        大学・高校の学生が活動に参加し、地域活動の実践者として成長する場を提供しています。
      </p>

      <h2>ゆめほけんとの関わり</h2>
      <p>
        北九州を拠点とするゆめほけんは、地域に根ざした保険代理店として、
        <strong>「自分たちのまちを大切にする活動」</strong>を応援しています。
        子どもたちが郷土愛を育む環境づくりは、
        わたしたちが目指す「笑顔あふれるまちづくり」と深く重なる取り組みです。
      </p>

      <p className="note">
        活動詳細や参加方法については、NPO法人 好きっちゃ北九州の公式サイトをご覧ください。
      </p>
    </CsrPartnerLayout>
  )
}
