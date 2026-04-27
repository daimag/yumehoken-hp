import Link from "next/link"
import type { ReactNode } from "react"
import { ChevronRight, Phone, Mail, Printer } from "lucide-react"

type PolicyLayoutProps = {
  /** ページタイトル（H1） */
  title: string
  /** 英語サブタイトル */
  englishLabel: string
  /** リード文（任意） */
  lead?: string
  /** 制定日・改定日など */
  publishedAt?: string
  /** 本文（マークアップ済み） */
  children: ReactNode
}

export default function PolicyLayout({
  title,
  englishLabel,
  lead,
  publishedAt,
  children,
}: PolicyLayoutProps) {
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
            <Link href="/policies" className="hover:text-[#5C7A14]">
              各種方針
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-stone-400" aria-hidden="true" />
          <li className="text-stone-800 truncate">{title}</li>
        </ol>
      </nav>

      {/* タイトル領域 */}
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="text-[#5C7A14] text-xs font-semibold tracking-[0.3em] mb-3">
            {englishLabel}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] leading-tight mb-4">
            {title}
          </h1>
          {lead && (
            <p className="text-stone-700 text-base md:text-lg leading-relaxed mt-5 max-w-3xl">
              {lead}
            </p>
          )}
          {publishedAt && (
            <p className="mt-5 text-xs text-stone-500">{publishedAt}</p>
          )}
        </div>
      </header>

      {/* 本文 */}
      <article className="bg-[#FAF7F0] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-7 md:p-12 policy-content">
            {children}
          </div>
        </div>
      </article>

      {/* お問い合わせフッター */}
      <section className="bg-white py-12 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-[#3D3D3D] mb-5">
            本方針に関するお問い合わせ
          </h2>
          <div className="bg-[#FAF7F0] border border-stone-200 rounded-lg p-6 md:p-7">
            <p className="font-bold text-[#3D3D3D] mb-1">
              ドリームインシュアランス株式会社（屋号：ゆめほけん）
            </p>
            <p className="text-sm text-stone-600 mb-4">
              〒802-0832 福岡県北九州市小倉南区下石田1-17-17
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0939650660"
                className="inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-6 py-3 rounded-md font-bold text-sm transition-all shadow-sm hover:shadow-md"
              >
                <Phone className="w-4 h-4" />
                093-965-0660
              </a>
              <a
                href="mailto:yume@yumehoken.jp"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#95C11F] text-[#5C7A14] hover:bg-[#95C11F] hover:text-white px-6 py-3 rounded-md font-bold text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                yume@yumehoken.jp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 text-stone-700 hover:bg-stone-100 px-6 py-3 rounded-md font-bold text-sm transition-all"
              >
                お問い合わせフォーム
              </Link>
            </div>
            <p className="text-xs text-stone-500 mt-4">
              受付時間：月〜金 9:00〜17:00（土日祝休）
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/policies"
              className="inline-flex items-center gap-2 text-sm text-[#5C7A14] hover:text-[#95C11F] transition-colors"
            >
              ← 各種方針 一覧へ戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
