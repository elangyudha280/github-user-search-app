/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        'space-mono': ['"Space Mono"']
      },
      colors:{
        'github-bg': '#f6f8ff',
  'github-bg-content': '#fefefe',
  'github-text': '#4b6a9b',
  'github-text-alt': '#2b3442',
  'github-shadow': 'rgba(70, 96, 187, 0.2)',
  'github-shadow-inactive': 'rgba(0, 0, 0, 0.2)',
  'github-btn': '#0079ff',
  'github-btn-hover': '#60abff',
  'github-bg-dark':'#141C30',
  'github-bg-content-dark':'#1F2A48',
  'github-place-holder':'#49536C',
  'github-marker':'rgb(249, 102, 238)'
      },
      screens:{
        'xs':'520px'
      }
    },
  },
  plugins: [],
}
