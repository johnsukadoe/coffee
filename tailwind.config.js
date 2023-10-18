module.exports = {
  purge: ['./src/**/*.{vue,js,html}'],
  darkMode: 'class', // или 'media' или 'class'
  theme: {
    extend: {
      colors: {
        'my-green': '#00FF00',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],

}
