import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

const navigation = {
  main: [
    { name: "事業内容", href: "/services" },
    { name: "採用情報", href: "/recruit" },
    { name: "会社概要", href: "/about" },
    { name: "お問い合わせ", href: "/contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="text-xl font-bold">株式会社大上設備</div>
              <div className="text-xs text-stone-400 tracking-widest mt-1">PLANTERAS GROUP</div>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed mb-6 max-w-md">
              山口県下関市を拠点に、土木工事・管工事・水道施設工事を通じて
              地域のインフラを支える建設会社です。
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start text-stone-300">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-[#f59e0b] flex-shrink-0" />
                <span>〒751-0805 山口県下関市一の宮住吉3丁目3-25</span>
              </div>
              <div className="flex items-center text-stone-300">
                <Phone className="h-4 w-4 mr-2 text-[#f59e0b]" />
                <a href="tel:0832234311" className="hover:text-white transition-colors">
                  083-223-4311
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-stone-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6">
          <p className="text-stone-400 text-xs text-center">
            © {new Date().getFullYear()} 株式会社大上設備. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
