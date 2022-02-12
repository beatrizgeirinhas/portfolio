import * as React from "react";
import { styled } from "../../stitches.config";
import StyledLink from "./Link";

const StyledContainer = styled("nav", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "10px 15px",
});

const StyledLeft = styled("div", {
  fontSize: "13px",
});

const StyledRight = styled("div", {
  fontSize: "13px",
});

const Navbar = () => (
  <StyledContainer>
    <StyledLeft>
      <StyledLink href="/">Beatriz Geirinhas</StyledLink>
    </StyledLeft>
    <StyledRight>
      <StyledLink href="/work">Work</StyledLink>
      <StyledLink href="/about">About</StyledLink>
      <StyledLink href="/contact">Contact</StyledLink>
    </StyledRight>
  </StyledContainer>
);

export default Navbar;
