import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Home as HomeIcon,
  Building,
  Shield,
  PackageOpen,
  Heart,
  FileText,
  HelpCircle,
  Flower2,
  Users,
  Briefcase,
  PiggyBank,
  Sprout,
  BookOpen,
  ScrollText,
  Cat,
  Quote,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "終活ステーション｜人生後半戦のワンストップ相談窓口",
  description:
    "ゆめほけんが運営する「終活ステーション」は、相続・遺言・遺品整理・お墓・葬儀・介護・保険まで、人生後半戦のあらゆるお悩みをトータルサポート。各分野の専門家と連携し、北九州・小倉南区から皆さまに寄り添います。",
  openGraph: {
    title: "終活ステーション｜ゆめほけん",
    description:
      "もしも、に備えて。今できること。北九州ログハウスの終活相談窓口。",
  },
}

// チラシ「シニアサポートサービス」の8つのお悩みカテゴリ
const concerns = [
  {
    icon: HomeIcon,
    title: "お住まいについて",
    description: "賃貸にするのか老人ホームに入居されるのか等、ご希望の住居に住むためのサポートをします。",
  },
  {
    icon: Building,
    title: "持ち家について",
    description: "一戸建てにお住いの方向けに、死亡後、住宅をどうするのかアドバイス・サポートします。",
  },
  {
    icon: Shield,
    title: "保険について",
    description: "終活を考えるときに必要な保険について、専門家によるアドバイス・サポートがあります。",
  },
  {
    icon: PackageOpen,
    title: "遺品整理について",
    description: "大切なご家族の思いが詰まった品々を、真心こめて専門家が整理します。",
  },
  {
    icon: Heart,
    title: "日常生活について",
    description: "定期面談でお客様が日常で抱えているお悩みを、専門家が解決します。",
  },
  {
    icon: FileText,
    title: "相続手続きについて",
    description: "相続に関して必要な手続きのサポートや、準備物のアドバイスを専門家が行います。",
  },
  {
    icon: Flower2,
    title: "葬儀・お墓について",
    description: "葬儀や納骨、お墓のご相談まで。仏具・供養まで丁寧にお手伝いします。",
  },
  {
    icon: HelpCircle,
    title: "その他の心配事について",
    description: "「まず誰に相談すれば？」というお悩みも、お気軽にご相談ください。",
  },
]

// 「お手伝いできること」7サービス（チラシ詳細パンフより）
const services = [
  {
    icon: Users,
    title: "士業のご紹介",
    description: "司法書士・税理士・弁護士など、信頼できる専門家をご紹介します。",
  },
  {
    icon: Building,
    title: "不動産のご相談",
    description: "売却・賃貸・名義変更など、不動産にまつわるお悩みに対応します。",
  },
  {
    icon: Heart,
    title: "介護の備え",
    description: "在宅介護や施設選びなど、介護が必要になったときの準備をサポート。",
  },
  {
    icon: Flower2,
    title: "お墓・葬儀・仏具のご相談",
    description: "葬儀の事前相談から納骨、お墓の選び方、仏具のご紹介まで。",
  },
  {
    icon: PiggyBank,
    title: "相続税対策・資産運用・老後資金",
    description: "ライフプランに合わせた資産設計を、専門家とともにご提案。",
  },
  {
    icon: Sprout,
    title: "生前・遺品整理のお手伝い",
    description: "ご本人の元気なうちから、ご家族のためにできる整理を支援します。",
  },
  {
    icon: BookOpen,
    title: "エンディングノート作成サポート",
    description: "「誰に何を遺したいか」を一緒に整理するお手伝いをします。",
  },
]

// トータルサポート図の10カテゴリ（円形ネットワーク）
const totalSupportCategories = [
  "遺言",
  "遺品",
  "争族",
  "不動産",
  "保険",
  "葬儀",
  "お墓",
  "介護",
  "相続税",
  "暮らし",
]

// お客様の声（チラシより）
const voices = [
  {
    age: "40代女性",
    location: "北九州市小倉南区在住",
    body:
      "引っ越しをきっかけに、夫の実家の位牌を整理したいと思っていましたが、どこにお願いすればよいのか分からず困っていました。きちんと供養までしてくれる業者を探すのも難しく、悩んでいました。そんな時に知人から終活ステーションを紹介してもらい、相談してみることにしました。おかげでしっかり供養までできて、心からホッとしています。頼んで、本当に良かったです。",
  },
  {
    age: "40代男性",
    location: "北九州市戸畑区在住",
    body:
      "父が亡くなって実家の名義をそのままにしていましたが、今は3年以内に名義を変えなければならない法律があることを知りませんでした。終活ステーションに相談してそのことを知り、現在は司法書士の先生にお願いして名義変更の手続きを進めています。親身に対応してくださる方を紹介していただき、安心して手続きを進められています。",
    note: "※2024年4月より、相続で不動産を取得した場合、3年以内に名義変更（相続登記）をすることが義務化されました。",
  },
]

