import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Heart,
  Activity,
  Home as HomeIcon,
  Flame,
  PiggyBank,
  Car,
  Cat,
  ShieldCheck,
  Sparkles,
  MapPin,
  Video,
  Quote,
  CheckCircle2,
  Clock,
  Users,
  Globe2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "一般のお客様へ｜あんしんつなぎ・保険のご相談",
  description:
    "ゆめほけん（ドリームインシュアランス）の一般のお客様向けサービス。生命・医療・自動車・火災・資産・ペット保険まで、10社の保険会社から最適なプランをご提案。北九州・小倉南区のログハウスで来店相談・訪問・LINE対応も可能です。",
  openGraph: {
    title: "一般のお客様へ｜ゆめほけん",
    description: "あなたの暮らしに、ぴったりの安心を。",
  },
}

// 6つの「守る」カテゴリ（既存サイトの6カテゴリを踏襲）
const insuranceCategories = [
  {
    icon: Heart,
    accent: "#E94B6E",
    bg: "bg-rose-50",
    label: "LIFE",
    title: "命を守る",
    subtitle: "生命保険",
    description:
      "ご家族の生活を守る死亡保障から、医療・介護・就業不能まで。ライフステージに合わせて見直しが可能です。",
    features: ["死亡保障", "医療特約", "介護保障", "学資保険"],
  },
  {
    icon: Activity,
    accent: "#F59E0B",
    bg: "bg-amber-50",
    label: "MEDICAL",
    title: "ケガから守る",
    subtitle: "傷害保険",
    description:
      "日常の事故・スポーツ中のケガ・手術費用などを補償。お子様向けや高齢者向けプランもご用意。",
    features: ["入院・手術", "通院補償", "スポーツ・レジャー", "賠償責任"],
  },
  {
    icon: HomeIcon,
    accent: "#95C11F",
    bg: "bg-[#F4F8E8]",
    label: "DAILY",
    title: "くらしを守る",
    subtitle: "生活保険",
    description:
      "個人賠償責任・自転車事故・住居の破損など、日常生活のさまざまなリスクを総合的にカバー。",
    features: ["個人賠償責任", "自転車保険", "持ち物の破損", "携行品補償"],
  },
  {
    icon: Flame,
    accent: "#DC2626",
    bg: "bg-red-50",
    label: "HOUSE",
    title: "家を守る",
    subtitle: "火災保険",
    description:
      "火災・水災・風災・盗難など、大切なお住まいを総合的に守ります。地震保険とのセットもご相談を。",
    features: ["火災・落雷", "水災・風災", "盗難・破損", "地震保険"],
  },
  {
    icon: PiggyBank,
    accent: "#7C3AED",
    bg: "bg-violet-50",
    label: "ASSETS",
    title: "資産を守る",
    subtitle: "資産保険",
    description:
      "老後資金・教育資金・相続対策まで。NISA・iDeCo時代の資産形成を保険商品の視点でサポート。",
    features: ["個人年金", "終身保険", "学資保険", "相続対策"],
  },
  {
    icon: Car,
    accent: "#0EA5E9",
    bg: "bg-sky-50",
    label: "AUTO",
    title: "事故から守る",
    subtitle: "自動車保険",
    description:
      "対人・対物賠償から車両保険まで。1日単位の「乗るピタ」（東京海上日動）もお取扱しています。",
    features: ["対人・対物賠償", "車両保険", "ロードサービス", "乗るピタ（短期）"],
  },
]

// 特集サービス
const featuredServices = [
  {
    icon: Cat,
    title: "ペット保険",
    sub: "東京海上ニッセイ同和「あんしんペット」",
    description:
      "大切な家族の一員であるペットの通院・手術費用を補償。犬・猫の年齢や品種に合わせた最適なプランをご案内します。",
    href: "/contact?type=personal&service=pet",
    cta: "ペット保険を相談",
    accent: "#C8956B",
  },
  {
    icon: Car,
    title: "「乗るピタ」",
    sub: "1日単位の自動車保険（東京海上日動）",
    description:
      "他人の車を借りるときに、1日500円〜加入できる自動車保険。スマホから簡単手続きで、レジャーや帰省時の備えに最適です。",
    href: "/contact?type=personal&service=norupita",
    cta: "乗るピタについて",
    accent: "#0EA5E9",
  },
]

