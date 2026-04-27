import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Award,
  Sprout,
  Sparkles,
  TreePine,
  Users,
  Building,
  Calendar,
  Quote,
  MessageCircle,
  ExternalLink,
  Heart,
  Briefcase,
  Smile,
  Cat,
} from "lucide-react"

export const metadata: Metadata = {
  title: "会社概要｜ドリームインシュアランス株式会社",
  description:
    "ドリームインシュアランス株式会社（ゆめほけん）は、北九州市小倉南区のログハウスを拠点とする保険代理店です。「安心と夢をつないで笑顔をまもる」を経営理念に、2013年創業・ISO 9001:2015認証取得・従業員6名でお客様の一生涯のパートナーを目指しています。",
  openGraph: {
    title: "会社概要｜ゆめほけん",
    description: "安心と夢をつないで笑顔をまもる。北九州ログハウスの保険代理店。",
  },
}

// 沿革
const history = [
  {
    year: "2013",
    month: "4月",
    title: "ドリームインシュアランス株式会社 設立",
    description: "「安心と夢をつないで笑顔をまもる」を理念に、北九州市にて創業。",
  },
  {
    year: "2014",
    month: "9月",
    title: "小倉南区貫より移転",
    description: "事業拡大に伴い、現拠点近くへ移転。",
  },
  {
    year: "2016",
    month: "6月",
    title: "小倉北区片野より移転 ／ ログハウス完成",
    description: "現在の拠点となるログハウス（小倉南区下石田）が完成。木のぬくもりに包まれた相談空間がスタート。",
  },
  {
    year: "2020",
    month: "9月",
    title: "ISO 9001:2015 認証取得",
    description: "国際規格に準拠した品質マネジメントシステムを構築・運用開始。",
  },
  {
    year: "2024",
    month: "通年",
    title: "終活ステーション 開設",
    description: "人生後半戦のワンストップ相談窓口「終活ステーション」を新設。木庭理恵が担当。",
  },
]

// 経営理念の3本柱
const visionPillars = [
  {
    icon: TreePine,
    label: "DREAM",
    title: "ゆめつなぎ",
    description:
      "様々なプロフェッショナルがあなたをサポート。あなたに必要なひとと情報をつなげます。",
    accent: "#5C7A14",
    bg: "bg-[#F4F8E8]",
  },
  {
    icon: Sparkles,
    label: "FULLNESS",
    title: "あんしんつなぎ",
    description:
      "生命保険・損害保険の新規加入・継続手続き、保険総合コンサルティングを通じて安心をお届けします。",
    accent: "#8B5A2B",
    bg: "bg-[#FAF3E2]",
  },
  {
    icon: Smile,
    label: "MISSION",
    title: "目指せ！1万人の夢応援",
    description:
      "お客様一人ひとりの「夢」に伴走し、地域の1万人の人生を応援する代理店を目指します。",
    accent: "#C8956B",
    bg: "bg-[#FBF6E9]",
  },
]

// メンバー6名（会社案内パンフより）
const members = [
  {
    name: "森 幹人",
    nameEn: "Mikito Mori",
    role: "代表取締役",
    catchphrase: "ゆめのモリモリ",
    icon: Briefcase,
    accent: "#5C7A14",
  },
  {
    name: "藤田 雅麗",
    nameEn: "Masatoyo Fujita",
    role: "お客様サービス・営業チーフ",
    catchphrase: "やさしさで情熱",
    icon: Heart,
    accent: "#C8956B",
  },
  {
    name: "桑原 榮",
    nameEn: "Sakae Kuwahara",
    role: "お客様サービス・営業",
    catchphrase: "いつもニコニコで安心の笑顔",
    icon: Smile,
    accent: "#E8B85F",
  },
  {
    name: "高森 綾",
    nameEn: "Aya Takamori",
    role: "お客様サービス・営業",
    catchphrase: "柔軟な対応で安心もお届けします",
    icon: Sparkles,
    accent: "#95C11F",
  },
  {
    name: "今井 優子",
    nameEn: "Yuko Imai",
    role: "お客様サポート",
    catchphrase: "笑顔をまもるエキスパート",
    icon: Heart,
    accent: "#E94B6E",
  },
  {
    name: "木庭 理恵",
    nameEn: "Rie Koba",
    role: "終活ステーション 担当",
    catchphrase: "木のぬくもりと心の癒しをどうぞ",
    icon: Sprout,
    accent: "#8B5A2B",
  },
]

