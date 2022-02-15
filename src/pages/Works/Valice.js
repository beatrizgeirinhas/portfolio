import * as React from "react";
import { navigate } from "gatsby";
import { styled } from "../../../stitches.config";
import { Layout, Title, Paragraph, Button } from "../../components/index";
import Image1 from "../../images/Valice/1.png";
import Image2 from "../../images/Valice/2.png";
import Image3 from "../../images/Valice/3.png";
import Image4 from "../../images/Valice/4.png";
import Image5 from "../../images/Valice/5.png";
import Image6 from "../../images/Valice/6.png";

const PageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "5rem 0rem",
});

const RowContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@bp2": { flexDirection: "row" },
});

const ColumnContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const StyledLeft = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  paddingRight: "6rem",
  "@bp2": { width: "50%" },
});

const StyledRight = styled("div", {
  fontSize: "14px",
  paddingTop: "3rem",
});

const ImagesContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "4rem 0rem",
});

const ValicePage = () => {
  const work = () => {
    navigate("/work");
  };
  return (
    <Layout pageTitle="Valice">
      <title>Valice</title>
      <PageContainer>
        <Button onClick={work}>Go Back</Button>
        <Title>Valice</Title>
        <RowContainer>
          <StyledLeft>
            <Paragraph>
              This work was done within the scope of the service design class.
              The goal was to create a service about the topic make fashion
              circular again.
              <br />
              <br /> The service is based on two channels - one digital, which
              is the application that allows users to enter in contact with the
              stylist, choose the clothes he want to buy and schedule a trip to
              the studio. And a second part, this one already physical, which
              it's the studio.
            </Paragraph>
          </StyledLeft>
          <StyledRight>
            <Paragraph>
              <b>Branding, Service Design, UI/UX</b>
            </Paragraph>
            <Paragraph>June 2020</Paragraph>
            <Paragraph>
              <b>Platforms:</b> Figma, Adobe Illustrator
            </Paragraph>
          </StyledRight>
        </RowContainer>
        <ImagesContainer>
          <img src={Image1} width="50%" alt="Image1" />
          <img src={Image2} width="50%" alt="Image2" />
          <img src={Image3} width="90%" alt="Image3" />
          <RowContainer>
            <img src={Image4} width="40%" alt="Image4" />
            <img src={Image5} width="40%" alt="Image5" />
          </RowContainer>
          <img src={Image6} width="50%" alt="Image6" />
        </ImagesContainer>
      </PageContainer>
    </Layout>
  );
};

export default ValicePage;
