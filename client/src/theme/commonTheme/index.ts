const theme = {
  fonts: {
    common: '"ApercuArabicPro", sans-serif',
  },
  colors: {
    text: "#3E3E3E",
    background: "#E5E5E5",
    black: "#2D2D2D",
    white: "#FFFFFF",
    CTA: "#FAD34F",
    background_footer: "#FAFAFA",
    border_footer: "#D8D8D8",
    border_input: "#DCDCDC",
  },
  buttons: {
    primary: {
      padding: "25px 53px",
      "font-size": "18px",
      "line-height": "1.3",
      "border-radius": "500px",
      cursor: "pointer",
      border: "none",
      outline: "none",
      transition: "300ms",
    },
  },
  input: {
    padding: "34px 45px",
    color: "var(--black)",
    "font-size": "18px",
    "line-height": "1.3",
    border: "1px solid var(--border_input)",
    "border-radius": "10px",
    outline: "none",
    transition: "300ms",
    "&:focus": {
      border: "1px solid var(--CTA)",
    },
    "&::placeholder": {
      color: "var(--black)",
    },
  },
};

export default theme;
