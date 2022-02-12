import * as React from "react";
import styled from "styled-components";
import { Link, Button } from "../index";

const StyledContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
`;

const StyledLeft = styled.div`
  font-size: 13px;
`;

const StyledRight = styled.div`
  font-size: 13px;
`;

const Navbar = () => (
  <StyledContainer>
    <StyledLeft>
      <Link href="/">Beatriz Geirinhas</Link>
    </StyledLeft>
    <StyledRight>
      <Link href="/work">Work</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </StyledRight>
  </StyledContainer>
);

export default Navbar;
