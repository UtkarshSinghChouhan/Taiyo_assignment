/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      exs: '320px',
      // => @media (min-width: 370px) { ... }
      xxs: '370px',
      // => @media (min-width: 370px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1537px',
      // => @media (min-width: 1537px) { ... }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e1e1e1',
        },
        'fs-beige': '#e1e1e1',
        'fs-beige-bg': '#afafaf',
        'fs-beige-bg-header': '#afafaf',
        'fs-beige-bg-body': '#545454',
        'fs-beige-bg-hover': '#808080',
        'fs-dark-border': '#2c2c2c',



        // Dark Theme
        'fs-darktheme-text' : '#B0B3B8', 

        'fs-darktheme-text-header' : '#ffffff',

        'fs-darktheme-bg-dark' : '#18191B',
        'fs-darktheme-bg' : '#242526',
        'fs-darktheme-bg-light' : '#3B3B3D',
        'fs-darktheme-bg-extra-light' : '#4e4f50',    //hover-state

        'fs-darktheme-border' : '#383B3B',
        'fs-darktheme-border-light' : '#575b5b',
      },

      gridTemplateColumns: {
        'fs-contact': 'repeat(auto-fill, 12.75rem)',
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
    

    },
  },
  plugins: [],
}

