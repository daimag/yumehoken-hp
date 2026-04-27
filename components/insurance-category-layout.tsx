import Link from "next/link"
import type { ReactNode, ComponentType } from "react"
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react"

type InsuranceCategoryLayoutProps = {
  /** カテゴリ名（例：生命保険） */
  title: string
  /** ページ英語ラベル */
  englishLabel: string
  /** リード文 */
  lead: string
  /** カテゴリのテーマカラー（ヒーローオーバーレイ・アクセント） */
  accentColor: string
  /** ヒーロー左下バッジに使うアイコン */
  HeroIcon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>
  /** 任意：ヒーロー上部のラベル */
  heroBadge?: string
  /** 申込・相談時に渡すservice名 */
  serviceParam: string
  /** 本文 */
  children: ReactNode
}

export default function InsuranceCategoryLayout({
  title,
  englishLabel,
  lead,
  accentColor,
  HeroIcon,
  heroBadge,
  serviceParam,
  children,
}: InsuranceCategoryLayoutProps) {
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
            <Link href="/personal" className="hover:text-[#5C7A14]">
              一般のお客様
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-stone-400" aria-hidden="true" />
          <li className="text-stone-800 truncate">{title}</li>
        </ol>
      </nav>

      {/* ヒーロー */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{ backgroundColor: `${accentColor}10` }}
        aria-label={`${title} メインビジュアル`}
      >
        <div className="absolute top-8 right-8 opacity-20" aria-hidden="true">
          <HeroIcon className="w-40 h-40" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-md"
              style={{ backgroundColor: `${accentColor}25` }}
              aria-hidden="true"
            >
              <HeroIcon className="w-6 h-6" />
            </div>
            <p
              className="text-sm font-semibold tracking-[0.3em]"
              style={{ color: accentColor }}
            >
              {englishLabel}
            </p>
          </div>
          {heroBadge && (
            <p className="inline-block text-xs font-semibold text-stone-600 bg-white border border-stone-200 px-3 py-1 rounded-full mb-4">
              {heroBadge}
            </p>
          )}
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#3D3D3D] mb-5 leading-tight">
            {title}
          </h1>
          <div
            className="w-16 h-1 mb-6"
            style={{ backgroundColor: accentColor }}
            aria-hidden="true"
          />
          <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-3xl">
            {lead}
          </p>
        </div>
      </section>

      {/* 本文 */}
      {children}

      {/* CTA */}
      <section
        className="bg-[#F4F8E8] py-14 md:py-20"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
            CONTACT US
          </p>
          <h2
            id="cta-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-4"
          >
            まずは無料相談から
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ご相談は無料です。お客様に合わせたプランを比較してご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-2xl mx-auto">
            <Link
              href={`/contact?type=personal&service=${serviceParam}`}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-6 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
            >
              お問い合わせフォーム
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0939650660"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-[#95C11F] text-[#5C7A14] hover:bg-[#95C11F] hover:text-white px-6 py-4 rounded-md font-bold transition-all"
            >
              <Phone className="w-4 h-4" />
              093-965-0660
            </a>
            <a
              href="https://line.me/R/ti/p/@942hvyou"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05A847] text-white px-6 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              LINEで相談
            </a>
          </div>
          <div className="mt-10">
            <Link
              href="/personal"
              className="inline-flex items-center gap-2 text-sm text-[#5C7A14] hover:text-[#95C11F] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              一般のお客様TOPへ戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
