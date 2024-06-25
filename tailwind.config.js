/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Mont', 'sans-serif'],
      },
    },
  },
  darkMode:"class",
  plugins: [ nextui( {
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#FF7900"
          }
        }
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#FF7900"
          }
        }
      }
    }
  })],
}