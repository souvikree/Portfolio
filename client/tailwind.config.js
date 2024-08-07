/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: ['clip-path-polygon'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      },
      
      
      spacing: {
        '7.5': '30px',
        '10': '42px',
        '4': '1rem',
        '3': '0.75rem',
        '80': '80px',
        '30': '30px',
        '66': '66px',
        '32': '32px',
      },
      zIndex: {
        '10': '10',
      },
      fontSize: {
        'base': '20px', 
        'sm': '16px',  
        'xl': '20px',
        'lg': '18px',
      },
      maxWidth: {
        '1100px': '1100px',
        '400': '400px',
        '280': '280px',
      },
      maxHeight: {
        '400': '400px',
        '280': '280px',
      },
      colors: {
        'card-light': 'black  ',  
        'primary-gradient-start': '#8e2de2', 
        'primary-gradient-end': '#3f0071', 
        'primary': '#8e2de2', 
        'primary-light': '#b16ce1', 
        'primary-dark': '#3f0071',
        'text-primary': '#333333',
        'text-secondary': '#555555',
        'custom-dark': '#1c1c27',
        'custom-primary': '#be1adb',
      },
      boxShadow: {
        'custom': '20px 20px 60px rgba(31, 38, 52, 0.5), -20px -20px 60px rgba(31, 38, 52, 0.5)',
        'custom-hover': '20px 20px 60px rgba(31, 38, 52, 0.5)',
      },
    },
  },
  variants: {},
  plugins: [
   
  ],
}