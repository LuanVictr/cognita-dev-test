import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-background': '#f8f8f8',
        'primary-color': '#7357FF',
        'content-color': '#4F4B5C',
        'input-border-color': '#ECECED'
      },
    },
  },
  plugins: [],
} satisfies Config
