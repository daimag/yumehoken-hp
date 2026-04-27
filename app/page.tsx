import Link from "next/link"
import Image from "next/image"
import {
  Heart,
  Sprout,
  Building2,
  Briefcase,
  ArrowRight,
  Phone,
  MessageCircle,
  Award,
  Users,
  GraduationCap,
  Sparkles,
  Mountain,
  Volleyball,
  Palette,
  Star,
  TreePine,
} from "lucide-react"
import HubCard from "@/components/hub-card"
import HeroNetworkOverlay from "@/components/hero-network-overlay"

// 4ハブの定義
const hubs = [
  {
    href: "/personal",
    label: "FOR INDIVIDUAL",
    title: "一般のお客様へ",
    description:
      "生命・医療・自動車・火災・ペット保険まで。あなたの暮らしに、ぴったりの安心を専門家がご提案します。",
    icon: Heart,
    accentColor: "#95C11F",
    bgClass: "bg-white",
    iconBgClass: "bg-[#F4F8E8]",
  },
  {
    href: "/shukatsu",
    label: "FOR SENIORS",
    title: "終活ステーション",
    description:
      "もしも、に備えて。今できること。遺言・相続・介護・葬儀まで、人生後半戦のワンストップ相談窓口。",
    icon: Sprout,
    accentColor: "#E8B85F",
    bgClass: "bg-white",
    iconBgClass: "bg-[#FAF3E2]",
  },
  {
    href: "/business",
    label: "FOR BUSINESS",
    title: "法人のお客様へ",
    description:
      "経営者のリスクを、利益に変える。労務・自然・交通災害から事業継承まで、リスクヘッジを総合支援。",
    icon: Building2,
    accentColor: "#6B7B8C",
    bgClass: "bg-white",
    iconBgClass: "bg-[#EEF2F5]",
  },
  {
    href: "/recruit",
    label: "FOR JOB SEEKERS",
    title: "採用情報",
    description:
      "“ゆめ”を持つ人と、はたらく。北九州のログハウスオフィスで、お客さまの夢に伴走するチームの一員に。",
    icon: Briefcase,
    accentColor: "#8B5A2B",
    bgClass: "bg-white",
    iconBgClass: "bg-[#F5EBE0]",
  },
]

// FD宣言の信頼の数字
const trustNumbers = [
  { number: "139", unit: "件/年", label: "お客様の声", description: "目標60件を大幅超過" },
  { number: "36", unit: "回/年", label: "品質向上研修", description: "目標達成（100%）" },
  { number: "81", unit: "件/年", label: "つなぐ活動", description: "目標60件を超過" },
  { number: "ISO", unit: "9001:2015", label: "国際規格認証", description: "2020年9月取得" },
]

// 取扱保険会社
const insuranceCompanies = [
  "損保ジャパン",
  "東京海上日動",
  "東京海上ニッセイ同和",
  "SOMPOひまわり生命",
  "第一生命",
  "ソニー生命",
  "メットライフ生命",
  "ネオファースト生命",
  "日本生命",
  "はなさく生命",
]

// CSRパートナー（5名から3名抜粋）
const csrPartners = [
  {
    icon: Mountain,
    name: "登山家 西川 史晃",
    description: "七大陸最高峰登頂を目指す登山家・コーチ。「夢を持つ大人を増やす」",
    href: "/csr/nishikawa",
  },
  {
    icon: Volleyball,
    name: "カノアラウレアーズ福岡",
    description: "福智町ホームの女子バレーボールチーム。S.Vリーグ昇格に挑戦中",
    href: "/csr/kanoa",
  },
  {
    icon: Star,
    name: "Make-A-Wish Japan",
    description: "難病と闘う子どもたちの夢を実現する活動を2024年から支援",
    href: "/csr/make-a-wish",
  },
]

// 最新ニュース・ニュースレター（暫定データ）
const newsItems = [
  {
    date: "2026.03.17",
    category: "お客様の声",
    title: "安全運転講習を導入された企業さまの体験談を公開しました",
    href: "/news",
  },
  {
    date: "2026.03.12",
    category: "お客様の声",
    title: "終活ステーションで相続のご相談をいただいたお客さまの声",
    href: "/shukatsu/voices",
  },
  {
    date: "2025.12.16",
    category: "ニュースレター",
    title: "ゆめほニュースレター 2025年冬季号 を公開しました",
    href: "/newsletter",
  },
]

