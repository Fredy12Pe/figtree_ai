import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',    // Small devices (phones, 640px and up)
      'md': '768px',    // Medium devices (tablets, 768px and up)
      'lg': '1024px',   // Large devices (laptops, 1024px and up)
      'xl': '1280px',   // Extra large devices (desktops, 1280px and up)
      '2xl': '1536px',  // 2X large devices (large desktops, 1536px and up)
    },
    extend: {
      colors: {
        primary: '#3B82F6',
        accent: '#7DD3FC',
        surface: '#1D1D1F',
        background: '#0E1C2F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
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
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

export default config 