import * as React from "react";
import { navigate } from "gatsby";
import { styled } from "../../../stitches.config";
import { Layout, Title, Paragraph, Button } from "../../components/index";

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const RowContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@bp2": { flexDirection: "row" },
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

const DodocPage = () => {
  const work = () => {
    navigate("/work");
  };
  return (
    <Layout pageTitle="dodoc">
      <title>dodoc.</title>
      <Button onClick={work}>Go Back</Button>
      <Title>dodoc.</Title>
      <StyledContainer>
        <RowContainer>
          <StyledLeft>
            <Paragraph></Paragraph>
          </StyledLeft>
          <StyledRight>
            <Paragraph>February 2022</Paragraph>
            <Paragraph>
              <b>Platforms:</b> Figma, Adobe Illustrator, Adobe Photoshop
            </Paragraph>
            <Paragraph>
              <b>Tecnologies:</b> ReactJS
            </Paragraph>
          </StyledRight>
        </RowContainer>
      </StyledContainer>
    </Layout>
  );
};

export default DodocPage;
