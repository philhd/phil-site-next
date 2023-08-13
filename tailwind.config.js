/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: 'rgb(251, 248, 241)',
      black: 'rgb(19, 15, 23)'
    },
    fontFamily: {
      mono: ['Andale mono', 'Courier new'],
      sans: ['Helvetica', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
    },
  },
  plugins: [],
}
