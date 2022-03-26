import * as React from "react";
import { styled } from "../../stitches.config";
import {
  Layout,
  Title,
  Subtitle,
  Link,
  Paragraph,
  Footer,
  Navbar,
} from "../components/index";
import Yo from "../images/eu.png";

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "0 0",
  "@bp2": { padding: "0 5rem" },
});

const RowContainer1 = styled("div", {
  display: "flex",
  flexDirection: "column-reverse",
  "@bp2": { flexDirection: "row" },
});

const RowContainer2 = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@bp2": { flexDirection: "row" },
});

const ColumnContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
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

const SecondDivider = styled("div", {
  border: " 0.5px solid #A7A7A7",
  marginTop: "6rem",
});

const Note = styled("div", {
  fontFamily: "Roboto Mono, monospace",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "22px",
  color: "#7B7B7B",
  padding: "2rem 0",
});

const ImageContainer = styled("img", {
  width: "100%",
  padding: "2rem 0",
  "@bp1": { width: "400px", padding: "0" },
});

const AboutPage = () => {
  return (
    <div>
      <Navbar variant2="active" />
      <Layout pageTitle="About Me">
        <title>About Me</title>
        <PageContainer>
          <RowContainer1>
            <ColumnContainer>
              <ImageContainer src={Yo} alt="Yo" />
            </ColumnContainer>
            <ColumnContainer>
              <StyledContainer>
                <Divider />
                <Note>/01</Note>
                <Subtitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Subtitle>
              </StyledContainer>
            </ColumnContainer>
          </RowContainer1>
          <SecondDivider />
          <Note>/02</Note>
          <RowContainer2>
            <ColumnContainer>
              <Subtitle>Experience</Subtitle>
              <Paragraph>To-do</Paragraph>
            </ColumnContainer>
          </RowContainer2>
          <SecondDivider />
          <Note>Let’s chat 👋🏼 </Note>
          <RowContainer2>
            <Paragraph> geirinhas.beatriz@gmail.com</Paragraph>
          </RowContainer2>
        </PageContainer>
      </Layout>
      <Footer />
    </div>
  );
};

export default AboutPage;
