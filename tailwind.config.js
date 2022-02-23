module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#5773FF',
        'blue-tone': '#4964F2',
        'grey': '#C7CBD2',
        'light-grey': '#EAEBF4',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
      backgroundSize: {
        '50': '50%',
      }
    },
  },
  plugins: [],
}
