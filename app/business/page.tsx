import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import {
  ArrowRight,
  Phone,
  Mail,
  Shield,
  TrendingDown,
  Cloud,
  Car,
  Users,
  Building2,
  Briefcase,
  Target,
  HandshakeIcon,
  Award,
  Quote,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
} from "lucide-react"

export const metadata: Metadata = {
  title: "法人のお客様へ｜経営を守るリスクヘッジ・コンサル",
  description:
    "ゆめほけんの法人向けサービスは、労務・自然・交通災害のリスクコンサルから、人材定着・組織構築・事業継承・経営相談・安全運転講習まで、中小企業の経営を守る総合パートナー。北九州・小倉南区から、ISO 9001:2015 認証取得の信頼でご支援します。",
  openGraph: {
    title: "法人のお客様へ｜ゆめほけん",
    description: "経営者のリスクを、利益に変える。",
  },
}

// 経営者が直面する3大リスク（リスクコンサル）
const riskAreas = [
  {
    icon: TrendingDown,
    label: "LABOR RISK",
    title: "労務災害",
    description:
      "従業員の労働災害・メンタルヘルス・ハラスメント等、人にまつわるリスクを総合的に診断。労働災害保険の見直しから企業防衛策まで、専門家ネットワークと連携してご提案します。",
    items: ["労災認定リスク", "過重労働対策", "ハラスメント対応", "メンタルヘルス"],
  },
  {
    icon: Cloud,
    label: "DISASTER RISK",
    title: "自然災害",
    description:
      "地震・台風・豪雨・落雷など、近年増加する自然災害の事業中断リスクをカバー。BCP（事業継続計画）の観点から、必要な保険と備えをご提案します。",
    items: ["地震・水害保険", "事業中断補償", "BCP策定支援", "施設復旧保険"],
  },
  {
    icon: Car,
    label: "TRAFFIC RISK",
    title: "交通災害",
    description:
      "業務車両の事故、従業員の通勤災害など、交通リスクは経営に直結します。安全運転講習と組み合わせて、事故を未然に防ぐ体制づくりまで支援します。",
    items: ["業務用自動車保険", "通勤災害補償", "事故対応サポート", "安全運転講習"],
  },
]

// ビジネスコンサルの5領域
const consultingAreas = [
  {
    icon: Users,
    title: "人材定着",
    description: "離職を減らし、社員が長く活躍できる職場づくりをサポート。",
  },
  {
    icon: Building2,
    title: "組織構築",
    description: "経営方針に沿った組織設計・評価制度・規程整備をご支援。",
  },
  {
    icon: Target,
    title: "営業支援",
    description: "営業プロセスの可視化と改善で、売上とお客様満足度を両立。",
  },
  {
    icon: HandshakeIcon,
    title: "事業継承",
    description: "後継者問題・株式承継・M&Aまで、専門家とともにご支援。",
  },
  {
    icon: BarChart3,
    title: "経営相談",
    description: "資金繰り・資産運用・経営課題の整理を、第三者視点で。",
  },
]

// 安全運転講習の効果
const safeDrivingPoints = [
  "従業員の交通事故を未然に防ぐ",
  "保険料の最適化に貢献",
  "企業の社会的責任（CSR）の向上",
  "ドライバー一人ひとりの意識改革",
]

// 法人サービスの強み
const strengths = [
  {
    number: "01",
    title: "ISO 9001:2015 認証取得",
    description: "国際規格に準拠した品質マネジメントシステムを2020年9月から運用。継続的改善に取り組む信頼の証です。",
  },
  {
    number: "02",
    title: "10社の保険会社と提携",
    description: "損保ジャパン・東京海上日動はじめ大手10社と取引。中立的な立場で最適な保険を比較提案できます。",
  },
  {
    number: "03",
    title: "専門家ネットワーク連携",
    description: "社労士・税理士・司法書士など、必要な専門家を即座におつなぎ。ワンストップでご相談を完結できます。",
  },
  {
    number: "04",
    title: "FD宣言で透明な業務運営",
    description: "「お客さま本位の業務運営方針」を毎年公表。2024年は顧客の声139件・つなぐ活動81件を実績報告。",
  },
]

// ご相談の流れ
const flow = [
  {
    step: "01",
    title: "お問い合わせ",
    description: "お電話またはお問い合わせフォームより、貴社の状況を簡単にお聞かせください。",
  },
  {
    step: "02",
    title: "リスク診断",
    description: "現在の保険・労務・事業環境を分析し、経営リスクを可視化します。",
  },
  {
    step: "03",
    title: "ご提案",
    description: "保険プランとリスクヘッジ施策をパッケージでご提案。複数案を比較検討できます。",
  },
  {
    step: "04",
    title: "導入・継続支援",
    description: "ご契約後も定期的に見直し面談を実施。事業環境の変化に応じて最適化します。",
  },
]

