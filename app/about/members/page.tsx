import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Briefcase,
  Heart,
  Smile,
  Sparkles,
  Sprout,
  Users as UsersIcon,
  Quote,
} from "lucide-react"

export const metadata: Metadata = {
  title: "メンバー紹介｜会社概要｜ゆめほけん",
  description:
    "ゆめほけん（ドリームインシュアランス）を支える6名のスタッフをご紹介します。代表・営業・サポート・終活ステーション担当まで、それぞれの個性で皆さまの「ゆめ」を応援します。",
  openGraph: {
    title: "メンバー紹介｜ゆめほけん",
    description: "ゆめほけんを支える6名のスタッフをご紹介します。",
  },
}

const members = [
  {
    name: "森 幹人",
    nameEn: "Mikito Mori",
    role: "代表取締役",
    catchphrase: "ゆめのモリモリ",
    bio: "2013年にドリームインシュアランス株式会社を創業。「安心と夢をつないで笑顔をまもる」を理念に、地域に根ざした保険代理店として歩み続ける。法人向けリスクコンサル・経営支援も担当。",
    icon: Briefcase,
    accent: "#5C7A14",
    bg: "bg-[#F4F8E8]",
    href: "/about/message",
  },
  {
    name: "藤田 雅麗",
    nameEn: "Masatoyo Fujita",
    role: "お客様サービス・営業チーフ",
    catchphrase: "やさしさで情熱",
    bio: "個人・法人のお客様への保険提案を中心に、ご契約後のフォローまで一気通貫で担当。やわらかい雰囲気の中にも、熱意を持って向き合います。",
    icon: Heart,
    accent: "#C8956B",
    bg: "bg-[#FAF3E2]",
  },
  {
    name: "桑原 榮",
    nameEn: "Sakae Kuwahara",
    role: "お客様サービス・営業",
    catchphrase: "いつもニコニコで安心の笑顔",
    bio: "笑顔を絶やさず、お客様一人ひとりに寄り添うコミュニケーションが持ち味。ご相談時の「最初の一歩」を踏み出しやすい雰囲気づくりを得意とします。",
    icon: Smile,
    accent: "#E8B85F",
    bg: "bg-[#FBF8F0]",
  },
  {
    name: "高森 綾",
    nameEn: "Aya Takamori",
    role: "お客様サービス・営業",
    catchphrase: "柔軟な対応で安心もお届けします",
    bio: "個別の事情に合わせた柔軟な提案・調整が得意。お客様の声を丁寧に拾い、最適なプランへと導きます。",
    icon: Sparkles,
    accent: "#95C11F",
    bg: "bg-[#F4F8E8]",
  },
  {
    name: "今井 優子",
    nameEn: "Yuko Imai",
    role: "お客様サポート",
    catchphrase: "笑顔をまもるエキスパート",
    bio: "事務手続き・問い合わせ対応・社内サポートのプロフェッショナル。お客様情報の管理・更新、保険会社との折衝などバックオフィス全般を支えます。",
    icon: Heart,
    accent: "#E94B6E",
    bg: "bg-rose-50",
  },
  {
    name: "木庭 理恵",
    nameEn: "Rie Koba",
    role: "終活ステーション 担当",
    catchphrase: "木のぬくもりと心の癒しをどうぞ",
    bio: "「終活ステーション」窓口担当。相続・お墓・介護・遺品整理など、人生後半戦のお悩みに寄り添い、必要な専門家へとお繋ぎします。",
    icon: Sprout,
    accent: "#8B5A2B",
    bg: "bg-[#FAF3E2]",
    href: "/shukatsu/koba",
  },
]

const team = {
  values: [
    "お客様の声を「最後まで」聞く",
    "わからないことは、わかる人につなぐ",
    "保険の枠を超えて、人生を応援する",
    "地域の中で、長く愛される存在になる",
  ],
}

