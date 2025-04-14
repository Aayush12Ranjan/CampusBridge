// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };




/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       animation: {
//         'fade-in': 'fadeIn 0.5s ease-out',
//         'slide-up': 'slideUp 0.5s ease-out',
//         'fade-in-up': 'fadeInUp 0.5s ease-out',
//         'bounce-in': 'bounceIn 0.5s ease-out',
//       },
//       keyframes: {
//         fadeIn: {
//           'from': { opacity: '0' },
//           'to': { opacity: '1' },
//         },
//         slideUp: {
//           'from': { transform: 'translateY(20px)', opacity: '0' },
//           'to': { transform: 'translateY(0)', opacity: '1' },
//         },
//         fadeInUp: {
//           'from': { transform: 'translateY(15px)', opacity: '0' },
//           'to': { transform: 'translateY(0)', opacity: '1' },
//         },
//         bounceIn: {
//           '0%': { transform: 'scale(0.3)', opacity: '0' },
//           '50%': { transform: 'scale(1.05)', opacity: '1' },
//           '100%': { transform: 'scale(1)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