// 取扱保険会社（TOPと同じ10社）
const insuranceCompanies = {
  damage: [
    { name: "損保ジャパン", category: "損保" },
    { name: "東京海上日動", category: "損保" },
    { name: "東京海上ニッセイ同和", category: "損保" },
  ],
  life: [
    { name: "SOMPOひまわり生命", category: "生保" },
    { name: "第一生命", category: "生保" },
    { name: "ソニー生命", category: "生保" },
    { name: "メットライフ生命", category: "生保" },
    { name: "ネオファースト生命", category: "生保" },
    { name: "日本生命", category: "生保" },
    { name: "はなさく生命", category: "生保" },
  ],
}

// 相談方法（4種）
const consultMethods = [
  {
    icon: MapPin,
    title: "来店相談",
    description: "北九州・小倉南区のログハウスへぜひ。木のぬくもりのある空間で、お茶を飲みながらお話を伺います。",
    note: "駐車場完備",
  },
  {
    icon: Users,
    title: "訪問相談",
    description: "ご自宅やご都合の良い場所へお伺いします。大切な書類や家族との相談に便利です。",
    note: "北九州市内",
  },
  {
    icon: MessageCircle,
    title: "LINE相談",
    description: "公式LINEからお気軽にご質問・ご相談いただけます。気軽な一次相談に。",
    note: "@942hvyou",
  },
  {
    icon: Video,
    title: "オンライン相談",
    description: "Zoom等を使ったオンライン面談も承ります。遠方の方や時間の取りづらい方に。",
    note: "事前予約制",
  },
]

// よくある質問
const faqs = [
  {
    q: "保険を見直したいのですが、何から始めればいいですか？",
    a: "まずは無料相談からお気軽にどうぞ。現在の加入状況とご家族構成・将来設計を伺い、必要な保障と不要な保障を整理します。複数の保険会社の中から最適なプランを比較提案します。",
  },
  {
    q: "他社で加入している保険の相談もできますか？",
    a: "もちろん可能です。ゆめほけんは中立的な立場で、お客様のためになる選択をご提案します。他社加入のままで継続が良いケースもありますので、率直にお伝えします。",
  },
  {
    q: "相談料はかかりますか？",
    a: "ご相談は無料です。保険会社から代理店手数料が支払われる仕組みのため、お客様からの費用はいただきません。",
  },
  {
    q: "事故やトラブルの時はどう対応すればいいですか？",
    a: "夜間・休日でも事故対応窓口をご案内しています。レッカー手配など緊急時のサポート体制も整っているので、まずはお電話ください。",
  },
  {
    q: "営業エリアはどこまでですか？",
    a: "北九州市および周辺地域を中心にご対応しています。オンライン相談であれば全国どこからでも可能です。",
  },
]

// お客様の声（既存サイト準拠）
const voices = [
  {
    name: "30代女性",
    location: "北九州市八幡西区",
    icon: Heart,
    body:
      "結婚を機に保険を見直したくて相談しました。担当の方が私たち夫婦のライフプランをじっくり聞いてくれて、必要な保障だけに絞ってくださったので、月々の保険料が以前より安くなったのに安心感が増しました。",
  },
  {
    name: "60代男性",
    location: "北九州市小倉南区",
    icon: ShieldCheck,
    body:
      "退職を控えて、保険の整理をしたいと思って相談に。いくつもの保険会社の中から、自分に合ったプランを比較して提案してくれて助かりました。ログハウスの雰囲気も良くて、また来たくなる場所です。",
  },
]

