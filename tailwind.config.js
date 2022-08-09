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
        'rockset-gray': "#556782",
        'coral': "#F2346D"
      }
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '900px',

      'xl': '1312px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
