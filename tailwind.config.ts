import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        accent: '#7DD3FC',
        surface: '#1D1D1F',
        background: '#0E1C2F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

export default config 