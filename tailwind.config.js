/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist"],
        serif: ["FK Roman Standard", "Chulabhorn Likit Text"],
        mono: ["Geist Mono"],
        fkDisplay: ["FK Display"],
      },
    },
  },
  plugins: [],
};
