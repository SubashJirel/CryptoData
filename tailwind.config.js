/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        backgroundClr: 'var(--bg-color)',
        backgroundClrCard: 'var(--bg-color-card)',
        textClr: 'var(--text-color)',
        primary: 'var(--primary-color)',
        blueClr: 'var(--blue)',
        blueBg: 'var(--blue-background)',
        greyClr: 'var(--grey)',
        darkGreyClr: 'var(--darkgrey)',
        greenClr: 'var(--green)',
        redClr: 'var(--red)',
      },
    },
    screens: {
      vsm: '380px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
