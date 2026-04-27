import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"

type HubCardProps = {
  href: string
  label: string
  title: string
  description: string
  icon: LucideIcon
  accentColor: string  // hex
  bgClass: string      // tailwind bg color class
  iconBgClass: string  // tailwind bg color class for icon container
}

export default function HubCard({
  href,
  label,
  title,
  description,
  icon: Icon,
  accentColor,
  bgClass,
  iconBgClass,
}: HubCardProps) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col h-full ${bgClass} border border-stone-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
    >
      {/* 上部アクセントバー */}
      <span
        className="block h-1.5 w-full"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />

      <div className="p-7 md:p-8 flex flex-col flex-grow">
        {/* アイコン */}
        <div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${iconBgClass} mb-5`}
        >
          <Icon className="w-7 h-7" style={{ color: accentColor }} aria-hidden="true" />
        </div>

        {/* ラベル */}
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-2"
          style={{ color: accentColor }}
        >
          {label}
        </p>

        {/* タイトル */}
        <h3 className="font-serif text-xl md:text-2xl font-bold text-[#3D3D3D] mb-3 leading-tight">
          {title}
        </h3>

        {/* 説明 */}
        <p className="text-sm text-stone-600 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* 矢印リンク */}
        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3D3D3D] group-hover:gap-3 transition-all">
          くわしく見る
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
