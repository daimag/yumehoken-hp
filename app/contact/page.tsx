import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "株式会社大上設備へのお問い合わせ。お見積り・ご相談はお気軽にどうぞ。",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="relative bg-[#1a365d] text-white py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-saiyo.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0f2441]/85 via-[#1a365d]/70 to-[#0f2441]/90"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#f59e0b] text-xs md:text-sm font-bold tracking-[0.4em] mb-4">CONTACT</p>
          <h1 className="text-4xl md:text-6xl font-black mb-5 drop-shadow-md leading-tight">お問い合わせ</h1>
          <div className="w-20 h-1 bg-[#f59e0b] mb-5" />
          <p className="text-stone-200 max-w-2xl md:text-lg">
            お見積り・ご相談など、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* 連絡先情報 */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-stone-50 border border-stone-200 rounded-sm p-6">
                <div className="flex items-start mb-3">
                  <Phone className="h-5 w-5 mr-3 text-[#1a365d] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-stone-500 mb-1">電話でのお問い合わせ</p>
                    <a href="tel:0832234311" className="text-xl font-bold text-[#1a365d] hover:underline">
                      083-223-4311
                    </a>
                  </div>
                </div>
                <div className="flex items-start text-sm text-stone-600 ml-8">
                  <Clock className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>平日 8:30 〜 17:30</span>
                </div>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-sm p-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-[#1a365d] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-stone-500 mb-1">所在地</p>
                    <p className="text-stone-800 text-sm leading-relaxed">
                      〒751-0805<br />
                      山口県下関市一の宮住吉3丁目3-25
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* フォーム */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-stone-200 rounded-sm p-6 md:p-10">
                <div className="flex items-start mb-6">
                  <Mail className="h-6 w-6 mr-3 text-[#1a365d] flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-[#1a365d]">フォームでのお問い合わせ</h2>
                    <p className="text-sm text-stone-600 mt-1">
                      下記フォームに必要事項をご入力の上、送信してください。
                    </p>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
