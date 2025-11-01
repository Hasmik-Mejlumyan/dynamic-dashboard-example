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
        'card-text-color': 'var(--card-text-color)',
        'text-color': 'var(--text-color)',
        'text-color-alpha': 'var(--text-color-alpha)',
        'text-color-main': 'var(--text-color-main)',
        'white-muted': 'var(--white-muted)',
        'white-soft': 'var(--white-soft)',
        'header-item-color': 'var(--header-item-color)',
        'header-search-background': 'var(--header-search-background)',
        'inbox-title-color': 'var(--inbox-title-color)',
        'border-color': 'var(--border-color)',
        'recent-activity-date': 'var(--recent-activity-date)',
        'recent-activity-item-bg': 'var(--recent-activity-item-bg)',
      },
      screens: {
        xxs: '{ max: 320px }',
        xs: '{ max: 375px }',
        sm: '{ max: 575px }',
        md: '{ max: 768px }',
        lg: '{ max: 992px }',
        xl: '{ max: 1200px }',
        '2xl': '{ max: 1440px }',
        '3xl': '{ max: 1920px }',
      }
    },
  },
  plugins: [],
}
