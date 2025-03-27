module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      screens: {
        "custom-sm": "450px",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
