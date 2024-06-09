/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Geist",
          "IBM Plex Sans Thai Looped",
          "IBM Plex Sans JP",
          "IBM Plex Sans KR",
          "Noto Sans SC",
          "Noto Sans TC",
        ],
        serif: ["FK Roman Standard"],
        mono: ["Geist Mono"],
        fkDisplay: ["FK Display"],
      },
    },
  },
  plugins: [],
};
