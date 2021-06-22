module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: '#f8f8f8',
        primary: '#2e3a59'
      },
      fontFamily: {
        'body': ['Roboto', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