// 会社概要表
const corporateProfile = [
  { label: "商号", value: "ドリームインシュアランス株式会社" },
  { label: "屋号", value: "ゆめほけん（YUME★HOKEN）" },
  { label: "所在地", value: "〒802-0832 福岡県北九州市小倉南区下石田1-17-17（トライアル石田前）" },
  { label: "代表者", value: "代表取締役 森 幹人" },
  { label: "設立", value: "2013年2月" },
  { label: "従業員数", value: "6名" },
  { label: "電話", value: "093-965-0660" },
  { label: "FAX", value: "093-965-0663" },
  { label: "メール", value: "yume@yumehoken.jp" },
  { label: "営業時間", value: "月〜金 9:00〜17:00（土日祝休）" },
  { label: "営業エリア", value: "北九州市および周辺地域" },
  { label: "認証", value: "ISO 9001:2015（2020年9月取得）" },
  { label: "事業内容", value: "損害保険・生命保険代理業／終活ステーション運営／法人向けリスクマネジメント／個人間カーシェア・カーリース紹介取次" },
  { label: "公式LINE", value: "@942hvyou" },
]

// CSR 5パートナー（一覧と詳細リンク）
const csrPartners = [
  { name: "登山家 西川 史晃", href: "/csr/nishikawa" },
  { name: "カノアラウレアーズ福岡", href: "/csr/kanoa" },
  { name: "u-ta（木村ゆうた）", href: "/csr/uta" },
  { name: "Make-A-Wish Japan", href: "/csr/make-a-wish" },
  { name: "NPO法人 好きっちゃ北九州", href: "/csr/sukiccha" },
]

