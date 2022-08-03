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
      colors: {
        'rockset-gray': "#556782"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
