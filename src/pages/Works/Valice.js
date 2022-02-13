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

const ValicePage = () => {
  const home = () => {
    navigate("/");
  };
  return (
    <Layout pageTitle="Valice">
      <title>Valice</title>
      <Button onClick={home}>Go Back</Button>
      <Title>Valice</Title>
      <StyledContainer>
        <StyledLeft>
          <Paragraph>
            This work was done within the scope of the service design class. The
            goal was to create a service about the topic make fashion circular
            again.
            <br />
            <br /> The service is based on two channels - one digital, which is
            the application that allows users to enter in contact with the
            stylist, choose the clothes he want to buy and schedule a trip to
            the studio. And a second part, this one already physical, which it's
            the studio.
          </Paragraph>
        </StyledLeft>
        <StyledRight>
          <Paragraph>June 2020</Paragraph>
          <Paragraph>
            <b>Platforms:</b> Figma, Adobe Illustrator
          </Paragraph>
        </StyledRight>
      </StyledContainer>
    </Layout>
  );
};

export default ValicePage;
