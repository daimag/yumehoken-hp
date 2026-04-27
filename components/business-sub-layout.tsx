import Link from "next/link"
import type { ReactNode, ComponentType } from "react"
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Phone,
  Mail,
} from "lucide-react"

type BusinessSubLayoutProps = {
  title: string
  englishLabel: string
  lead: string
  HeroIcon: ComponentType<{ className?: string }>
  serviceParam: string
  children: ReactNode
}

export default function BusinessSubLayout({
  title,
  englishLabel,
  lead,
  HeroIcon,
  serviceParam,
  children,
}: BusinessSubLayoutProps) {
  return (
    <>
      {/* パンくず */}
      <nav
        aria-label="パンくずリスト"
        className="bg-[#F0F4F7] border-b border-stone-200"
      >
        <ol className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-stone-600">
          <li>
            <Link href="/" className="hover:text-[#3D4A5A]">
              ホーム
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-stone-400" aria-hidden="true" />
          <li>
            <Link href="/business" className="hover:text-[#3D4A5A]">
              法人のお客様
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-stone-400" aria-hidden="true" />
          <li className="text-stone-800 truncate">{title}</li>
        </ol>
      </nav>

      {/* ヒーロー */}
      <section
        className="relative overflow-hidden bg-[#3D4A5A] text-white py-16 md:py-24"
        aria-label={`${title} メインビジュアル`}
      >
        <div className="absolute -top-10 -right-10 opacity-10" aria-hidden="true">
          <HeroIcon className="w-80 h-80" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#A8C8E8] text-sm font-semibold tracking-[0.3em] mb-4">
            {englishLabel}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-5 leading-tight">
            {title}
          </h1>
          <div className="w-16 h-1 bg-[#95C11F] mb-6" aria-hidden="true" />
          <p className="text-stone-200 text-base md:text-lg leading-relaxed max-w-3xl">
            {lead}
          </p>
        </div>
      </section>

      {/* 本文 */}
      {children}

      {/* CTA */}
      <section
        className="bg-[#2D3748] text-white py-14 md:py-20"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#A8C8E8] text-sm font-semibold tracking-[0.25em] mb-3">
            CONTACT US
          </p>
          <h2
            id="cta-heading"
            className="font-serif text-2xl md:text-3xl font-bold mb-4"
          >
            まずは現状の保険・リスクを無料診断
          </h2>
          <p className="text-stone-200 leading-relaxed mb-8 text-base md:text-lg">
            中立的な立場で、貴社の保険とリスクヘッジを総合的に診断します。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-2xl mx-auto">
            <Link
              href={`/contact?type=business&service=${serviceParam}`}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-6 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
            >
              法人向けご相談フォーム
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0939650660"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#3D4A5A] backdrop-blur px-6 py-4 rounded-md font-bold border-2 border-white/40 hover:border-white transition-all"
            >
              <Phone className="w-4 h-4" />
              093-965-0660
            </a>
            <a
              href="mailto:yume@yumehoken.jp"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#3D4A5A] backdrop-blur px-6 py-4 rounded-md font-bold border-2 border-white/40 hover:border-white transition-all"
            >
              <Mail className="w-4 h-4" />
              メールで相談
            </a>
          </div>
          <div className="mt-10">
            <Link
              href="/business"
              className="inline-flex items-center gap-2 text-sm text-[#A8C8E8] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              法人のお客様TOPへ戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
