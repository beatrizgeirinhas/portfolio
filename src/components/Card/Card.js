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
  opacity: 1,
  variants: {
    orientation: {
      vertical: {
        width: "248px",
        heiht: "634px",
      },
      square: {
        width: "248px",
        heiht: "248px",
      },
    },
  },
  defaultVariants: {
    orientation: "square",
  },
});

const StyledContainer = styled("a", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textDecoration: "none",
  padding: "2rem 2rem",
  "&:hover": {
    [`& ${StyledTitle}`]: {
      transition: "color 0.75s",
      color: "$gray1000",
    },
    [`& ${StyledNotes}`]: {
      transition: "color 0.75s",
      color: "$gray1000",
    },
    [`& ${ImageContainer}`]: {
      transition: "filter 0.75s",
      filter: "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1))",
    },
  },
});

const Card = ({ title, notes, src, href, target, orientation }) => {
  return (
    <StyledContainer href={href} target={target} orientation={orientation}>
      <ImageContainer src={src} alt={src} />
      <StyledNotes>{notes}</StyledNotes>
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  );
};

export default Card;
