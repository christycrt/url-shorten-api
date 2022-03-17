module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      cyan: "hsl(180, 66%, 49%)",
      "dark-violet": "hsl(257, 27%, 26%)",
      red: "hsl(0, 87%, 67%)",
      gray: "hsl(0, 0%, 75%)",
      grayish: "hsl(218, 31%, 95%)",
      "grayish-violet": "hsl(257, 7%, 63%)",
      "very-dark-blue": "hsl(255, 11%, 22%)",
      "very-dark-violet": "hsl(260, 8%, 14%)",
      white: "hsl(0, 0%, 100%)"
    },
    fontSize: {
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['22px', '30px'],
      '2xl': ['28px', '34px'],
      '3xl': ['42px', '1.2']
    }
  },
  plugins: [],
};
