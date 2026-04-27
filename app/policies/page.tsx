import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, FileCheck2, Shield, Lock, ScrollText, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "各種方針・コンプライアンス情報",
  description:
    "ゆめほけん（ドリームインシュアランス）の各種方針一覧。お客さま本位の業務運営方針（FD宣言）、個人情報保護方針、情報セキュリティ方針、勧誘方針・販売方針・ご相談指針を公開しています。",
  openGraph: {
    title: "各種方針｜ゆめほけん",
    description: "FD宣言・個人情報保護・情報セキュリティ・勧誘方針を公開。",
  },
}

const policies = [
  {
    href: "/policies/fd-2025",
    icon: Award,
    label: "FD DECLARATION 2025",
    title: "お客さま本位の業務運営方針 2025",
    description:
      "「徹底したお客さま視点」を事業の柱とし、5つの方針とKPIを掲げて業務運営を行います。",
    publishedAt: "2025年4月公開",
  },
  {
    href: "/policies/fd-2024-results",
    icon: FileCheck2,
    label: "FD RESULTS 2024",
    title: "お客さま本位の業務運営方針 2024【実績】",
    description:
      "2024年度に掲げた4方針の達成状況をKPIとともに公表。お客様の声139件、つなぐ活動81件などを実績報告。",
    publishedAt: "2025年公開",
  },
  {
    href: "/policies/privacy",
    icon: Shield,
    label: "PRIVACY POLICY",
    title: "個人情報保護に関する基本方針",
    description:
      "個人情報保護法ほか関連法令を遵守し、お客様の個人情報を適正に取り扱うことを宣言します。",
    publishedAt: "2024年4月1日改定",
  },
  {
    href: "/policies/security",
    icon: Lock,
    label: "INFORMATION SECURITY",
    title: "情報セキュリティ基本方針",
    description:
      "経営者の責任のもと、情報資産を事故・災害・犯罪から守る取り組みを定めています。",
    publishedAt: "2024年4月1日制定",
  },
  {
    href: "/policies/sales",
    icon: ScrollText,
    label: "SALES POLICY",
    title: "勧誘方針・販売方針・ご相談指針",
    description:
      "保険業法等を遵守した勧誘、保険商品の推奨方針、保険相談時の個人情報の取扱いを定めています。",
    publishedAt: "2024年4月1日改定",
  },
]

export default function PoliciesIndexPage() {
  return (
    <>
      {/* ヘッダー */}
      <header className="bg-[#FAF7F0] border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="text-[#5C7A14] text-xs font-semibold tracking-[0.3em] mb-3">
            POLICIES & COMPLIANCE
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] leading-tight mb-4">
            各種方針
          </h1>
          <p className="text-stone-700 text-base md:text-lg leading-relaxed mt-5 max-w-3xl">
            ゆめほけんは、保険代理店としての社会的責任を果たすため、各種方針を制定し公開しています。
            最新の改定内容と過去の実績をご覧いただけます。
          </p>
        </div>
      </header>

      {/* 一覧 */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="space-y-4">
            {policies.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="group block bg-white border border-stone-200 rounded-lg p-6 md:p-7 hover:border-[#95C11F] hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-5">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-[#F4F8E8] shrink-0">
                      <p.icon className="w-6 h-6 text-[#5C7A14]" aria-hidden="true" />
                    </span>
                    <div className="flex-grow">
                      <p className="text-[#5C7A14] text-xs font-semibold tracking-widest mb-1">
                        {p.label}
                      </p>
                      <h2 className="font-serif text-lg md:text-xl font-bold text-[#3D3D3D] mb-2 group-hover:text-[#5C7A14] transition-colors">
                        {p.title}
                      </h2>
                      <p className="text-sm text-stone-600 leading-relaxed mb-2">
                        {p.description}
                      </p>
                      <p className="text-xs text-stone-500">{p.publishedAt}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#5C7A14] group-hover:translate-x-1 transition-all shrink-0 mt-1" aria-hidden="true" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
