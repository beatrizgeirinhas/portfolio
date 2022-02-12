import { createStitches } from "@stitches/react";

export const { styled, css, getCssText, theme } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
    },
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
      2: "14px",
      3: "16px",
      4: "18px",
      5: "20px",
      6: "22px",
      7: "24px",
      8: "36px",
      9: "60px",
    },
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
    bp3: "(min-width: 1200px)",
    bp4: "(min-width: 1800px)",
  },
});
