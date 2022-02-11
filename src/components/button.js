import * as React from "react";
import { styled } from "../../stitches.config";

const StyledButton = styled("button", {
  backgroundColor: "$gray400",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
});

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

export default Button;
