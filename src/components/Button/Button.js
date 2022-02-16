import React, { useCallback } from "react";
import { styled } from "../../../stitches.config";
import { Icon } from "../index";

const StyledButton = styled("button", {
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  display: "flex",
  flexDirection: "row",
  fontSize: "16px",
  cursor: "pointer",
  color: "$gray800",
  width: "fit-content",
  "&:hover": {
    transition: "color 0.5s",
    color: "#0051ED",
  },
});

const Button = ({ children, onClick, disabled, icon }) => {
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
      {icon && <Icon icon={icon} size={16} />}
      {children}
    </StyledButton>
  );
};

export default Button;
