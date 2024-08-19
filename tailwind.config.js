
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#121212',  
        darker: '#000000', 
        light: '#ffffff', 
        darkText: '#e0e0e0', 
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
}
