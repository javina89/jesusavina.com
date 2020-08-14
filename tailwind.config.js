module.exports = {
    theme: {
        extend: {
          colors: {
            'bg-landing': '#2C2A37',
            'theme': 'var(--color-theme)',
            'night1': '#61DAFB',
            'day1': '#FFC700',
          },
          fontFamily: {
            'Poppins': 'Poppins',
          },
        },
      },
    purge: {
      content: [
        "./index.html",
        "./src/**/*.tsx",
        "./src/**/*.css",
      ]
  }
  };