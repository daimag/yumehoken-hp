import type { Metadata } from "next"
import {
  Car,
  Users,
  TrendingDown,
  Award,
  Quote,
  CheckCircle2,
  GraduationCap,
  Calendar,
  Building2,
} from "lucide-react"
import BusinessSubLayout from "@/components/business-sub-layout"

export const metadata: Metadata = {
  title: "安全運転講習｜法人のお客様｜ゆめほけん",
  description:
    "業務車両を扱う企業さま向けの実践的な安全運転講習。事故を未然に防ぎ、保険料の最適化と企業の社会的責任向上を同時に実現する、ゆめほけん独自のプログラム。",
  openGraph: {
    title: "安全運転講習｜ゆめほけん",
    description: "事故を「起こさない」企業文化づくりを、研修で実現。",
  },
}

const benefits = [
  {
    icon: TrendingDown,
    title: "事故件数の削減",
    description:
      "ヒヤリハットの可視化と再発防止策の徹底で、業務車両の事故件数を継続的に削減します。",
  },
  {
    icon: Award,
    title: "保険料の最適化",
    description:
      "事故件数の削減は、自動車保険・労災保険の保険料最適化に直結します。",
  },
  {
    icon: Building2,
    title: "CSR・採用力の向上",
    description:
      "「安全運転に取り組む会社」は、地域社会・取引先・求職者からの信頼につながります。",
  },
  {
    icon: Users,
    title: "従業員の意識改革",
    description:
      "ドライバー一人ひとりの安全意識が変わることで、職場全体の安全文化が醸成されます。",
  },
]

const programs = [
  {
    no: "01",
    title: "現状分析・ヒヤリハット共有",
    description:
      "貴社の事故傾向・ドライバー特性を分析。匿名アンケートでヒヤリハット事例を集約します。",
  },
  {
    no: "02",
    title: "座学研修（リスクと法令）",
    description:
      "最新の道路交通法の改正点、業務中事故の責任、安全運転の心理的アプローチを学びます。",
  },
  {
    no: "03",
    title: "実技・運転診断",
    description:
      "保険会社・指定機関と連携した実技研修。運転特性の客観的フィードバックでクセを矯正。",
  },
  {
    no: "04",
    title: "フォローアップ",
    description:
      "研修後の事故件数・運転データを定期モニタリング。効果検証と次のアクションをご提案。",
  },
]

export default function BusinessSafeDrivingPage() {
  return (
    <BusinessSubLayout
      title="安全運転講習"
      englishLabel="SAFE DRIVING TRAINING"
      lead="業務車両を扱う企業さま向けに、事故を未然に防ぐための実践的な講習プログラムをご提供。保険会社のリソースとゆめほけん独自のプログラムを組み合わせ、ドライバーの意識改革と事故削減を同時に実現します。"
      HeroIcon={Car}
      serviceParam="safe-driving"
    >
      {/* 期待できる効果 */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="benefits-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#3D4A5A] text-sm font-semibold tracking-[0.25em] mb-3">
              EXPECTED BENEFITS
            </p>
            <h2
              id="benefits-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              期待できる4つの効果
            </h2>
            <div className="w-12 h-0.5 bg-[#6B7B8C] mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-[#FAFBFC] border border-stone-200 rounded-md p-6 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-white border border-stone-200 mb-4">
                  <b.icon className="w-6 h-6 text-[#3D4A5A]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* プログラム概要 */}
      <section className="bg-[#F0F4F7] py-16 md:py-24" aria-labelledby="programs-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#3D4A5A] text-sm font-semibold tracking-[0.25em] mb-3">
              PROGRAM
            </p>
            <h2
              id="programs-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              プログラムの流れ
            </h2>
            <div className="w-12 h-0.5 bg-[#6B7B8C] mx-auto" aria-hidden="true" />
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {programs.map((p) => (
              <li
                key={p.no}
                className="bg-white border border-stone-200 rounded-md p-6 md:p-7 flex gap-5"
              >
                <span className="font-serif text-3xl md:text-4xl font-bold text-[#6B7B8C] leading-none shrink-0">
                  {p.no}
                </span>
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-[#3D3D3D] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{p.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 実施形式 */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="format-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#3D4A5A] text-sm font-semibold tracking-[0.25em] mb-3">
              FORMAT
            </p>
            <h2
              id="format-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              実施形式
            </h2>
            <div className="w-12 h-0.5 bg-[#6B7B8C] mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: GraduationCap,
                title: "出張講習",
                description: "貴社の会議室で座学を実施。社内日程に合わせた柔軟な開催が可能です。",
              },
              {
                icon: Car,
                title: "実技研修",
                description: "指定の自動車学校・コースで実技研修。運転特性を客観的に診断します。",
              },
              {
                icon: Calendar,
                title: "定期コース",
                description: "年1〜2回の定期実施で、安全文化を継続的に維持・更新します。",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-[#FAFBFC] border border-stone-200 rounded-md p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-white border border-stone-200 mb-4">
                  <f.icon className="w-7 h-7 text-[#3D4A5A]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="bg-[#3D4A5A] text-white py-16 md:py-20" aria-labelledby="voice-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#A8C8E8] text-sm font-semibold tracking-[0.25em] mb-3">
              CUSTOMER VOICE
            </p>
            <h2
              id="voice-heading"
              className="font-serif text-2xl md:text-3xl font-bold mb-3"
            >
              ご利用企業さまの声
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-7 md:p-10 relative">
            <Quote
              className="absolute top-5 right-5 w-12 h-12 text-[#95C11F] opacity-30"
              aria-hidden="true"
            />
            <p className="text-stone-100 leading-relaxed text-base md:text-lg mb-6">
              「社員の交通事故を減らしたいと思い、ゆめほけんさんに安全運転講習について相談しました。
              講習後、社内の安全意識が大きく変わり、事故件数も減少。
              <strong className="text-white">保険料の見直しにもつながり、想像以上の効果でした。</strong>」
            </p>
            <p className="text-sm text-stone-300 border-t border-white/10 pt-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#95C11F]" aria-hidden="true" />
              北九州市内 法人のお客様
            </p>
          </div>
        </div>
      </section>
    </BusinessSubLayout>
  )
}
