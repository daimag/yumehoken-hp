import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-noto-serif-jp",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yumehoken.jp"),
  title: {
    default: "ゆめほけん | ドリームインシュアランス株式会社（北九州市・保険代理店）",
    template: "%s | ゆめほけん",
  },
  description:
    "ドリームインシュアランス株式会社（ゆめほけん）は、北九州市小倉南区を拠点に「安心と夢をつないで笑顔をまもる」を理念とする保険代理店です。生命保険・損害保険・終活ステーション・法人向けリスクヘッジまで、一生涯のパートナーとしてサポートします。",
  keywords: [
    "ゆめほけん",
    "ドリームインシュアランス",
    "北九州 保険",
    "小倉南区 保険代理店",
    "終活ステーション",
    "終活 北九州",
    "法人保険",
    "リスクヘッジ",
    "生命保険",
    "損害保険",
    "ペット保険",
    "ISO9001",
  ],
  authors: [{ name: "ドリームインシュアランス株式会社" }],
  creator: "ドリームインシュアランス株式会社",
  publisher: "ドリームインシュアランス株式会社",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ゆめほけん | ドリームインシュアランス株式会社",
    description:
      "「安心と夢をつないで笑顔をまもる」北九州・小倉南区のログハウスから、保険・終活・法人リスクヘッジを総合サポート。",
    siteName: "ゆめほけん",
    locale: "ja_JP",
    type: "website",
    url: "https://www.yumehoken.jp",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="font-sans" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
