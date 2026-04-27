/**
 * デザイントークン定義
 * サイト全体で使用する設計変数を一元管理
 */

// カラーパレット
export const colors = {
  // プライマリカラー（深いネイビーブルー）
  primary: {
    DEFAULT: 'hsl(220 39% 25%)',
    light: 'hsl(220 39% 35%)',
    dark: 'hsl(220 39% 15%)',
    foreground: 'hsl(0 0% 100%)',
  },
  // セカンダリカラー（オフホワイト）
  secondary: {
    DEFAULT: 'hsl(0 0% 97%)',
    light: 'hsl(0 0% 99%)',
    dark: 'hsl(0 0% 94%)',
    foreground: 'hsl(220 39% 11%)',
  },
  // アクセントカラー（ゴールド）
  accent: {
    DEFAULT: 'hsl(38 92% 50%)',
    light: 'hsl(38 92% 60%)',
    dark: 'hsl(38 92% 40%)',
    foreground: 'hsl(220 39% 11%)',
  },
  // ニュートラルカラー
  neutral: {
    0: 'hsl(0 0% 100%)',     // 純白
    50: 'hsl(0 0% 98%)',     // ほぼ白
    100: 'hsl(0 0% 96%)',    // 薄いグレー
    200: 'hsl(0 0% 92%)',    // ライトグレー
    300: 'hsl(0 0% 88%)',    
    400: 'hsl(0 0% 70%)',    // ミディアムグレー
    500: 'hsl(0 0% 50%)',    
    600: 'hsl(0 0% 35%)',    
    700: 'hsl(220 9% 25%)',  // ダークグレー
    800: 'hsl(220 39% 15%)', // ほぼ黒
    900: 'hsl(220 39% 11%)', // 黒
  },
} as const;

// スペーシングシステム（8pxベース）
export const spacing = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '6rem',  // 96px
  '4xl': '8rem',  // 128px
  '5xl': '10rem', // 160px
} as const;

// タイポグラフィシステム
export const typography = {
  fontFamily: {
    sans: "'Noto Sans JP', 'Inter', system-ui, -apple-system, sans-serif",
    mono: "'Fira Code', 'Courier New', monospace",
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1.5' }],     // 12px
    sm: ['0.875rem', { lineHeight: '1.5' }],    // 14px
    base: ['1rem', { lineHeight: '1.7' }],      // 16px
    lg: ['1.125rem', { lineHeight: '1.7' }],    // 18px
    xl: ['1.25rem', { lineHeight: '1.6' }],     // 20px
    '2xl': ['1.5rem', { lineHeight: '1.5' }],   // 24px
    '3xl': ['2rem', { lineHeight: '1.4' }],     // 32px
    '4xl': ['2.5rem', { lineHeight: '1.3' }],   // 40px
    '5xl': ['3rem', { lineHeight: '1.2' }],     // 48px
    '6xl': ['3.75rem', { lineHeight: '1.1' }],  // 60px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.04em',
  },
} as const;

// アニメーション設定
export const animation = {
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
    slower: '800ms',
  },
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// ブレークポイント
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// シャドウ
export const shadows = {
  none: 'none',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
} as const;

// ボーダー半径
export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  full: '9999px',
} as const;

// Z-index
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
} as const;