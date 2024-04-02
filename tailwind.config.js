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
      }
    },
  },
  plugins: [],
}

