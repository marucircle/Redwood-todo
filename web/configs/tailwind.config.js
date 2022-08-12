/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        sp: '768px',
        tb: '1200px',
        pc: '9999px',
      },
      gridTemplateColumns: {
        'form-input': '120px 1fr',
        'color-input': '120px max-content',
      },
      gridTemplateRows: {
        'form-input': 'max-content 1fr',
      },
      colors: {
        'pure-white': '#ffffff',
        white: '#fafafa',
        black: '#333333',
        green: '#5fd068',
        danger: '#ff0505',
        info: '#37e2d5',
        archived: '#dddddd',
        checkbox: '#00ffab',
      },
      fontSize: {
        'small-text': '10px',
        'medium-text': '12px',
        'large-text': '14px',
        'small-title': '16px',
        'medium-title': '20px',
        'large-title': '24px',
      },
      zIndex: {
        overlay: 50,
        modal: 100,
      },
      spacing: {
        px: '1px',
        0: '0',
        2: '0.5rem',
        4: '1rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
        header: '4.5rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
