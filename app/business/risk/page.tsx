import type { Metadata } from "next"
import {
  Shield,
  TrendingDown,
  Cloud,
  Car,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Users,
} from "lucide-react"
import BusinessSubLayout from "@/components/business-sub-layout"

export const metadata: Metadata = {
  title: "リスクコンサルティング｜法人のお客様｜ゆめほけん",
  description:
    "中小企業を取り巻く労務・自然・交通の3大災害リスクを、保険と専門家ネットワークで総合的にカバー。BCP策定支援から労災対応・業務車両事故対策まで、ゆめほけんの法人向けリスクコンサルティングをご紹介します。",
  openGraph: {
    title: "リスクコンサルティング｜ゆめほけん",
    description: "経営を脅かす3大リスクを、保険と備えで一気通貫にカバー。",
  },
}

const risks = [
  {
    icon: TrendingDown,
    label: "LABOR",
    title: "労務災害リスク",
    summary:
      "従業員の労災・メンタルヘルス・ハラスメントなど、人にまつわるリスクを総合的に診断。",
    issues: [
      "労災認定リスクの増加",
      "過重労働による健康障害",
      "ハラスメント対応のコスト",
      "メンタルヘルス休職の長期化",
    ],
    solutions: [
      "労働災害保険・使用者賠償責任保険の見直し",
      "EAP（従業員支援プログラム）の導入支援",
      "規程整備・研修プログラムのご提案",
      "社労士・弁護士との連携窓口",
    ],
  },
  {
    icon: Cloud,
    label: "DISASTER",
    title: "自然災害リスク",
    summary:
      "地震・台風・豪雨・落雷など、近年増加する自然災害の事業中断リスクをカバー。",
    issues: [
      "豪雨・水害による設備損壊",
      "地震による営業停止",
      "サプライチェーン寸断",
      "BCPが整備されていない",
    ],
    solutions: [
      "地震・水害・休業損失保険の最適化",
      "事業中断補償・利益保険のご提案",
      "BCP策定の伴走支援",
      "ハザードマップに基づく診断",
    ],
  },
  {
    icon: Car,
    label: "TRAFFIC",
    title: "交通災害リスク",
    summary:
      "業務車両の事故、従業員の通勤災害など、交通リスクは経営に直結します。",
    issues: [
      "業務中の事故による賠償リスク",
      "通勤災害の労災適用",
      "保険料の上昇",
      "ドライバー不足と高齢化",
    ],
    solutions: [
      "業務用自動車保険の最適化",
      "通勤災害補償の見直し",
      "事故対応サポートの一元化",
      "安全運転講習との組み合わせ",
    ],
  },
]

const flow = [
  {
    step: "01",
    title: "現状診断",
    description: "現在の保険契約・労務状況・事業環境をヒアリングし、リスクを可視化します。",
  },
  {
    step: "02",
    title: "リスクマッピング",
    description: "発生確率と影響度を整理し、優先順位の高いリスクから対策案をまとめます。",
  },
  {
    step: "03",
    title: "ご提案",
    description: "保険商品・規程整備・専門家紹介を組み合わせた、具体的なリスクヘッジ施策をご提案。",
  },
  {
    step: "04",
    title: "継続支援",
    description: "事業環境の変化に応じて、定期的な見直し面談で常に最適な状態を保ちます。",
  },
]

export default function BusinessRiskPage() {
  return (
    <BusinessSubLayout
      title="リスクコンサルティング"
      englishLabel="RISK CONSULTING"
      lead="中小企業を取り巻く3大リスク（労務・自然・交通）を、保険と専門家ネットワークで一気通貫にカバー。事業を「守り」ながら、経営を「攻め」に変えるリスクヘッジの仕組みをご提案します。"
      HeroIcon={Shield}
      serviceParam="risk"
    >
      {/* 3大リスク詳細 */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="risks-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#3D4A5A] text-sm font-semibold tracking-[0.25em] mb-3">
              THREE MAJOR RISKS
            </p>
            <h2
              id="risks-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              中小企業を取り巻く3大リスク
            </h2>
            <div className="w-12 h-0.5 bg-[#6B7B8C] mx-auto" aria-hidden="true" />
          </div>

          <ol className="space-y-10">
            {risks.map((r, idx) => (
              <li
                key={r.title}
                className="bg-white border border-stone-200 rounded-md overflow-hidden"
              >
                <div className="bg-[#F0F4F7] px-7 py-5 md:px-9 md:py-6 flex items-center gap-4 border-b border-stone-200">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-white">
                    <r.icon className="w-6 h-6 text-[#3D4A5A]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-[#3D4A5A]">
                      {String(idx + 1).padStart(2, "0")} / {r.label}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-[#3D3D3D]">
                      {r.title}
                    </h3>
                  </div>
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-stone-700 leading-relaxed mb-6 text-base md:text-lg">
                    {r.summary}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-[#3D4A5A] mb-3 tracking-widest">
                        <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                        想定される課題
                      </h4>
                      <ul className="space-y-2">
                        {r.issues.map((i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-stone-700 bg-[#FAFBFC] border border-stone-200 rounded-md px-3 py-2"
                          >
                            <span className="text-[#3D4A5A] mt-0.5">●</span>
                            <span>{i}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-[#5C7A14] mb-3 tracking-widest">
                        <Shield className="w-4 h-4" aria-hidden="true" />
                        ゆめほけんのご提案
                      </h4>
                      <ul className="space-y-2">
                        {r.solutions.map((s) => (
                          <li
                            key={s}
                            className="flex items-start gap-2 text-sm text-stone-700 bg-[#F4F8E8] border border-[#D6E5A0] rounded-md px-3 py-2"
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
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 流れ */}
      <section className="bg-[#F0F4F7] py-16 md:py-24" aria-labelledby="flow-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#3D4A5A] text-sm font-semibold tracking-[0.25em] mb-3">
              HOW IT WORKS
            </p>
            <h2
              id="flow-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              ご相談の流れ
            </h2>
            <div className="w-12 h-0.5 bg-[#6B7B8C] mx-auto" aria-hidden="true" />
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {flow.map((f) => (
              <li
                key={f.step}
                className="bg-white border border-stone-200 rounded-md p-6"
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-serif text-3xl font-bold text-[#6B7B8C]">
                    {f.step}
                  </span>
                  <span className="text-xs text-stone-400 tracking-wider">STEP</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{f.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 関連ドキュメント */}
      <section className="bg-white py-12 border-t border-stone-100" aria-label="関連リソース">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAFBFC] border-l-4 border-l-[#6B7B8C] rounded-md p-6 md:p-7 flex items-start gap-4">
            <FileText className="w-6 h-6 text-[#3D4A5A] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2">
                さらに詳しい資料・事例集
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-2">
                業種別のリスク診断シートや、過去の支援事例を冊子・PDFでご用意しています。
                お問い合わせいただければ、貴社の業種に合わせた資料をお送りします。
              </p>
            </div>
          </div>
        </div>
      </section>
    </BusinessSubLayout>
  )
}
