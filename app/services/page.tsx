import type { Metadata } from "next"
import Link from "next/link"
import { Hammer, Wrench, Droplets, CheckCircle2, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "株式会社大上設備の事業内容。土木工事・管工事・水道施設工事の3分野で、河川・トンネル・橋梁から空調・給排水・上下水道施設まで、地域のインフラを総合的に支えます。",
}

type ServiceItem = {
  title: string
  description: string
}

type FeatureImage = {
  src: string
  caption: string
}

type Service = {
  id: string
  icon: typeof Hammer
  label: string
  title: string
  lead: string
  description: string
  featuredImages: FeatureImage[]
  items: ServiceItem[]
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: "civil",
      icon: Hammer,
      label: "CIVIL ENGINEERING",
      title: "土木工事",
      lead: "地域の生活基盤を、足元から支える。",
      description:
        "河川・トンネル・橋梁といった大型インフラから、宅地造成・排水路整備まで、土木工事を総合的に施工いたします。自然災害から人々の暮らしを守り、安全で快適な社会基盤づくりに貢献することが私たちの使命です。",
      featuredImages: [
        { src: "/images/services/kasen.jpg", caption: "河川工事" },
        { src: "/images/services/kyouryou.jpg", caption: "橋梁工事" },
      ],
      items: [
        {
          title: "河川工事",
          description:
            "自然災害から人々の生活を守る、土木工事の中でも重要性の高い分野です。護岸・築堤工事や河道整備を通じて、地域の防災力向上に貢献します。",
        },
        {
          title: "トンネル工事",
          description:
            "国土の7割が山岳地帯を占める日本において、円滑な交通網の整備に欠かせない工事です。",
        },
        {
          title: "橋梁工事",
          description:
            "河川・渓谷・運河・海などに橋を架ける工事。生活と物流を支える要として、長期にわたって地域に貢献するインフラを築きます。",
        },
        {
          title: "土地造成・整地工事",
          description:
            "自然の地形のままでは利用しにくい土地を、住宅・商業・産業用地として活用できるよう整える工事です。",
        },
        {
          title: "下水道管埋設工事",
          description:
            "下水道本管を地中に埋設する施工を、周辺環境への配慮と確かな技術で進めます。",
        },
        {
          title: "治山工事",
          description:
            "森林の造成・保全を通じて、山の地盤を安定させる土木工事。豪雨や地震による土砂災害から地域を守ります。",
        },
        {
          title: "道路・舗装工事",
          description:
            "市道・農道などの新設・改良工事、舗装の打ち替えまで対応。生活道路の安全と利便性を支えます。",
        },
        {
          title: "擁壁・法面工事",
          description:
            "がけ崩れや法面の崩落を防ぐ擁壁施工、法面保護工事を確実に施工します。",
        },
      ],
    },
    {
      id: "piping",
      icon: Wrench,
      label: "PIPING WORKS",
      title: "管工事",
      lead: "暮らしと産業の流れを、確かな技術でつなぐ。",
      description:
        "給水・給湯から冷暖房・空調、ガス配管、ダクト、浄化槽まで、配管に関わるあらゆる工事を一手に担います。新築工事はもちろん、改修・リニューアルから日常の保守メンテナンスまで、配管設備のライフサイクル全体に対応いたします。",
      featuredImages: [
        { src: "/images/services/kuchou.jpg", caption: "空調・冷暖房設備工事" },
        { src: "/images/services/kyusui.jpg", caption: "給水・給湯設備工事" },
      ],
      items: [
        {
          title: "冷暖房設備工事",
          description:
            "業務用・家庭用の冷暖房設備の設置・更新工事。快適な室内環境づくりをサポートします。",
        },
        {
          title: "冷凍・冷蔵設備工事",
          description:
            "食品工場・店舗などの冷凍冷蔵設備に関わる配管工事に対応します。",
        },
        {
          title: "空調・換気設備工事",
          description:
            "オフィス・店舗・工場などの空調・換気システム一式を施工。省エネ性能にも配慮した提案を行います。",
        },
        {
          title: "給水・給湯設備工事",
          description:
            "水回り全般の給水・給湯配管工事を、新築から改修まで幅広く対応いたします。",
        },
        {
          title: "ガス管配管工事",
          description:
            "都市ガス・LPガスの配管施工を、安全管理を徹底して進めます。",
        },
        {
          title: "ダクト工事",
          description:
            "空調・換気・排煙ダクトの製作・取付工事。効率的な空気の流れを実現します。",
        },
        {
          title: "浄化槽工事",
          description:
            "浄化槽の新設・更新・撤去工事、保守メンテナンスまで対応します。",
        },
        {
          title: "保守・メンテナンス",
          description:
            "配管設備の定期点検、漏水・故障対応など、長く安心して使い続けるためのサポートを提供します。",
        },
      ],
    },
    {
      id: "water",
      icon: Droplets,
      label: "WATER FACILITY",
      title: "水道施設工事",
      lead: "地域の「水」を、確実に守り続ける。",
      description:
        "上下水道の本管布設工事から浄水・配水施設の維持管理、災害復旧まで、生活と産業を支える水のインフラを総合的に施工。住民の方々への給水を維持しつつ、計画的かつ着実に工事を進めます。",
      featuredImages: [
        { src: "/images/services/josuidou.jpg", caption: "上水道本管布設工事" },
        { src: "/images/services/gesuidou.jpg", caption: "下水道管布設工事" },
      ],
      items: [
        {
          title: "上水道本管布設・更新工事",
          description:
            "配水本管の新設・老朽管の更新工事に対応。安全な水の安定供給を支えます。",
        },
        {
          title: "下水道管布設工事",
          description:
            "下水道管の埋設・更新工事を確実に施工。汚水・雨水の適切な処理に貢献します。",
        },
        {
          title: "浄水・配水施設工事",
          description:
            "浄水場・配水池などの施設工事、設備更新工事を施工いたします。",
        },
        {
          title: "水道施設の維持管理",
          description:
            "水道施設の点検・補修・運転管理など、長期にわたる安定稼働を支えます。",
        },
        {
          title: "災害復旧工事",
          description:
            "豪雨・地震などによる水道施設の被害に対し、迅速な復旧工事で生活インフラを守ります。",
        },
        {
          title: "非開削工法対応",
          description:
            "道路を掘削せずに管路を更生する工法に対応。交通や周辺環境への影響を最小限に抑えます。",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="relative bg-[#1a365d] text-white py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-jigyou.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0f2441]/85 via-[#1a365d]/70 to-[#0f2441]/90"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#f59e0b] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">OUR SERVICES</p>
          <h1 className="text-4xl md:text-6xl font-black mb-5 drop-shadow-md leading-tight">事業内容</h1>
          <div className="w-20 h-1 bg-[#f59e0b] mb-5" />
          <p className="text-stone-200 max-w-2xl md:text-lg">
            建設業の3分野で、地域インフラを総合的に支えます。
          </p>
        </div>
      </section>

      {/* リード文 */}
      <section className="py-16 md:py-20 bg-white">
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-700 leading-loose md:text-lg">
            株式会社大上設備は、山口県下関市を拠点に
            <strong className="text-[#1a365d] font-bold">「土木工事」「管工事」「水道施設工事」</strong>の3分野で
            地域社会の基盤づくりを担っています。
            <br className="hidden md:inline" />
            自然災害への備えから日々の暮らしを支える設備まで、
            幅広い分野で確かな技術と豊富な経験を活かし、地域に貢献いたします。
          </p>
        </FadeIn>
      </section>

      {/* サービス詳細 */}
      <section className="bg-stone-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => {
            const reverse = index % 2 === 1
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                {/* ヘッダー部分 */}
                <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 bg-[#1a365d] rounded-sm flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="lg:col-span-11">
                    <p className="text-[#92400e] text-xs md:text-sm font-bold tracking-[0.4em] mb-3">
                      {service.label}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-[#1a365d] mb-4 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg text-stone-600 font-semibold mb-5">
                      {service.lead}
                    </p>
                    <div className="w-20 h-1 bg-[#f59e0b] mb-7" />
                    <p className="text-stone-700 leading-loose md:text-base max-w-3xl">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>

                {/* 代表的な工事のビジュアル */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 lg:ml-[8.33%]">
                  {service.featuredImages.map((img, idx) => (
                    <FadeIn
                      key={img.src}
                      delay={idx * 120}
                      className="group relative aspect-[16/9] rounded-sm overflow-hidden bg-stone-200"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${img.src}')` }}
                        aria-hidden="true"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <p className="text-[10px] tracking-[0.3em] text-[#f59e0b] font-semibold mb-1">
                          {service.label}
                        </p>
                        <h3 className="text-lg md:text-xl font-bold drop-shadow-md">
                          {img.caption}
                        </h3>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* 工種一覧（カードグリッド） */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:ml-[8.33%]">
                  {service.items.map((item, idx) => (
                    <FadeIn
                      key={item.title}
                      delay={idx * 60}
                      className="bg-white border border-stone-200 border-l-4 border-l-[#1a365d] rounded-sm p-6 hover:border-l-[#f59e0b] hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start mb-3">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-[#1a365d] flex-shrink-0 mt-0.5" />
                        <h3 className="text-base font-bold text-[#1a365d] leading-tight">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {item.description}
                      </p>
                    </FadeIn>
                  ))}
                </div>

                {/* 個別CTA */}
                <FadeIn className="mt-8 lg:ml-[8.33%]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#1a365d] font-semibold hover:text-[#92400e] transition-colors"
                  >
                    {service.title}についてお問い合わせ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </FadeIn>
              </article>
            )
          })}
        </div>
      </section>

      {/* 対応エリア */}
      <section className="py-20 md:py-24 bg-white border-t-2 border-[#1a365d]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-[#92400e] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">
              SERVICE AREA
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#1a365d] mb-5 leading-tight">
              対応エリア
            </h2>
            <div className="w-20 h-1 bg-[#f59e0b] mx-auto" />
          </FadeIn>
          <FadeIn delay={120} className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-4 leading-relaxed">
              山口県<span className="text-[#92400e]">下関市</span>を中心に、近隣エリアまで対応
            </p>
            <p className="text-stone-700 leading-loose md:text-base">
              官公庁・民間問わず、土木・管・水道施設工事のご相談を承ります。
              <br className="hidden md:inline" />
              対応可否や詳細につきましては、お気軽にお問い合わせください。
            </p>
          </FadeIn>
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
            まずはお気軽にご相談ください
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto mb-8" />
          <p className="text-stone-200 mb-10 leading-loose md:text-base">
            工事内容のご相談・お見積りは無料で承っております。
            <br />
            電話・フォームのいずれもご利用いただけます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:0832234311"
              className="inline-flex items-center justify-center bg-white text-[#1a365d] hover:bg-stone-100 px-8 py-4 rounded-sm font-bold transition-colors"
            >
              083-223-4311
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center border-2 border-white/80 text-white hover:bg-white hover:text-[#1a365d] px-8 py-4 rounded-sm font-bold transition-colors"
            >
              お問い合わせフォーム
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
