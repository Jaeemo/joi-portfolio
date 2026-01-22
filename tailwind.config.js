/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 피그마에서 가져온 커스텀 컬러 변수 연결
        "brand-pink": "rgba(255, 0, 179, 1)",
        "brand-light": "rgba(255, 218, 255, 1)",
        "brand-mint": "rgba(152, 255, 233, 1)",
        "brand-cyan": "rgba(0, 255, 212, 1)",
      },
      fontFamily: {
        // Impact 느낌의 폰트 (없으면 기본 sans로 대체됨)
        'display': ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
        'anton-sc': ['"Anton SC"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}