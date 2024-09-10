import type { Config } from "tailwindcss";
const { colors } = require ('./src/app/styles/colors');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'xxxs': '10px',
        'xxs': '11px',
        'xs': '12px',
        '3xl': '32px'
      },
      fontWeight:{
        "400": "400",
        "500": "500",
        "600": "600",
        "650": "650",
        "700": "700",
        "800": "800",
      },
      spacing: {
        '464': '464px',
        '472': '472px',
      },
      
      boxShadow: {
        'custom': '0px 18px 20px -8px rgba(17, 12, 34, 0.08)',
        'custom-light': '0px 0px 0px 0px #110C2200'

      },
      backgroundImage: {
        'custom-background': "url('assets/artwork.png')", 
      },
    },
  },
  plugins: [],
};
export default config;
