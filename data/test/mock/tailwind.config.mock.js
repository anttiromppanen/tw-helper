const mockConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#FF00FF",
      secondary: "#00FF00",
      white: "#FFFFFF",
      rgbTest: "rgb(245, 99, 56)",
      rgbaTest: "rgba(112, 183, 255, 0.72)",
    },
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
        test: "hsl(var(--color-primary))",
        hslTest: "hsl(289, 45%, 62%)",
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
        hslaTest: "hsla(134, 75%, 44%, 0.5)",
        rgbTest: "rgb(245, 99, 56)",
        rgbaTest: "rgba(112, 183, 255, 0.72)",
      },
      screens: {
        sm: "800px",
        md: "1000px",
        lg: "1200px",
        xl: "1400px",
        "2xl": "1700px",
      },
    },
  },
};`;

module.exports = mockConfig; // Use CommonJS module export