export default function PersonalPage() {
  return (
    <>
      {/* ============================================
          Section 1: ヒーロー
         ============================================ */}
      <section
        className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden"
        aria-label="一般のお客様 メインビジュアル"
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
            className="absolute inset-0 bg-gradient-to-r from-[#5C7A14]/85 via-[#3D3D3D]/65 to-[#5C7A14]/40"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <div className="max-w-3xl">
            <p className="text-[#F4F8E8] text-sm font-semibold tracking-[0.3em] mb-5">
              FOR INDIVIDUAL — ANSHIN TSUNAGI
            </p>
            <h1 className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              あなたの暮らしに、<br />
              ぴったりの安心を。
            </h1>
            <p className="text-stone-100 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
              ゆめほけんは、損保3社・生保7社の合計10社の保険商品から、
              <br className="hidden md:block" />
              あなたとご家族のライフステージに合わせた最適なプランをご提案する
              <strong className="text-white"> 中立的な保険代理店 </strong>
              です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?type=personal"
                className="inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-8 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
              >
                無料相談を申し込む
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:0939650660"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#5C7A14] backdrop-blur px-8 py-4 rounded-md font-bold border-2 border-white/40 hover:border-white transition-all"
              >
                <Phone className="w-4 h-4" />
                093-965-0660
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 2: 6つの「守る」カテゴリ
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              SIX KINDS OF PROTECTION
            </p>
            <h2
              id="categories-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              6つの「守る」で、暮らしを支える
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              生命・ケガ・くらし・家・資産・自動車。
              <br className="hidden md:block" />
              それぞれの「もしも」に備える保険を、お客様に合わせて組み合わせます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceCategories.map((c) => (
              <article
                key={c.title}
                className="group bg-white border border-stone-200 rounded-lg overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow"
              >
                <div className="h-1.5" style={{ backgroundColor: c.accent }} aria-hidden="true" />
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-md ${c.bg}`}
                    >
                      <c.icon className="w-6 h-6" style={{ color: c.accent }} aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold tracking-widest" style={{ color: c.accent }}>
                      {c.label}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#3D3D3D] mb-1">
                    {c.title}
                  </h3>
                  <p className="text-sm text-stone-500 mb-3">{c.subtitle}</p>
                  <p className="text-sm text-stone-700 leading-relaxed mb-5 flex-grow">
                    {c.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 border-t border-stone-100 pt-4">
                    {c.features.map((f) => (
                      <span
                        key={f}
                        className="inline-block text-xs text-stone-600 bg-stone-50 px-2.5 py-1 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 3: 特集サービス（ペット保険・乗るピタ）
         ============================================ */}
      <section className="bg-[#FAF7F0] py-16 md:py-24" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              FEATURED SERVICES
            </p>
            <h2
              id="featured-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              注目のサービス
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredServices.map((s) => (
              <article
                key={s.title}
                className="bg-white border border-stone-200 rounded-2xl p-8 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl"
                    style={{ backgroundColor: `${s.accent}15` }}
                  >
                    <s.icon className="w-7 h-7" style={{ color: s.accent }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#3D3D3D]">{s.title}</h3>
                    <p className="text-xs text-stone-500 mt-1">{s.sub}</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-stone-700 leading-relaxed mb-6 flex-grow">
                  {s.description}
                </p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 self-start text-sm font-bold transition-colors"
                  style={{ color: s.accent }}
                >
                  {s.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 4: 取扱保険会社（10社）
         ============================================ */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="companies-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              PARTNER COMPANIES — 10
            </p>
            <h2
              id="companies-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              取扱保険会社
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              損害保険3社・生命保険7社、合計10社と提携。
              <br className="hidden md:block" />
              中立的な立場で、お客様にとって最適な保険を比較・提案します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 損保 */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#F4F8E8]">
                  <ShieldCheck className="w-5 h-5 text-[#5C7A14]" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl font-bold text-[#3D3D3D]">
                  損害保険
                  <span className="text-sm text-stone-500 font-normal ml-2">3社</span>
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {insuranceCompanies.damage.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-center gap-2 bg-[#FAF7F0] border border-stone-200 rounded-md py-3 px-4 text-sm text-stone-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#95C11F] shrink-0" aria-hidden="true" />
                    <span>{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 生保 */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#F4F8E8]">
                  <Heart className="w-5 h-5 text-[#5C7A14]" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl font-bold text-[#3D3D3D]">
                  生命保険
                  <span className="text-sm text-stone-500 font-normal ml-2">7社</span>
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {insuranceCompanies.life.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-center gap-2 bg-[#FAF7F0] border border-stone-200 rounded-md py-3 px-4 text-sm text-stone-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#95C11F] shrink-0" aria-hidden="true" />
                    <span>{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-xs text-stone-500 mt-8">
            ※ ロゴ画像は今後、各社の使用許諾を得て差し替え予定です。
          </p>
        </div>
      </section>

      {/* ============================================
          Section 5: 相談方法（4種）
         ============================================ */}
      <section className="bg-[#F4F8E8] py-16 md:py-24" aria-labelledby="consult-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              4 WAYS TO CONSULT
            </p>
            <h2
              id="consult-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              4つの相談方法
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              お客様のご都合に合わせて、お好きな方法をお選びください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {consultMethods.map((m) => (
              <div
                key={m.title}
                className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-[#F4F8E8] mb-4">
                  <m.icon className="w-6 h-6 text-[#5C7A14]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2">{m.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-3">{m.description}</p>
                <p className="text-xs text-[#5C7A14] font-semibold">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 6: お客様の声
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="voices-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              CUSTOMER VOICES
            </p>
            <h2
              id="voices-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              お客様の声
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {voices.map((v) => (
              <article
                key={v.name}
                className="bg-[#FAF7F0] border border-stone-200 rounded-lg p-7 relative"
              >
                <Quote
                  className="absolute top-5 right-5 w-10 h-10 text-[#95C11F] opacity-30"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-stone-200">
                    <v.icon className="w-6 h-6 text-[#5C7A14]" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-serif font-bold text-[#3D3D3D] text-base">{v.name}</p>
                    <p className="text-xs text-stone-500">{v.location}</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-stone-700 leading-relaxed">「{v.body}」</p>
              </article>
            ))}
          </div>

          <p className="text-center text-xs text-stone-500 mt-6">
            ※ お客様の声は実際にいただいたご感想を一部編集して掲載しています。
          </p>
        </div>
      </section>

      {/* ============================================
          Section 7: よくあるご質問
         ============================================ */}
      <section className="bg-[#FAF7F0] py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              よくあるご質問
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <dl className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-stone-200 rounded-lg overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-5 md:p-6 flex items-start gap-4 hover:bg-[#F4F8E8] transition-colors">
                  <span className="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-[#95C11F] text-white font-serif font-bold text-sm">
                    Q
                  </span>
                  <p className="flex-grow font-semibold text-[#3D3D3D] text-sm md:text-base leading-relaxed pt-0.5">
                    {faq.q}
                  </p>
                  <span
                    className="shrink-0 text-[#5C7A14] transition-transform group-open:rotate-45 text-2xl leading-none pt-0.5"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 flex items-start gap-4">
                  <span className="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-[#FAF7F0] border border-stone-200 text-[#8B5A2B] font-serif font-bold text-sm">
                    A
                  </span>
                  <p className="flex-grow text-sm md:text-base text-stone-700 leading-relaxed pt-0.5">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* ============================================
          Section 8: お問い合わせCTA
         ============================================ */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        aria-labelledby="contact-heading"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero/loghouse-exterior.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#5C7A14]/85 to-[#3D3D3D]/85"
            aria-hidden="true"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F4F8E8] text-sm font-semibold tracking-[0.25em] mb-3">
            CONTACT US
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-5"
          >
            まずは無料相談から、お気軽に
          </h2>
          <p className="text-white/90 leading-relaxed mb-3 text-base md:text-lg">
            ご相談は無料です。北九州・小倉南区のログハウスでお待ちしています。
          </p>
          <p className="text-sm text-white/75 mb-10">
            <Clock className="inline w-4 h-4 mr-1.5 -mt-0.5" aria-hidden="true" />
            営業時間：月〜金 9:00〜17:00（土日祝休）
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Link
              href="/contact?type=personal"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-6 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
            >
              お問い合わせフォーム
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
              href="https://line.me/R/ti/p/@942hvyou"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05A847] text-white px-6 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              LINEで相談
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
