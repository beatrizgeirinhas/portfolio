import React from "react";
import { styled } from "../../../stitches.config";

const StyledTitle = styled("div", {
  fontSize: "20px",
  fontWeight: "400",
  color: "$gray900",
});

const StyledNotes = styled("div", {
  paddingTop: "1rem",
  fontSize: "16px",
  fontWeight: "300",
  color: "$gray800",
});

const ImageContainer = styled("img", {
  display: "flex",
  flexDirection: "column",
  width: "248px",
  opacity: 0.85,
});

const StyledContainer = styled("a", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textDecoration: "none",
  padding: "2rem 2rem",
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
      <ImageContainer src={src} alt={src} />
      <StyledNotes>{notes}</StyledNotes>
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  );
};

export default Card;