// ご相談の流れ
const flow = [
  {
    step: "01",
    title: "お問い合わせ",
    description: "お電話・LINE・お問い合わせフォームから、お気軽にご連絡ください。",
  },
  {
    step: "02",
    title: "初回ヒアリング",
    description: "ログハウスでのご来店、または訪問にて、お悩みをじっくりお伺いします。",
  },
  {
    step: "03",
    title: "専門家のご紹介",
    description: "ご相談内容に応じて、信頼できる士業・専門家にお繋ぎします。",
  },
  {
    step: "04",
    title: "継続サポート",
    description: "手続き完了まで、窓口として伴走します。複数の窓口を回る必要はありません。",
  },
]

export default function ShukatsuPage() {
  return (
    <>
      {/* ============================================
          Section 1: ヒーロー（柔らかいイエロー基調）
         ============================================ */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#FAF3E2] via-[#FBF6E9] to-[#F4F8E8] py-20 md:py-28"
        aria-label="終活ステーション メインビジュアル"
      >
        {/* 装飾の花モチーフ（控えめなアクセント） */}
        <div className="absolute top-10 left-10 opacity-20" aria-hidden="true">
          <Flower2 className="w-32 h-32 text-[#E8B85F]" strokeWidth={1} />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20" aria-hidden="true">
          <Sprout className="w-40 h-40 text-[#95C11F]" strokeWidth={1} />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-10" aria-hidden="true">
          <Flower2 className="w-24 h-24 text-[#C8956B]" strokeWidth={1} />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#92400E] text-sm font-semibold tracking-[0.3em] mb-5">
            END OF LIFE PLANNING
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D3D3D] mb-6 leading-tight">
            終活ステーション
          </h1>
          <p className="font-serif text-xl md:text-2xl text-[#8B5A2B] mb-8">
            もしも、に備えて。今できること。
          </p>
          <div className="w-16 h-0.5 bg-[#E8B85F] mx-auto mb-8" aria-hidden="true" />
          <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            このたび私たち <strong className="text-[#5C7A14]">ゆめほけん</strong> は、
            人生の後半戦を迎えた皆さまが、もっと自分らしく充実した人生を送るための情報提供を行う窓口
            <br className="hidden md:block" />
            <strong className="text-[#92400E]">「終活ステーション」</strong> を開設しました。
          </p>
        </div>
      </section>

      {/* ============================================
          Section 2: 8つのお悩みカテゴリ
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="concerns-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#92400E] text-sm font-semibold tracking-[0.25em] mb-3">
              YOUR CONCERNS
            </p>
            <h2
              id="concerns-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              こんなお悩み、ありませんか？
            </h2>
            <div className="w-12 h-0.5 bg-[#E8B85F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              シニア世代の暮らしと終活にまつわる、8つの代表的なお悩みカテゴリ。
              <br className="hidden md:block" />
              ひとつでも当てはまるなら、お気軽にご相談ください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {concerns.map((c) => (
              <div
                key={c.title}
                className="bg-[#FBF8F0] border border-[#F4E4C1] rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#F4E4C1] mb-4">
                  <c.icon className="w-6 h-6 text-[#92400E]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2 leading-tight">
                  {c.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 3: トータルサポート図（10カテゴリ）
         ============================================ */}
      <section
        className="bg-[#F4F8E8] py-16 md:py-24"
        aria-labelledby="total-support-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              TOTAL SUPPORT
            </p>
            <h2
              id="total-support-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              終活ステーションのトータルサポート
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-6" aria-hidden="true" />
            <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              「終活」におけるさまざまな希望や課題を解決するための情報とサービスを、
              <br className="hidden md:block" />
              <strong>ワンストップでご提供</strong> します。
            </p>
          </div>

          {/* 中央に「お客様」、周りに10カテゴリ */}
          <div className="relative max-w-3xl mx-auto py-6">
            {/* 中央 */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border-4 border-[#E8B85F] flex flex-col items-center justify-center shadow-md">
                <p className="font-serif text-base text-[#92400E] font-semibold mb-1">お客様</p>
                <p className="text-xs text-stone-500">×</p>
                <p className="text-xs font-semibold text-[#5C7A14]">終活ステーション</p>
              </div>
            </div>

            {/* 10カテゴリのチップ */}
            <div className="flex flex-wrap gap-3 justify-center">
              {totalSupportCategories.map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center justify-center min-w-[88px] px-5 py-3 bg-white border-2 border-[#95C11F] text-[#5C7A14] font-serif font-bold rounded-full shadow-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 4: お手伝いできること（7サービス）
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#92400E] text-sm font-semibold tracking-[0.25em] mb-3">
              WHAT WE CAN DO
            </p>
            <h2
              id="services-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              お手伝いできること
            </h2>
            <div className="w-12 h-0.5 bg-[#E8B85F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              7つのサービスで、皆さまの「もしも」と「これから」を支えます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-stone-200 rounded-2xl p-7 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FAF3E2] mb-4">
                  <s.icon className="w-7 h-7 text-[#92400E]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#3D3D3D] mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 5: 各種専門家との連携体制
         ============================================ */}
      <section
        className="bg-[#FAF7F0] py-16 md:py-24"
        aria-labelledby="network-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
                EXPERT NETWORK
              </p>
              <h2
                id="network-heading"
                className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4 leading-tight"
              >
                どんなことでも、<br />
                まずは私たちにご相談ください
              </h2>
              <div className="w-12 h-0.5 bg-[#E8B85F] mb-6" aria-hidden="true" />
              <p className="text-stone-700 leading-relaxed mb-5 text-base md:text-lg">
                終活ステーションでは、各分野の専門家と連携する体制を整えています。
                お手続きが必要な場合には、信頼できる専門家にお繋ぎいたします。
              </p>
              <p className="text-stone-700 leading-relaxed text-base md:text-lg">
                窓口にご相談いただければ、
                <strong className="text-[#92400E]">個別に探す手間もなく、ひとつの窓口で幅広いご相談に対応できます。</strong>
              </p>
            </div>

            {/* 専門家のカテゴリチップ */}
            <div className="bg-white border border-stone-200 rounded-2xl p-7 md:p-8">
              <h3 className="font-serif text-base font-bold text-[#5C7A14] mb-5">
                連携している専門家
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "司法書士",
                  "税理士",
                  "弁護士",
                  "行政書士",
                  "不動産業者",
                  "葬儀社",
                  "石材店",
                  "介護事業者",
                  "遺品整理業者",
                  "ファイナンシャルプランナー",
                ].map((expert) => (
                  <div
                    key={expert}
                    className="flex items-center gap-2 text-sm text-stone-700 bg-[#F4F8E8] rounded-md px-3 py-2.5"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-[#95C11F] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{expert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 6: お客様の声
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="voices-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#92400E] text-sm font-semibold tracking-[0.25em] mb-3">
              CUSTOMER VOICES
            </p>
            <h2
              id="voices-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              お客様の声
            </h2>
            <div className="w-12 h-0.5 bg-[#E8B85F] mx-auto" aria-hidden="true" />
          </div>

          <div className="space-y-8">
            {voices.map((v, idx) => (
              <article
                key={idx}
                className="bg-[#FBF8F0] border border-[#F4E4C1] rounded-2xl p-7 md:p-10 relative"
              >
                <Quote
                  className="absolute top-6 right-6 w-10 h-10 text-[#E8B85F] opacity-40"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#F4E4C1]">
                    <Heart className="w-6 h-6 text-[#92400E]" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-serif font-bold text-[#3D3D3D] text-lg">{v.age}</p>
                    <p className="text-xs text-stone-500">{v.location}</p>
                  </div>
                </div>
                <p className="text-stone-700 leading-relaxed text-base md:text-lg">
                  「{v.body}」
                </p>
                {v.note && (
                  <p className="mt-4 text-xs text-stone-500 leading-relaxed border-t border-stone-200 pt-3">
                    {v.note}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 7: 担当者紹介（木庭理恵）
         ============================================ */}
      <section
        className="bg-[#F4F8E8] py-16 md:py-24"
        aria-labelledby="staff-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              YOUR PARTNER
            </p>
            <h2
              id="staff-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              担当者のご紹介
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-3">
            {/* 写真エリア（仮） */}
            <div className="bg-gradient-to-br from-[#FAF3E2] to-[#F4F8E8] p-10 flex flex-col items-center justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border-4 border-[#E8B85F] flex items-center justify-center shadow-md mb-4">
                <Sprout className="w-16 h-16 text-[#5C7A14]" aria-hidden="true" />
              </div>
              <p className="font-serif text-2xl font-bold text-[#3D3D3D]">木庭 理恵</p>
              <p className="text-sm text-stone-600 mt-1">こば りえ</p>
              <p className="text-xs text-stone-500 mt-3 italic text-center">
                ※プロフィール写真は<br />後日差し替え予定
              </p>
            </div>

            {/* テキスト */}
            <div className="md:col-span-2 p-8 md:p-10">
              <div className="flex items-center gap-2 mb-5">
                <Cat className="w-5 h-5 text-[#92400E]" aria-hidden="true" />
                <p className="text-sm text-stone-600">
                  趣味はヨガとお料理。動物が好きで、特に猫が大好きです。
                </p>
              </div>
              <blockquote className="text-stone-700 leading-relaxed text-base md:text-lg border-l-4 border-[#95C11F] pl-5">
                相続や終活のご相談を通じて、皆さまの大切な想いをつなぐサポートを続け、
                ともに喜び合える関係を築いていきたいと考えています。
                <br />
                <br />
                <strong className="text-[#5C7A14]">「まず誰に...」という方の最初の窓口</strong>
                として、しっかりと寄り添い、お話を伺います。
                どうぞ遠慮なく、お気軽にご相談ください。
              </blockquote>
              <p className="mt-6 text-sm text-[#92400E] font-bold">
                — 終活ステーション 担当 / 木庭 理恵
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 8: ご相談の流れ
         ============================================ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="flow-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#92400E] text-sm font-semibold tracking-[0.25em] mb-3">
              HOW IT WORKS
            </p>
            <h2
              id="flow-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              ご相談の流れ
            </h2>
            <div className="w-12 h-0.5 bg-[#E8B85F] mx-auto" aria-hidden="true" />
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flow.map((f, idx) => (
              <li
                key={f.step}
                className="relative bg-[#FBF8F0] border border-[#F4E4C1] rounded-2xl p-6"
              >
                <div className="absolute -top-4 left-6 inline-flex items-center justify-center w-12 h-12 bg-[#E8B85F] text-white font-serif text-lg font-bold rounded-full shadow-md">
                  {f.step}
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{f.description}</p>
                </div>
                {idx < flow.length - 1 && (
                  <ArrowRight
                    className="hidden lg:block absolute top-1/2 -right-4 w-5 h-5 text-[#E8B85F]"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================
          Section 9: お問い合わせCTA（柔らかいクリーム）
         ============================================ */}
      <section
        className="bg-gradient-to-br from-[#FAF3E2] via-[#FBF6E9] to-[#F4F8E8] py-16 md:py-24 relative overflow-hidden"
        aria-labelledby="contact-heading"
      >
        <div className="absolute top-0 left-0 opacity-10" aria-hidden="true">
          <Flower2 className="w-64 h-64 text-[#E8B85F]" strokeWidth={1} />
        </div>
        <div className="absolute bottom-0 right-0 opacity-10" aria-hidden="true">
          <Sprout className="w-72 h-72 text-[#95C11F]" strokeWidth={1} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#92400E] text-sm font-semibold tracking-[0.25em] mb-3">
            CONTACT US
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-5"
          >
            まずは、お気軽にご相談ください
          </h2>
          <p className="text-stone-700 leading-relaxed mb-3 text-base md:text-lg">
            ご相談は無料です。北九州・小倉南区のログハウスでお待ちしています。
          </p>
          <p className="text-sm text-stone-600 mb-10">
            安心と夢で笑顔をつなぐ、一生涯のお付き合い。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-8">
            <Link
              href="/contact"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-6 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
            >
              お問い合わせフォーム
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0939650660"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-[#95C11F] text-[#5C7A14] hover:bg-[#95C11F] hover:text-white px-6 py-4 rounded-md font-bold transition-all"
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

          <div className="bg-white/80 backdrop-blur border border-stone-200 rounded-2xl p-5 max-w-md mx-auto">
            <p className="text-sm text-stone-600 leading-relaxed">
              〒802-0832<br />
              福岡県北九州市小倉南区下石田1-17-17<br />
              <span className="text-xs text-stone-500">営業時間：月〜金 9:00〜17:00（土日祝休）</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
