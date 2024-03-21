/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { //setting custom colors in extend, then in colors, without add colors {} after theme for not to overwrite the default palette.
      colors: {
        primary: '#0A2252', //navy blue
        secondary: '#F5C71D', //gold
      }
    },
  },
  plugins: [],
}

