/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edfff6',
          100: '#d4ffeb',
          200: '#acffd8',
          300: '#6cffbb',
          400: '#25ff96',
          500: '#00ee76',
          600: '#00c65e',
          700: '#009b4d',
          800: '#027941',
          900: '#045c34',
          950: '#00381c', 
        }
      }
    },
  },
  plugins: [],
};
