import * as React from "react";
import styled from "styled-components";

export const StyledLink = styled.a`
  flex-shrink: 0;
  outline: none;
  text-decoration-line: none;
  text-underline-offset: 3px;
  font-size: 20px;
  color: #000000;
  text-decoration: none;
  font-size: 13px;
  height: 25px;
  padding-right: 10px;
  padding-left: 10px;
`;

const MyLink = ({ href, variant, size, children }) => (
  <StyledLink href={href} variant={variant} size={size}>
    {children}
  </StyledLink>
);

export default MyLink;
