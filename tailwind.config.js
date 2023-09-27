/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#4E54DA',
        accent:'#787EF2',
        success : '#6DDC52',
        sucessAccent : '#B3FFA0',
        warn: '#DCC652',
        warnAccent : '#FFF6A0',
        danger:'#FF7575',
        dangerAccent: '#FFD9D9',
        info: '#878787',
        primaryLight: '#D1D3FF'
      }
    },
  },
  plugins: [],
}
