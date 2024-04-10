import type { Config } from 'tailwindcss';
import { appConfig } from './src/config/app';

const config: Config = {
  darkMode: ['class', '[data-mantine-color-scheme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: appConfig.colors,
    },
  },
};

export default config;
