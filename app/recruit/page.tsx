import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Briefcase,
  Heart,
  Smile,
  Sprout,
  Sparkles,
  TreePine,
  Coffee,
  Users,
  GraduationCap,
  HandshakeIcon,
  Calendar,
  Clock,
  Award,
  CheckCircle2,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "採用情報｜ゆめほけん（ドリームインシュアランス）",
  description:
    "ゆめほけん（ドリームインシュアランス株式会社）の採用情報。北九州市小倉南区のログハウスオフィスで、保険代理店スタッフ・終活アドバイザーを募集中。「安心と夢をつないで笑顔をまもる」を理念とする一生涯のパートナーチームの一員として活躍しませんか。",
  openGraph: {
    title: "採用情報｜ゆめほけん",
    description: "“ゆめ”を持つ人と、はたらく。北九州ログハウスの保険代理店。",
  },
}

// ゆめほけんで働く魅力
const appeals = [
  {
    icon: TreePine,
    title: "ログハウスで働く",
    description:
      "木のぬくもりに包まれた本格的なログハウスがあなたのオフィス。冬は薪ストーブ、夏は木陰の心地よさ。",
  },
  {
    icon: Users,
    title: "顔の見えるチーム",
    description:
      "従業員6名のアットホームな環境。代表との距離が近く、提案や挑戦が形になりやすい職場です。",
  },
  {
    icon: HandshakeIcon,
    title: "専門家ネットワーク",
    description:
      "士業・不動産・葬儀社など各分野の専門家と連携。保険を超えた幅広いキャリアを築けます。",
  },
  {
    icon: GraduationCap,
    title: "資格取得サポート",
    description:
      "ISO 9001:2015 認証下で、品質向上研修を毎月実施。資格取得を会社が後押しします。",
  },
  {
    icon: Coffee,
    title: "ゆめブレンド",
    description:
      "自社ブランドコーヒー「ゆめブレンド」（おつき珈琲 presents）でほっと一息。お客様にも好評。",
  },
  {
    icon: Heart,
    title: "地域貢献を仕事に",
    description:
      "5つのCSRパートナーへの支援活動など、社会貢献を業務として行える環境です。",
  },
]

// 1日の流れ（仮）
const dailyFlow = [
  { time: "8:50", task: "出社・朝礼", note: "メンバーの状況共有" },
  { time: "9:00", task: "営業時間スタート", note: "来店・電話対応開始" },
  { time: "10:00", task: "お客様対応・面談", note: "ご来店・訪問・オンライン" },
  { time: "12:00", task: "ランチ休憩", note: "近くの飲食店もおすすめ" },
  { time: "13:00", task: "保険プラン作成・事務処理", note: "提案資料・契約書類" },
  { time: "15:00", task: "外回り or 研修", note: "訪問・社内研修・専門家連絡" },
  { time: "17:00", task: "退社", note: "残業は基本なし" },
]

// 募集職種（プレースホルダー）
const positions = [
  {
    title: "保険代理店スタッフ",
    employmentType: "正社員",
    description:
      "個人・法人のお客様向けに、保険のご提案・契約手続き・アフターフォローを担当。複数の保険会社の中から最適なプランを比較提案します。",
    requirements: [
      "普通自動車運転免許（AT限定可）",
      "PCの基本操作（Word・Excel）",
      "未経験者歓迎（入社後に資格取得サポートあり）",
    ],
    welcome: ["損害保険募集人資格", "生命保険募集人資格", "FP資格"],
  },
  {
    title: "終活アドバイザー",
    employmentType: "正社員 / パート",
    description:
      "終活ステーションの担当として、相続・遺品整理・葬儀・介護等のご相談を受け、専門家ネットワークと連携してお客様をサポート。",
    requirements: [
      "コミュニケーション能力",
      "シニア層との対話に抵抗がないこと",
      "介護・福祉・士業のご経験者歓迎",
    ],
    welcome: ["FP資格", "宅地建物取引士", "介護福祉士"],
  },
]

