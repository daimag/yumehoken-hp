import Link from "next/link"
import type { Metadata } from "next"
import {
  Car,
  Plane,
  Cat,
  ArrowRight,
  ExternalLink,
  Smartphone,
  Clock,
  Phone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "ネット申込｜ゆめほけん",
  description:
    "ゆめほけん（ドリームインシュアランス）でネットからお申込みいただける保険商品のご案内。1日単位の自動車保険「乗るピタ！」、海外旅行保険「新・海外旅行【off!】」、ペット保険など、スマホ・PCから簡単に申込できます。",
  openGraph: {
    title: "ネット申込｜ゆめほけん",
    description: "スマホ・PCから簡単お申込みいただける保険商品のご案内。",
  },
}

const products = [
  {
    icon: Car,
    title: "乗るピタ！",
    sub: "1日（12時間）単位の自動車保険",
    company: "東京海上日動",
    description:
      "他人の車を借りるときに、12時間単位で加入できる自動車保険。レジャーや帰省、引越しの時に。スマホから簡単手続き、最短即日加入が可能です。",
    points: [
      "12時間単位で加入OK",
      "スマホから簡単申込",
      "対人・対物賠償＋ロードサービス付き",
    ],
    accent: "#0EA5E9",
    bg: "bg-sky-50",
    cta: "乗るピタ！について相談",
    href: "/contact?type=personal&service=norupita",
  },
  {
    icon: Plane,
    title: "新・海外旅行【off!（オフ）】",
    sub: "ネット完結の海外旅行保険",
    company: "東京海上日動",
    description:
      "パソコン・スマホから申込・契約できる海外旅行保険。ネット申込限定で保険料が割安、海外旅行出発当日のお申込みも可能です。",
    points: [
      "ネット申込で保険料が割安",
      "出発当日まで申込可能",
      "病気・ケガ・盗難まで補償",
    ],
    accent: "#5C7A14",
    bg: "bg-[#F4F8E8]",
    cta: "海外旅行保険について相談",
    href: "/contact?type=personal&service=overseas",
  },
  {
    icon: Cat,
    title: "ペット保険",
    sub: "東京海上ニッセイ同和「あんしんペット」",
    company: "東京海上ニッセイ同和",
    description:
      "大切な家族の一員であるペットがケガや病気で治療を受けた場合の費用を補償。犬・猫の年齢や品種に合わせた最適なプランをご案内します。",
    points: [
      "通院・手術・入院費用を補償",
      "犬・猫の幅広い品種に対応",
      "年齢に応じたプラン選択可",
    ],
    accent: "#C8956B",
    bg: "bg-[#FAF3E2]",
    cta: "ペット保険について相談",
    href: "/contact?type=personal&service=pet",
  },
]

export default function ApplyPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-[#FAF7F0] to-[#F4F8E8] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border border-stone-200 mb-5">
            <Smartphone className="w-8 h-8 text-[#5C7A14]" aria-hidden="true" />
          </div>
          <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.3em] mb-3">
            ONLINE APPLICATION
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-4 leading-tight">
            ネット申込
          </h1>
          <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-6" aria-hidden="true" />
          <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            スマホ・PCからカンタンにお申込みいただける保険商品をご案内しています。
          </p>
        </div>
      </section>

      {/* 商品一覧 */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="products-heading"
            className="sr-only"
          >
            ネット申込可能な商品
          </h2>
          <div className="space-y-6">
            {products.map((p) => (
              <article
                key={p.title}
                className={`${p.bg} border border-stone-200 rounded-2xl overflow-hidden`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 p-8 md:p-10 flex flex-col items-center md:items-start justify-center">
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm mb-4"
                    >
                      <p.icon
                        className="w-8 h-8"
                        style={{ color: p.accent }}
                        aria-hidden="true"
                      />
                    </div>
                    <p
                      className="text-xs font-semibold tracking-widest mb-1"
                      style={{ color: p.accent }}
                    >
                      {p.company}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] leading-tight mb-1">
                      {p.title}
                    </h3>
                    <p className="text-sm text-stone-600">{p.sub}</p>
                  </div>

                  <div className="md:col-span-2 bg-white border-t md:border-t-0 md:border-l border-stone-200 p-8 md:p-10">
                    <p className="text-sm md:text-base text-stone-700 leading-relaxed mb-5">
                      {p.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2 text-sm text-stone-700"
                        >
                          <span
                            className="inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{ backgroundColor: p.accent }}
                            aria-hidden="true"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm text-white shadow-sm hover:shadow-md transition-all"
                      style={{ backgroundColor: p.accent }}
                    >
                      {p.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-xs text-stone-500 mt-8">
            ※ 各商品の詳細・お申込みURLは、ご相談時に最新情報を案内します。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF7F0] py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-4">
            その他のご相談もお気軽に
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            生命・医療・自動車・火災・資産保険のご相談は、
            <br className="hidden md:block" />
            ログハウスへの来店・訪問・LINE・お電話で承ります。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
            <Link
              href="/personal"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-6 py-3.5 rounded-md font-bold transition-all shadow-sm hover:shadow-md"
            >
              一般のお客様向けサービス
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0939650660"
              className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-[#95C11F] text-[#5C7A14] hover:bg-[#95C11F] hover:text-white px-6 py-3.5 rounded-md font-bold transition-all"
            >
              <Phone className="w-4 h-4" />
              093-965-0660
            </a>
          </div>
          <p className="text-xs text-stone-500 mt-5">
            <Clock className="inline w-3.5 h-3.5 mr-1 -mt-0.5" aria-hidden="true" />
            営業時間：月〜金 9:00〜17:00（土日祝休）
          </p>
        </div>
      </section>
    </>
  )
}
