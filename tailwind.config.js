/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-body': 'var(--background-body)',
        'background-pre-header': 'var(--background-pre-header)',
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