import type { Metadata } from "next"
import { Volleyball } from "lucide-react"
import CsrPartnerLayout from "@/components/csr-partner-layout"

export const metadata: Metadata = {
  title: "カノアラウレアーズ福岡｜社会貢献パートナー",
  description:
    "ゆめほけんが応援するカノアラウレアーズ福岡。福岡県田川郡福智町をホームタウンとする女子バレーボールチーム。S.Vリーグ昇格に向けて挑戦中です。",
}

export default function KanoaPage() {
  return (
    <CsrPartnerLayout
      name="カノアラウレアーズ福岡"
      englishLabel="KANOA LAUREAS FUKUOKA"
      role="女子バレーボールチーム"
      icon={Volleyball}
      accent="#0EA5E9"
      lead="福岡県田川郡福智町をホームタウンに、S.Vリーグ昇格を目指す女子バレーボールチーム。"
    >
      <h2>チーム紹介</h2>
      <p>
        カノアラウレアーズ福岡は、福岡県田川郡福智町をホームタウンとする女子バレーボールチームです。
        選手とスタッフが一丸となり、<strong>S.Vリーグ昇格</strong>という大きな目標に本気で取り組んでいます。
      </p>

      <h2>挑戦するチーム</h2>
      <p>
        高い情熱を持って日々のトレーニングに励み、地元福岡から日本のバレーボール界へ羽ばたくため、
        着実にステップを重ねています。
      </p>

      <h2>ゆめほけんとの関わり</h2>
      <p>
        地元・北九州地区を含む福岡県を拠点とするスポーツチームとして、
        ゆめほけんはチームの大きな目標に向けた挑戦を心から応援しています。
        地域に根ざしたパートナーとして、社会貢献活動の一環で支援を続けています。
      </p>

      <p className="note">
        試合日程・チケット情報等は、チーム公式サイト・SNSをご確認ください。
      </p>
    </CsrPartnerLayout>
  )
}
