/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '15%': '15%',
        '10vh': '10vh',
        '25vh': '25vh',
        '75vh': '75vh',
        '90vh': '90vh'
      },
    },
    letterSpacing: {
      1: '1px',
      2: '2px'
    },
  },
  plugins: [],
}
