"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"

type NavItem = {
  name: string
  en: string
  href: string
}

const navigation: NavItem[] = [
  { name: "事業内容", en: "SERVICES", href: "/services" },
  { name: "採用情報", en: "RECRUIT", href: "/recruit" },
  { name: "会社概要", en: "ABOUT", href: "/about" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3" aria-label="株式会社大上設備 トップページ">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={160}
              height={132}
              priority
              className="h-12 w-auto"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-bold text-[#1a365d]">株式会社大上設備</span>
              <span className="text-[10px] text-stone-500 tracking-widest mt-0.5">PLANTERAS GROUP</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10" aria-label="グローバルナビゲーション">
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
                    className={`text-base font-bold tracking-wide transition-colors duration-200 ${
                      active ? "text-[#1a365d]" : "text-stone-800 group-hover:text-[#1a365d]"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`text-[10px] tracking-[0.25em] mt-0.5 transition-colors duration-200 ${
                      active ? "text-[#92400e]" : "text-stone-400 group-hover:text-[#92400e]"
                    }`}
                  >
                    {item.en}
                  </span>
                  {/* オレンジ下線アニメーション */}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 mx-auto h-0.5 bg-[#f59e0b] transition-all duration-300 ease-out ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}

            {/* お問い合わせ：CTAボタン */}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center gap-2 bg-[#1a365d] hover:bg-[#f59e0b] text-white hover:text-[#1c1917] px-6 py-3 rounded-sm font-bold text-sm transition-colors duration-300"
            >
              お問い合わせ
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </nav>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-4 space-y-1 bg-white border-t border-stone-100">
              {navigation.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-4 border-l-4 transition-colors duration-200 ${
                      active
                        ? "border-[#f59e0b] bg-stone-50 text-[#1a365d]"
                        : "border-transparent text-stone-800 hover:border-[#f59e0b] hover:bg-stone-50 hover:text-[#1a365d]"
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
              <Link
                href="/contact"
                className="mx-4 mt-3 flex items-center justify-center gap-2 bg-[#1a365d] hover:bg-[#0f2441] text-white px-6 py-4 rounded-sm font-bold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
