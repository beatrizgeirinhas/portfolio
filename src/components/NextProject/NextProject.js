import React from "react";
import { styled } from "../../../stitches.config";
import { Button } from "../index";

const StyledTitle = styled("div", {
  fontSize: "24px",
  color: "$gray1000",
  marginBottom: "1rem",
});

const StyledNotes = styled("div", {
  fontSize: "16px",
  color: "$gray800",
});

const StyledContainer = styled("a", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textDecoration: "none",
  padding: "8rem 4rem",
  backgroundColor: "$gray100",
});

const NextProject = ({ title, notes, src, href, target, onClick }) => {
  return (
    <StyledContainer href={href} target={target}>
      <StyledTitle>{title}</StyledTitle>
      <StyledNotes>{notes}</StyledNotes>
      <Button onClick={onClick}>View Project →</Button>
    </StyledContainer>
  );
};

export default NextProject;
