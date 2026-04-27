import type { Metadata } from "next"
import { Heart, Users, Baby, Briefcase, Stethoscope, CheckCircle2, Sparkles } from "lucide-react"
import InsuranceCategoryLayout from "@/components/insurance-category-layout"

const ACCENT = "#E94B6E"

export const metadata: Metadata = {
  title: "生命保険｜ゆめほけん（一般のお客様）",
  description:
    "ゆめほけんの生命保険のご提案。死亡保障・医療特約・介護保障・学資保険・終身保険まで、ご家族のライフステージに合わせたプランを7社の生保会社から比較してご提案します。",
  openGraph: {
    title: "生命保険｜ゆめほけん",
    description: "ご家族の暮らしを守る、最適な保障をご一緒に。",
  },
}

const coverages = [
  {
    icon: Heart,
    title: "死亡保障",
    description:
      "万が一のとき、ご家族が安心して生活を続けられる経済的な備え。掛け捨て型・終身型を比較してご提案します。",
  },
  {
    icon: Stethoscope,
    title: "医療保障",
    description:
      "入院・手術・通院費用をカバー。先進医療特約・がん特約・三大疾病特約など、必要な保障だけを上乗せ可能。",
  },
  {
    icon: Users,
    title: "介護保障",
    description:
      "公的介護保険だけではまかないきれない費用に備える、民間の介護保障。要介護度に応じた給付金タイプもあります。",
  },
  {
    icon: Baby,
    title: "学資保険",
    description:
      "お子様の進学資金を計画的に準備。契約者が万一のときも保険料が免除されるプランも。",
  },
  {
    icon: Briefcase,
    title: "就業不能保障",
    description:
      "病気やケガで働けなくなった期間の収入をカバー。住宅ローンや家計の支払いが続く方に。",
  },
  {
    icon: Sparkles,
    title: "終身保険・年金保険",
    description:
      "貯蓄性を兼ねた一生涯の保障や、老後資金として受け取れる個人年金保険などをライフプランに合わせて。",
  },
]

const lifeEvents = [
  "結婚・新婚生活",
  "お子様の誕生・進学",
  "住宅購入・住宅ローン",
  "転職・独立",
  "退職・セカンドライフ",
  "ご両親の介護・相続準備",
]

const partnerCompanies = [
  "SOMPOひまわり生命",
  "第一生命",
  "ソニー生命",
  "メットライフ生命",
  "ネオファースト生命",
  "日本生命",
  "はなさく生命",
]

export default function PersonalLifePage() {
  return (
    <InsuranceCategoryLayout
      title="生命保険"
      englishLabel="LIFE INSURANCE"
      heroBadge="生保7社の中から最適なプランをご提案"
      lead="ご家族の暮らしを守る死亡保障から、医療・介護・学資・年金まで。生命保険7社の中から、お客様のライフステージに合わせた最適なプランを中立的にご提案します。"
      accentColor={ACCENT}
      HeroIcon={Heart}
      serviceParam="life"
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
              生命保険でカバーできること
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

      {/* 見直しタイミング */}
      <section className="bg-[#FAF7F0] py-16 md:py-24" aria-labelledby="timing-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
                LIFE EVENTS
              </p>
              <h2
                id="timing-heading"
                className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-4 leading-tight"
              >
                ご相談・見直しの<br />おすすめタイミング
              </h2>
              <div
                className="w-12 h-0.5 mb-6"
                style={{ backgroundColor: ACCENT }}
                aria-hidden="true"
              />
              <p className="text-stone-700 leading-relaxed mb-5 text-base md:text-lg">
                生命保険は「一度入ったら終わり」ではなく、ライフイベントごとに必要な保障が変わります。
                次のような節目には、ぜひ見直しのご相談を。
              </p>
              <p className="text-stone-700 leading-relaxed text-sm md:text-base">
                現在の加入状況を伺い、不要な保障を減らして本当に必要な保障に集約することで、
                <strong style={{ color: ACCENT }}>保険料が下がるケースも多くあります。</strong>
              </p>
            </div>

            <ul className="bg-white border border-stone-200 rounded-2xl p-7 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {lifeEvents.map((e) => (
                <li
                  key={e}
                  className="flex items-center gap-2 text-sm md:text-base text-stone-700 bg-[#FAF7F0] rounded-md px-4 py-3"
                >
                  <CheckCircle2
                    className="w-4 h-4 shrink-0"
                    style={{ color: ACCENT }}
                    aria-hidden="true"
                  />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
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
              主な取扱保険会社（生保7社）
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
