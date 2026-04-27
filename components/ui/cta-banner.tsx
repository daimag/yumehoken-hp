import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface CTABannerProps {
  label?: string
  title: string
  description?: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  showContactInfo?: boolean
  contactPhone?: string
  contactEmail?: string
  className?: string
}

export function CTABanner({
  label,
  title,
  description,
  primaryButton,
  secondaryButton,
  showContactInfo = false,
  contactPhone,
  contactEmail,
  className,
}: CTABannerProps) {
  return (
    <section className={cn("bg-[#0f1723] py-24", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* ラベル */}
          {label && (
            <p className="text-[#5ba3d9] text-sm font-medium tracking-wider uppercase mb-4">
              {label}
            </p>
          )}

          {/* メインメッセージ */}
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>

          {description && (
            <p className="text-slate-300 text-base md:text-lg mb-10 max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              variant="cta"
              className="px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
            >
              <Link href={primaryButton.href} className="flex items-center">
                {primaryButton.text}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            {secondaryButton && (
              <Button
                asChild
                variant="outline-light"
                className="group px-8 py-4 text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
              >
                <Link href={secondaryButton.href} className="flex items-center">
                  {secondaryButton.text}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>

          {/* 連絡先情報 */}
          {showContactInfo && (contactPhone || contactEmail) && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-300">
              {contactPhone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#5ba3d9]" />
                  <span className="text-sm">{contactPhone}</span>
                </div>
              )}
              {contactPhone && contactEmail && (
                <div className="hidden sm:block w-px h-4 bg-slate-600" />
              )}
              {contactEmail && (
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#5ba3d9]" />
                  <span className="text-sm">{contactEmail}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
