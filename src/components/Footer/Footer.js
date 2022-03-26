import * as React from "react";
import styled from "styled-components";
import { Link, Button } from "../index";

const StyledContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 14px;
  font-size: 10px;
`;

const Footer = () => (
  <StyledContainer>Copyright Beatriz Geirinhas 2022</StyledContainer>
);

export default Footer;
