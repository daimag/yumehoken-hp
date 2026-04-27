import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社大上設備の会社概要。山口県下関市を拠点に土木・管・水道施設工事を手掛ける建設会社です。",
}

export default function AboutPage() {
  const profile = [
    { label: "商号", value: "株式会社大上設備" },
    { label: "代表者", value: "代表取締役 網田 茂幸" },
    { label: "所在地", value: "〒751-0805 山口県下関市一の宮住吉3丁目3-25" },
    { label: "電話番号", value: "083-223-4311" },
    { label: "資本金", value: "1,000万円" },
    { label: "事業内容", value: "土木工事 / 管工事 / 水道施設工事" },
    { label: "建設業許可", value: "山口県知事許可 第002265号" },
    { label: "関連会社", value: "株式会社プランテラス（PLANTERAS GROUP）" },
  ]

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="relative bg-[#1a365d] text-white py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-kaisya.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0f2441]/85 via-[#1a365d]/70 to-[#0f2441]/90"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#f59e0b] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">ABOUT US</p>
          <h1 className="text-4xl md:text-6xl font-black mb-5 drop-shadow-md leading-tight">会社概要</h1>
          <div className="w-20 h-1 bg-[#f59e0b] mb-5" />
          <p className="text-stone-200 max-w-2xl md:text-lg">
            地域に根ざし、地域に貢献する建設会社として。
          </p>
        </div>
      </section>

      {/* 代表メッセージ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* 左：写真と称号 */}
            <FadeIn direction="right" className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-[#1a365d]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/hero-kaisya.jpg')" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0f2441]/85 via-[#1a365d]/30 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <div className="w-12 h-1 bg-[#f59e0b] mb-3" />
                  <p className="text-[10px] tracking-[0.3em] text-[#f59e0b] font-bold mb-2">
                    REPRESENTATIVE
                  </p>
                  <p className="text-sm text-stone-200 mb-1">代表取締役</p>
                  <p className="text-2xl font-bold drop-shadow-md">網田 茂幸</p>
                </div>
              </div>
            </FadeIn>

            {/* 右：メッセージ本文 */}
            <FadeIn direction="left" delay={150} className="lg:col-span-7">
              <p className="text-[#92400e] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">
                MESSAGE
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a365d] mb-5 leading-tight">
                代表挨拶
              </h2>
              <div className="w-20 h-1 bg-[#f59e0b] mb-8" />
              <div className="space-y-5 text-stone-700 leading-loose md:text-base">
                <p>
                  このたびは株式会社大上設備のホームページをご覧いただき、誠にありがとうございます。
                </p>
                <p>
                  当社は山口県下関市を拠点に、
                  <strong className="text-[#1a365d] font-bold">土木工事・管工事・水道施設工事</strong>を通じて、
                  地域のインフラ整備に携わってまいりました。
                  長年培った技術と経験、そして
                  <strong className="text-[#1a365d] font-bold">「安全第一・品質本位」</strong>
                  の姿勢を大切に、これからも地域社会の発展に貢献してまいります。
                </p>
                <p>
                  社員一同、お客様にご満足いただける施工をお約束し、
                  地域の皆様から信頼される企業を目指してまいります。
                  今後ともどうぞよろしくお願い申し上げます。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 会社情報（濃紺・カードなしリスト形式） */}
      <section className="relative py-24 md:py-32 bg-[#1a365d] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/services/kyouryou.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0f2441]/95 via-[#0f2441]/85 to-[#1a365d]/85"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 15%, rgba(245,158,11,0.15) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <p className="text-[#f59e0b] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">
              COMPANY PROFILE
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5">会社情報</h2>
            <div className="w-20 h-1 bg-[#f59e0b]" />
          </FadeIn>

          <FadeIn delay={120}>
            <dl className="border-t border-white/15">
              {profile.map((item, idx) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6 py-5 border-b border-white/15"
                  style={{ animationDelay: `${idx * 50}ms` }}
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
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-white">
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#92400e] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">
            CONTACT
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a365d] mb-5 leading-tight">
            お気軽にお問い合わせください
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto mb-8" />
          <p className="text-stone-700 leading-loose mb-10">
            ご相談・お見積りは無料で承っております。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:0832234311"
              className="inline-flex items-center justify-center bg-[#1a365d] hover:bg-[#0f2441] text-white px-8 py-4 rounded-sm font-bold transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              083-223-4311
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white px-8 py-4 rounded-sm font-bold transition-colors"
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
