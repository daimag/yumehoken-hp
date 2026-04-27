import type { Metadata } from "next"
import {
  Flame,
  CloudRain,
  Wind,
  Lock,
  Activity,
  HomeIcon,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react"
import InsuranceCategoryLayout from "@/components/insurance-category-layout"

const ACCENT = "#DC2626"

export const metadata: Metadata = {
  title: "火災保険・地震保険｜ゆめほけん（一般のお客様）",
  description:
    "ゆめほけんの火災保険・地震保険のご提案。火災・落雷・水災・風災・盗難から、地震・噴火・津波まで。お住まいに合わせた最適な補償プランを損保3社から比較してご提案します。",
  openGraph: {
    title: "火災保険・地震保険｜ゆめほけん",
    description: "大切なお住まいを、自然災害と不慮の事故から守る。",
  },
}

const coverages = [
  {
    icon: Flame,
    title: "火災・落雷・破裂",
    description:
      "失火・もらい火による損害、落雷による電化製品の故障、ガス漏れ等による爆発などを補償。",
  },
  {
    icon: CloudRain,
    title: "水災（豪雨・洪水）",
    description:
      "近年増加するゲリラ豪雨・台風による浸水・土砂崩れの被害をカバー。北九州エリアでも重要な備え。",
  },
  {
    icon: Wind,
    title: "風災・雪災・雹災",
    description:
      "台風による屋根・外壁の破損、大雪による倒壊、雹（ひょう）による被害なども補償対象。",
  },
  {
    icon: Lock,
    title: "盗難・水濡れ",
    description:
      "盗難による損害、給排水管の事故による水濡れ、外部からの物体落下・飛来などにも対応。",
  },
  {
    icon: Activity,
    title: "地震保険",
    description:
      "地震・噴火・津波が原因の火災や倒壊は通常の火災保険では補償されません。地震保険で備えましょう。",
  },
  {
    icon: HomeIcon,
    title: "家財保険",
    description:
      "家の中の家具・家電・衣類など、家財一式の補償。建物保険とセットで検討するのが一般的です。",
  },
]

const checkpoints = [
  {
    title: "建物の構造・築年数",
    description:
      "M構造（マンション）／T構造（鉄骨）／H構造（木造）で保険料が大きく変わります。",
  },
  {
    title: "ハザードマップの確認",
    description:
      "お住まいの地域の浸水・土砂災害リスクを踏まえて、必要な補償を選びましょう。",
  },
  {
    title: "補償額の設定",
    description:
      "再調達価額（同じ建物を新築するための金額）で設定するのが基本。古い契約は要見直し。",
  },
  {
    title: "地震保険の付帯",
    description:
      "火災保険のみだと地震による損害は補償されません。セット加入が原則のおすすめ。",
  },
]

const partnerCompanies = ["東京海上日動", "東京海上ニッセイ同和", "損保ジャパン"]

export default function PersonalHomePage() {
  return (
    <InsuranceCategoryLayout
      title="火災保険・地震保険"
      englishLabel="HOME INSURANCE"
      heroBadge="火災・水災・風災・盗難・地震に備える"
      lead="火災・落雷・水災・風災・盗難・地震まで、お住まいに関わるリスクは多岐にわたります。建物の構造・お住まいの地域・ご家族構成に合わせた最適な補償プランを、損保3社の中から中立的にご提案します。"
      accentColor={ACCENT}
      HeroIcon={HomeIcon}
      serviceParam="home"
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
              火災保険でカバーできること
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

      {/* 加入時のチェックポイント */}
      <section className="bg-[#FAF7F0] py-16 md:py-24" aria-labelledby="check-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm font-semibold tracking-[0.25em] mb-3" style={{ color: ACCENT }}>
              CHECK POINTS
            </p>
            <h2
              id="check-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              加入時の4つのチェックポイント
            </h2>
            <div className="w-12 h-0.5 mx-auto" style={{ backgroundColor: ACCENT }} aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {checkpoints.map((c, idx) => (
              <div
                key={c.title}
                className="bg-white border border-stone-200 rounded-2xl p-7 flex gap-5"
              >
                <span
                  className="font-serif text-3xl md:text-4xl font-bold leading-none shrink-0"
                  style={{ color: ACCENT }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed">{c.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 bg-white border-l-4 rounded-md p-5 md:p-6 max-w-3xl mx-auto"
            style={{ borderLeftColor: ACCENT }}
          >
            <div className="flex gap-3">
              <AlertTriangle
                className="w-5 h-5 shrink-0 mt-0.5"
                style={{ color: ACCENT }}
                aria-hidden="true"
              />
              <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                <strong>築10年以上の住宅</strong>に多いのが、補償額が現在の再調達価額と乖離しているケース。
                住宅ローン契約時の保険そのままで放置されている方は、ぜひ見直しのご相談を。
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
                key={p}
                className="flex items-center gap-2 bg-[#FAF7F0] border border-stone-200 rounded-md py-4 px-5 text-sm text-stone-700"
              >
                <CheckCircle2 className="w-4 h-4 text-[#95C11F] shrink-0" aria-hidden="true" />
                <span className="font-bold">{p}</span>
              </li>
            ))}
          </ul>

          <p className="text-center text-xs text-stone-500 mt-6">
            ※ 賃貸住宅・マンション・戸建て・店舗併用住宅、それぞれに合わせて最適な保険会社をご提案します。
          </p>
        </div>
      </section>
    </InsuranceCategoryLayout>
  )
}
