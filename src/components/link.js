import * as React from "react";
import { styled } from "../../stitches.config";

const StyledLink = styled("a", {
  fontSize: "13px",
  padding: "10px 15px",
  textDecoration: "none",
});

const Link = ({ href, children }) => (
  <StyledLink href={href}>{children}</StyledLink>
);

export default Link;
