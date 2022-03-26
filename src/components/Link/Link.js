import * as React from "react";
import { styled } from "../../../stitches.config";

const StyledLink = styled("a", {
  fontSize: "12px",
  lineHeight: "26px",
  textDecoration: "none",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  textAlign: "left",
  width: "fit-content",
  variants: {
    variant: {
      primary: {
        color: "#0051ED",
        cursor: "pointer",
        "&:hover": {
          transition:
            "textDecoration 0.5s, textUnderlineOffset 0.5s, color 0.5s",
          textDecoration: "underline",
          textUnderlineOffset: "4px",
        },
      },

      secondary: {
        color: "$gray900",
        "&:hover": {
          transition:
            "textDecoration 0.5s, textUnderlineOffset 0.5s, color 0.5s",
          textDecoration: "underline",
          textUnderlineOffset: "4px",
          color: "#0051ED",
        },
      },

      contrast: {
        fontWeight: 600,
        color: "$gray950",
        "&:hover": {
          textDecoration: "none",
        },
      },

      disabled: {
        color: "$gray700",
        cursor: "default",
      },
    },
  },
  defaultVariants: {
    variant: "secondary",
  },
});

const MyLink = ({ href, variant, size, children, target, padding }) => (
  <StyledLink
    href={href}
    variant={variant}
    size={size}
    target={target}
    css={{ padding }}
  >
    {children}
  </StyledLink>
);

export default MyLink;
