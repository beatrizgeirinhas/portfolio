import * as React from "react";
import { styled } from "../../../stitches.config";
import { Link, Button } from "../index";

const StyledContainer = styled("nav", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "3rem 2rem",
  fontSize: "12px",
});

const Footer = () => (
  <StyledContainer>
    <p>Copyright Beatriz Geirinhas 2022</p>
    <p>geirinhas.beatriz@gmail.com</p>
  </StyledContainer>
);

export default Footer;
