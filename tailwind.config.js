/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF4D00',
        'smoky-white': '#FFFFFF',
        'near-black': '#131313',
        'muted-gray': '#5C5C5C',
        'charcoal-btn': '#333333',
        'btn-hover': '#1f1f1f'
      },
      fontFamily: {
        display: ["Cal Sans", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        'cta-shadow': '0px 3px 6px rgba(0,0,0,0.19), 0px 10px 10px rgba(0,0,0,0.17), 0px 23px 14px rgba(0,0,0,0.10), 0px 41px 17px rgba(0,0,0,0.03)'
      }
    },
  },
  plugins: [],
}
