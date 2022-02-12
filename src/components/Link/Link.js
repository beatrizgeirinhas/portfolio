import * as React from "react";
import { styled } from "../../../stitches.config";

const StyledLink = styled("a", {
  fontSize: "12px",
  textDecoration: "none",
  paddingRight: "10px",
  paddingLeft: "10px",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  textAlign: "left",
  variants: {
    variant: {
      subtle: {
        color: "$gray900",
        "&:hover": {
          transition:
            "textDecoration 0.5s, textUnderlineOffset 0.5s, color 0.5s",
          textDecoration: "underline",
          textUnderlineOffset: "4px",
          color: "$gray10000",
        },
      },
      contrast: {
        fontWeight: 500,
        color: "$gray1000",
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
  },
  defaultVariants: {
    variant: "subtle",
  },
});

const MyLink = ({ href, variant, size, children, target }) => (
  <StyledLink href={href} variant={variant} size={size} target={target}>
    {children}
  </StyledLink>
);

export default MyLink;
