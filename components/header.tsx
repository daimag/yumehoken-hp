"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight, Phone } from "lucide-react"

type NavItem = {
  name: string
  en: string
  href: string
  description: string
}

const navigation: NavItem[] = [
  { name: "一般のお客様へ", en: "PERSONAL", href: "/personal", description: "保険のご相談" },
  { name: "終活ステーション", en: "SHUKATSU", href: "/shukatsu", description: "人生後半戦の窓口" },
  { name: "法人のお客様へ", en: "BUSINESS", href: "/business", description: "経営を守るリスクヘッジ" },
  { name: "採用情報", en: "RECRUIT", href: "/recruit", description: "ゆめほけんで働く" },
]

const subNav: NavItem[] = [
  { name: "会社概要", en: "ABOUT", href: "/about", description: "" },
  { name: "ニュースレター", en: "NEWSLETTER", href: "/newsletter", description: "" },
  { name: "社会貢献", en: "CSR", href: "/csr", description: "" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-3" aria-label="ゆめほけん トップページ">
            <Image
              src="/images/logo/yumehoken-logo.png"
              alt="ゆめほけん（YUME★HOKEN）"
              width={200}
              height={60}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* PCナビゲーション */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="グローバルナビゲーション">
            {navigation.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative inline-flex flex-col items-center py-1"
                  aria-current={active ? "page" : undefined}
                >
                  <span
                    className={`text-[15px] font-bold tracking-wide transition-colors duration-200 ${
                      active ? "text-[#5C7A14]" : "text-[#3D3D3D] group-hover:text-[#5C7A14]"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`text-[10px] tracking-[0.25em] mt-0.5 transition-colors duration-200 ${
                      active ? "text-[#95C11F]" : "text-stone-400 group-hover:text-[#95C11F]"
                    }`}
                  >
                    {item.en}
                  </span>
                  {/* 葉グリーン下線 */}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 mx-auto h-0.5 bg-[#95C11F] transition-all duration-300 ease-out ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}

            {/* お問い合わせCTA */}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-5 py-2.5 rounded-md font-bold text-sm transition-all shadow-sm hover:shadow-md"
            >
              お問い合わせ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={isMenuOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#3D3D3D] hover:bg-stone-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-4 space-y-1 bg-white border-t border-stone-200">
              {navigation.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-4 border-l-4 transition-colors duration-200 ${
                      active
                        ? "border-[#95C11F] bg-[#F4F8E8] text-[#5C7A14]"
                        : "border-transparent text-[#3D3D3D] hover:border-[#95C11F] hover:bg-[#F4F8E8] hover:text-[#5C7A14]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                  >
                    <div className="flex flex-col leading-tight">
                      <span className="text-base font-bold">{item.name}</span>
                      <span className="text-[10px] tracking-[0.25em] text-stone-400 mt-0.5">{item.en}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-stone-400" />
                  </Link>
                )
              })}

              {/* サブナビ */}
              <div className="pt-3 mt-3 border-t border-stone-200">
                {subNav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-sm text-stone-700 hover:bg-stone-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="h-3 w-3 text-stone-400" />
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="px-4 pt-4 space-y-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-6 py-3.5 rounded-md font-bold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  お問い合わせ
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:0939650660"
                  className="flex items-center justify-center gap-2 border-2 border-[#95C11F] text-[#5C7A14] hover:bg-[#95C11F] hover:text-white px-6 py-3 rounded-md font-bold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  093-965-0660
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
