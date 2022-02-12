import * as React from "react";
import { styled } from "../../stitches.config";

const StyledLink = styled("a", {
  flexShrink: 0,
  outline: "none",
  textDecorationLine: "none",
  textUnderlineOffset: "3px",
  fontSize: "20px",
  "&:hover": {
    textDecorationLine: "underline",
  },
  "&:focus": {},
  variants: {
    variant: {
      blue: {
        color: "$gray900",
        textDecorationColor: "$gray900",
        "&:focus": {
          outlineColor: "$blue700",
        },
      },
      subtle: {
        color: "$slate900",
        textDecorationColor: "$slate300",
        "&:focus": {
          outlineColor: "$slate700",
        },
      },
      contrast: {
        color: "$gray900",
        textDecoration: "none",
        textDecorationColor: "$slate300",
        "@hover": {
          "&:hover": {
            textDecorationColor: "$slate600",
          },
        },
        "&:focus": {
          outlineColor: "$slate700",
        },
      },
    },
    size: {
      small: {
        fontSize: "13px",
        height: "25px",
        paddingRight: "10px",
        paddingLeft: "10px",
      },
      large: {
        fontSize: "15px",
        height: "35px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
  },
  defaultVariants: {
    variant: "contrast",
    size: "large",
  },
});

const Link = ({ href, variant, size, children }) => (
  <StyledLink href={href} variant={variant} size={size}>
    {children}
  </StyledLink>
);

export default Link;
