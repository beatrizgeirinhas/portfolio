import * as React from "react";
import { styled } from "../../stitches.config";
import Link from "./Link";

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
