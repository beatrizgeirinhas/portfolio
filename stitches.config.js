import { createStitches } from "@stitches/react";

export const { styled, css, getCssText, theme } = createStitches({
  theme: {
    colors: {
      gray100: "hsl(0 0% 98.8%)",
      gray200: "hsl(0 0% 96.0%)",
      gray300: "hsl(0 0% 93.7%)",
      gray400: "hsl(0 0% 92.0%)",
      gray500: "hsl(0 0% 89.5%)",
      gray600: "hsl(0 0% 85.2%)",
      gray700: "hsl(0 0% 80.0%)",
      gray800: "hsl(0 0% 56.1%)",
      gray900: "hsl(0 0% 43.9%)",
      gray1000: "hsl(0 0% 7%)",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
      7: "27px",
      8: "35px",
      9: "59px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
    bp3: "(min-width: 1200px)",
    bp4: "(min-width: 1800px)",
  },
  utils: {},
  "@font-face": {
    fontFamily: "Inter",
    src: "url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap')",
  },
});
