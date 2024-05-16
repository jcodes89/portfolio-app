/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/pawel-czerwinski-fRzUPSFnp04-unsplash.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        
        mytheme: {
          "primary" : '#016999',
          // "secondary": '#598FB2',
          "secondary": '#035685',
          "accent": '#F08A3D',
          // "primary" : '#3FABEC',
          // "secondary": '#EB1897',
          // "accent": '#A0DDE6',
          
        },
      },
      
    ]
  }
};
