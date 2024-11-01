/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        backgroundClr: 'var(--bg-color)',
        textClr: 'var(--text-color)',
        primary: 'var(--primary-color)',
        blueClr: 'var(--blue)',
        greyClr: 'var(--grey)',
        darkGreyClr: 'var(--darkgrey)',
        greenClr: 'var(--green)',
        redClr: 'var(--red)',
      },
    },
  },
  plugins: [],
};
