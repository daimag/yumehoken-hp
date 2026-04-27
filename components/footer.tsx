import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const hubLinks = [
  { name: "一般のお客様へ", href: "/personal" },
  { name: "終活ステーション", href: "/shukatsu" },
  { name: "法人のお客様へ", href: "/business" },
  { name: "採用情報", href: "/recruit" },
]

const aboutLinks = [
  { name: "会社概要", href: "/about" },
  { name: "ニュースレター", href: "/newsletter" },
  { name: "社会貢献（CSR）", href: "/csr" },
  { name: "ネット申込", href: "/apply" },
  { name: "事故・トラブル時", href: "/support" },
]

const policyLinks = [
  { name: "お客さま本位の業務運営方針", href: "/policies/fd" },
  { name: "保険募集方針", href: "/policies/sales" },
  { name: "個人情報保護方針", href: "/policies/privacy" },
  { name: "情報セキュリティ方針", href: "/policies/security" },
]

export default function Footer() {
  return (
    <footer className="bg-[#3D3D3D] text-stone-200">
      {/* メインフッター */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 会社情報 */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="ゆめほけん">
              <div className="bg-white inline-flex items-center px-4 py-3 rounded-md">
                <Image
                  src="/images/logo/yumehoken-logo.png"
                  alt="ゆめほけん"
                  width={180}
                  height={54}
                  className="h-10 w-auto"
                />
              </div>
            </Link>
            <p className="font-serif text-base text-white mb-2">
              ドリームインシュアランス株式会社
            </p>
            <p className="text-sm text-stone-300 leading-relaxed mb-4">
              安心と夢をつないで<br />笑顔をまもる
            </p>
            <div className="inline-flex items-center gap-2 text-xs bg-stone-700 text-stone-200 px-3 py-1.5 rounded">
              <span className="text-[#95C11F]">●</span>
              ISO 9001:2015 認証取得
            </div>
          </div>

          {/* 4ハブナビ */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-5 pb-2 border-b border-stone-600">
              サービス
            </h3>
            <ul className="space-y-3">
              {hubLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-300 hover:text-[#95C11F] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 会社情報リンク */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-5 pb-2 border-b border-stone-600">
              ゆめほけんについて
            </h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-300 hover:text-[#95C11F] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-5 pb-2 border-b border-stone-600">
              お問い合わせ
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#95C11F] mt-1 shrink-0" aria-hidden="true" />
                <span className="text-stone-300 leading-relaxed">
                  〒802-0832<br />
                  福岡県北九州市小倉南区<br />
                  下石田1-17-17
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#95C11F] shrink-0" aria-hidden="true" />
                <a href="tel:0939650660" className="text-stone-300 hover:text-[#95C11F] transition-colors">
                  093-965-0660
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#95C11F] shrink-0" aria-hidden="true" />
                <a href="mailto:yume@yumehoken.jp" className="text-stone-300 hover:text-[#95C11F] transition-colors break-all">
                  yume@yumehoken.jp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#95C11F] mt-1 shrink-0" aria-hidden="true" />
                <span className="text-stone-300 leading-relaxed">
                  月〜金 9:00〜17:00<br />
                  <span className="text-xs text-stone-400">（土日祝休）</span>
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center justify-center w-full bg-[#95C11F] hover:bg-[#7DA519] text-white px-5 py-3 rounded-md font-bold text-sm transition-colors"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </div>

      {/* ポリシーリンク帯 */}
      <div className="border-t border-stone-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-xs text-stone-400">
            {policyLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-[#95C11F] transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* コピーライト */}
      <div className="border-t border-stone-700 bg-[#2D2D2D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-xs text-stone-400">
            © {new Date().getFullYear()} Dream Insurance Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