export default function BusinessPage() {
  return (
    <>
      {/* ============================================
          Section 1: ヒーロー（グレーブルー基調・フォーマル）
         ============================================ */}
      <section
        className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden bg-[#3D4A5A]"
        aria-label="法人のお客様 メインビジュアル"
      >
        {/* 背景写真（暗めのオーバーレイ） */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/loghouse-illumination.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#2D3748]/95 via-[#3D4A5A]/85 to-[#2D3748]/90"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <div className="max-w-3xl">
            <p className="text-[#A8C8E8] text-sm font-semibold tracking-[0.3em] mb-5">
              FOR BUSINESS — RISK MANAGEMENT
            </p>
            <h1 className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              経営者のリスクを、<br />
              利益に変える。
            </h1>
            <p className="text-stone-200 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
              中小企業を取り巻く労務・自然・交通災害リスク。
              ゆめほけんは、保険と専門家ネットワークを組み合わせて、
              <br className="hidden md:block" />
              貴社の経営を <strong className="text-[#A8E090]">守り、攻めに変える</strong> 総合パートナーです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?type=business"
                className="inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-8 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
              >
                法人向けご相談
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:0939650660"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#3D4A5A] backdrop-blur px-8 py-4 rounded-md font-bold border-2 border-white/40 hover:border-white transition-all"
              >
                <Phone className="w-4 h-4" />
                093-965-0660
              </a>
            </div>
          </div>
        </div>

        {/* ISO バッジ */}
        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 bg-white/95 backdrop-blur px-4 py-2.5 rounded-md shadow-lg">
          <Award className="w-5 h-5 text-[#3D4A5A]" aria-hidden="true" />
          <span className="text-xs font-bold text-[#3D3D3D]">ISO 9001:2015 認証</span>
        </div>
      </section>

      {/* ============================================
          Section 2: 経営者が直面する課題（イントロ）
         ============================================ */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="intro-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#3D4A5A] text-sm font-semibold tracking-[0.25em] mb-3">
            CHALLENGES FOR EXECUTIVES
          </p>
          <h2
            id="intro-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
          >
            こんな経営課題、抱えていませんか？
          </h2>
          <div className="w-12 h-0.5 bg-[#6B7B8C] mx-auto mb-8" aria-hidden="true" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 text-left">
            {[
              "従業員の労災・メンタルヘルスのリスクが心配",
              "近年の自然災害でBCPの重要性を感じている",
              "業務車両事故・通勤災害への備えが不十分",
              "事業継承・M&Aを検討しているが進め方がわからない",
              "既存の保険が現状の事業規模に合っているか不安",
              "社労士・税理士など専門家への窓口を一本化したい",
            ].map((challenge) => (
              <div
                key={challenge}
                className="flex items-start gap-3 bg-[#F0F4F7] border border-stone-200 rounded-md p-5"
              >
                <AlertTriangle
                  className="w-5 h-5 text-[#3D4A5A] mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm text-stone-700 leading-relaxed">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 3: リスクコンサルティング（3領域）
         ============================================ */}
      <section
        className="bg-[#F0F4F7] py-16 md:py-24"
        aria-labelledby="risk-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#3D4A5A] text-sm font-semibold tracking-[0.25em] mb-3">
              RISK CONSULTING
            </p>
            <h2
              id="risk-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              リスクコンサルティング
            </h2>
            <div className="w-12 h-0.5 bg-[#6B7B8C] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              中小企業を取り巻く3大リスクを、保険と対策で総合的にカバー。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {riskAreas.map((r, idx) => (
              <article
                key={r.title}
                className="bg-white border border-stone-200 rounded-md overflow-hidden flex flex-col h-full"
              >
                {/* 上部アクセントバー */}
                <div className="h-1.5 bg-[#6B7B8C]" aria-hidden="true" />
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-[#F0F4F7]">
                      <r.icon className="w-6 h-6 text-[#3D4A5A]" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold tracking-widest text-[#3D4A5A]">
                      {String(idx + 1).padStart(2, "0")} / {r.label}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#3D3D3D] mb-3">
                    {r.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-5 flex-grow">
                    {r.description}
                  </p>
                  <ul className="space-y-2 border-t border-stone-200 pt-5">
                    {r.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-stone-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#95C11F] shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 4: ビジネスコンサルティング（5領域）
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="consulting-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#3D4A5A] text-sm font-semibold tracking-[0.25em] mb-3">
              BUSINESS CONSULTING
            </p>
            <h2
              id="consulting-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              ビジネスコンサルティング
            </h2>
            <div className="w-12 h-0.5 bg-[#6B7B8C] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              保険の枠を越えて、経営の本質的な課題に伴走する5つの支援領域。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {consultingAreas.map((c) => (
              <div
                key={c.title}
                className="bg-[#FAFBFC] border border-stone-200 border-t-4 border-t-[#6B7B8C] rounded-md p-6 hover:border-t-[#95C11F] hover:shadow-md transition-all"
              >
                <c.icon className="w-8 h-8 text-[#3D4A5A] mb-4" aria-hidden="true" />
                <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 5: 安全運転講習（既存サービス）
         ============================================ */}
      <section
        className="bg-[#3D4A5A] text-white py-16 md:py-24 relative overflow-hidden"
        aria-labelledby="safe-driving-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#A8C8E8] text-sm font-semibold tracking-[0.25em] mb-3">
                SAFE DRIVING TRAINING
              </p>
              <h2
                id="safe-driving-heading"
                className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight"
              >
                安全運転講習
              </h2>
              <div className="w-12 h-0.5 bg-[#95C11F] mb-6" aria-hidden="true" />
              <p className="text-stone-200 leading-relaxed mb-6 text-base md:text-lg">
                業務車両を扱う企業さま向けに、
                <strong className="text-white">事故を未然に防ぐための実践的な講習</strong>
                を実施しています。保険会社のリソースとゆめほけん独自のプログラムを組み合わせ、
                ドライバー一人ひとりの安全意識向上を支援します。
              </p>
              <ul className="space-y-3 mb-8">
                {safeDrivingPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#95C11F] mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-stone-200 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?type=business&service=safe-driving"
                className="inline-flex items-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-7 py-3.5 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
              >
                安全運転講習について相談する
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* お客様の声引用 */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-7 md:p-10 relative">
              <Quote
                className="absolute top-5 right-5 w-12 h-12 text-[#95C11F] opacity-30"
                aria-hidden="true"
              />
              <p className="text-[#A8C8E8] text-xs font-semibold tracking-widest mb-4">
                CUSTOMER VOICE
              </p>
              <p className="text-stone-100 leading-relaxed mb-6 text-base md:text-lg">
                「社員の交通事故を減らしたいと思い、ゆめほけんさんに安全運転講習について相談しました。
                講習後、社内の安全意識が大きく変わり、事故件数も減少。
                保険料の見直しにもつながりました。」
              </p>
              <p className="text-sm text-stone-300 border-t border-white/10 pt-4">
                — 北九州市内 法人のお客様
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 6: ゆめほけん法人サービスの強み
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="strengths-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#3D4A5A] text-sm font-semibold tracking-[0.25em] mb-3">
              OUR STRENGTHS
            </p>
            <h2
              id="strengths-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              選ばれる理由
            </h2>
            <div className="w-12 h-0.5 bg-[#6B7B8C] mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((s) => (
              <div
                key={s.number}
                className="flex gap-6 bg-[#F0F4F7] border border-stone-200 rounded-md p-7 hover:bg-white hover:shadow-md transition-all"
              >
                <span className="font-serif text-4xl md:text-5xl font-bold text-[#6B7B8C] leading-none">
                  {s.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#3D3D3D] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 7: ご相談の流れ
         ============================================ */}
      <section
        className="bg-[#F0F4F7] py-16 md:py-24"
        aria-labelledby="flow-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#3D4A5A] text-sm font-semibold tracking-[0.25em] mb-3">
              HOW IT WORKS
            </p>
            <h2
              id="flow-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              ご相談の流れ
            </h2>
            <div className="w-12 h-0.5 bg-[#6B7B8C] mx-auto" aria-hidden="true" />
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {flow.map((f, idx) => (
              <li
                key={f.step}
                className="relative bg-white border border-stone-200 rounded-md p-6"
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
                {idx < flow.length - 1 && (
                  <ArrowRight
                    className="hidden lg:block absolute top-1/2 -right-3 w-5 h-5 text-[#6B7B8C] bg-[#F0F4F7]"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================
          Section 8: お問い合わせCTA
         ============================================ */}
      <section
        className="relative py-16 md:py-24 overflow-hidden bg-[#2D3748]"
        aria-labelledby="contact-heading"
      >
        {/* 背景写真（暗め） */}
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/hero/loghouse-exterior.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#A8C8E8] text-sm font-semibold tracking-[0.25em] mb-3">
            CONTACT US
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-5"
          >
            まずは現状の保険・リスクを無料診断
          </h2>
          <p className="text-stone-200 leading-relaxed mb-3 text-base md:text-lg">
            中立的な立場で、貴社の保険とリスクヘッジを総合的に診断します。
          </p>
          <p className="text-sm text-stone-300 mb-10">
            北九州・小倉南区のログハウスにて、訪問・オンラインでもご相談可能です。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-8">
            <Link
              href="/contact?type=business"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-6 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
            >
              法人向けご相談フォーム
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0939650660"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#3D4A5A] backdrop-blur px-6 py-4 rounded-md font-bold border-2 border-white/40 hover:border-white transition-all"
            >
              <Phone className="w-4 h-4" />
              093-965-0660
            </a>
            <a
              href="mailto:yume@yumehoken.jp"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#3D4A5A] backdrop-blur px-6 py-4 rounded-md font-bold border-2 border-white/40 hover:border-white transition-all"
            >
              <Mail className="w-4 h-4" />
              メールで相談
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-md p-5 max-w-md mx-auto">
            <p className="text-sm text-stone-200 leading-relaxed">
              <strong className="text-white">ドリームインシュアランス株式会社</strong>
              <br />
              〒802-0832 福岡県北九州市小倉南区下石田1-17-17
              <br />
              <span className="text-xs text-stone-400">営業時間：月〜金 9:00〜17:00（土日祝休）</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
