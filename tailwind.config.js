/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*/templates/*.html", "./*.html"],
  theme: {
    extend: {
      boxShadow: {
        'golden': '10px 10px 20px rgba(167, 135, 62, 0.5)', // Customize the values as needed
        'card': '0px 4px 25px 0px #00000014'

      },
      fontSize: {
        '48': '48px',
        '24px': '24px',
      },
      fontWeight: {
        'regular': '800', // Add custom font weight regular
      },
      colors: {
        'primary': '#B2867C',
        'fontColor-light-1': 'white',
        'fontColor-dark-1': 'black',
        'fontColor-primary-1': '#394586',
        'fontColor-primary-2':'#A7873E',
        'fontColor-primary-3':'#2F3C7E'

      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
          lato: ['Lato', 'sans-serif'],
          'dm-serif': ['"DM Serif Display"', 'serif'],
        'body': ['Inter', 'sans-serif']
      },
    gridTemplateColumns: {
      // Define custom grid template columns for large screens
    'home-lg': '1.5fr 1fr',
    'product-lg': '1fr auto',
    'product-rev-lg': 'auto 1fr'

    },
    gridTemplateAreas: {
      // Define custom grid template areas
    'home': [
        'home-title',
        'home-image',
      'home-info',
        'home-btn',
      ],
      'home-lg': [
        'home-title home-image',
      'home-info home-image',
    'home-btn home-image',
  ],
  'product': [
    'product-title',
    'product-image',
    'product-info',
  ],
  'product-lg': [
    'product-image product-title',
    'product-image product-info',
    
  ], 
  'product-rev-lg': [
    'product-title product-image',
    'product-info product-image',
    
  ],   
    },
  },
},
plugins: [

  function ({ addUtilities }) {
    const newUtilities = {
      '.home-grid': {
        'display': 'grid',
        'grid-template-areas': `
          "home-title"
          "home-image"
          "home-info"
          "home-btn"
        `,
        'grid-template-columns': '1fr',
        'gap': '1rem',
      },
      '.home-grid-lg': {
        'display': 'grid',
        'grid-template-areas': `
          "home-title home-image"
          "home-info home-image"
          "home-btn home-image"
        `,
        'grid-template-columns': '1.5fr 1fr',
        'gap': '1rem',
      },
              '.product-grid': {
          'display': 'grid',
          'grid-template-areas': `
            "product-title"
            "product-image"
            "product-info"
          `,
          'grid-template-columns': '1fr',
          'gap': '1rem',
        },
        '.product-grid-lg': {
          'display': 'grid',
          'grid-template-areas': `

            "product-image product-title"
            "product-image product-info"



          `,
          'grid-template-columns': 'auto 1.5fr',
          'grid-template-rows': '2fr 4fr',

          // 'gap': '1rem',
        },
        '.product-grid-rev-lg': {
          'display': 'grid',
          'grid-template-areas': `

            "product-title product-image "
            "product-info product-image "



          `,
          'grid-template-columns': '1.5fr auto',
          'grid-template-rows': '2fr 4fr',

          // 'gap': '1rem',
        },
    
    };

    addUtilities(newUtilities, ['responsive']);
  },
],
}
