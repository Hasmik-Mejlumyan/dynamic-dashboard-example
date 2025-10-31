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
          dark: 'var(--primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          dark: 'var(--secondary-dark)',
          darker: 'var(--secondary-darker)',
        },
        'background-body': 'var(--background-body)',
        'background-sub-header': 'var(--background-sub-header)',
        'background-header': 'var(--background-header)',
        'background-navbar': 'var(--background-navbar)',
        'card-background': 'var(--card-background)',
        'text-color': 'var(--text-color)',
        'text-color-alpha': 'var(--text-color-alpha)',
        'header-item-color': 'var(--header-item-color)',
        'header-search-background': 'var(--header-search-background)',
      },
    },
  },
  plugins: [],
}
