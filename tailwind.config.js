/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  purge: {
    content: [
      "./index.html", "./src/**/*.{jsx,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'laguna': {
          DEFAULT: '#6844A2',
          50: '#CABBE2',
          100: '#BFADDC',
          200: '#A990D0',
          300: '#9273C4',
          400: '#7C57B8',
          500: '#6844A2',
          600: '#4F337A',
          700: '#352353',
          800: '#1C122B',
          900: '#030204',
          950: '#000000'
        }
      }
    },
  },
  plugins: [nextui()]
}