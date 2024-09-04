/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'min': '320px', 'max': '767px'},
      'tablet': {'max': '1023px', 'min': '768px'},
      'desktop': {'max': '1440px', 'min': '1024px'},
    },
    container: {
      center: true,  // Center container by default
      padding: {
        mobile: '1.5rem',  // Padding for small screens
        tablet: '5rem',  // Padding for large screens
        desktop: '1rem', // Padding for extra large screens
      },
    },

    fontFamily: {
      'satoshi': ['Satoshi', 'sans-serif'],
    },

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.815rem',
      '7xl': '4.6rem',
      '8xl': '6rem',
      '9xl': '8rem',  
    },

    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
    },

    animation: {
      marquee: 'marquee 25s linear infinite',
      marquee2: 'marquee2 25s linear infinite',
    },

    backgroundImage: {
      'officeBg': 'url(/img/office-bg.png)',
      'titlePict': 'url(/img/title-pict.png)',

    },

    animation: {
      marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        marqueeLeftToRight: 'marqueeLeftToRight 25s linear infinite', // {{ edit_1 }}
        marqueeLeftToRight2: 'marqueeLeftToRight2 25s linear infinite',
    }
  },
  plugins: [],
}

