/**
 * 共通スタイルユーティリティ
 * クラス名を組み合わせて使用するための定義
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// クラス名マージユーティリティ（既存のcn関数を拡張）
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// セクションスタイル
export const sectionStyles = {
  // 基本セクション
  base: 'w-full relative',
  
  // パディング
  padding: {
    none: '',
    sm: 'py-16 md:py-20 lg:py-24',    // 小
    md: 'py-20 md:py-28 lg:py-32',    // 中
    lg: 'py-24 md:py-32 lg:py-40',    // 大
    xl: 'py-32 md:py-40 lg:py-48',    // 特大
  },
  
  // 背景
  background: {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    gradient: 'bg-gradient-to-b from-white to-neutral-50',
    primary: 'bg-primary text-primary-foreground',
    hero: 'bg-hero-pattern bg-cover bg-center bg-no-repeat',
  },
} as const;;

// コンテナスタイル
export const containerStyles = {
  base: 'container mx-auto px-4 sm:px-6 lg:px-8',
  maxWidth: {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  },
} as const;

// グリッドレイアウト
export const gridStyles = {
  base: 'grid gap-6',
  cols: {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  },
  gap: {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  },
} as const;

// タイポグラフィスタイル（CLAUDE.md Design Systemに準拠）
export const textStyles = {
  // 見出し
  h1: 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight',
  h2: 'text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight',
  h3: 'text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight',
  h4: 'text-lg md:text-xl lg:text-2xl font-semibold',
  h5: 'text-base md:text-lg font-medium',
  h6: 'text-sm md:text-base font-medium',
  
  // 本文
  body: {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-relaxed',
  },
  
  // 装飾
  gradient: 'bg-gradient-to-r from-[hsl(220_39%_25%)] to-[hsl(220_39%_35%)] bg-clip-text text-transparent',
  muted: 'text-muted-foreground',
} as const;

// カードスタイル
export const cardStyles = {
  base: 'bg-white rounded-none border border-neutral-200 transition-all duration-300',
  hover: 'hover:shadow-lg hover:-translate-y-1',
  padding: {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  },
} as const;

// ボタンスタイル（shadcn/uiのボタンを拡張）
export const buttonStyles = {
  base: 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variant: {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    minimal: 'border border-current bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary',
  },
  size: {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8',
    xl: 'h-12 px-10 text-lg',
  },
} as const;

// アニメーションクラス
export const animationStyles = {
  fadeIn: 'animate-fade-in',
  fadeInUp: 'animate-fade-in-up',
  slideIn: 'animate-slide-in',
  
  // 遅延
  delay: {
    100: 'animation-delay-100',
    200: 'animation-delay-200',
    300: 'animation-delay-300',
    400: 'animation-delay-400',
    500: 'animation-delay-500',
  },
} as const;

// レスポンシブ表示制御
export const displayStyles = {
  mobile: {
    show: 'block md:hidden',
    hide: 'hidden md:block',
  },
  tablet: {
    show: 'hidden md:block lg:hidden',
    hide: 'block md:hidden lg:block',
  },
  desktop: {
    show: 'hidden lg:block',
    hide: 'block lg:hidden',
  },
} as const;