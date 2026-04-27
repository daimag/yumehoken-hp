/**
 * 共通スタイルユーティリティ（ゆめほけん版）
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// クラス名マージユーティリティ
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// セクションスタイル
export const sectionStyles = {
  base: 'w-full relative',

  // パディング
  padding: {
    none: '',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20 lg:py-24',
    lg: 'py-20 md:py-24 lg:py-32',
    xl: 'py-24 md:py-32 lg:py-40',
  },

  // 背景
  background: {
    white: 'bg-white',
    cream: 'bg-[#FAF7F0]',                          // 木の温かみ
    leafSoft: 'bg-[#F4F8E8]',                       // 葉色の薄背景
    stone: 'bg-stone-50',
    primary: 'bg-[#95C11F] text-white',             // 葉グリーン（強調）
    business: 'bg-[#6B7B8C] text-white',            // 法人ハブ用
    dark: 'bg-[#3D3D3D] text-white',                // フッター等
  },
} as const;

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

// タイポグラフィスタイル
export const textStyles = {
  // 見出し（明朝体）
  h1: 'font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#3D3D3D]',
  h2: 'font-serif text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#3D3D3D]',
  h3: 'font-serif text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-[#3D3D3D]',
  h4: 'font-serif text-lg md:text-xl lg:text-2xl font-semibold text-[#3D3D3D]',
  h5: 'font-serif text-base md:text-lg font-medium text-[#3D3D3D]',
  h6: 'font-serif text-sm md:text-base font-medium text-[#3D3D3D]',

  // 本文（ゴシック）
  body: {
    sm: 'text-sm leading-relaxed text-stone-700',
    base: 'text-base leading-relaxed text-stone-700',
    lg: 'text-lg leading-relaxed text-stone-700',
  },

  // ラベル
  label: 'text-sm font-semibold tracking-widest text-[#5C7A14] uppercase',

  // 装飾
  muted: 'text-stone-500',
  link: 'text-[#5C7A14] hover:text-[#95C11F] transition-colors',
} as const;

// カードスタイル
export const cardStyles = {
  base: 'bg-white border border-stone-200 rounded-lg transition-all duration-300',
  hover: 'hover:shadow-md hover:-translate-y-0.5',
  accentLeft: 'border-l-4 border-l-[#95C11F]',         // 葉色アクセント線
  cream: 'bg-[#FAF7F0] border border-stone-200 rounded-lg',
  shukatsu: 'bg-white border border-stone-100 rounded-2xl',  // 終活向け（柔らかく）
  padding: {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  },
} as const;

// ボタンスタイル
export const buttonStyles = {
  base: 'inline-flex items-center justify-center font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95C11F] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variant: {
    primary: 'bg-[#95C11F] hover:bg-[#7DA519] text-white shadow-sm hover:shadow-md',
    secondary: 'bg-[#8B5A2B] hover:bg-[#6F4621] text-white',
    outline: 'border-2 border-[#95C11F] text-[#5C7A14] hover:bg-[#95C11F] hover:text-white',
    ghost: 'text-[#5C7A14] hover:bg-[#F4F8E8]',
    business: 'bg-[#6B7B8C] hover:bg-[#56657A] text-white',
    line: 'bg-[#06C755] hover:bg-[#05A847] text-white',
    onDark: 'bg-white text-[#5C7A14] hover:bg-stone-100',
  },
  size: {
    sm: 'h-9 px-4 text-sm rounded-md',
    md: 'h-11 px-6 py-2.5 rounded-md',
    lg: 'h-12 px-8 rounded-md',
    xl: 'h-14 px-10 text-lg rounded-md',
  },
} as const;

// アニメーションクラス
export const animationStyles = {
  fadeIn: 'animate-fade-in',
  fadeInUp: 'animate-fade-in-up',
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

// 4ハブ別のアクセントカラー（border-l-* に使う等）
export const hubColors = {
  personal: '#95C11F',
  shukatsu: '#F4D58D',
  business: '#6B7B8C',
  recruit: '#8B5A2B',
} as const;
