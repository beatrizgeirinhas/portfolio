import * as React from "react";
import { styled } from "../../stitches.config";

const StyledButton = styled("button", {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
});

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

export default Button;
