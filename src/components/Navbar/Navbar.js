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

const Navbar = ({ variant1, variant2 }) => (
  <StyledContainer>
    <StyledLeft>
      <Link
        href="/"
        variant="contrast"
        target="_self"
        padding="0 2rem 0 0"
        css={{ lineHeight: "18px" }}
      >
        <bold>Beatriz Geirinhas</bold>
      </Link>
    </StyledLeft>
    <StyledRight>
      <Link href="/work" target="_self" padding="0 2rem 0 0" variant={variant1}>
        Work
      </Link>
      <Link
        href="/about"
        target="_self"
        padding="0 2rem 0 0"
        variant={variant2}
      >
        About
      </Link>
    </StyledRight>
  </StyledContainer>
);

export default Navbar;
