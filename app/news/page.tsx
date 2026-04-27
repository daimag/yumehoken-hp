import Link from "next/link"
import type { Metadata } from "next"
import { Bell, Newspaper, Calendar, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "お知らせ｜ゆめほけん",
  description:
    "ゆめほけん（ドリームインシュアランス）からのお知らせ一覧。営業案内、ニュースレター発行、お客様の声、社外活動の最新情報を掲載しています。",
  openGraph: {
    title: "お知らせ｜ゆめほけん",
    description: "営業案内・ニュースレター・お客様の声などをお届け。",
  },
}

type NewsItem = {
  date: string
  title: string
  category: "お知らせ" | "ニュースレター" | "お客様の声" | "CSR"
  href: string
}

const newsItems: NewsItem[] = [
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
    href: "/shukatsu",
  },
  {
    date: "2025.12.16",
    category: "ニュースレター",
    title: "ゆめほニュースレター最新号(2025年冬季号)を公開しました",
    href: "/newsletter",
  },
  {
    date: "2025.12.03",
    category: "お知らせ",
    title: "年末年始休業のお知らせ",
    href: "/news",
  },
  {
    date: "2025.10.03",
    category: "お知らせ",
    title: "終活ステーションのご案内",
    href: "/shukatsu",
  },
  {
    date: "2025.10.03",
    category: "ニュースレター",
    title: "ゆめほニュースレター最新号(2025年秋季号)を公開しました",
    href: "/newsletter",
  },
  {
    date: "2025.07.24",
    category: "お知らせ",
    title: "夏季休暇のお知らせ",
    href: "/news",
  },
  {
    date: "2025.07.24",
    category: "ニュースレター",
    title: "ゆめほニュースレター最新号(2025春季号)を公開しました",
    href: "/newsletter",
  },
  {
    date: "2025.07.20",
    category: "CSR",
    title: "登山家・西川さん 続報 — エベレスト登頂後の活動報告",
    href: "/csr/nishikawa",
  },
  {
    date: "2025.07.08",
    category: "CSR",
    title: "登山家・西川さんが凱旋来店されました",
    href: "/csr/nishikawa",
  },
]

const categoryStyles: Record<NewsItem["category"], { bg: string; text: string }> = {
  お知らせ: { bg: "bg-[#F4F8E8]", text: "text-[#5C7A14]" },
  ニュースレター: { bg: "bg-[#FAF3E2]", text: "text-[#92400E]" },
  お客様の声: { bg: "bg-rose-50", text: "text-rose-700" },
  CSR: { bg: "bg-sky-50", text: "text-sky-700" },
}

export default function NewsIndexPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-[#FAF7F0] to-[#F4F8E8] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.3em] mb-3">
            NEWS
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-4 leading-tight">
            お知らせ
          </h1>
          <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-6" aria-hidden="true" />
          <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            ゆめほけんからの最新情報・営業案内・お客様の声・社外活動などをお届けします。
          </p>
        </div>
      </section>

      {/* 一覧 */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="bg-white border border-stone-200 rounded-lg divide-y divide-stone-200">
            {newsItems.map((item, idx) => {
              const styles = categoryStyles[item.category]
              return (
                <li key={`${item.date}-${idx}`}>
                  <Link
                    href={item.href}
                    className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-6 px-6 py-5 hover:bg-[#F4F8E8] transition-colors"
                  >
                    <span className="flex items-center gap-2 text-xs font-semibold text-stone-500 md:w-28 shrink-0">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {item.date}
                    </span>
                    <span
                      className={`inline-flex items-center justify-center text-xs font-bold ${styles.text} ${styles.bg} px-3 py-1 rounded md:w-32 shrink-0`}
                    >
                      {item.category}
                    </span>
                    <span className="flex-grow text-sm md:text-base text-stone-800 group-hover:text-[#5C7A14] transition-colors">
                      {item.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#5C7A14] group-hover:translate-x-1 transition-all hidden md:block" aria-hidden="true" />
                  </Link>
                </li>
              )
            })}
          </ul>

          <p className="text-center text-xs text-stone-500 mt-6">
            ※ 一部の記事はリンク先の関連ページに集約されています。
          </p>
        </div>
      </section>

      {/* ニュースレター案内 */}
      <section className="bg-[#FAF7F0] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-stone-200 rounded-lg p-7 md:p-9 flex flex-col md:flex-row gap-6 items-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F4F8E8] shrink-0">
              <Newspaper className="w-8 h-8 text-[#5C7A14]" aria-hidden="true" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="font-serif text-xl font-bold text-[#3D3D3D] mb-1">
                ゆめほニュースレター
              </h2>
              <p className="text-sm text-stone-600 mb-3">
                季節ごとの読み物コンテンツをバックナンバーで公開中。
              </p>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#5C7A14] hover:text-[#95C11F] transition-colors"
              >
                バックナンバーを見る
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
