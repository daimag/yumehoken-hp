import type { Metadata } from "next"
import { Suspense } from "react"
import { Phone, Mail, MessageCircle, Clock, MapPin, AlertTriangle } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "お問い合わせ｜ゆめほけん",
  description:
    "ゆめほけん（ドリームインシュアランス株式会社）へのお問い合わせ。保険・終活・法人リスクヘッジ・採用についてのご質問・ご相談を、フォーム・電話・LINE・メールで承ります。",
}

const contactMethods = [
  {
    icon: Phone,
    label: "お電話",
    value: "093-965-0660",
    href: "tel:0939650660",
    note: "月〜金 9:00〜17:00",
    accent: "#95C11F",
  },
  {
    icon: Mail,
    label: "メール",
    value: "yume@yumehoken.jp",
    href: "mailto:yume@yumehoken.jp",
    note: "24時間受付・返信は営業時間内",
    accent: "#5C7A14",
  },
  {
    icon: MessageCircle,
    label: "公式LINE",
    value: "@942hvyou",
    href: "https://line.me/R/ti/p/@942hvyou",
    note: "気軽な一次相談に",
    accent: "#06C755",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="bg-gradient-to-br from-[#FAF7F0] to-[#F4F8E8] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.3em] mb-3">
            CONTACT US
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-4 leading-tight">
            お問い合わせ
          </h1>
          <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-6" aria-hidden="true" />
          <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            保険のご相談・終活ステーション・法人向けリスクヘッジ・採用情報まで、
            お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* 緊急時のお知らせ */}
      <section className="bg-white py-8 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-md p-5 flex items-start gap-3">
            <AlertTriangle
              className="w-5 h-5 text-red-700 mt-0.5 shrink-0"
              aria-hidden="true"
            />
            <p className="text-sm text-stone-700 leading-relaxed">
              <strong className="text-red-700">事故・自動車トラブル等の緊急時</strong>
              は、各保険会社のサポートデスク（24時間対応）または
              <a href="/support" className="text-[#5C7A14] underline hover:text-[#95C11F] mx-1">
                サポートページ
              </a>
              の連絡先へお電話ください。
            </p>
          </div>
        </div>
      </section>

      {/* 連絡方法3種 */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactMethods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block bg-white border border-stone-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center"
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-md mb-4"
                  style={{ backgroundColor: `${m.accent}15` }}
                >
                  <m.icon className="w-6 h-6" style={{ color: m.accent }} aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold text-stone-500 mb-1">{m.label}</p>
                <p className="font-serif font-bold text-[#3D3D3D] text-base md:text-lg mb-2 break-all">
                  {m.value}
                </p>
                <p className="text-xs text-stone-500">{m.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* フォーム */}
      <section className="bg-[#FAF7F0] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              CONTACT FORM
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3">
              お問い合わせフォーム
            </h2>
            <p className="text-sm text-stone-600">
              下記フォームに必要事項をご記入の上、送信してください。
            </p>
          </div>

          <Suspense
            fallback={
              <div className="bg-white border border-stone-200 rounded-lg p-8 text-center text-stone-500">
                読み込み中...
              </div>
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF7F0] border border-stone-200 rounded-lg p-6 md:p-8">
            <h2 className="font-serif text-xl font-bold text-[#3D3D3D] mb-5">
              ドリームインシュアランス株式会社（屋号：ゆめほけん）
            </h2>
            <ul className="space-y-3 text-sm text-stone-700">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#5C7A14] mt-0.5 shrink-0" aria-hidden="true" />
                <span>〒802-0832 福岡県北九州市小倉南区下石田1-17-17</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#5C7A14] shrink-0" aria-hidden="true" />
                <span>TEL: 093-965-0660 ／ FAX: 093-965-0663</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#5C7A14] shrink-0" aria-hidden="true" />
                <span>営業時間：月〜金 9:00〜17:00（土日祝休）</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
