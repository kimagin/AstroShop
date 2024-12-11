/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Baskervil', 'serif'],
    },
    extend: {
      screens: {
        retina: '2200px',
        large: '1400px',
        tablet: '1200px',
        mobile: '800px',
      },
    },
  },
  plugins: [],
}
