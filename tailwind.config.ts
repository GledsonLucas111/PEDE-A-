import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#8c996a',
        'orange': '#FF8225',
        'green': '#008000',
        'green300':'#1ca51c',
        'white': '#f2f2f2',
        'white600':'#dddddd',
        'red': '#B43F3F',
        'blue': '#4682A9',
        'cian': '#91C8E4',
        'gray': '#686D76',
        'gray400': '#464646',
        'purple':'#440487',
        'brown': '#5e3e27',
      }
    },
  },
  plugins: [],
};
export default config;
