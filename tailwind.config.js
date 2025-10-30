/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          // dark: 'var(--primary-dark)',
        },
        'background-body': 'var(--background-body)',
        'background-sub-header': 'var(--background-sub-header)',
        'background-header': 'var(--background-header)',
        'background-navbar': 'var(--background-navbar)',
        'card-background': 'var(--card-background)',
        'text-color': 'var(--text-color)',
        'text-color-alpha': 'var(--text-color-alpha)'
      },
    },
  },
  plugins: [],
}