/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        BgColor: 'var(--color-BgColor)',
        TextColor: 'var(--color-TextColor)',
        "blue":"#3730a3",
        "purple":"#e879f9",
        "skyblue":"#0ea5e9",
        "olive":"#4d7c0f"
      },
    },
  },
  plugins: [],
}