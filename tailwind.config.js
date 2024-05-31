/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'neutral-820': '#212121',
        
      },
      height: {
        '112': '28rem'
      },
      width: {
        '7/10': '70%',
        '100': '25rem'
      },

    },
  },
  plugins: [],
}

