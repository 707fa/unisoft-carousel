/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#635bff",
          dark: "#0a2540",
        },
        // The API console: a cool, low-chroma dark surface set so the syntax
        // colours are the only saturated thing in the panel.
        console: {
          bg: "#0f1218",
          pane: "#12161d",
          bar: "#171c25",
          raised: "#252d3b",
          line: "#242c3a",
          text: "#ccd4e0",
          dim: "#96a0b2",
          gutter: "#59637a",
          accent: "#8b83ff",
        },
        code: {
          key: "#e5c07b",
          str: "#98c379",
          num: "#d19a66",
          lit: "#56b6c2",
          kw: "#c678dd",
          flag: "#61afef",
          com: "#6b7487",
          punct: "#8b93a5",
          var: "#ff8f6b",
        },
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "JetBrains Mono",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
