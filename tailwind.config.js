/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'laguna': {
          DEFAULT: '#90D26D',
          50: '#FBFDF9',
          100: '#EFF8EA',
          200: '#D7EFCB',
          300: '#BFE5AB',
          400: '#A8DC8C',
          500: '#90D26D',
          600: '#6FC542',
          700: '#579E31',
          800: '#3F7324',
          900: '#284816',
          950: '#1C3310'
        },
        'lapacho': {
          DEFAULT: '#F26DF9',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FCE3FE',
          300: '#F9BBFC',
          400: '#F594FB',
          500: '#F26DF9',
          600: '#ED37F7',
          700: '#E10AEC',
          800: '#AD07B6',
          900: '#7A0580',
          950: '#610465'
        },
      }
    },
  },
  plugins: [],
}