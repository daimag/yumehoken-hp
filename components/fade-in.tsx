"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right" | "none"

type FadeInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: Direction
  className?: string
  as?: ElementType
}

const directionToTransform: Record<Direction, string> = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: "",
}

export function FadeIn({
  children,
  delay = 0,
  duration = 700,
  direction = "up",
  className = "",
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`will-change-transform transition-all ease-out ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionToTransform[direction]}`
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </Tag>
  )
}
