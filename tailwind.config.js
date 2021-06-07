module.exports = {
  purge: {
    // enabled: true,
    // content: ["src/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      height: {
        120: "30rem",
        192: "48rem",
      },
      maxHeight: {
        160: "40rem",
      },
      translate: {
        "4/2": "200%",
        "4/5": "80%",
        "-4/5": "-80%",
        "5/4": "125%",
        "6/4": "150%",
        "7/4": "175%",
        "-7/4": "-175%",
      },
    },
    fontFamily: {
      sans: ["Catamaran"],
      serif: [
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
