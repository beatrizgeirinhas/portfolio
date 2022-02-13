import * as React from "react";
import { navigate } from "gatsby";
import { styled } from "../../../stitches.config";
import { Layout, Title, Paragraph, Button } from "../../components/index";

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
});

const StyledLeft = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "38%",
  marginRight: "3rem",
});

const StyledRight = styled("div", {
  fontSize: "14px",
});

const DodocPage = () => {
  const home = () => {
    navigate("/");
  };
  return (
    <Layout pageTitle="dodoc">
      <title>dodoc.</title>
      <Button onClick={home}>Go Back</Button>
      <Title>dodoc.</Title>
      <StyledContainer>
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
      </StyledContainer>
    </Layout>
  );
};

export default DodocPage;
