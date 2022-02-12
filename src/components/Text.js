import React from "react";
import { styled } from "../../stitches.config";

const DEFAULT_TAG = "span";

export const StyledText = styled(DEFAULT_TAG, {
  // Reset
  margin: "0",
  fontVariantNumeric: "tabular-nums",
  display: "block",

  variants: {
    size: {
      1: {
        fontSize: "$1",
        lineHeight: "18px",
      },
      2: {
        fontSize: "$2",
        lineHeight: "19.5px",
      },
      3: {
        fontSize: "$3",
      },
      4: {
        fontSize: "$4",
      },
      5: {
        fontSize: "$5",
        lineHeight: "28.5px",
        letterSpacing: "-.015em",
      },
      6: {
        fontSize: "$6",
        lineHeight: "31.5px",
        letterSpacing: "-.016em",
      },
      7: {
        fontSize: "$7",
        letterSpacing: "-.031em",
        textIndent: "-.005em",
      },
      8: {
        fontSize: "$8",
        lineHeight: "97.5px",
        letterSpacing: "-.034em",
        textIndent: "-.018em",
      },
      9: {
        fontSize: "$9",
        lineHeight: "120px",
        letterSpacing: "-.055em",
        textIndent: "-.025em",
      },
    },
    weight: {
      400: { fontWeight: 400 },
      500: { fontWeight: 500 },
      600: { fontWeight: 600 },
      700: { fontWeight: 700 },
    },
    variant: {
      red: {
        color: "$red900",
      },
      crimson: {
        color: "$crimson900",
      },
      pink: {
        color: "$pink900",
      },
      purple: {
        color: "$purple900",
      },
      violet: {
        color: "$violet900",
      },
      indigo: {
        color: "$indigo900",
      },
      blue: {
        color: "$blue900",
      },
      cyan: {
        color: "$cyan900",
      },
      teal: {
        color: "$teal900",
      },
      green: {
        color: "$green900",
      },
      lime: {
        color: "$lime900",
      },
      yellow: {
        color: "$yellow900",
      },
      orange: {
        color: "$orange900",
      },
      gold: {
        color: "$gold900",
      },
      bronze: {
        color: "$bronze900",
      },
      gray: {
        color: "$slate900",
      },
    },
  },
  defaultVariants: {
    size: "3",
    variant: "gray",
    weight: 400,
  },
});
