
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#E8AA42",
          "primary-focus": "#025464",
          "primary-content":"#ffffff",


          "secondary": "#025464",
          
          "accent": "#1dcdbc",

          "base-100": "#ffffff",

        },
      },
    ],
  },

  plugins: [require("daisyui")],
}