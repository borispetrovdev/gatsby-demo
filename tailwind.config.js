/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',
        'formOverlapMargin': '8rem'
      },
      minHeight: {
        'abovethefold': '700px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
