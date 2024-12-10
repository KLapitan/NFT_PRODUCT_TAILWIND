/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    colors: {
          CustomDarkBlueMainBG :	'#0d192b',
          CustomDarkBlueCard: 	'#14253d',
          CustomDarkBlueOutline:	'#2f415b',
          CustomWhite: 	'#ffffff',
          CustomPrimarySofBlue: '#8bacda',
          CustomCyanPrimary:	'#00fff7'
        },
        fontWeight:{
          customThin:'300',
          customMedium:'400',
          customBold: '600'
        },
        fontSize: {
        customFont : '18px', 


    },
      fontFamily: {
        custoMFont: 'Outfit',
    },

    width:{
        '360px': '360px',
    }
    },
  },
  plugins: [],
}

