import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CTACardProps {
  variant: "dark" | "light"
  icon: LucideIcon
  title: string
  description: string
  buttonText: string
  href: string
  disabled?: boolean
  className?: string
}

export function CTACard({
  variant,
  icon: Icon,
  title,
  description,
  buttonText,
  href,
  disabled = false,
  className,
}: CTACardProps) {
  const isDark = variant === "dark"

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:shadow-lg",
        isDark
          ? "bg-[#0f1723] text-white border-0 shadow-lg"
          : "bg-white border border-slate-200 shadow-sm hover:shadow-md",
        className
      )}
    >
      <CardContent className="p-8 text-center">
        <div
          className={cn(
            "mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
            isDark ? "bg-white/20" : disabled ? "bg-slate-300" : "bg-[#1a5490]"
          )}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>

        <h3
          className={cn(
            "text-xl font-bold mb-3",
            isDark ? "text-white" : "text-[#0f1723]"
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "mb-6",
            isDark ? "text-white/90" : "text-slate-600"
          )}
        >
          {description}
        </p>

        {disabled ? (
          <Button
            disabled
            size="lg"
            className="w-full font-semibold px-6 py-3 rounded-xl bg-slate-200 text-slate-400 cursor-not-allowed"
          >
            {buttonText}
          </Button>
        ) : (
          <Button
            asChild
            size="lg"
            className={cn(
              "w-full font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300",
              isDark
                ? "bg-white text-[#0f1723] hover:bg-slate-50"
                : "bg-[#1a5490] hover:bg-[#15406d] text-white"
            )}
          >
            <Link href={href} className="flex items-center justify-center">
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