export default function AboutPage() {
  return (
    <>
      {/* ============================================
          Section 1: ヒーロー
         ============================================ */}
      <section
        className="relative min-h-[480px] md:min-h-[560px] flex items-center overflow-hidden"
        aria-label="会社概要 メインビジュアル"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero/loghouse-exterior.jpg"
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
              ABOUT US — DREAM INSURANCE INC.
            </p>
            <h1 className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              安心と夢をつないで、<br />
              笑顔をまもる。
            </h1>
            <p className="text-stone-100 text-base md:text-lg leading-relaxed max-w-2xl">
              北九州・小倉南区のログハウスから、保険・終活・法人リスクヘッジまで、
              一生涯のパートナーとして皆さまの「ゆめ」を応援する保険代理店です。
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 bg-white/95 backdrop-blur px-4 py-2.5 rounded-md shadow-lg">
          <Award className="w-5 h-5 text-[#5C7A14]" aria-hidden="true" />
          <span className="text-xs font-bold text-[#3D3D3D]">ISO 9001:2015 認証</span>
        </div>
      </section>

      {/* ============================================
          Section 2: 代表メッセージ
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="message-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* 代表写真エリア（プレースホルダー） */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#FAF3E2] to-[#F4F8E8] rounded-2xl p-10 flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full bg-white border-4 border-[#95C11F] flex items-center justify-center shadow-md mb-5">
                  <Briefcase className="w-20 h-20 text-[#5C7A14]" aria-hidden="true" />
                </div>
                <p className="font-serif text-2xl font-bold text-[#3D3D3D]">森 幹人</p>
                <p className="text-sm text-stone-600 mt-1">Mikito Mori</p>
                <p className="text-xs text-[#5C7A14] font-semibold tracking-wider mt-3">
                  代表取締役
                </p>
                <p className="text-xs text-stone-400 italic mt-4">※写真は後日差し替え予定</p>
              </div>
            </div>

            {/* メッセージ本文 */}
            <div className="lg:col-span-2">
              <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
                MESSAGE FROM CEO
              </p>
              <h2
                id="message-heading"
                className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4 leading-tight"
              >
                目指せ！1万人の夢応援
              </h2>
              <div className="w-12 h-0.5 bg-[#95C11F] mb-6" aria-hidden="true" />

              <div className="space-y-5 text-stone-700 leading-relaxed text-base md:text-lg">
                <p>
                  わたしたちゆめほけんは、保険を売る会社ではなく、
                  <strong className="text-[#5C7A14]">お客様の人生に伴走する一生涯のパートナー</strong>
                  でありたいと考えています。
                </p>
                <p>
                  保険、終活、ライフプラン、事業継承——人生にはさまざまな「もしも」と「これから」があります。
                  そのひとつひとつに、地域に根ざした信頼できる専門家ネットワークを通じて寄り添い、
                  お客様自身の「ゆめ」を応援する存在でありたい。
                </p>
                <p>
                  2013年の創業以来、わたしたちは「ゆめつなぎ」「あんしんつなぎ」の2つを軸に、
                  地域に根ざした保険代理店として歩んでまいりました。
                  ログハウスでお茶を飲みながら気軽に相談できる、
                  そんな <strong className="text-[#5C7A14]">「町の窓口」</strong> を目指しています。
                </p>
                <p>
                  一人でも多くのお客様の夢を応援できるよう、社員一同、
                  これからも誠実に、丁寧に、お客様の声に耳を傾けてまいります。
                  どうぞ、お気軽にログハウスへお越しください。
                </p>
              </div>

              <p className="mt-8 font-serif text-base text-[#5C7A14] font-bold">
                ドリームインシュアランス株式会社<br />
                代表取締役 森 幹人
              </p>
              <p className="mt-3 text-xs text-stone-500 italic">
                ※ 上記は仮文です。正式な代表メッセージは森社長にヒアリング後に差し替え予定。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 3: 経営理念（3本柱）
         ============================================ */}
      <section className="bg-[#FAF7F0] py-16 md:py-24" aria-labelledby="vision-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              OUR PHILOSOPHY
            </p>
            <h2
              id="vision-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              わたしたちの理念
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              ゆめほけんが大切にしている、3つの理念。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visionPillars.map((p) => (
              <div
                key={p.title}
                className={`${p.bg} border border-stone-200 rounded-2xl p-7 md:p-8`}
              >
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white mb-5"
                >
                  <p.icon className="w-7 h-7" style={{ color: p.accent }} aria-hidden="true" />
                </div>
                <p
                  className="text-xs font-semibold tracking-widest mb-2"
                  style={{ color: p.accent }}
                >
                  {p.label}
                </p>
                <h3 className="font-serif text-xl font-bold text-[#3D3D3D] mb-3">{p.title}</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 4: メンバー紹介
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="members-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              OUR TEAM
            </p>
            <h2
              id="members-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              ゆめほけんメンバー
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              地域に根ざした6名のスタッフが、お客様一人ひとりに寄り添います。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m) => (
              <article
                key={m.name}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div
                  className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100"
                >
                  <div
                    className="w-24 h-24 rounded-full bg-white border-4 flex items-center justify-center shadow"
                    style={{ borderColor: m.accent }}
                  >
                    <m.icon
                      className="w-12 h-12"
                      style={{ color: m.accent }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-widest mb-1" style={{ color: m.accent }}>
                    {m.role}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-[#3D3D3D] mb-1">
                    {m.name}
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">{m.nameEn}</p>
                  <p className="text-sm text-stone-700 italic">「{m.catchphrase}」</p>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-xs text-stone-500 mt-8">
            ※ メンバーの顔写真は後日差し替え予定です。
          </p>
        </div>
      </section>

      {/* ============================================
          Section 5: ログハウスオフィス
         ============================================ */}
      <section
        className="bg-[#F4F8E8] py-16 md:py-24"
        aria-labelledby="loghouse-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
                LOG HOUSE OFFICE
              </p>
              <h2
                id="loghouse-heading"
                className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4 leading-tight"
              >
                木のぬくもりに包まれた、<br />
                ログハウスオフィス
              </h2>
              <div className="w-12 h-0.5 bg-[#95C11F] mb-6" aria-hidden="true" />
              <div className="space-y-4 text-stone-700 leading-relaxed text-base md:text-lg">
                <p>
                  2016年に完成したゆめほけんの拠点は、
                  <strong className="text-[#5C7A14]">本格的なログハウス</strong>。
                  自然光がたっぷり入る木造の空間で、ゆったりとした時間を過ごしながらご相談いただけます。
                </p>
                <p>
                  冬は薪ストーブの暖かさ、夏は木陰の心地よさ。
                  「保険の相談に行く」というよりも、
                  <strong className="text-[#5C7A14]">「ちょっとお茶しに寄る」</strong>
                  ような、そんな気軽さを大切にしています。
                </p>
                <p className="text-sm text-stone-600">
                  自社ブランドコーヒー <strong>「ゆめブレンド」</strong>（おつき珈琲 presents）もご用意しています。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden col-span-2">
                <Image
                  src="/images/hero/loghouse-exterior.jpg"
                  alt="ログハウス外観"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/hero/loghouse-interior.png"
                  alt="ログハウス内観・薪ストーブ"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/hero/loghouse-entrance.png"
                  alt="ログハウス玄関"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 6: 沿革タイムライン
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="history-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              HISTORY
            </p>
            <h2
              id="history-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              沿革
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <ol className="relative border-l-2 border-[#95C11F] ml-4 md:ml-8 space-y-10">
            {history.map((h) => (
              <li key={`${h.year}-${h.month}`} className="relative pl-6 md:pl-10">
                {/* タイムラインのマーカー */}
                <span
                  className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#95C11F] border-4 border-white shadow"
                  aria-hidden="true"
                />
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                  <span className="font-serif text-2xl font-bold text-[#5C7A14]">
                    {h.year}
                  </span>
                  <span className="text-sm text-stone-500 font-semibold">{h.month}</span>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-[#3D3D3D] mb-2 leading-tight">
                  {h.title}
                </h3>
                <p className="text-sm md:text-base text-stone-600 leading-relaxed">
                  {h.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================
          Section 7: 会社概要表
         ============================================ */}
      <section
        className="bg-[#FAF7F0] py-16 md:py-24"
        aria-labelledby="profile-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              CORPORATE PROFILE
            </p>
            <h2
              id="profile-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              会社概要
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <dl className="bg-white border border-stone-200 rounded-lg overflow-hidden divide-y divide-stone-200">
            {corporateProfile.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-6 py-4 md:py-5"
              >
                <dt className="text-sm font-bold text-[#5C7A14] md:col-span-1">
                  {item.label}
                </dt>
                <dd className="text-sm md:text-base text-stone-700 md:col-span-3 leading-relaxed">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============================================
          Section 8: ISO 9001:2015 認証
         ============================================ */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="iso-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F4F8E8] via-white to-[#FAF3E2] border border-stone-200 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border-4 border-[#95C11F] flex flex-col items-center justify-center shadow-md">
                  <Award className="w-12 h-12 text-[#5C7A14]" aria-hidden="true" />
                  <p className="font-serif font-bold text-[#5C7A14] mt-2 text-sm">ISO</p>
                  <p className="text-xs text-stone-600">9001:2015</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
                  CERTIFICATION
                </p>
                <h2
                  id="iso-heading"
                  className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
                >
                  ISO 9001:2015 認証取得
                </h2>
                <p className="text-stone-700 leading-relaxed text-sm md:text-base">
                  弊社は2020年9月に <strong className="text-[#5C7A14]">品質マネジメントシステム ISO 9001:2015</strong>
                  の国際規格認証を取得しました。
                  業務プロセスの継続的改善と、お客様満足度の向上に組織的に取り組んでいます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 9: CSR / 社会貢献ハイライト
         ============================================ */}
      <section
        className="bg-[#FAF7F0] py-16 md:py-24"
        aria-labelledby="csr-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
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
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              ゆめほけんは「夢を持つ人」を応援する企業として、
              5つのパートナーの活動をサポートしています。
            </p>
          </div>

          <ul className="bg-white border border-stone-200 rounded-lg divide-y divide-stone-200 mb-8">
            {csrPartners.map((p) => (
              <li key={p.name}>
                <Link
                  href={p.href}
                  className="group flex items-center gap-4 px-6 py-4 hover:bg-[#F4F8E8] transition-colors"
                >
                  <Sprout className="w-5 h-5 text-[#5C7A14] shrink-0" aria-hidden="true" />
                  <span className="flex-grow text-sm md:text-base text-stone-800 group-hover:text-[#5C7A14] transition-colors">
                    {p.name}
                  </span>
                  <ArrowRight
                    className="w-4 h-4 text-stone-400 group-hover:text-[#5C7A14] group-hover:translate-x-1 transition-all"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Link
              href="/csr"
              className="inline-flex items-center gap-2 border-2 border-[#95C11F] text-[#5C7A14] hover:bg-[#95C11F] hover:text-white px-8 py-3.5 rounded-md font-bold transition-all"
            >
              CSR活動の詳細を見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 10: アクセス
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="access-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              ACCESS
            </p>
            <h2
              id="access-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              アクセス
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 住所・連絡先 */}
            <div className="bg-[#FAF7F0] border border-stone-200 rounded-lg p-6 md:p-8">
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#5C7A14] mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-stone-500 font-semibold mb-1">所在地</p>
                    <p className="text-stone-700 leading-relaxed">
                      〒802-0832<br />
                      福岡県北九州市小倉南区下石田1-17-17<br />
                      <span className="text-sm text-stone-600">（トライアル石田前）</span>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#5C7A14] mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-stone-500 font-semibold mb-1">電話／FAX</p>
                    <a
                      href="tel:0939650660"
                      className="block text-stone-700 hover:text-[#5C7A14] transition-colors"
                    >
                      TEL: 093-965-0660
                    </a>
                    <p className="text-stone-700">FAX: 093-965-0663</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#5C7A14] mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-stone-500 font-semibold mb-1">メール</p>
                    <a
                      href="mailto:yume@yumehoken.jp"
                      className="text-stone-700 hover:text-[#5C7A14] transition-colors break-all"
                    >
                      yume@yumehoken.jp
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#5C7A14] mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-stone-500 font-semibold mb-1">営業時間</p>
                    <p className="text-stone-700">月〜金 9:00〜17:00</p>
                    <p className="text-xs text-stone-500">（土日祝休）</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-[#5C7A14] mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-stone-500 font-semibold mb-1">駐車場</p>
                    <p className="text-stone-700">完備</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-stone-200">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E5%8C%97%E4%B9%9D%E5%B7%9E%E5%B8%82%E5%B0%8F%E5%80%89%E5%8D%97%E5%8C%BA%E4%B8%8B%E7%9F%B3%E7%94%B01-17-17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#5C7A14] hover:text-[#95C11F] font-bold transition-colors"
                >
                  Googleマップで開く
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* 地図 (Google Maps embed) */}
            <div className="rounded-lg overflow-hidden border border-stone-200 min-h-[360px]">
              <iframe
                title="ゆめほけん（小倉南区下石田1-17-17）の地図"
                src="https://maps.google.com/maps?q=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E5%8C%97%E4%B9%9D%E5%B7%9E%E5%B8%82%E5%B0%8F%E5%80%89%E5%8D%97%E5%8C%BA%E4%B8%8B%E7%9F%B3%E7%94%B01-17-17&output=embed"
                className="w-full h-full min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 11: お問い合わせCTA
         ============================================ */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero/loghouse-illumination.png"
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
            ログハウスでお待ちしています
          </h2>
          <p className="text-white/90 leading-relaxed mb-10 text-base md:text-lg">
            来店相談・訪問・LINE・お電話、お好きな方法でどうぞ。<br className="hidden md:block" />
            ご相談は無料です。
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
        </div>
      </section>
    </>
  )
}
