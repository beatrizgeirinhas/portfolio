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
      <Button onClick={work}> ← Back to works</Button>
      <Title>dodoc.</Title>
      <StyledContainer>
        <RowContainer>
          <StyledLeft>
            <Paragraph>
              Instead of simply creating a pattern for the brand, we developed a
              modular system that can represent any message, whether physical or
              digital. The basis for this system is a set of elements with which
              we are able to create materials that are always different from
              each other, mirroring the spirit and objective of dodoc:
              transforming complex and boring processes into a method that is
              easier to use and understand.
            </Paragraph>
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
