/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { //setting custom colors in extend, then in colors, without add colors {} after theme for not to overwrite the default palette.
      colors: {
        primary: "rgb(var(--primary))", //navy blue
        secondary: 'rgb(var(--secondary))', //gold
      },
      textUnderlineOffset: {
        5: '5px',
      },
      keyframes: {
        scrollingText: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)'}
        },
        'bounce-increase': {
          '0%, 100%' : {
            transform: "translateY(-70%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)"
          },
          '30%, 60%': {
            opacity: 1
          },
          '50%': {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
            opacity: 0
          }
        }
      },
      animation: {
        scrollingText: 'scrollingText 45s infinite linear',
        'bounce-increase': "bounce-increase 1s infinite"
      }
    },
  },
  plugins: [],
}

