const typography = require('@tailwindcss/typography');
module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: ['./hugo_stats.json'],
    mode: 'all',
    options: {
      defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        els = els.tags.concat(els.classes, els.ids);
        return els;
      }
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
    },
    container: {
      center: true,
      padding: "2rem"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [typography],
}
