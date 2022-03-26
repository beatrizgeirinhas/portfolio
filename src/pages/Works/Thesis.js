import * as React from "react";
import { navigate } from "gatsby";
import { styled } from "../../../stitches.config";
import {
  Layout,
  Title,
  Subtitle,
  Paragraph,
  Button,
  NextProject,
  Footer,
  Navbar,
} from "../../components/index";
import Image1 from "../../images/Thesis/1.png";
import Image2 from "../../images/Thesis/2.png";
import Image3 from "../../images/Thesis/3.png";
import Image4 from "../../images/Thesis/4.png";
import Image5 from "../../images/Thesis/5.png";
import Image6 from "../../images/Thesis/6.png";

const StyledLeft = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  paddingRight: "6rem",
  "@bp2": { width: "50%" },
});

const RowContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
});

const ImageContainer = styled("img", {
  width: "100%",
  paddingTop: "2rem",
  "@bp2": { width: "50%", paddingTop: "0" },
});
const StyledRight = styled("div", {
  fontSize: "14px",
  paddingTop: "3rem",
});

const ImagesContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@bp2": { flexDirection: "row" },
});

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingLeft: "2rem",
});

const FirstContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingTop: "2rem",
  "@bp2": { flexDirection: "row" },
});

const SecondContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@bp2": { flexDirection: "row" },
});

const ThirdContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingTop: "2rem",
});

const ColumnContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const PageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "6rem 1rem",
  "@bp2": { padding: "4rem 12rem" },
});

const Divider = styled("div", {
  border: " 0.5px solid #A7A7A7",
});

const Note = styled("div", {
  fontFamily: "Roboto Mono, monospace",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "18px",
  color: "#7B7B7B",
  "@bp2": { fontSize: "14px", lineHeight: "22px" },
});

const ValicePage = () => {
  const work = () => {
    navigate("/work");
  };
  const Valice = () => {
    navigate("/Works/Valice");
  };
  return (
    <div>
      <Navbar />
      <Layout pageTitle="Graphic Standard System beyond Computer Science">
        <title>Graphic Standard System beyond Computer Science</title>
        <PageContainer>
          <Button onClick={work}> ← Back to works</Button>
          <FirstContainer>
            <ColumnContainer>
              <img width="100%" src={Image2} alt="Yo" />
            </ColumnContainer>
            <ColumnContainer>
              <StyledContainer>
                <Divider />
                <br />
                <Note>/Intro</Note>
                <br />
                <br />
                <Subtitle>
                  <b>Graphic Standard System beyond Computer Science</b>
                </Subtitle>
                <Paragraph>
                  The idea of systems in the graphic design world is not new.
                  With the creation of the first graphic identity manuals—in
                  which designers compile a set of rules or visual guidelines to
                  ensure the best practices of a brand—the concept of design
                  systems has increased. <br /> Nowadays, the use of systems in
                  design is, above all, focused on the development of digital
                  product interfaces, and it was in this framework and context
                  that design systems emerged.
                  <br /> <br />
                  The goal of this work was to show how the creation of a brand
                  system for a tech company — doDOC — supports building a
                  coherent graphic universe, ensuring that the brand remains
                  strong and solid, capable of growing and maximizing itself
                  without neglecting the values and ideas shared by the company.
                </Paragraph>
                <StyledRight>
                  <Note>Branding, Service Design, UI/UX</Note>
                  <Note>June 2020</Note>
                  <Note>Platforms — Figma, Adobe Illustrator</Note>
                </StyledRight>
              </StyledContainer>
            </ColumnContainer>
          </FirstContainer>
          <br />
          <br />
          <SecondContainer>
            <ColumnContainer>
              <br />
              <Divider />
              <br />
              <Note>/Branding</Note>
              <br />
              <br />
            </ColumnContainer>
          </SecondContainer>
          <ImagesContainer>
            <ImageContainer src={Image3} alt="Yo" />
            <ImageContainer src={Image4} alt="Yo" />
          </ImagesContainer>
          <ImagesContainer>
            <ImageContainer src={Image6} alt="Yo" />
          </ImagesContainer>
        </PageContainer>
      </Layout>
      <NextProject title="Valice" onClick={Valice} />
      <Footer />
    </div>
  );
};

export default ValicePage;
