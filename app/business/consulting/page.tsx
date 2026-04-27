import type { Metadata } from "next"
import {
  Briefcase,
  Users,
  Building2,
  Target,
  HandshakeIcon,
  BarChart3,
  CheckCircle2,
} from "lucide-react"
import BusinessSubLayout from "@/components/business-sub-layout"

export const metadata: Metadata = {
  title: "ビジネスコンサルティング｜法人のお客様｜ゆめほけん",
  description:
    "保険の枠を越えて、経営の本質的課題に伴走する5つの支援領域。人材定着・組織構築・営業支援・事業継承・経営相談まで、ゆめほけんが社労士・税理士・FP等の専門家と連携してご支援します。",
  openGraph: {
    title: "ビジネスコンサルティング｜ゆめほけん",
    description: "保険の枠を越えて、経営の本質に寄り添うパートナー。",
  },
}

const areas = [
  {
    icon: Users,
    title: "人材定着",
    summary:
      "離職を減らし、社員が長く活躍できる職場づくり。エンゲージメント向上から制度設計までトータル支援。",
    items: [
      "離職要因の分析",
      "従業員サーベイの設計",
      "福利厚生（GLTD・確定拠出年金等）",
      "メンタルヘルス対策",
    ],
  },
  {
    icon: Building2,
    title: "組織構築",
    summary:
      "経営方針に沿った組織設計・評価制度・規程整備をご支援。社労士と連携してワンストップで進めます。",
    items: [
      "就業規則・諸規程の整備",
      "等級・評価制度の設計",
      "目標管理制度（MBO/OKR）",
      "人事戦略のロードマップ",
    ],
  },
  {
    icon: Target,
    title: "営業支援",
    summary:
      "営業プロセスの可視化と改善で、売上とお客様満足度を両立。中小企業の営業力強化を伴走支援。",
    items: [
      "営業プロセスの棚卸し",
      "顧客管理（CRM）の導入",
      "提案資料・トークの磨き込み",
      "リーダー育成研修",
    ],
  },
  {
    icon: HandshakeIcon,
    title: "事業継承",
    summary:
      "後継者問題・株式承継・M&Aまで、経営者の最後の大仕事を専門家とともにご支援。",
    items: [
      "後継者の選定・育成計画",
      "株式承継の税務スキーム",
      "M&Aアドバイザリー",
      "事業承継税制の活用",
    ],
  },
  {
    icon: BarChart3,
    title: "経営相談",
    summary:
      "資金繰り・資産運用・経営課題の整理を、第三者視点で。経営者の壁打ち相手としてもご活用ください。",
    items: [
      "資金繰り表の作成支援",
      "事業計画のブラッシュアップ",
      "経営者の個人資産運用",
      "金融機関への対応支援",
    ],
  },
]

const partners = [
  { name: "社会保険労務士", desc: "労務・規程・助成金" },
  { name: "税理士", desc: "税務・事業承継・節税" },
  { name: "司法書士", desc: "登記・株式承継" },
  { name: "弁護士", desc: "紛争・契約・労務" },
  { name: "中小企業診断士", desc: "経営戦略・補助金" },
  { name: "FP（CFP/AFP）", desc: "経営者個人の資産設計" },
]

export default function BusinessConsultingPage() {
  return (
    <BusinessSubLayout
      title="ビジネスコンサルティング"
      englishLabel="BUSINESS CONSULTING"
      lead="保険の枠を越えて、経営の本質的な課題に伴走する5つの支援領域。社労士・税理士・FPなどの専門家ネットワークと連携し、貴社の組織と未来を、保険代理店としての視点で総合的に支援します。"
      HeroIcon={Briefcase}
      serviceParam="consulting"
    >
      {/* 5領域詳細 */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#3D4A5A] text-sm font-semibold tracking-[0.25em] mb-3">
              FIVE AREAS
            </p>
            <h2
              id="areas-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              ビジネスコンサルの5領域
            </h2>
            <div className="w-12 h-0.5 bg-[#6B7B8C] mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areas.map((a, idx) => (
              <article
                key={a.title}
                className="bg-[#FAFBFC] border border-stone-200 border-t-4 border-t-[#6B7B8C] rounded-md p-7 md:p-8 hover:border-t-[#95C11F] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-white border border-stone-200">
                    <a.icon className="w-6 h-6 text-[#3D4A5A]" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold tracking-widest text-[#6B7B8C]">
                    AREA {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#3D3D3D] mb-3">
                  {a.title}
                </h3>
                <p className="text-sm md:text-base text-stone-700 leading-relaxed mb-5">
                  {a.summary}
                </p>
                <ul className="space-y-2 border-t border-stone-200 pt-5">
                  {a.items.map((i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-stone-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#95C11F] shrink-0" aria-hidden="true" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 専門家ネットワーク */}
      <section
        className="bg-[#3D4A5A] text-white py-16 md:py-24"
        aria-labelledby="partners-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#A8C8E8] text-sm font-semibold tracking-[0.25em] mb-3">
              EXPERT NETWORK
            </p>
            <h2
              id="partners-heading"
              className="font-serif text-2xl md:text-3xl font-bold mb-3"
            >
              連携する専門家ネットワーク
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-200 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              ゆめほけんは、ご相談内容に応じて
              <strong className="text-[#A8E090]">最適な専門家</strong>
              を即座にお繋ぎします。
              <br className="hidden md:block" />
              「窓口を探す手間」から経営者を解放します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-md p-5"
              >
                <h3 className="font-serif text-lg font-bold mb-1">{p.name}</h3>
                <p className="text-sm text-stone-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BusinessSubLayout>
  )
}
