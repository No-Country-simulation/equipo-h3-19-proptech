/** @type {import('tailwindcss').Config} */



export default {
  mode: 'jit', // Habilita el modo Just-In-Time
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"], // Define dónde buscar clases de Tailwind
  theme: {
    extend: {
      fontFamily: {
        'serif': ['ui-serif', 'Georgia'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top right, #123953 0%, #206591 17%, #236E9F 71%, #123953 100%)',
        'custom-gradient-1': 'linear-gradient(to top right, #fff 0%, #64B742 17%, #6af036 71%, #fff 100%)',
        'custom-gradient-2': 'linear-gradient(to top right, #236E9F 0%, #2675A8 8%, #226089 89%, #1F5578 100%)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        colorPrimary: 'var(--color-primary)',
        colorSecondary: 'var(--color-secondary)',
        colorTerciary: 'var(--color-terciary)',
        colorFourth: 'var(--color-fourth)',
        colorFithy: 'var(--color-fithy)',

        colorTrasparent: 'var(--color-primaryTransparent)'
      },
    },
    fontFamily: {
      sans: ['Roboto'], // Ejemplo con Roboto
      serif: ['serif']       // Ejemplo con Merriweather
    },
  },
  plugins: [],
};
