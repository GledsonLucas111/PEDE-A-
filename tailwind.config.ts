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
        'orange': '#FF8225',
        'green': '#008000',
        'green300':'#1ca51c',
        'white': '#f2f2f2',
        'white600':'#dddddd',
        'red': '#B43F3F',
        'blue': '#4682A9',
        'cian': '#91C8E4',
        'gray': '#686D76',
        'purple':'#440487',
      }
    },
  },
  plugins: [],
};
export default config;
