const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // Needed for tailwind's typography plugin See:
  // https://github.com/tailwindlabs/tailwindcss-typography/issues/26
  important: true,
  content: ['./components/**/*.js', './lib/**/*.js', './pages/**/*.js', './posts/**/*.mdx'],
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      // FLP's special purple is number 900!
      purple: {
        50: '#f9fafb',
        100: '#eef2fa',
        200: '#d9dbf6',
        300: '#b6b6e8',
        400: '#948cd5',
        500: '#7866c3',
        600: '#614aa9',
        700: '#483783',
        800: '#31255a',
        900: '#180040',
      },
    },
    extend: {
      backgroundImage: {
        imgScotus: "url('/images/homepage/scotus-hero.jpeg')",
        imgJudgeHr: "url('/images/homepage/judge-hr.jpeg')",
        smile: 'radial-gradient(ellipse 80% 100% at 50% 10%, #180040 90%, transparent 90%)',
      },
      fontFamily: {
        display: ['CooperHewitt', ...defaultTheme.fontFamily.sans],
      },
      height: (theme) => ({
        '36px': '36px', // For the judges ribbon
      }),
      width: {
        // For any full bleed backgrounds
        'full-bleed-4': 'calc(100% + 2rem)', // Use with -ml-4
        'full-bleed-6': 'calc(100% + 3rem)', // Use with -ml-6
        'full-bleed-10': 'calc(100% + 5rem)', // Use with -ml-10
      },
    },
  },
};
