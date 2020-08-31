module.exports = {
    theme: {
        extend: {
          animation: {
            'spin-ray': 'spin 20s linear infinite',
            'swing-shadow': 'swing 20s linear infinite',
          },
          keyframes: {
            swing: {
              '0%, 100%': { transform: 'translate(-145%, -35%)' },
              '50%': { transform: 'translate(-175%, -35%)' },
            }
          },            
          colors: {
            'bg-landing': '#2C2A37',
            'theme': 'var(--color-theme)',
            'night': '#61DAFB',
            'day': '#FFC700',
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