import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  separator?: "slash" | "chevron"
  align?: "left" | "center" | "right"
  variant?: "light" | "dark"
}

const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://oouesetsubi.jp"

function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_ORIGIN}${item.href}` } : {}),
    })),
  }
}

export function Breadcrumb({
  items,
  className,
  separator = "slash",
  align = "left",
  variant = "light"
}: BreadcrumbProps) {
  const alignmentClass = {
    left: "",
    center: "justify-center",
    right: "justify-end"
  }[align]

  const isDark = variant === "dark"
  const jsonLd = buildBreadcrumbJsonLd(items)

  return (
    <nav
      className={cn("mb-8", className)}
      aria-label="パンくずリスト"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className={cn("flex items-center text-sm", alignmentClass)}>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href && !item.current ? (
              <Link
                href={item.href}
                className={isDark ? "text-white/80 hover:text-white transition-colors duration-200" : "text-slate-800 hover:text-primary transition-colors duration-200"}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  item.current
                    ? isDark ? "text-white font-medium" : "text-primary font-medium"
                    : isDark ? "text-white/80" : "text-slate-800"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.label}
              </span>
            )}

            {index < items.length - 1 && (
              separator === "chevron" ? (
                <ChevronRight className={cn("mx-2 h-4 w-4", isDark ? "text-white/60" : "text-slate-500")} />
              ) : (
                <span className={cn("mx-2", isDark ? "text-white/60" : "text-slate-500")}>/</span>
              )
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}