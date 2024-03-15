/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-image': "url('/src/assets/hero-image-github-profile.png')"
      },
      colors: {
        CBlack: '#111729',
        CDarkViolet: '#1D1B48',
        CBlue: '#3662E3',
        CDarkgray: '#20293A',
        CMediumgray: '#364153',
        CLightGray: '#4A5567',
        CGray: '#CDD5E0',
      },
      fontFamily: {
        'VietnamPro': '"Be Vietnam Pro", sans-serif' 
      }
    },
  },
  plugins: [],
}