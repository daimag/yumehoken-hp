import type { Metadata } from "next"
import Link from "next/link"
import { Users, Heart, TrendingUp, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "株式会社大上設備の採用情報。土木・管・水道施設工事のスタッフを募集しています。",
}

export default function RecruitPage() {
  const features = [
    {
      number: "01",
      icon: Users,
      label: "LOCAL FIRST",
      title: "地域に根ざした働き方",
      description: "地元・下関を中心に、地域社会に貢献できる仕事です。長く腰を据えて働ける環境があります。",
    },
    {
      number: "02",
      icon: Heart,
      label: "BENEFITS",
      title: "充実の福利厚生",
      description: "社会保険完備。安心して長く働ける環境を整えています。",
    },
    {
      number: "03",
      icon: TrendingUp,
      label: "GROWTH",
      title: "資格取得サポート",
      description: "施工管理技士などの資格取得を会社がバックアップ。あなたの成長を全力で支えます。",
    },
  ]

  const positions = [
    {
      title: "土木施工管理",
      employmentType: "正社員",
      description: "土木工事現場での施工管理業務をお任せします。経験者優遇。",
    },
    {
      title: "管工事 施工スタッフ",
      employmentType: "正社員",
      description: "給排水・空調設備の施工業務。未経験者歓迎、丁寧に指導します。",
    },
    {
      title: "水道施設工事スタッフ",
      employmentType: "正社員",
      description: "上下水道工事の現場作業。チームで協力しながら進めます。",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="relative bg-[#1a365d] text-white py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-saiyo.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0f2441]/85 via-[#1a365d]/70 to-[#0f2441]/90"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#f59e0b] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">RECRUIT</p>
          <h1 className="text-4xl md:text-6xl font-black mb-5 drop-shadow-md leading-tight">採用情報</h1>
          <div className="w-20 h-1 bg-[#f59e0b] mb-5" />
          <p className="text-stone-200 max-w-2xl md:text-lg">
            地域のインフラを、私たちと一緒に支えませんか。
          </p>
        </div>
      </section>

      {/* メッセージ */}
      <section className="py-24 md:py-28 bg-white">
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#92400e] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">MESSAGE</p>
          <h2 className="text-3xl md:text-5xl font-black text-[#1a365d] mb-6 leading-tight">
            一人ひとりが、<br className="md:hidden" />
            <span className="text-[#92400e]">地域を支える担い手</span>。
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto mb-8" />
          <p className="text-stone-700 leading-loose md:text-base max-w-2xl mx-auto">
            私たち大上設備は、地域のインフラを支える誇りある仕事に携わっています。
            未経験の方も、経験豊富な方も、ともに成長していける仲間を募集しています。
          </p>
        </FadeIn>
      </section>

      {/* 働く魅力 */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[#92400e] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">FEATURES</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a365d] mb-5 leading-tight">
              働く魅力
            </h2>
            <div className="w-20 h-1 bg-[#f59e0b] mx-auto" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <FadeIn key={f.title} delay={idx * 150}>
                <div className="group relative bg-white border border-stone-200 border-l-4 border-l-[#1a365d] rounded-sm p-8 h-full hover:border-l-[#f59e0b] hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-[#f59e0b] text-5xl font-black leading-none">
                      {f.number}
                    </span>
                    <div className="w-12 h-12 bg-[#1a365d] rounded-sm flex items-center justify-center group-hover:bg-[#f59e0b] transition-colors duration-300">
                      <f.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <p className="text-[10px] tracking-[0.3em] text-[#92400e] font-bold mb-2">
                    {f.label}
                  </p>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3 leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{f.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 募集職種 */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[#92400e] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">POSITIONS</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a365d] mb-5 leading-tight">
              募集職種
            </h2>
            <div className="w-20 h-1 bg-[#f59e0b] mx-auto" />
          </FadeIn>
          <div className="space-y-4">
            {positions.map((p, idx) => (
              <FadeIn key={p.title} delay={idx * 100}>
                <article className="group bg-white border border-stone-200 border-l-4 border-l-[#1a365d] rounded-sm p-7 hover:border-l-[#f59e0b] hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-[#1a365d] leading-tight">{p.title}</h3>
                    <span className="inline-flex items-center text-xs font-bold bg-[#1a365d] text-white px-4 py-1.5 rounded-sm tracking-wider">
                      {p.employmentType}
                    </span>
                  </div>
                  <p className="text-stone-700 leading-relaxed">{p.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          <p className="text-center text-xs text-stone-500 mt-10">
            ※ 募集条件・待遇等の詳細はお問い合わせください。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-[#1a365d] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 50%, rgba(245,158,11,0.12) 0%, transparent 50%), radial-gradient(circle at 85% 50%, rgba(245,158,11,0.08) 0%, transparent 50%)",
          }}
        />
        <FadeIn className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#f59e0b] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">CONTACT</p>
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight drop-shadow-md">
            ご応募・お問い合わせ
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto mb-8" />
          <p className="text-stone-200 mb-10 leading-loose">
            まずはお気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center bg-white text-[#1a365d] hover:bg-[#f59e0b] hover:text-[#1c1917] px-10 py-4 rounded-sm font-bold transition-colors duration-300"
          >
            お問い合わせフォーム
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
