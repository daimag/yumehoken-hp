# コンポーネント実装例（2025年1月改定・トップページ準拠）

## 例1: サービスカード

```tsx
// components/service-card.tsx
"use client"

import { cn } from "@/lib/utils"
import { ArrowRight, LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  className?: string
}

export function ServiceCard({ title, description, icon: Icon, href, className }: ServiceCardProps) {
  return (
    <div className={cn(
      "bg-white border border-slate-200 rounded-lg shadow-sm p-6",
      "hover:shadow-md hover:-translate-y-1 transition-all duration-300",
      className
    )}>
      <div className="w-14 h-14 bg-[#0f1723] rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-lg font-bold text-[#0f1723] mb-2">{title}</h3>
      <p className="text-slate-700 mb-4">{description}</p>
      {href && (
        <a href={href} className="inline-flex items-center gap-2 text-[#0f1723] hover:text-orange-500 font-medium group">
          詳細を見る
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  )
}
```

## 例2: CTAボタン

```tsx
// components/cta-button.tsx
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  showArrow?: boolean
  className?: string
}

export function CTAButton({ href, children, variant = "primary", showArrow, className }: CTAButtonProps) {
  const styles = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    secondary: "bg-[#0f1723] hover:bg-[#1a2836] text-white",
    outline: "border border-[#0f1723] text-[#0f1723] hover:bg-[#0f1723] hover:text-white"
  }

  return (
    <Link href={href} className={cn(
      "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors",
      styles[variant],
      className
    )}>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  )
}
```

## 例3: セクションヘッダー

```tsx
// components/section-header.tsx
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  label?: string // 英語ラベル (e.g., "Services")
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({ title, subtitle, description, label, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", align === "center" && "text-center", className)}>
      {label && <p className="text-slate-500 text-sm mb-4">{label}</p>}
      {subtitle && <p className="text-orange-500 font-medium mb-2">{subtitle}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f1723] mb-4">{title}</h2>
      {description && (
        <p className={cn("text-slate-600 text-lg max-w-2xl", align === "center" && "mx-auto")}>{description}</p>
      )}
    </div>
  )
}
```

## 例4: CTAセクション（ダーク背景）

```tsx
// components/cta-section.tsx
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-[#0f1723] py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-4">
            Contact Us
          </p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            お気軽にご相談ください
          </h2>
          <p className="text-slate-300 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            DX推進に関するご質問・ご相談はこちらから。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              無料相談を申し込む
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-[#0f1723] px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              サービス詳細を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
```

## 例5: 統計カード

```tsx
// components/stat-card.tsx
interface StatCardProps {
  value: string
  label: string
  suffix?: string
}

export function StatCard({ value, label, suffix }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#0f1723] mb-2">
        {value}
        {suffix && <span className="text-2xl md:text-3xl text-slate-600 ml-1">{suffix}</span>}
      </div>
      <p className="text-slate-600">{label}</p>
    </div>
  )
}
```

## 例6: 特徴リスト

```tsx
// components/feature-list.tsx
import { Check } from "lucide-react"

interface FeatureListProps {
  features: string[]
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="space-y-3">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-white" />
          </div>
          <span className="text-slate-700">{feature}</span>
        </li>
      ))}
    </ul>
  )
}
```
