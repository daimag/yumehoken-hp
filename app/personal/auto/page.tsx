import type { Metadata } from "next"
import Link from "next/link"
import {
  Car,
  ShieldAlert,
  Wrench,
  Calendar,
  Clock,
  Smartphone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import InsuranceCategoryLayout from "@/components/insurance-category-layout"

const ACCENT = "#0EA5E9"

export const metadata: Metadata = {
  title: "自動車保険｜ゆめほけん（一般のお客様）",
  description:
    "ゆめほけんの自動車保険のご提案。対人・対物賠償から車両保険まで、損保3社から最適なプランを比較。1日単位で借りた車に備える「乗るピタ」（東京海上日動）も取扱中。",
  openGraph: {
    title: "自動車保険｜ゆめほけん",
    description: "毎日の運転に、しっかりとした安心を。",
  },
}

const coverages = [
  {
    icon: ShieldAlert,
    title: "対人・対物賠償",
    description:
      "事故で他人にケガをさせた・物を壊した場合の賠償責任を補償。両方とも「無制限」が基本です。",
  },
  {
    icon: Car,
    title: "車両保険",
    description:
      "ご自分の車の修理・買い替え費用。一般型・エコノミー型から、リスクと保険料のバランスを比較してご提案。",
  },
  {
    icon: Wrench,
    title: "ロードサービス",
    description:
      "故障・パンク・バッテリー上がり時のレッカー、燃料切れの応急対応など。24時間365日対応。",
  },
  {
    icon: ShieldAlert,
    title: "搭乗者・人身傷害",
    description:
      "ご自身や同乗者がケガをした際の保障。過失割合に関わらず実損払いの人身傷害は特に重要です。",
  },
  {
    icon: Wrench,
    title: "弁護士費用特約",
    description:
      "もらい事故などで相手に損害賠償を請求するときの弁護士費用をカバー。少額の保険料で大きな安心。",
  },
  {
    icon: Calendar,
    title: "等級割引・年齢条件",
    description:
      "等級・年齢条件・運転者限定など、保険料を最適化する条件を細かくチューニングしてご提案。",
  },
]

const norupita = [
  "他人の車を運転する日（実家の車・友人の車）",
  "帰省中の運転・レジャー時の運転",
  "車検・修理中の代車運転",
  "免許取りたてで自分の車を持っていない方",
]

const partnerCompanies = [
  { name: "東京海上日動", note: "「乗るピタ」取扱" },
  { name: "東京海上ニッセイ同和", note: "" },
  { name: "損保ジャパン", note: "" },
]

export default function PersonalAutoPage() {
  return (
    <InsuranceCategoryLayout
      title="自動車保険"
      englishLabel="AUTO INSURANCE"
      heroBadge="損保3社の中から最適なプランをご提案"
      lead="日々の運転や万一の事故に備える自動車保険。対人・対物賠償から車両保険、ロードサービスまで、損保3社のプランを中立的に比較し、お客様の使い方とご予算に合わせた最適な一本をご提案します。"
      accentColor={ACCENT}
      HeroIcon={Car}
      serviceParam="auto"
    >
      {/* 補償できる範囲 */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="coverage-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm font-semibold tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
              COVERAGE
            </p>
            <h2
              id="coverage-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              自動車保険でカバーできること
            </h2>
            <div className="w-12 h-0.5 mx-auto" style={{ backgroundColor: ACCENT }} aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coverages.map((c) => (
              <div
                key={c.title}
                className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-md mb-4"
                  style={{ backgroundColor: `${ACCENT}15` }}
                >
                  <c.icon className="w-6 h-6" style={{ color: ACCENT }} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 乗るピタ特集 */}
      <section
        className="py-16 md:py-24 text-white relative overflow-hidden"
        style={{ backgroundColor: ACCENT }}
        aria-labelledby="norupita-heading"
      >
        <div className="absolute -top-20 -right-20 opacity-10" aria-hidden="true">
          <Car className="w-96 h-96" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold tracking-widest mb-5">
                <Smartphone className="w-3 h-3" aria-hidden="true" />
                FEATURED
              </div>
              <h2
                id="norupita-heading"
                className="font-serif text-3xl md:text-4xl font-bold mb-3 leading-tight"
              >
                1日単位の<br />「乗るピタ」
              </h2>
              <p className="text-sm font-semibold opacity-90 tracking-widest mb-5">
                NORU-PITA — 東京海上日動
              </p>
              <p className="leading-relaxed mb-6 text-base md:text-lg text-white/95">
                他人の車を運転するときに、
                <strong>1日500円〜</strong>
                スマホから加入できる便利な自動車保険。レジャーや帰省、ちょっとしたお出かけに最適です。
              </p>
              <ul className="space-y-2.5 mb-8">
                {norupita.map((n) => (
                  <li key={n} className="flex items-start gap-2.5 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-white/95">{n}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-white text-[#0369A1] hover:bg-stone-100 px-7 py-3.5 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
              >
                ネット申込ページへ
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-7 md:p-8">
              <h3 className="font-serif text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" aria-hidden="true" />
                必要な日だけ加入できる
              </h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed mb-5">
                等級ダウンの心配がなく、ご自身の自動車保険とは別枠で備えられるのが大きなメリットです。
              </p>
              <p className="text-xs text-white/75 leading-relaxed">
                ※ プラン・保険料の詳細は東京海上日動の公式ページにてご確認ください。
                ゆめほけんでは加入手続きのサポートも承っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 取扱保険会社 */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="partners-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-sm font-semibold tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
              PARTNER COMPANIES
            </p>
            <h2
              id="partners-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              主な取扱保険会社（損保3社）
            </h2>
            <div className="w-12 h-0.5 mx-auto" style={{ backgroundColor: ACCENT }} aria-hidden="true" />
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {partnerCompanies.map((p) => (
              <li
                key={p.name}
                className="bg-[#FAF7F0] border border-stone-200 rounded-md py-4 px-5 text-stone-700"
              >
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#95C11F] shrink-0" aria-hidden="true" />
                  <span className="font-bold text-sm">{p.name}</span>
                </div>
                {p.note && (
                  <p className="text-xs text-stone-500 ml-6">{p.note}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </InsuranceCategoryLayout>
  )
}
