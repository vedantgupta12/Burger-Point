/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 5s ease-out forwards',
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors:{
        primary:'#0190ec',
        secondary:'#044fa9',
        dark: "#1e1e1e",
        light: "#f5f5f5",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
        },
      },
    },
  },
  plugins: [],
}

