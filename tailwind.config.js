/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      pri: {
        light: '#ea4d84',
        DEFAULT: '#e52165',
        dark: '#b71a51'
      },
      sec: {
        light: '#3d415f',
        DEFAULT: '#0d1137',
        dark: '#0a0e2c'
      },
      white: '#fff',
      black: '#000',
      gray: '#EEEEEE'
    },
    extend: {},
  },
  plugins: [],
}
