import type { Metadata } from "next"
import {
  Stethoscope,
  Activity,
  HeartPulse,
  Pill,
  Hospital,
  ShieldPlus,
  CheckCircle2,
} from "lucide-react"
import InsuranceCategoryLayout from "@/components/insurance-category-layout"

const ACCENT = "#F59E0B"

export const metadata: Metadata = {
  title: "医療保険・傷害保険｜ゆめほけん（一般のお客様）",
  description:
    "ゆめほけんの医療保険・傷害保険のご提案。入院・手術・通院・がん・先進医療・三大疾病など、必要な保障を必要な分だけ。日常やスポーツのケガにも備える傷害保険まで、お客様に合うプランを比較してご提案します。",
  openGraph: {
    title: "医療保険・傷害保険｜ゆめほけん",
    description: "「もしも」のケガと病気に、必要な分だけの備えを。",
  },
}

const coverages = [
  {
    icon: Hospital,
    title: "入院・手術費用",
    description:
      "日額タイプ／一時金タイプから選択可能。差額ベッド代や食事代など公的保険の対象外もカバー。",
  },
  {
    icon: HeartPulse,
    title: "三大疾病・がん",
    description:
      "がん・急性心筋梗塞・脳卒中の診断時に一時金。治療と仕事の両立を金銭面から支援します。",
  },
  {
    icon: ShieldPlus,
    title: "先進医療特約",
    description:
      "高額な先進医療の技術料を全額カバー。少額の保険料で大きな備えになる人気の特約です。",
  },
  {
    icon: Pill,
    title: "通院・在宅医療",
    description:
      "退院後の通院や在宅医療にかかる費用にも対応。長期治療が必要なケースに安心です。",
  },
  {
    icon: Activity,
    title: "ケガ・スポーツ傷害",
    description:
      "日常のケガ、スポーツ・レジャー中の事故、お子様の事故まで。傷害保険で幅広くカバー。",
  },
  {
    icon: Stethoscope,
    title: "女性疾病特約",
    description:
      "女性特有の病気（乳がん・子宮がん等）に厚く備える特約。20代〜40代の女性に人気です。",
  },
]

const choosePoints = [
  {
    title: "保障期間を選ぶ",
    description:
      "終身型／定期型のどちらが合うかを、ライフプランと公的保障を踏まえて整理します。",
  },
  {
    title: "給付タイプを選ぶ",
    description:
      "入院日額型、一時金型、実費型など、給付の仕組みを比較してご提案します。",
  },
  {
    title: "特約を必要な分だけ",
    description:
      "「全部つけると保険料が高い」を避け、本当に必要な特約だけに絞り込みます。",
  },
]

const partnerCompanies = [
  "SOMPOひまわり生命",
  "メットライフ生命",
  "ネオファースト生命",
  "ソニー生命",
  "東京海上日動（傷害保険）",
  "損保ジャパン（傷害保険）",
]

export default function PersonalMedicalPage() {
  return (
    <InsuranceCategoryLayout
      title="医療保険・傷害保険"
      englishLabel="MEDICAL & ACCIDENT"
      heroBadge="入院・手術・がん・先進医療・ケガに備える"
      lead="日本の公的医療保険は手厚いものの、差額ベッド代・先進医療・収入減など自己負担はゼロではありません。必要な保障だけを必要な分だけ。お客様の家計と健康に合わせた最適な医療・傷害保険をご提案します。"
      accentColor={ACCENT}
      HeroIcon={Stethoscope}
      serviceParam="medical"
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
              医療・傷害保険でカバーできること
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

      {/* 選び方のポイント */}
      <section className="bg-[#FAF7F0] py-16 md:py-24" aria-labelledby="choose-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm font-semibold tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
              HOW TO CHOOSE
            </p>
            <h2
              id="choose-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              選び方の3つのポイント
            </h2>
            <div className="w-12 h-0.5 mx-auto" style={{ backgroundColor: ACCENT }} aria-hidden="true" />
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {choosePoints.map((p, idx) => (
              <li
                key={p.title}
                className="bg-white border border-stone-200 rounded-2xl p-7"
              >
                <span
                  className="font-serif text-3xl font-bold mb-4 block"
                  style={{ color: ACCENT }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">{p.description}</p>
              </li>
            ))}
          </ol>
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
              主な取扱保険会社
            </h2>
            <div className="w-12 h-0.5 mx-auto" style={{ backgroundColor: ACCENT }} aria-hidden="true" />
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {partnerCompanies.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 bg-[#FAF7F0] border border-stone-200 rounded-md py-3 px-4 text-sm text-stone-700"
              >
                <CheckCircle2 className="w-4 h-4 text-[#95C11F] shrink-0" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <p className="text-center text-xs text-stone-500 mt-6">
            ※ お客様の状況に応じて、最適な1社・複数社を比較してご提案します。
          </p>
        </div>
      </section>
    </InsuranceCategoryLayout>
  )
}
