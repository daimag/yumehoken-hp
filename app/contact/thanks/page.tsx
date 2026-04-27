import Link from "next/link"
import type { Metadata } from "next"
import { CheckCircle2, Home as HomeIcon, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "お問い合わせ受付完了｜ゆめほけん",
  description: "お問い合わせを受け付けました。担当者より折り返しご連絡いたします。",
  robots: { index: false, follow: false },
}

export default function ThanksPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#FAF7F0] py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F4F8E8] mb-8">
          <CheckCircle2 className="w-12 h-12 text-[#5C7A14]" aria-hidden="true" />
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4">
          お問い合わせを受け付けました
        </h1>
        <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-6" aria-hidden="true" />

        <div className="space-y-4 text-stone-700 leading-relaxed text-base md:text-lg max-w-xl mx-auto mb-10">
          <p>
            お問い合わせありがとうございます。
            内容を確認の上、通常 <strong className="text-[#5C7A14]">1〜2営業日以内</strong> に担当者よりご連絡いたします。
          </p>
          <p className="text-sm text-stone-600">
            お急ぎの場合は、下記までお電話ください。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href="tel:0939650660"
            className="inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-7 py-3.5 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            093-965-0660
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#95C11F] text-[#5C7A14] hover:bg-[#95C11F] hover:text-white px-7 py-3.5 rounded-md font-bold transition-all"
          >
            <HomeIcon className="w-4 h-4" />
            トップへ戻る
          </Link>
        </div>

        <p className="text-xs text-stone-500">
          営業時間：月〜金 9:00〜17:00（土日祝休）
        </p>
      </div>
    </section>
  )
}
