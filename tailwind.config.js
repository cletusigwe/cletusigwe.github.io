/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,svg}"],
  theme: {
    extend: {
      colors: {
        yellow: "#b58900",
        yellowLight: "#FDE68A",
        orange: "#cb4b16",
        red: "#dc322f",
        dark: "#002b36",
        ash: "#a1b4b8",
        blue: "#268bd2",
        emphasizedContent: "#586e75",
        emphasizedContentLight: "#93a1a1",
        backgroundHighlightDark: "#073642",
        bodyText: "#465c64",
        violet: "#6c71c4",
        magenta: "#d33682",
        cyan: "#2aa198",
        green: "#859900",
        grey: "#181818",
      },
      fontFamily: {
        atkinson: "Atkinson Hyperlegible",
        ibmMono: "IBM Plex Mono",
      },
    },
  },
  plugins: [],
};
