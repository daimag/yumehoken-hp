import type { Metadata } from "next"
import {
  FileBarChart2,
  Truck,
  Building2,
  Cloud,
  Users,
  HandshakeIcon,
  Quote,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import BusinessSubLayout from "@/components/business-sub-layout"

export const metadata: Metadata = {
  title: "支援事例｜法人のお客様｜ゆめほけん",
  description:
    "ゆめほけんが過去にご支援した法人のお客様の事例集。建設業の労務リスク対応、運送業の事故削減、製造業のBCP策定、サービス業の事業継承など、業種別の取り組みをご紹介します。",
  openGraph: {
    title: "支援事例｜ゆめほけん",
    description: "業種別・課題別に、お客様と一緒に取り組んだ支援事例をご紹介。",
  },
}

const cases = [
  {
    icon: Truck,
    industry: "運送業",
    employees: "従業員30名",
    challenge: "業務車両事故の多発と保険料の高騰",
    solution: [
      "事故傾向の分析と原因の可視化",
      "ドライバー全員参加の安全運転講習を実施",
      "保険プランを見直し、契約条件を最適化",
    ],
    result: "1年で事故件数を約半減。翌年の保険料も大幅に最適化。",
    voice:
      "「保険会社をまたいで横断的に提案してもらえたのが大きかった。事故が減ったことで、社内の雰囲気も明るくなりました。」",
  },
  {
    icon: Building2,
    industry: "建設業",
    employees: "従業員15名",
    challenge: "労災リスクと使用者賠償への備え不足",
    solution: [
      "労働災害保険・使用者賠償責任保険の見直し",
      "現場の安全マニュアル整備（社労士連携）",
      "従業員向けメンタルヘルスケアの導入",
    ],
    result: "労災発生時の補償体制を強化し、社員からの安心感も向上。",
    voice:
      "「『万が一があっても会社は守ってくれる』という安心が、現場の集中力につながっていると感じます。」",
  },
  {
    icon: Cloud,
    industry: "製造業",
    employees: "従業員50名",
    challenge: "豪雨災害でのBCP（事業継続計画）整備",
    solution: [
      "ハザードマップに基づくリスク診断",
      "事業中断補償・利益保険のご提案",
      "簡易BCPテンプレートの作成支援",
    ],
    result: "想定リスクを可視化し、取引先からの信頼度が向上。",
    voice:
      "「BCPは『いつかやろう』で先送りしていましたが、保険と一緒に整理してもらえたので一気に進みました。」",
  },
  {
    icon: HandshakeIcon,
    industry: "サービス業",
    employees: "従業員10名",
    challenge: "経営者の事業継承と退職金準備",
    solution: [
      "事業承継のスキーム設計（税理士連携）",
      "経営者保険を活用した退職金準備",
      "後継者の育成計画と権限移譲のロードマップ",
    ],
    result: "数年単位での承継計画を可視化し、家族・社員ともに安心。",
    voice:
      "「事業承継は『重い話』と感じていましたが、保険と税務をセットで整理してもらえたので、一歩を踏み出せました。」",
  },
  {
    icon: Users,
    industry: "卸売業",
    employees: "従業員25名",
    challenge: "若手社員の離職率の高さ",
    solution: [
      "従業員サーベイで離職要因を可視化",
      "GLTD（団体長期障害所得補償保険）導入",
      "評価制度・キャリアパスの再設計",
    ],
    result: "離職率が改善し、求人応募数も増加。",
    voice:
      "「保険代理店なのに、ここまで人事の話に踏み込んでくれるとは思いませんでした。社員からも好評です。」",
  },
]

export default function BusinessCasesPage() {
  return (
    <BusinessSubLayout
      title="支援事例"
      englishLabel="CASE STUDIES"
      lead="ゆめほけんがこれまでにご支援してきた、業種別・課題別の事例をご紹介します。リスクコンサル・ビジネスコンサル・安全運転講習を組み合わせ、貴社の経営課題にも応用できる取り組みです。"
      HeroIcon={FileBarChart2}
      serviceParam="cases"
    >
      {/* 事例リスト */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="cases-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="cases-heading" className="sr-only">
            事例一覧
          </h2>

          <ol className="space-y-10 md:space-y-12">
            {cases.map((c, idx) => (
              <li
                key={c.industry + idx}
                className="bg-white border border-stone-200 rounded-md overflow-hidden"
              >
                <div className="bg-[#F0F4F7] px-7 py-5 md:px-9 md:py-6 flex flex-wrap items-center gap-4 border-b border-stone-200">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-white">
                    <c.icon className="w-6 h-6 text-[#3D4A5A]" aria-hidden="true" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-semibold tracking-widest text-[#3D4A5A] mb-1">
                      CASE {String(idx + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-[#3D3D3D]">
                      {c.industry}
                      <span className="text-sm text-stone-500 font-normal ml-3">
                        / {c.employees}
                      </span>
                    </h3>
                  </div>
                </div>

                <div className="p-7 md:p-9 grid grid-cols-1 lg:grid-cols-3 gap-7">
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-[#6B7B8C] mb-2">
                      課題
                    </h4>
                    <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-[#5C7A14] mb-2">
                      ご提案・実行内容
                    </h4>
                    <ul className="space-y-1.5">
                      {c.solution.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-2 text-sm text-stone-700 leading-relaxed"
                        >
                          <CheckCircle2
                            className="w-4 h-4 text-[#95C11F] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-[#3D4A5A] mb-2">
                      成果
                    </h4>
                    <p className="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
                      {c.result}
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAFBFC] border-t border-stone-200 px-7 py-5 md:px-9 md:py-6 relative">
                  <Quote
                    className="absolute top-3 right-5 w-8 h-8 text-[#6B7B8C] opacity-20"
                    aria-hidden="true"
                  />
                  <p className="text-sm md:text-base text-stone-700 leading-relaxed italic">
                    {c.voice}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="text-center text-xs text-stone-500 mt-10">
            ※ 事例の内容はお客様のご了解の範囲で一部編集して掲載しています。
          </p>
        </div>
      </section>

      {/* 関連ハブ */}
      <section className="bg-[#F0F4F7] py-12 md:py-16" aria-label="関連サービス">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-[#3D3D3D] mb-8 text-center">
            関連サービス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { href: "/business/risk", label: "リスクコンサルティング", desc: "労務・自然・交通の3大リスクを総合カバー" },
              { href: "/business/consulting", label: "ビジネスコンサルティング", desc: "経営の本質的課題に伴走する5領域" },
              { href: "/business/safe-driving", label: "安全運転講習", desc: "事故を未然に防ぐ実践的プログラム" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group bg-white border border-stone-200 rounded-md p-6 hover:border-[#6B7B8C] hover:shadow-md transition-all"
              >
                <p className="font-serif text-lg font-bold text-[#3D3D3D] mb-2 group-hover:text-[#3D4A5A] transition-colors">
                  {l.label}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">{l.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-[#3D4A5A] font-semibold">
                  詳しく見る
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </BusinessSubLayout>
  )
}
