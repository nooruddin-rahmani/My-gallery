module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        101: "6.36rem",
        78: "4.875rem",
        52: "3.25rem",
        242: "15.125rem",
        238: "14.875rem",
        63: "3.938rem",
        100: "6.25rem",
        67: "4.188rem",
        156: "9.75rem",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "gray-250": "#E5E5E5",
      }),
    },
    fontFamily: {
      mont: "Montserrat",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
