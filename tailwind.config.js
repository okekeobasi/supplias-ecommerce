module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont'],
      serif: ['Inter', 'Georgia', 'Cambria', 'serif'],
      mono: ['Inter', 'SFMono-Regular', 'Menlo', 'mono'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      width: {
        '500px': '500px',
      },
      colors: {
        lightGray: '#F9FAFB',
        midGray: '#F2F3F5',
        darkGray: '#808A97',
        lightBlue: '#1784FA',
        lightBlack: '#171C34',
        lightOrange: '#FFAA7A',
        lightRed: '#FFF5F5',
        darkRed: '#63171B',
        lightGreen: '#F0FFF5',
        darkGreen: '#1C4532',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
