import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "yellow",
      gray500: "lightgray",
    },
    fonts: {
      untitled: "Untitled Sans, -apple-system, system-ui, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
    bp3: "(min-width: 1200px)",
    bp4: "(min-width: 1800px)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});