export default function Home() {
  return (
    <>
      {/* ============================================
          Section 1: ヒーロー（4枚カルーセル + Ken Burns + 白線ネットワーク装飾）
         ============================================ */}
      <section
        className="relative min-h-[620px] md:min-h-[760px] flex items-center overflow-hidden bg-[#1F2A1A]"
        aria-label="ゆめほけんメインビジュアル"
      >
        {/* 背景：4スライドが28秒周期で循環、各スライドはズームアウト効果 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-slide-a absolute inset-0">
            <Image
              src="/images/hero/loghouse-exterior.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="hero-slide-b absolute inset-0">
            <Image
              src="/images/hero/loghouse-interior.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="hero-slide-c absolute inset-0">
            <Image
              src="/images/hero/loghouse-illumination.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="hero-slide-d absolute inset-0">
            <Image
              src="/images/hero/loghouse-entrance.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* グリーン+チャコールのオーバーレイ（テキスト視認性確保） */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#5C7A14]/70 via-[#3D3D3D]/55 to-[#1F2A1A]/85"
            aria-hidden="true"
          />

          {/* 白線ネットワーク装飾（おしゃれオブジェクト） */}
          <HeroNetworkOverlay />

          {/* 下部ビネット（テキストの足元を暗く） */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1F2A1A]/70 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* テキスト */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <p className="text-[#F4F8E8] text-sm font-semibold tracking-[0.3em] mb-5 animate-fade-in">
              YUME ★ HOKEN — DREAM INSURANCE INC.
            </p>
            <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
              安心と、夢で、
              <br />
              笑顔をつなぐ。
            </h1>
            <p className="text-white/95 text-base md:text-lg leading-relaxed mb-10 max-w-xl animate-fade-in-up drop-shadow">
              北九州・小倉南区のログハウスから、保険のご相談・終活のお手伝い・法人リスクヘッジまで。
              <br className="hidden md:block" />
              一生涯のパートナーとして、あなたの“ゆめ”を応援します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-8 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
              >
                無料相談・お問い合わせ
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

        {/* ISO バッジ（右下） */}
        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 bg-white/95 backdrop-blur px-4 py-2.5 rounded-md shadow-lg z-10">
          <Award className="w-5 h-5 text-[#5C7A14]" aria-hidden="true" />
          <span className="text-xs font-bold text-[#3D3D3D]">ISO 9001:2015 認証</span>
        </div>
      </section>

      {/* ============================================
          Section 2: 4ハブ入口
         ============================================ */}
      <section className="bg-[#FAF7F0] py-16 md:py-24" aria-labelledby="hubs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              FIND YOUR DOOR
            </p>
            <h2
              id="hubs-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              あなたに合った入口から、お入りください
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
              ゆめほけんは、お客様一人ひとりのライフステージに合わせて、4つの専門窓口をご用意しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hubs.map((hub) => (
              <HubCard key={hub.href} {...hub} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 3: ゆめほけんとは（ゆめつなぎ・あんしんつなぎ）
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* 写真 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero/loghouse-interior.png"
                alt="ゆめほけんの木のぬくもりあふれるログハウスオフィス内観"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* テキスト */}
            <div>
              <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
                OUR MISSION
              </p>
              <h2
                id="about-heading"
                className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4 leading-tight"
              >
                目指せ！1万人の夢応援
              </h2>
              <div className="w-12 h-0.5 bg-[#95C11F] mb-6" aria-hidden="true" />
              <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
                わたしたちゆめほけんは、安心と夢のある人生を応援する一生涯のパートナー。
                様々なプロフェッショナルがあなたをサポートし、必要なひとと情報をつなげます。
              </p>

              {/* 2大コンセプト */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-[#F4F8E8] border-l-4 border-[#95C11F] rounded-md p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <TreePine className="w-5 h-5 text-[#5C7A14]" aria-hidden="true" />
                    <h3 className="font-serif font-bold text-[#5C7A14] text-lg">ゆめつなぎ</h3>
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    各分野のプロをお客様とつなぐハブ。Dream
                  </p>
                </div>
                <div className="bg-[#FAF3E2] border-l-4 border-[#C8956B] rounded-md p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-[#8B5A2B]" aria-hidden="true" />
                    <h3 className="font-serif font-bold text-[#8B5A2B] text-lg">あんしんつなぎ</h3>
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    保険総合コンサルティング。Fullness
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-[#5C7A14] hover:text-[#95C11F] font-bold transition-colors"
              >
                ゆめほけんについて詳しく
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 4: 信頼の数字（FD宣言）
         ============================================ */}
      <section
        className="relative bg-[#3D3D3D] text-white py-16 md:py-20 overflow-hidden"
        aria-labelledby="trust-heading"
      >
        {/* 背景画像（暗め） */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/loghouse-illumination.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#F4D58D] text-sm font-semibold tracking-[0.25em] mb-3">
              TRUST IN NUMBERS
            </p>
            <h2
              id="trust-heading"
              className="font-serif text-3xl md:text-4xl font-bold mb-4"
            >
              数字で見る、ゆめほけんの誠実
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-300 text-sm md:text-base">
              お客さま本位の業務運営方針（FD宣言）2024年実績より
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustNumbers.map((item) => (
              <div
                key={item.label}
                className="text-center bg-white/5 backdrop-blur border border-white/10 rounded-lg p-6 md:p-8"
              >
                <p className="text-xs text-[#F4D58D] font-semibold tracking-wider mb-2">
                  {item.label}
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="font-serif text-5xl md:text-6xl font-bold text-white">
                    {item.number}
                  </span>
                  <span className="text-sm text-stone-300 font-semibold">{item.unit}</span>
                </div>
                <p className="text-xs text-stone-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 5: 取扱保険会社
         ============================================ */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="companies-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              PARTNER COMPANIES
            </p>
            <h2
              id="companies-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              取扱保険会社
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
              損害保険・生命保険の主要10社と提携。お客様の状況に合わせて最適な保険をご提案します。
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {insuranceCompanies.map((company) => (
              <div
                key={company}
                className="flex items-center justify-center bg-[#FAF7F0] border border-stone-200 rounded-md py-6 px-4 text-center text-sm font-medium text-stone-700 hover:border-[#95C11F] transition-colors"
              >
                {company}
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-stone-500 mt-8">
            ※ ロゴ画像は今後、各社からのご提供に基づき差し替え予定です
          </p>
        </div>
      </section>

      {/* ============================================
          Section 6: ニュース・ニュースレター
         ============================================ */}
      <section className="bg-[#FAF7F0] py-16 md:py-24" aria-labelledby="news-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
                NEWS & NEWSLETTER
              </p>
              <h2
                id="news-heading"
                className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
              >
                お知らせ・ゆめほニュースレター
              </h2>
              <div className="w-12 h-0.5 bg-[#95C11F]" aria-hidden="true" />
            </div>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 text-[#5C7A14] hover:text-[#95C11F] font-bold transition-colors self-start md:self-end"
            >
              すべて見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ul className="bg-white rounded-lg border border-stone-200 divide-y divide-stone-200">
            {newsItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-6 px-6 py-5 hover:bg-[#F4F8E8] transition-colors"
                >
                  <span className="text-xs font-semibold text-stone-500 md:w-24 shrink-0">
                    {item.date}
                  </span>
                  <span className="inline-flex items-center justify-center text-xs font-bold text-[#5C7A14] bg-[#F4F8E8] group-hover:bg-white px-3 py-1 rounded md:w-32 shrink-0">
                    {item.category}
                  </span>
                  <span className="flex-grow text-sm md:text-base text-stone-800 group-hover:text-[#5C7A14] transition-colors">
                    {item.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#5C7A14] group-hover:translate-x-1 transition-all hidden md:block" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================
          Section 7: CSR / 社会貢献
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="csr-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              CSR — DREAM SUPPORT
            </p>
            <h2
              id="csr-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              夢を応援する活動
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
              ゆめほけんは「夢を持つ人」を応援する企業として、5つのパートナーの活動をサポートしています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {csrPartners.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group bg-[#FAF7F0] border border-stone-200 rounded-lg p-7 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4">
                  <p.icon className="w-6 h-6 text-[#5C7A14]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2 group-hover:text-[#5C7A14] transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{p.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/csr"
              className="inline-flex items-center gap-2 border-2 border-[#95C11F] text-[#5C7A14] hover:bg-[#95C11F] hover:text-white px-8 py-3.5 rounded-md font-bold transition-all"
            >
              5パートナーすべての活動を見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 8: お問い合わせCTA
         ============================================ */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        aria-labelledby="cta-heading"
      >
        {/* 背景写真 */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/loghouse-entrance.png"
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
            id="cta-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-5"
          >
            まずは、お気軽にご相談ください
          </h2>
          <p className="text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            来店相談・訪問相談・LINE相談・お電話、お好きな方法でどうぞ。
            <br className="hidden md:block" />
            ご相談は無料です。北九州ログハウスでお待ちしています。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Link
              href="/contact"
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

          <p className="text-xs text-white/70 mt-6">
            営業時間：月〜金 9:00〜17:00（土日祝休）
          </p>
        </div>
      </section>
    </>
  )
}
