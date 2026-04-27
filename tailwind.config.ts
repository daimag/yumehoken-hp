import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // ゆめほけんブランドカラー（ロゴから抽出）
        brand: {
          // 葉のフレッシュグリーン
          leaf: '#95C11F',
          'leaf-hover': '#7DA519',
          'leaf-dark': '#5C7A14',
          'leaf-soft': '#F4F8E8',     // 葉色の薄い背景
          // 木のウッドブラウン
          wood: '#8B5A2B',
          'wood-hover': '#6F4621',
          // キャラメル茶（ロゴDream Insurance Inc. 字色）
          caramel: '#C8956B',
          // ログハウスのグレーブルー（法人ハブ用）
          loghouse: '#6B7B8C',
          'loghouse-hover': '#56657A',
          // ベージュ（クリーム）
          cream: '#FAF7F0',
          // チャコール（本文）
          charcoal: '#3D3D3D',
          // LINE公式
          line: '#06C755',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-noto-sans-jp)',
          'Noto Sans JP',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        serif: [
          'var(--font-noto-serif-jp)',
          'Noto Serif JP',
          'Hiragino Mincho ProN',
          'serif',
        ],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
