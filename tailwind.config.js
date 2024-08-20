import colors from "tailwindcss/colors";

export default {
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        primary: "#432361",
        icon: "#9B51E0",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 500,
        bold: 700,
        // Add more custom weights if necessary
      },
    },
  },
};
