import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      small: '0.75rem',
      xs: '0.875rem',
      base: '1rem',
      sm: '1.125rem',
      xl: '1.5rem'
    },
    extend: {
      colors: {
        'primary-color': '#181818',
        'secondary-color': '#202021',
        'tertiary-color': '#ce9178',
        'hover-color': '#383636',
      },
      zIndex: {
        '-10': '-10',
      },
      height: {
        'h-screen': '70vh'
      }
    },
  },
  plugins: [],
}
export default config