export default function AboutMembersPage() {
  return (
    <>
      {/* パンくず */}
      <nav
        aria-label="パンくずリスト"
        className="bg-[#FAF7F0] border-b border-stone-200"
      >
        <ol className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-stone-600">
          <li>
            <Link href="/" className="hover:text-[#5C7A14]">
              ホーム
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-stone-400" aria-hidden="true" />
          <li>
            <Link href="/about" className="hover:text-[#5C7A14]">
              会社概要
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-stone-400" aria-hidden="true" />
          <li className="text-stone-800 truncate">メンバー紹介</li>
        </ol>
      </nav>

      {/* ヒーロー */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#F4F8E8] via-white to-[#FAF7F0] py-14 md:py-20"
        aria-label="メンバー紹介 メインビジュアル"
      >
        <div className="absolute top-10 right-10 opacity-15" aria-hidden="true">
          <UsersIcon className="w-32 h-32 text-[#95C11F]" strokeWidth={1} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.3em] mb-4">
            OUR MEMBERS
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#3D3D3D] mb-5 leading-tight">
            メンバー紹介
          </h1>
          <div className="w-16 h-0.5 bg-[#95C11F] mx-auto mb-6" aria-hidden="true" />
          <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            ゆめほけんを支える<strong className="text-[#5C7A14]">6名のスタッフ</strong>。
            <br className="hidden md:block" />
            それぞれの個性と専門性で、皆さまの「ゆめ」を応援します。
          </p>
        </div>
      </section>

      {/* メンバーカード一覧 */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="members-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="members-heading" className="sr-only">
            メンバー一覧
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m) => (
              <li
                key={m.name}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                {/* 写真エリア（仮アイコン） */}
                <div className={`${m.bg} p-8 flex flex-col items-center`}>
                  <div
                    className="w-28 h-28 rounded-full bg-white border-4 flex items-center justify-center shadow-sm mb-3"
                    style={{ borderColor: m.accent }}
                    aria-hidden="true"
                  >
                    <m.icon className="w-12 h-12" style={{ color: m.accent }} />
                  </div>
                  <p className="font-serif text-xl font-bold text-[#3D3D3D]">{m.name}</p>
                  <p className="text-xs text-stone-500 mt-1">{m.nameEn}</p>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p
                    className="text-xs font-semibold tracking-widest mb-3"
                    style={{ color: m.accent }}
                  >
                    {m.role}
                  </p>
                  <p className="font-serif text-base font-bold text-[#3D3D3D] mb-3 leading-snug">
                    「{m.catchphrase}」
                  </p>
                  <p className="text-sm text-stone-600 leading-relaxed flex-grow">{m.bio}</p>

                  {m.href && (
                    <Link
                      href={m.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                      style={{ color: m.accent }}
                    >
                      詳しいプロフィールを見る
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <p className="text-center text-xs text-stone-500 mt-10">
            ※ プロフィール写真は後日差し替え予定です。
          </p>
        </div>
      </section>

      {/* チームのスタンス */}
      <section className="bg-[#FAF7F0] py-16 md:py-24" aria-labelledby="team-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
                OUR STANCE
              </p>
              <h2
                id="team-heading"
                className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-4 leading-tight"
              >
                チームで大切にしていること
              </h2>
              <div className="w-12 h-0.5 bg-[#95C11F] mb-6" aria-hidden="true" />
              <p className="text-stone-700 leading-relaxed mb-5 text-base md:text-lg">
                ゆめほけんは6名の小さなチームですが、
                <strong className="text-[#5C7A14]">「お客様の人生に寄り添う」</strong>
                という姿勢を全員で共有しています。
                保険の話だけでなく、お客様の暮らしや経営、ご家族のことまで、
                安心して話していただける場でありたいと考えています。
              </p>
            </div>

            <ul className="bg-white border border-stone-200 rounded-2xl p-7 md:p-8 space-y-3">
              {team.values.map((v, idx) => (
                <li
                  key={v}
                  className="flex items-start gap-4 border-b border-stone-100 last:border-b-0 pb-3 last:pb-0"
                >
                  <span className="font-serif text-2xl font-bold text-[#95C11F] leading-none shrink-0 mt-0.5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="text-stone-700 text-base leading-relaxed">{v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 採用への誘導 */}
      <section className="bg-white py-16 md:py-20 border-t border-stone-100" aria-label="採用案内">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8B5A2B] text-sm font-semibold tracking-[0.25em] mb-3">
            JOIN US
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-4">
            一緒に「ゆめ」を応援する仲間を募集中
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ログハウスのオフィスで、地域のお客様に寄り添う仕事を一緒に。
          </p>
          <Link
            href="/recruit"
            className="inline-flex items-center gap-2 bg-[#8B5A2B] hover:bg-[#6F4621] text-white px-7 py-3.5 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
          >
            採用情報を見る
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF7F0] py-14 md:py-20" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-4"
          >
            まずは、お気軽にご相談ください
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ご相談は無料です。「担当はこの人がいいな」というご希望もお気軽にどうぞ。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-2xl mx-auto">
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
          <div className="mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-[#5C7A14] hover:text-[#95C11F] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              会社概要TOPへ戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
