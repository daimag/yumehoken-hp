import Link from "next/link"
import { ArrowRight, Hammer, Wrench, Droplets, Phone, ChevronDown } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export default function Home() {
  const services = [
    {
      number: "01",
      icon: Hammer,
      label: "CIVIL ENGINEERING",
      title: "土木工事",
      description: "河川・トンネル・橋梁から道路・造成・基礎工事まで、地域インフラを総合的に支えます。",
      href: "/services#civil",
      image: "/images/services/kasen.jpg",
    },
    {
      number: "02",
      icon: Wrench,
      label: "PIPING WORKS",
      title: "管工事",
      description: "給排水・空調・ガス・ダクトまで、暮らしと産業を支える配管工事を確かな技術で施工します。",
      href: "/services#piping",
      image: "/images/services/kuchou.jpg",
    },
    {
      number: "03",
      icon: Droplets,
      label: "WATER FACILITY",
      title: "水道施設工事",
      description: "上下水道の本管布設から浄水・配水施設の維持管理、災害復旧まで対応します。",
      href: "/services#water",
      image: "/images/services/josuidou.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative bg-[#1a365d] text-white overflow-hidden flex items-center min-h-[600px] md:min-h-[80vh]">
        {/* 背景画像（3枚を21秒周期で循環クロスフェード） */}
        <div
          className="hero-slide-a absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-kanmon.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="hero-slide-b absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-industrial.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="hero-slide-c absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-pipes.jpg')" }}
          aria-hidden="true"
        />
        {/* 暗いオーバーレイ（テキスト視認性確保） */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0f2441]/85 via-[#1a365d]/70 to-[#0f2441]/90"
          aria-hidden="true"
        />
        {/* 装飾の薄いラジアルグラデ */}
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <p className="text-[#f59e0b] text-sm md:text-base font-medium mb-4 tracking-widest">
              SHIMONOSEKI · CONSTRUCTION
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-md">
              地域のインフラを、<br />
              確かな技術で支える。
            </h1>
            <p className="text-base md:text-lg text-stone-200 leading-relaxed mb-10 max-w-2xl">
              株式会社大上設備は、山口県下関市を拠点に
              土木工事・管工事・水道施設工事を手がけ、
              地域社会の基盤づくりに貢献してまいります。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white text-[#1a365d] hover:bg-stone-100 px-8 py-4 rounded-sm font-bold transition-colors"
              >
                事業内容を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white/80 text-white hover:bg-white hover:text-[#1a365d] px-8 py-4 rounded-sm font-bold transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>

        {/* SCROLL インジケーター */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/80"
          aria-hidden="true"
        >
          <span className="text-[10px] tracking-[0.3em] mb-2">SCROLL</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </section>

      {/* リード（会社紹介文） */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* 左：写真 */}
            <FadeIn direction="right" className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-[#1a365d]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/hero-pipes.jpg')" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0f2441]/50 via-transparent to-transparent"
                  aria-hidden="true"
                />
                {/* 装飾アクセント */}
                <div className="absolute top-6 left-6 flex flex-col items-start gap-2">
                  <div className="w-12 h-1 bg-[#f59e0b]" />
                  <p className="text-[10px] tracking-[0.3em] text-white/90 font-semibold">
                    INFRASTRUCTURE
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* 右：紹介文 */}
            <FadeIn direction="left" delay={150} className="lg:col-span-7">
              <p className="text-[#92400e] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">
                INTRODUCTION
              </p>
              <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#1a365d] leading-[1.85] mb-8">
                山口県下関市に根ざし、
                <span className="text-[#92400e]">土木工事・管工事・水道施設工事</span>
                を通じて地域のインフラを支える、
                <span className="text-[#92400e]">建設のプロフェッショナル集団</span>
                です。
              </h2>
              <p className="text-stone-700 leading-loose mb-5">
                道路や橋梁から水道・空調設備まで、
                目に見えにくい場所で日々の暮らしと産業を支える仕事こそ、
                私たちが誇りをもって取り組んでいる仕事です。
              </p>
              <p className="text-stone-700 leading-loose mb-8">
                確かな技術と地域への深い理解を強みに、
                これからも下関の未来を、足元から支えてまいります。
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center text-[#1a365d] font-bold border-b-2 border-[#f59e0b] pb-1.5 hover:pr-2 transition-all duration-300"
              >
                私たちについて
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <p className="text-xs text-stone-400 mt-6">
                ※ 文面はサンプルです。創業年・実績数等はヒアリング後に正式版へ更新します。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 事業内容 */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-[#92400e] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">OUR SERVICES</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a365d] mb-5 leading-tight">
              事業内容
            </h2>
            <div className="w-20 h-1 bg-[#f59e0b] mx-auto mb-6" />
            <p className="text-stone-700 max-w-2xl mx-auto leading-loose md:text-lg">
              建設業の3分野で、地域インフラを総合的に支えます。
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <FadeIn key={service.title} delay={idx * 150}>
                <Link
                  href={service.href}
                  className="group relative block aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm bg-[#1a365d]"
                >
                  {/* 背景画像 */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                    aria-hidden="true"
                  />
                  {/* グラデオーバーレイ */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0f2441]/95 via-[#1a365d]/55 to-[#1a365d]/20 transition-opacity duration-500 group-hover:from-[#0f2441]"
                    aria-hidden="true"
                  />

                  {/* コンテンツ */}
                  <div className="relative h-full flex flex-col justify-between p-7 md:p-8 text-white">
                    {/* 上部：番号＋アイコン */}
                    <div className="flex items-start justify-between">
                      <span className="text-[#f59e0b] text-5xl md:text-6xl font-black leading-none drop-shadow-md">
                        {service.number}
                      </span>
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-white/15 backdrop-blur-sm rounded-sm flex items-center justify-center transition-colors duration-300 group-hover:bg-[#f59e0b]">
                        <service.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                      </div>
                    </div>

                    {/* 下部：タイトルと説明 */}
                    <div>
                      <p className="text-[#f59e0b] text-[11px] md:text-xs font-bold tracking-[0.3em] mb-2">
                        {service.label}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-md leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-stone-200 text-sm leading-relaxed mb-5 line-clamp-3">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-bold border-b-2 border-[#f59e0b] pb-1 transition-all duration-300 group-hover:pr-2">
                        詳しく見る
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 会社紹介 */}
      <section className="relative py-24 md:py-32 bg-[#1a365d] text-white overflow-hidden">
        {/* 背景画像（薄く） */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/services/kyouryou.jpg')" }}
          aria-hidden="true"
        />
        {/* 暗いグラデオーバーレイ */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0f2441] via-[#0f2441]/85 to-[#1a365d]/65"
          aria-hidden="true"
        />
        {/* 装飾：右下のラジアルグロー */}
        <div
          className="absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 90%, rgba(245,158,11,0.15) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* 左：見出し＋メッセージ */}
            <FadeIn direction="right">
              <p className="text-[#f59e0b] text-xs md:text-sm font-bold tracking-[0.4em] mb-5">ABOUT US</p>
              <h2 className="text-4xl md:text-6xl font-black mb-7 leading-[1.15] drop-shadow-md">
                地域に根ざし、
                <br />
                <span className="text-[#f59e0b]">信頼</span>で築き上げる。
              </h2>
              <div className="w-20 h-1 bg-[#f59e0b] mb-8" />
              <p className="text-stone-200 leading-loose mb-5 md:text-base">
                株式会社大上設備は、山口県下関市を拠点とする建設会社です。
                土木・管・水道施設工事において、
                これまで培った技術と経験で地域のインフラ整備に貢献してまいりました。
              </p>
              <p className="text-stone-200 leading-loose mb-10">
                安全第一を徹底し、確かな品質で
                お客様にご満足いただける施工をお約束します。
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center text-white font-bold border-b-2 border-[#f59e0b] pb-1.5 hover:pr-2 transition-all duration-300"
              >
                会社概要を見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </FadeIn>

            {/* 右：会社情報（カードなし、リスト形式） */}
            <FadeIn direction="left" delay={150}>
              <p className="text-[#f59e0b] text-xs md:text-sm font-bold tracking-[0.4em] mb-5">COMPANY</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">会社概要</h3>
              <dl className="space-y-0 border-t border-white/15">
                {[
                  { label: "商号", value: "株式会社大上設備" },
                  { label: "代表者", value: "代表取締役 網田 茂幸" },
                  { label: "所在地", value: "〒751-0805　山口県下関市一の宮住吉3丁目3-25" },
                  { label: "資本金", value: "1,000万円" },
                  { label: "許可番号", value: "山口県知事許可 第002265号" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-4 py-5 border-b border-white/15"
                  >
                    <dt className="text-[#f59e0b] text-xs md:text-sm font-bold tracking-widest uppercase">
                      {item.label}
                    </dt>
                    <dd className="text-white text-sm md:text-base leading-relaxed">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#1a365d] text-white">
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            お見積り・ご相談はお気軽に
          </h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            工事に関するご相談、お見積りのご依頼など、
            まずはお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:0832234311"
              className="inline-flex items-center justify-center bg-white text-[#1a365d] hover:bg-stone-100 px-8 py-4 rounded-sm font-bold transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              083-223-4311
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white/80 text-white hover:bg-white hover:text-[#1a365d] px-8 py-4 rounded-sm font-bold transition-colors"
            >
              お問い合わせフォーム
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
