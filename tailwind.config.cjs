/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#715cbc",
        
"secondary": "#bc7532",
        
"accent": "#e5475e",
        
"neutral": "#252537",
        
"base-100": "#F2F2F3",
        
"info": "#A5CDE4",
        
"success": "#46E796",
        
"warning": "#BA8303",
        
"error": "#E65C87",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}