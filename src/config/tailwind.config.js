module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        primary: "#FF00FF",
        secondary: "#00FF00",
        white: "#FFFFFF",
        black: "#000000",
        warning: "#FF0000",
        success: "#00FF00",
        error: "#FF0000",
        configSuccess: "green",
      },
      screens: {
        sm: "345px",
        md: "654px",
        lg: "765px",
        xl: "1430px",
        "2xl": "1730px",
      },
    },
  },
};
