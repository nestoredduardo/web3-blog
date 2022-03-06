module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff8867',
        secondary: {
          DEFAULT: '#ff52ff',
          200: '#ffcbff',
          500: '#d339b3',
        },
        background: {
          DEFAULT: '#F0F5F4',
          light: '#f5f5f5',
        },
        sea: {
          DEFAULT: '#00E1C9',
          200: '#d1eeeb',
          500: '#02a090',
        },
        purple: '#8d4ff6',
        gray: {
          DEFAULT: '#708A87',
          dark: '#4f5857',
          light: '#e2e8f0',
        },
      },
      keyframes: {
        textBounce: {
          '0%': {
            transform: 'translateY(0)',
          },
          '10%': {
            transform: 'translateY(0)',
          },
          '30%': {
            transform: 'translateY(-55px)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '58%': {
            transform: 'translateY(-7px)',
          },
          '65%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'writer-bounce': {
          '0%, 20%, 50%, 80%, 100% ': {
            transform: 'translateX(0)',
          },
          '40%': {
            transform: 'translateX(30px)',
          },
          '60%': {
            transform: 'translateX(15px)',
          },
        },
        'gradient-animation': {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
      },
      animation: {
        'bg-animation': 'gradient-animation 2s ease infinite',
        'writer-bounce': 'writer-bounce 1.5s ease infinite',
      },
    },
  },
  plugins: [],
}
