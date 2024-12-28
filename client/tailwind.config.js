/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit', // Habilita el modo Just-In-Time
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"], // Define dónde buscar clases de Tailwind
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        colorPrimary: 'var(--color-primary)',
        colorSecondary: 'var(--color-secondary)',
        colorTerciary: 'var(--color-terciary)',
        colorFourth: 'var(--color-fourth)',
        colorFithy: 'var(--color-fithy)',

        colorTrasparent: 'var(--color-primaryTransparent)',

        "our-white": 'var(--our-white)',
        "our-green": 'var(--our-green)',
        "primary": 'var(--our-blue)',
        "darker-blue": 'var(--our-darker-blue)',
        "our-red": 'var(--our-red)',
      },
    },
  },
  plugins: [],
};
