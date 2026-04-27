import Link from "next/link"
import type { Metadata } from "next"
import { Newspaper, Download, FileText, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "ゆめほニュースレター｜バックナンバー",
  description:
    "ゆめほけん（ドリームインシュアランス）が発行する季刊ニュースレター「ゆめほニュースレター」。スタッフのコラム、地域情報、お客様レポート、グルメ・エンタメ情報を季節ごとにお届けします。",
  openGraph: {
    title: "ゆめほニュースレター｜ゆめほけん",
    description: "季節ごとに発行する、ゆめほけんメンバーによる手づくりニュースレター。",
  },
}

// 既存サイトのバックナンバー
type NewsletterIssue = {
  year: string
  season: "春季号" | "夏季号" | "秋季号" | "冬季号"
  pdfUrl: string
  coverUrl: string
}

const issues: NewsletterIssue[] = [
  {
    year: "2025",
    season: "冬季号",
    pdfUrl: "https://yumehoken.jp/wp/wp-content/uploads/2025/12/ニュースレタ2025ーA3-冬季号.pdf",
    coverUrl: "https://yumehoken.jp/wp/wp-content/uploads/2025/12/344579_0-1024x724.jpg",
  },
  {
    year: "2025",
    season: "秋季号",
    pdfUrl: "https://yumehoken.jp/wp/wp-content/uploads/2025/10/ニュースレタ2025ーA3-秋季号.pdf",
    coverUrl: "https://yumehoken.jp/wp/wp-content/uploads/2025/10/ニュースレタ2025ーA3-秋季号_1-1024x724.jpg",
  },
  {
    year: "2025",
    season: "春季号",
    pdfUrl: "https://yumehoken.jp/wp/wp-content/uploads/2025/05/ニュースレタ2025ーA3-春季号.pdf",
    coverUrl: "https://yumehoken.jp/wp/wp-content/uploads/2025/05/313253_0-1-1024x724.jpg",
  },
  {
    year: "2024",
    season: "冬季号",
    pdfUrl: "https://yumehoken.jp/wp/wp-content/uploads/2025/05/ニュースレタ2024ーA3-冬季号.pdf",
    coverUrl: "https://yumehoken.jp/wp/wp-content/uploads/2025/05/313221_0-2-1024x724.jpg",
  },
  {
    year: "2024",
    season: "夏季号",
    pdfUrl: "https://yumehoken.jp/wp/wp-content/uploads/2025/05/ニュースレタ2024ーA3-夏季号.pdf",
    coverUrl: "https://yumehoken.jp/wp/wp-content/uploads/2025/05/313218_0-1024x724.jpg",
  },
  {
    year: "2024",
    season: "春季号",
    pdfUrl: "https://yumehoken.jp/wp/wp-content/uploads/2024/05/ニュースレタ2024ーA3-春季号.pdf",
    coverUrl:
      "https://yumehoken.jp/wp/wp-content/uploads/2024/05/ニュースレタ2024ーA3-春季号_ページ_1-1024x724.jpg",
  },
]

const issuesByYear = issues.reduce<Record<string, NewsletterIssue[]>>((acc, i) => {
  if (!acc[i.year]) acc[i.year] = []
  acc[i.year].push(i)
  return acc
}, {})

export default function NewsletterIndexPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-[#FAF7F0] to-[#F4F8E8] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.3em] mb-3">
            YUMEHO NEWSLETTER
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-4 leading-tight">
            ゆめほニュースレター
          </h1>
          <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-6" aria-hidden="true" />
          <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            ゆめほけんメンバーによる季節ごとの手づくりニュースレター。
            <br className="hidden md:block" />
            社員コラム・地域情報・お客様レポート・グルメ＆エンタメ情報をお届けします。
          </p>
        </div>
      </section>

      {/* バックナンバー */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="archive-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Newspaper className="w-6 h-6 text-[#5C7A14]" aria-hidden="true" />
            <h2
              id="archive-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D]"
            >
              バックナンバー
            </h2>
          </div>

          {Object.entries(issuesByYear).map(([year, list]) => (
            <div key={year} className="mb-12 last:mb-0">
              <h3 className="font-serif text-xl font-bold text-[#5C7A14] mb-5 flex items-center gap-2">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                {year}年
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((issue) => (
                  <a
                    key={issue.season + issue.year}
                    href={issue.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white border border-stone-200 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                      {/* 既存サイトの画像URLを直接参照（next/imageは外部画像未許可のため標準imgで） */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={issue.coverUrl}
                        alt={`ゆめほニュースレター ${issue.year}年${issue.season} 表紙`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-[#5C7A14] tracking-widest">
                          {issue.year}年
                        </span>
                        <span className="text-xs font-semibold text-stone-500">
                          PDF
                        </span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-[#3D3D3D] mb-3 group-hover:text-[#5C7A14] transition-colors">
                        {issue.season}
                      </h4>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#5C7A14] group-hover:gap-3 transition-all">
                        <Download className="w-4 h-4" aria-hidden="true" />
                        ダウンロードして読む
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* これからの号について */}
      <section className="bg-[#F4F8E8] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-10 h-10 text-[#5C7A14] mx-auto mb-4" aria-hidden="true" />
          <h2 className="font-serif text-2xl font-bold text-[#3D3D3D] mb-4">
            次号は WEB記事 でもお届け予定
          </h2>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg">
            これからのニュースレターは、PDFに加えて
            <strong className="text-[#5C7A14]">WEB記事</strong>
            としても順次公開していきます。
            メンバーの想い・地域情報・お客様の声をより気軽に読んでいただけるよう、準備中です。
          </p>
          <p className="text-xs text-stone-500 mt-6">
            ※ 過去の各号からの抜粋記事も順次WEB化予定です。
          </p>
        </div>
      </section>
    </>
  )
}
