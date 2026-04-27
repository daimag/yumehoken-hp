import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://oouesetsubi.jp"),
  title: {
    default: "株式会社大上設備 | 山口県下関市の土木・管・水道施設工事",
    template: "%s | 株式会社大上設備",
  },
  description:
    "株式会社大上設備は山口県下関市を拠点に、土木工事・管工事・水道施設工事を手掛ける建設会社です。確かな技術と信頼で地域のインフラを支えます。",
  keywords: [
    "大上設備",
    "下関",
    "山口",
    "土木工事",
    "管工事",
    "水道施設工事",
    "建設",
    "プランテラス",
  ],
  authors: [{ name: "株式会社大上設備" }],
  creator: "株式会社大上設備",
  publisher: "株式会社大上設備",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "株式会社大上設備",
    description:
      "山口県下関市を拠点に土木・管・水道施設工事を手掛ける建設会社。",
    siteName: "株式会社大上設備",
    locale: "ja_JP",
    type: "website",
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
    <html lang="ja">
      <body className={notoSansJP.className} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
