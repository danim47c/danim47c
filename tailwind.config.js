module.exports = {
  purge: ["components/**/*.tsx", "pages/**/*.tsx", "stores/**/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a",
        light: "#f5f5f5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
