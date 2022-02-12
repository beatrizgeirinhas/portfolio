import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  align-items: center;
  box-sizing: border-box;
  user-select: none;
`;

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

export default Button;
