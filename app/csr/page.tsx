import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  Mountain,
  Volleyball,
  Palette,
  Star,
  TreePine,
  Sprout,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "社会貢献（CSR）｜夢を応援する5つのパートナー",
  description:
    "ゆめほけん（ドリームインシュアランス）は「夢を持つ人」を応援する企業として、登山家・スポーツチーム・アーティスト・福祉団体・地域NPOの5つのパートナーをサポートしています。",
  openGraph: {
    title: "社会貢献（CSR）｜ゆめほけん",
    description: "夢を応援する5つのパートナー。",
  },
}

const partners = [
  {
    href: "/csr/nishikawa",
    name: "登山家 西川 史晃",
    icon: Mountain,
    role: "登山家・コーチ",
    summary:
      "七大陸最高峰登頂を目指す。「夢を持つ大人を増やす」をテーマに講演活動。2022年エベレスト登頂成功。",
    accent: "#5C7A14",
    bg: "bg-[#F4F8E8]",
  },
  {
    href: "/csr/kanoa",
    name: "カノアラウレアーズ福岡",
    icon: Volleyball,
    role: "女子バレーボールチーム",
    summary: "福岡県田川郡福智町をホームとする女子バレーボールチーム。S.Vリーグ昇格に挑戦中。",
    accent: "#0EA5E9",
    bg: "bg-sky-50",
  },
  {
    href: "/csr/uta",
    name: "u-ta（木村ゆうた）",
    icon: Palette,
    role: "詩人・画家",
    summary:
      "「絵と詩で穏やかな時間をつくる」をコンセプトに活動するアーティスト。代表作に絵本『空の国のハルメン』。",
    accent: "#C8956B",
    bg: "bg-[#FAF3E2]",
  },
  {
    href: "/csr/make-a-wish",
    name: "Make-A-Wish Japan",
    icon: Star,
    role: "難病児の夢実現支援団体",
    summary:
      "難病と闘う子どもたちの夢を実現する国際的非営利団体。ゆめほけんは2024年から寄付支援を開始。",
    accent: "#E94B6E",
    bg: "bg-rose-50",
  },
  {
    href: "/csr/sukiccha",
    name: "NPO法人 好きっちゃ北九州",
    icon: TreePine,
    role: "地域・教育NPO",
    summary:
      "北九州の子どもと住民が「自分のまち」を愛するための活動を展開。防災・ESD・SDGsをテーマに。",
    accent: "#95C11F",
    bg: "bg-[#F4F8E8]",
  },
]

export default function CsrIndexPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="relative bg-gradient-to-br from-[#FAF7F0] via-white to-[#F4F8E8] py-16 md:py-24 overflow-hidden">
        <div className="absolute top-10 right-10 opacity-15" aria-hidden="true">
          <Sprout className="w-48 h-48 text-[#95C11F]" strokeWidth={1} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-15" aria-hidden="true">
          <Heart className="w-40 h-40 text-[#C8956B]" strokeWidth={1} />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.3em] mb-3">
            CSR — DREAM SUPPORT
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D3D3D] mb-6 leading-tight">
            夢を応援する活動
          </h1>
          <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-8" aria-hidden="true" />
          <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            ゆめほけんは、「夢を持つ人」を応援する企業として、
            お客さまから得た利益の一部を使って、
            <strong className="text-[#5C7A14]">5つのパートナー</strong>
            の活動をサポートしています。
            <br className="hidden md:block" />
            笑顔あふれるまちづくりに、これからも一層の貢献をしてまいります。
          </p>
        </div>
      </section>

      {/* 5パートナー一覧 */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="partners-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              OUR PARTNERS
            </p>
            <h2
              id="partners-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              5つのパートナー
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              スポーツ・登山・アート・福祉・地域。
              <br className="hidden md:block" />
              ジャンルを越えて、それぞれの「夢」に伴走しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className={`group flex flex-col h-full ${p.bg} border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5`}
              >
                <span
                  className="block h-1.5 w-full"
                  style={{ backgroundColor: p.accent }}
                  aria-hidden="true"
                />
                <div className="p-7 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white">
                      <p.icon className="w-6 h-6" style={{ color: p.accent }} aria-hidden="true" />
                    </span>
                    <span
                      className="text-xs font-semibold tracking-widest"
                      style={{ color: p.accent }}
                    >
                      {p.role}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#3D3D3D] mb-3 leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-sm md:text-base text-stone-700 leading-relaxed mb-5 flex-grow">
                    {p.summary}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#5C7A14] group-hover:gap-3 transition-all">
                    詳しく見る
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* メッセージ */}
      <section className="bg-[#FAF7F0] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-xl md:text-2xl font-bold text-[#5C7A14] mb-4">
            「笑顔あふれるまちづくりに、これからも一層の貢献をしてまいります」
          </p>
          <p className="text-stone-600 text-sm">
            — ドリームインシュアランス株式会社
          </p>
        </div>
      </section>
    </>
  )
}
