module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Raleway-Medium'],
      'sans-bold': ['Raleway-ExtraBold'],
      'icons': ['ElegantIcons'],
      'myriad': ['MyriadPro'],
      'avenir': ['Avenir']
    },
    fontSize: {
      'xs': '10px',
      'sm': '12px',
      'tiny': '13px',
      'base': '14px',
      'lg': '16px',
      'xl': '18px',
      '2xl': '20px',
      '2.5xl': '25px',
      '3xl': '26px',
      '3.5xl': '30px',
      '4xl': '36px',
      '4.5xl': '50px',
      '5xl': '60px',
      '6xl': '64px',
    },
    colors: {
      transparent: 'transparent',
      green: '#00a99d',
      white: '#ffffff',
      grey: {
        900 : '#aaaaaa',
        800 : '#cccccc',
        700 : '#cecece',
        600 : '#dedede',
        500 : '#e3e3e3',
        400 : '#e4e4e4',
        300 : '#ebebeb',
        200 : '#f9f9f9'
      },
      black: {
        900 : '#383838',
        800 : '#333333',
        700 : '#404040',
        600 : '#606060',
        500 : '#7a7a7a',
        400 : '#8a8a8a'
      }
    },
    spacing: {
      'full': '100%',
      '0': '0px',
      '5': '5px',
      '6': '6px',
      '10': '10px',
      '15': '15px',
      '20': '20px',
      '25': '25px',
      '28': '28px',
      '30': '30px',
      '35': '35px',
      '40': '40px',
      '45': '45px',
      '50': '50px',
      '60': '60px',
      '70': '70px',
      '80': '80px',
      '90': '90px',
      '100': '100px',
      '120': '120px',
      '140': '140px',
      '160': '160px',
      '200': '200px',
      '270': '270px',
      '330': '330px',
      '370': '370px',
      '410': '410px',
      '600': '600px',
      '900': '900px',
      '1200': '1200px'
    },
    lineHeight: {
      'fit': '0.8',
      'base': '1',
      'text': '24px',
      'text-lg': '34px'
     },
     screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1300px',
    },
    extend: {
      maxWidth: {
        'sm': '540px',
        'md': '720px',
        'lg': '894px',
        'xl': '1170px',
        'custom': '1170px',
       }
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '10px',
          paddingRight: '10px',
          '@screen sm': {
            maxWidth: '500px',
          },
          '@screen md': {
            maxWidth: '628px',
          },
          '@screen lg': {
            maxWidth: '894px',
          },
          '@screen xl': {
            maxWidth: '1170px',
            paddingLeft: '0px',
            paddingRight: '0px',
          },
        },
      })
    }
  ]
}
