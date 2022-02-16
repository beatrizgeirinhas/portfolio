import React from "react";
import { styled } from "../../../stitches.config";

const StyledTitle = styled("div", {
  fontSize: "24px",
  color: "$gray900",
});

const StyledNotes = styled("div", {
  fontSize: "16px",
  color: "$gray800",
});

const ImageContainer = styled("img", {
  display: "flex",
  flexDirection: "column",
  width: "30%",
  opacity: 0.85,
});

const StyledContainer = styled("a", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textDecoration: "none",
  "&:hover": {
    [`& ${StyledTitle}`]: {
      transition: "color 0.5s",
      color: "$gray1000",
    },
    [`& ${StyledNotes}`]: {
      transition: "color 0.5s",
      color: "$gray1000",
    },
    [`& ${ImageContainer}`]: {
      transition: "opacity 0.5s",
      opacity: 1,
    },
  },
});

const Card = ({ title, notes, src, href, target }) => {
  return (
    <StyledContainer href={href} target={target}>
      <ImageContainer src={src} width="50%" alt={src} />
      <StyledTitle>{title}</StyledTitle>
      <StyledNotes>{notes}</StyledNotes>
    </StyledContainer>
  );
};

export default Card;
