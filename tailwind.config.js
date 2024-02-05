/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pistachio': {
          DEFAULT: '#D0FF00',
          50: '#FAFFE5',
          100: '#F6FFCC',
          200: '#ECFF99',
          300: '#E3FF66',
          400: '#DAFF33',
          500: '#D0FF00',
          600: '#AFD600',
          700: '#8EAD00',
          800: '#6C8500',
          900: '#4B5C00',
          950: '#3A4700'
        },
      }
    },
  },
  plugins: [],
}