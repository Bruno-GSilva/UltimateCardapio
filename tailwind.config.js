/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'darkBlue': {
        10:'#000814',
        20:'#001D3D',
        30:'#003566',
      },
      'gold': {
        10:'#FFC300',
        20:'FFD60A',
      },
    },
    extend: {},
  },
  plugins: [],
}

