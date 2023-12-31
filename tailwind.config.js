module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_7f": "#0000007f",
          "900_01": "#190b00",
        },
        gray: {
          100: "#f5f5f5",
          200: "#f0f0f0",
          300: "#e6e6e6",
          400: "#cacaca",
          500: "#a3a3a3",
          600: "#848484",
          700: "#676767",
          900: "#191509",
          "600_01": "#6f6f6f",
        },
        blue_gray: {
          100: "#cccccc",
          400: "#8d8d8d",
          500: "#727891",
          800: "#3f3d56",
          900: "#333333",
          "900_02": "#2f2e41",
          "900_01": "#263238",
          "900_93": "#33333393",
        },
        amber: { 100: "#fdefbe", 300: "#fed35c", "300_01": "#f9d75c" },
        white: { A700: "#ffffff" },
        colors: "black",
        orange: { 50: "#fef7df", A700: "#ff6a00" },
        deep_orange: { 100: "#ffb6b6", 300: "#ff9371" },
        yellow: { 500: "#ffe632", 800: "#e4b819" },
        lime: { 800: "#af9741", 900: "#9e7e0c", "900_01": "#9e7e0b" },
      },
      fontFamily: {
        montserrat: "Montserrat",
        euclidcircularb: "Euclid Circular B",
        abyssinicasil: "Abyssinica SIL",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
