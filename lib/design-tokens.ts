/**
 * デザイントークン定義（ゆめほけん版）
 * ロゴ（葉グリーン + ウッドブラウン）から抽出した、
 * ナチュラル × 信頼 × 木のぬくもり のパレット
 */

// カラーパレット
export const colors = {
  // プライマリ（葉のフレッシュグリーン）
  primary: {
    DEFAULT: '#95C11F',
    hover: '#7DA519',
    dark: '#5C7A14',
    soft: '#F4F8E8',          // 薄緑背景
    foreground: '#FFFFFF',
  },
  // セカンダリ（木のウッドブラウン）
  secondary: {
    DEFAULT: '#8B5A2B',
    hover: '#6F4621',
    foreground: '#FFFFFF',
  },
  // アクセント（キャラメル茶）
  accent: {
    DEFAULT: '#C8956B',
    foreground: '#FFFFFF',
  },
  // 法人ハブ用（ログハウスのグレーブルー）
  business: {
    DEFAULT: '#6B7B8C',
    hover: '#56657A',
    foreground: '#FFFFFF',
  },
  // ベース・背景
  surface: {
    white: '#FFFFFF',
    cream: '#FAF7F0',         // 木の温かみ・クリーム
    leafSoft: '#F4F8E8',      // 葉色の薄背景
    stone50: 'hsl(60 5% 96%)',
    stone100: 'hsl(60 5% 92%)',
  },
  // テキスト
  text: {
    heading: '#3D3D3D',       // 濃チャコール
    headingAlt: '#8B5A2B',    // ウッドブラウン（強調）
    body: 'hsl(0 0% 24%)',    // チャコール本文
    muted: 'hsl(0 0% 47%)',   // stone-500相当
    subtle: 'hsl(0 0% 60%)',  // stone-400相当
    onDark: '#FFFFFF',
    link: '#5C7A14',          // 深緑
    linkHover: '#95C11F',
  },
  // 機能色
  utility: {
    border: 'hsl(24 6% 88%)',     // stone-200相当
    line: '#06C755',              // LINE公式色
    success: '#16A34A',
    warning: '#F59E0B',
    error: '#DC2626',
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
    // 本文：ゴシック（可読性）
    sans: "'Noto Sans JP', 'Inter', system-ui, -apple-system, sans-serif",
    // 見出し：明朝（信頼感・木のぬくもり）
    serif: "'Noto Serif JP', 'Hiragino Mincho ProN', serif",
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
    semibold: 600,
    bold: 700,
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.04em',
    widest: '0.1em',
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

// シャドウ（ナチュラルに控えめ）
export const shadows = {
  none: 'none',
  sm: '0 1px 3px 0 rgba(60, 50, 30, 0.06)',
  md: '0 4px 6px -1px rgba(60, 50, 30, 0.06)',
  lg: '0 10px 15px -3px rgba(60, 50, 30, 0.07)',
  xl: '0 20px 25px -5px rgba(60, 50, 30, 0.08)',
  '2xl': '0 25px 50px -12px rgba(60, 50, 30, 0.12)',
  inner: 'inset 0 2px 4px 0 rgba(60, 50, 30, 0.06)',
} as const;

// ボーダー半径（柔らかめ）
export const borderRadius = {
  none: '0',
  sm: '0.25rem',    // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px ← 標準
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px ← 終活ステーション用に柔らかく
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

// 4ハブ別アクセントカラー
export const hubAccents = {
  personal: colors.primary.DEFAULT,        // 一般 = 葉グリーン
  shukatsu: '#F4D58D',                     // 終活 = 柔らかい黄色（花・自然）
  business: colors.business.DEFAULT,       // 法人 = グレーブルー（フォーマル）
  recruit: colors.secondary.DEFAULT,       // 採用 = ウッドブラウン（オフィスの木）
} as const;
