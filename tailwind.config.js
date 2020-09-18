module.exports = {
    theme: {
      maxWidth: {
        'mobile': '700px',
              },
      screens: {
        'landscape': {'raw': '(orientation: landscape)'},
        'portrait': {'raw': '(orientation: portrait)'},
        'mobilelandscape': {
          'raw': '(orientation: landscape) and (max-height: 400px)',
        }
      },
        extend: {
          animation: {
            'spin-ray': 'spin 40s linear infinite',
            'swing-shadow': 'swing 30s linear infinite',
          },
          keyframes: {
            swing: {
              '0%, 100%': { transform: 'translate(35%, 50%)' },
              '50%': { transform: 'translate(65%, 50%)' },
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