export default function RecruitPage() {
  return (
    <>
      {/* ============================================
          Section 1: ヒーロー
         ============================================ */}
      <section
        className="relative min-h-[480px] md:min-h-[560px] flex items-center overflow-hidden"
        aria-label="採用情報 メインビジュアル"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero/loghouse-interior.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#8B5A2B]/85 via-[#3D3D3D]/65 to-[#5C7A14]/55"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <div className="max-w-3xl">
            <p className="text-[#F4D58D] text-sm font-semibold tracking-[0.3em] mb-5">
              JOIN US — RECRUIT
            </p>
            <h1 className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              “ゆめ”を持つ人と、<br />
              はたらく。
            </h1>
            <p className="text-stone-100 text-base md:text-lg leading-relaxed max-w-2xl">
              北九州・小倉南区のログハウスオフィスで、お客さまの「ゆめ」と「あんしん」を
              一緒につなげる仲間を募集しています。
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 2: 代表メッセージ（採用向け）
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="ceo-message">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#FAF3E2] to-[#F4F8E8] rounded-2xl p-8 text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-white border-4 border-[#8B5A2B] flex items-center justify-center shadow mb-4">
                  <Briefcase className="w-16 h-16 text-[#8B5A2B]" aria-hidden="true" />
                </div>
                <p className="font-serif text-xl font-bold text-[#3D3D3D]">森 幹人</p>
                <p className="text-xs text-[#8B5A2B] font-semibold tracking-wider mt-2">
                  代表取締役
                </p>
                <p className="text-xs text-stone-400 italic mt-3">※写真は後日差し替え</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
                MESSAGE
              </p>
              <h2
                id="ceo-message"
                className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4 leading-tight"
              >
                求めているのは、<br />
                「夢をかなえる伴走者」
              </h2>
              <div className="w-12 h-0.5 bg-[#95C11F] mb-6" aria-hidden="true" />

              <div className="space-y-4 text-stone-700 leading-relaxed text-base md:text-lg">
                <p>
                  ゆめほけんは、保険を売る会社ではありません。
                  お客さま一人ひとりの「ゆめ」に伴走する、地域に根ざした保険代理店です。
                </p>
                <p>
                  保険、終活、リスクマネジメント、ライフプラン——わたしたちが扱うのは、
                  人の人生そのものです。
                  だからこそ、<strong className="text-[#5C7A14]">「お客さまの話に耳を傾けられる人」</strong>
                  を求めています。
                </p>
                <p>
                  経験よりも、想い。スキルよりも、誠実さ。
                  ログハウスのあたたかい空間で、
                  あなたの「ゆめ」と一緒に、お客さまの「ゆめ」も応援していきませんか。
                </p>
              </div>

              <p className="mt-8 font-serif text-base text-[#5C7A14] font-bold">
                ドリームインシュアランス株式会社<br />
                代表取締役 森 幹人
              </p>
              <p className="mt-3 text-xs text-stone-500 italic">
                ※ 上記は仮文です。森社長へのヒアリング後に差し替え予定。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 3: ゆめほけんで働く魅力
         ============================================ */}
      <section
        className="bg-[#FAF7F0] py-16 md:py-24"
        aria-labelledby="appeals-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              WHY YUMEHOKEN
            </p>
            <h2
              id="appeals-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              ゆめほけんで働く、6つの魅力
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appeals.map((a) => (
              <div
                key={a.title}
                className="bg-white border border-stone-200 rounded-2xl p-7 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F4F8E8] mb-4">
                  <a.icon className="w-7 h-7 text-[#5C7A14]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 4: 募集職種
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="positions-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              OPEN POSITIONS
            </p>
            <h2
              id="positions-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              募集職種
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <div className="space-y-6">
            {positions.map((p) => (
              <article
                key={p.title}
                className="bg-white border border-stone-200 rounded-lg overflow-hidden"
              >
                <div className="h-1.5 bg-[#95C11F]" aria-hidden="true" />
                <div className="p-7 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#3D3D3D] mb-2">
                        {p.title}
                      </h3>
                      <span className="inline-block text-xs font-semibold text-[#5C7A14] bg-[#F4F8E8] px-3 py-1 rounded">
                        {p.employmentType}
                      </span>
                    </div>
                    <Link
                      href={`/contact?type=recruit&service=${encodeURIComponent(p.title)}`}
                      className="inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-6 py-3 rounded-md font-bold text-sm transition-all shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                      応募する
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
                    {p.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-sm text-[#5C7A14] mb-3">必須要件</h4>
                      <ul className="space-y-2">
                        {p.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2 text-sm text-stone-700">
                            <CheckCircle2 className="w-4 h-4 text-[#95C11F] mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#5C7A14] mb-3">歓迎するスキル・資格</h4>
                      <ul className="space-y-2">
                        {p.welcome.map((w) => (
                          <li key={w} className="flex items-start gap-2 text-sm text-stone-700">
                            <Sparkles className="w-4 h-4 text-[#C8956B] mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-xs text-stone-500 mt-6">
            ※ 募集職種・要件は社内協議後に差し替え予定です。詳細はお問い合わせください。
          </p>
        </div>
      </section>

      {/* ============================================
          Section 5: 1日の流れ
         ============================================ */}
      <section
        className="bg-[#F4F8E8] py-16 md:py-24"
        aria-labelledby="daily-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              A DAY AT YUMEHOKEN
            </p>
            <h2
              id="daily-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              1日の流れ
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <ol className="bg-white border border-stone-200 rounded-lg overflow-hidden divide-y divide-stone-200">
            {dailyFlow.map((d) => (
              <li
                key={d.time}
                className="flex items-start gap-4 md:gap-6 px-6 py-5"
              >
                <div className="flex items-center gap-2 w-20 md:w-28 shrink-0">
                  <Clock className="w-4 h-4 text-[#5C7A14]" aria-hidden="true" />
                  <span className="font-serif text-base md:text-lg font-bold text-[#5C7A14]">
                    {d.time}
                  </span>
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-sm md:text-base text-[#3D3D3D] mb-1">{d.task}</p>
                  <p className="text-xs md:text-sm text-stone-600">{d.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================
          Section 6: ログハウスオフィス
         ============================================ */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="office-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              OUR OFFICE
            </p>
            <h2
              id="office-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              ログハウスがあなたのオフィス
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/hero/loghouse-exterior.jpg"
                alt="ログハウス外観"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/hero/loghouse-interior.png"
                alt="木の内装と薪ストーブ"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/hero/loghouse-entrance.png"
                alt="ログハウスの玄関"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 7: お問い合わせCTA
         ============================================ */}
      <section
        className="relative py-16 md:py-24 overflow-hidden bg-[#3D2D1A]"
        aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero/loghouse-illumination.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F4D58D] text-sm font-semibold tracking-[0.25em] mb-3">
            APPLY NOW
          </p>
          <h2
            id="cta-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-5"
          >
            まずは、お話を聞かせてください
          </h2>
          <p className="text-white/90 leading-relaxed mb-10 text-base md:text-lg">
            ご応募・ご相談は、お問い合わせフォーム・お電話・メール どちらからでも歓迎です。
            <br className="hidden md:block" />
            「ちょっと話を聞いてみたい」だけでも、お気軽にどうぞ。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Link
              href="/contact?type=recruit"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-6 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
            >
              採用エントリー
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0939650660"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#5C7A14] backdrop-blur px-6 py-4 rounded-md font-bold border-2 border-white/40 hover:border-white transition-all"
            >
              <Phone className="w-4 h-4" />
              093-965-0660
            </a>
            <a
              href="mailto:yume@yumehoken.jp"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#5C7A14] backdrop-blur px-6 py-4 rounded-md font-bold border-2 border-white/40 hover:border-white transition-all"
            >
              <Mail className="w-4 h-4" />
              メール
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
