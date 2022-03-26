import React from "react";
import { styled } from "../../../stitches.config";
import { Link } from "../index";

const StyledTitle = styled("div", {
  fontSize: "24px",
  fontWeight: "400",
  color: "$gray1000",
});

const StyledNotes = styled("div", {
  paddingTop: "1rem",
  fontSize: "16px",
  fontWeight: "300",
  color: "$gray1000",
});

const StyledContainer = styled("a", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "@bp2": { flexDirection: "column" },
});

const FirstContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  "@bp2": { flexDirection: "row", justifyContent: "space-evenly" },
});

const ColumnContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  padding: "0",
  "@bp2": { width: "50%", padding: "2rem 4rem" },
});

const Divider = styled("div", {
  border: " 0.5px solid #A7A7A7",
  marginBottom: "0rem",
  "@bp2": { marginBottom: "4rem" },
});

const Note = styled("div", {
  fontFamily: "Roboto Mono, monospace",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "18px",
  color: "#7B7B7B",
  padding: "2rem 0",
  "@bp2": { fontSize: "14px", lineHeight: "22px" },
});

const ImageContainer = styled("img", {
  padding: "2rem 0",
});

const Card = ({ title, notes, src, href, target }) => {
  return (
    <FirstContainer href={href} target={target}>
      <ImageContainer src={src} alt={src} />
      <ColumnContainer>
        <StyledContainer>
          <Divider />
          <StyledTitle>{title}</StyledTitle>
          <StyledNotes>{notes}</StyledNotes>
        </StyledContainer>
        <Link href={href}>View Project →</Link>
      </ColumnContainer>
    </FirstContainer>
  );
};

export default Card;
