import type { Metadata } from "next"
import Link from "next/link"
import {
  Cat,
  Dog,
  HeartPulse,
  Stethoscope,
  Pill,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import InsuranceCategoryLayout from "@/components/insurance-category-layout"

const ACCENT = "#C8956B"

export const metadata: Metadata = {
  title: "ペット保険｜ゆめほけん（一般のお客様）",
  description:
    "ゆめほけんが取扱う「あんしんペット」（東京海上ニッセイ同和損保）。犬・猫の通院・入院・手術費用を補償する、家族の一員のための保険です。",
  openGraph: {
    title: "ペット保険｜ゆめほけん",
    description: "大切な家族の、もしもに備えて。",
  },
}

const coverages = [
  {
    icon: Stethoscope,
    title: "通院費用",
    description:
      "ケガ・病気での動物病院への通院。診察料・処置費・検査費・薬代まで幅広くカバー。",
  },
  {
    icon: HeartPulse,
    title: "入院費用",
    description:
      "症状の重いケースや術後の入院費用。入院日数に応じた補償で、突発的な高額負担に備えます。",
  },
  {
    icon: Pill,
    title: "手術費用",
    description:
      "がん・骨折・避妊去勢以外の手術など、高額になりがちな手術費用を補償。",
  },
]

const reasons = [
  {
    title: "高額になりやすい治療費",
    description:
      "ペットには公的医療保険がありません。手術が必要になると数十万円かかるケースも珍しくありません。",
  },
  {
    title: "高齢化と病気のリスク",
    description:
      "近年、ペットの平均寿命は伸びている一方、シニア期の病気は増えがち。早めの加入が安心です。",
  },
  {
    title: "家族の選択肢を増やす",
    description:
      "「金銭面で治療を諦める」を避けるため。最善の治療を選んであげるための備えです。",
  },
]

const faq = [
  {
    q: "犬と猫、どちらも加入できますか？",
    a: "はい、犬・猫それぞれにプランをご用意しています。年齢や品種によって保険料が異なるため、お見積もりさせてください。",
  },
  {
    q: "高齢のペットでも加入できますか？",
    a: "保険会社により新規加入の年齢上限が定められています。お早めのご相談をおすすめします。",
  },
  {
    q: "持病があっても加入できますか？",
    a: "症状や種類によります。一部条件を付けて加入できるケースもありますので、まずはご相談ください。",
  },
]

export default function PersonalPetPage() {
  return (
    <InsuranceCategoryLayout
      title="ペット保険「あんしんペット」"
      englishLabel="PET INSURANCE"
      heroBadge="東京海上ニッセイ同和損保 取扱"
      lead="家族の一員であるペットの「もしも」に備える保険です。通院・入院・手術費用を補償する「あんしんペット」（東京海上ニッセイ同和損保）を取扱中。年齢・品種に合わせた最適なプランをご提案します。"
      accentColor={ACCENT}
      HeroIcon={Cat}
      serviceParam="pet"
    >
      {/* 補償内容 */}
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
              ペット保険の補償内容
            </h2>
            <div className="w-12 h-0.5 mx-auto" style={{ backgroundColor: ACCENT }} aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {coverages.map((c) => (
              <div
                key={c.title}
                className="bg-white border border-stone-200 rounded-2xl p-7 hover:shadow-md transition-shadow"
              >
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4"
                  style={{ backgroundColor: `${ACCENT}15` }}
                >
                  <c.icon className="w-7 h-7" style={{ color: ACCENT }} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#3D3D3D] mb-3">{c.title}</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-stone-500 mt-8">
            ※ 補償の限度額・回数・対象外となる事由については、各プランの約款をご確認ください。
          </p>
        </div>
      </section>

      {/* 必要な理由 */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: `${ACCENT}10` }}
        aria-labelledby="reasons-heading"
      >
        <div className="absolute -bottom-10 -right-10 opacity-10" aria-hidden="true">
          <Dog className="w-72 h-72" style={{ color: ACCENT }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm font-semibold tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
              WHY NEEDED
            </p>
            <h2
              id="reasons-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              ペット保険が必要とされる理由
            </h2>
            <div className="w-12 h-0.5 mx-auto" style={{ backgroundColor: ACCENT }} aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reasons.map((r, idx) => (
              <div
                key={r.title}
                className="bg-white border border-stone-200 rounded-2xl p-7"
              >
                <span
                  className="font-serif text-4xl font-bold mb-4 block"
                  style={{ color: ACCENT }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-3 leading-tight">
                  {r.title}
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              よくあるご質問
            </h2>
            <div className="w-12 h-0.5 mx-auto" style={{ backgroundColor: ACCENT }} aria-hidden="true" />
          </div>

          <dl className="space-y-4">
            {faq.map((item, idx) => (
              <details
                key={idx}
                className="group bg-[#FAF7F0] border border-stone-200 rounded-lg overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-5 flex items-start gap-4 hover:bg-white transition-colors">
                  <span
                    className="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-full text-white font-serif font-bold text-sm"
                    style={{ backgroundColor: ACCENT }}
                  >
                    Q
                  </span>
                  <p className="flex-grow font-semibold text-[#3D3D3D] text-sm md:text-base leading-relaxed pt-0.5">
                    {item.q}
                  </p>
                  <span
                    className="shrink-0 transition-transform group-open:rotate-45 text-2xl leading-none pt-0.5"
                    style={{ color: ACCENT }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-0 flex items-start gap-4">
                  <span className="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-white border border-stone-200 text-[#8B5A2B] font-serif font-bold text-sm">
                    A
                  </span>
                  <p className="flex-grow text-sm md:text-base text-stone-700 leading-relaxed pt-0.5">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* ネット申込誘導 */}
      <section
        className="py-12 md:py-16"
        style={{ backgroundColor: `${ACCENT}10` }}
        aria-label="ネット申込のご案内"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
            APPLY ONLINE
          </p>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-[#3D3D3D] mb-4">
            ペット保険のネット申込はこちら
          </h2>
          <p className="text-stone-700 leading-relaxed mb-6 text-sm md:text-base">
            ネット申込ページから、24時間お申込み可能です。
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-white border-2 px-7 py-3.5 rounded-md font-bold transition-all"
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            ネット申込ページへ
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </InsuranceCategoryLayout>
  )
}
