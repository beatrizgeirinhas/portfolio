import * as React from "react";
import styled from "styled-components";
import { Link, Button } from "../index";

const StyledContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 14px;
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
      <Link href="/" variant="contrast" target="_self">
        Beatriz Geirinhas
      </Link>
    </StyledLeft>
    <StyledRight>
      <Link href="/work" target="_self" padding="0 2rem 0 0">
        Work
      </Link>
      <Link href="/about" target="_self" padding="0 2rem 0 0">
        About
      </Link>
      <Link href="/contact" target="_self">
        Contact
      </Link>
    </StyledRight>
  </StyledContainer>
);

export default Navbar;
