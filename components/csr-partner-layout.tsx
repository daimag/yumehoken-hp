import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { ChevronRight, ArrowLeft, Heart } from "lucide-react"

type CsrPartnerLayoutProps = {
  name: string
  englishLabel: string
  role: string
  icon: LucideIcon
  accent: string
  /** リード文 */
  lead?: string
  /** 本文 */
  children: ReactNode
}

export default function CsrPartnerLayout({
  name,
  englishLabel,
  role,
  icon: Icon,
  accent,
  lead,
  children,
}: CsrPartnerLayoutProps) {
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
            <Link href="/csr" className="hover:text-[#5C7A14]">
              社会貢献（CSR）
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-stone-400" aria-hidden="true" />
          <li className="text-stone-800 truncate">{name}</li>
        </ol>
      </nav>

      {/* タイトル領域 */}
      <header
        className="relative py-12 md:py-16 overflow-hidden"
        style={{ backgroundColor: `${accent}10` }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <span
              className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border-4 shadow"
              style={{ borderColor: accent }}
            >
              <Icon className="w-12 h-12" style={{ color: accent }} aria-hidden="true" />
            </span>
          </div>
          <div className="md:col-span-3 text-center md:text-left">
            <p
              className="text-xs font-semibold tracking-[0.3em] mb-2"
              style={{ color: accent }}
            >
              {englishLabel}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] leading-tight mb-2">
              {name}
            </h1>
            <p className="text-sm md:text-base text-stone-600 mb-3">{role}</p>
            {lead && (
              <p className="text-sm md:text-base text-stone-700 leading-relaxed mt-4">
                {lead}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* 本文 */}
      <article className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 csr-content">{children}</div>
      </article>

      {/* CTA + 戻る */}
      <section className="bg-[#FAF7F0] py-10 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-lg p-6 md:p-7 mb-8"
            style={{ backgroundColor: `${accent}10`, borderLeft: `4px solid ${accent}` }}
          >
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 mt-0.5 shrink-0" style={{ color: accent }} aria-hidden="true" />
              <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                <strong style={{ color: accent }}>ゆめほけんとの関わり：</strong>
                ドリームインシュアランス株式会社は、お客さまから得た利益の一部を活用し、{name}の活動を継続的に応援しています。
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/csr"
              className="inline-flex items-center gap-2 text-sm text-[#5C7A14] hover:text-[#95C11F] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              社会貢献（CSR）一覧へ戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
