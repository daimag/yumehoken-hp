import type { Metadata } from "next"
import { Star } from "lucide-react"
import CsrPartnerLayout from "@/components/csr-partner-layout"

export const metadata: Metadata = {
  title: "Make-A-Wish Japan｜社会貢献パートナー",
  description:
    "ゆめほけんが2024年から寄付支援を開始した Make-A-Wish Japan。難病と闘う子どもたちの夢を実現する国際的非営利団体です。",
}

export default function MakeAWishPage() {
  return (
    <CsrPartnerLayout
      name="Make-A-Wish Japan"
      englishLabel="MAKE-A-WISH JAPAN"
      role="難病児の夢実現支援団体"
      icon={Star}
      accent="#E94B6E"
      lead="難病と闘う子どもたちの「夢」を、現実に。世界150以上の国・地域で活動する Make-A-Wish の日本支部。"
    >
      <h2>団体紹介</h2>
      <p>
        Make-A-Wish Japan（メイク・ア・ウィッシュ オブ ジャパン）は、
        難病と闘う子どもたちの夢を実現するための支援を行う認定NPO法人です。
        世界 150以上の国と地域で活動する Make-A-Wish のネットワークの一員として、
        子どもたちの「夢そのもの」ではなく、
        <strong>「夢を実現するために必要な手配や配慮」</strong>を提供しています。
      </p>

      <h2>実現してきた夢の例</h2>
      <ul>
        <li>「野生のイルカと泳ぎたい」</li>
        <li>「結婚式のドレスが着たい」</li>
        <li>「ヒーローに会いたい」</li>
        <li>「世界一のシェフに料理を教わりたい」</li>
      </ul>
      <p>
        子どもたち一人ひとりの個性ある夢に向き合い、家族・医療チーム・ボランティアと協力しながら、
        その実現をサポートしています。
      </p>

      <h2>ゆめほけんとの関わり</h2>
      <p>
        ゆめほけんが大切にしている <strong>「夢を応援する」という理念</strong> と、
        Make-A-Wish Japan の活動は深く重なります。
        2024年からゆめほけんは Make-A-Wish Japan への寄付を開始し、
        今後も継続的に応援していきます。
      </p>

      <p className="note">
        活動詳細やご寄付については、Make-A-Wish Japan の公式サイトをご覧ください。
      </p>
    </CsrPartnerLayout>
  )
}
