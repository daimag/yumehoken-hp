import type { Metadata } from "next"
import PolicyLayout from "@/components/policy-layout"

export const metadata: Metadata = {
  title: "お客さま本位の業務運営方針 2025（FD宣言）",
  description:
    "ドリームインシュアランス株式会社（ゆめほけん）が掲げる「お客さま本位の業務運営方針」2025年版。5つの方針とKPIで、徹底したお客さま視点の業務運営を行います。",
}

export default function Fd2025Page() {
  return (
    <PolicyLayout
      englishLabel="FIDUCIARY DUTY DECLARATION 2025"
      title="お客さま本位の業務運営方針《FD宣言》2025"
      lead="弊社は、徹底したお客さま視点に基づくお客さま本位の業務運営を事業の柱と捉え、あらゆる接点において『安心とゆめ』をお届けするお客さまの代理店を目指します。"
      publishedAt="2025年4月公開"
    >
      <h2>方針1：頼れる代理店</h2>
      <h3>取り組み</h3>
      <p>
        地域密着の信頼できる専門家ネットワークを提供し、迅速な事故解決と安心した生活をサポートします。
      </p>
      <div className="kpi-box">
        <strong>KPI</strong>：つなぐ実績件数 … 月5件以上（年60件以上）
      </div>

      <h2>方針2：気配りのできる保険代理店</h2>
      <h3>取り組み</h3>
      <p>
        「お客さまの声」を継続的に収集し、業務品質の向上に活かします。
      </p>
      <div className="kpi-box">
        <strong>KPI</strong>：お客さまの声 … 月5件以上（年60件以上）
      </div>

      <h2>方針3：風通しの良い代理店</h2>
      <h3>取り組み</h3>
      <p>
        お客さまの知識・経験・加入目的を総合的に捉え、複数商品の中から最適なサービスを選択いただけるよう情報提供を行います。
      </p>
      <div className="kpi-box">
        <strong>KPI</strong>：多種目販売率 … 15%以上
      </div>

      <h2>方針4：やさしい保険代理店</h2>
      <h3>取り組み</h3>
      <p>
        分かりやすい説明と丁寧な対応で、過不足のない最適なご提案を実施します。
      </p>
      <div className="kpi-box">
        <strong>KPI</strong>：コンプライアンス研修の毎月開催
      </div>

      <h2>方針5：かしこい代理店</h2>
      <h3>取り組み</h3>
      <p>
        プロとして最新知識を習得し、研修・資格取得を通じて自己を磨き続けます。
      </p>
      <div className="kpi-box">
        <strong>KPI</strong>：お客さま品質向上研修の毎月開催／商品・販売力向上研修／募集品質向上研修
      </div>

      <p className="note">
        ※ 本方針の進捗・実績は、毎年「実績」ページとして公表します。前年度の実績は <a href="/policies/fd-2024-results" className="text-[#5C7A14] underline hover:text-[#95C11F]">こちら</a> をご覧ください。
      </p>
    </PolicyLayout>
  )
}
