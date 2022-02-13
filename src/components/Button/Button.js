import React, { useCallback } from "react";
import { styled } from "../../../stitches.config";

const StyledButton = styled("button", {
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  fontSize: "12px",
  cursor: "pointer",
  color: "$gray800",
  "&:hover": {
    transition: "color 0.5s",
    color: "$gray1000",
  },
});

const Button = ({ children, onClick, disabled }) => {
  const handleOnClick = useCallback(
    (e) => {
      if (!disabled) {
        onClick(e);
      }
    },
    [disabled, onClick]
  );
  return (
    <StyledButton disabled={disabled} onClick={handleOnClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
