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

const FirstContainer = styled("div", {
  display: "flex",
  flexDirection: "column-reverse",
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

const OwnParagraph = styled(Paragraph, {
  paddingTop: "2rem",
});

const ImageContainer = styled("img", {
  width: "100%",
  padding: "2rem 0",
  "@bp1": { width: "400px", padding: "0" },
});

const ExperienceTitle = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: "3rem",
  paddingtOP: "1rem",
});

const Experience = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "80vw",
});

const AboutPage = () => {
  return (
    <div>
      <Navbar variant2="active" />
      <Layout pageTitle="About Me">
        <title>About Me</title>
        <PageContainer>
          <FirstContainer>
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
          </FirstContainer>
          <SecondDivider />
          <Note>/02</Note>
          <SecondContainer>
            <ColumnContainer>
              <ExperienceTitle>
                <Subtitle>Experience</Subtitle>
                <Link>Download CV</Link>
              </ExperienceTitle>

              <ColumnContainer>
                <OwnParagraph>doDOC</OwnParagraph>
                <Experience>
                  <Note
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Product Designer
                  </Note>
                  <Note
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Jan 2022 → Present
                  </Note>
                </Experience>
                <Experience>
                  <Note
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Communication Designer
                  </Note>
                  <Note
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Ago 2021 → Jan 2022
                  </Note>
                </Experience>
                <Experience>
                  <Note
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Frontend Developer
                  </Note>
                  <Note
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Set 2019 → Dez 2021
                  </Note>
                </Experience>
                <Divider
                  css={{
                    margin: "0.5rem 0rem 2rem 0rem ",
                    borderColor: "hsl(0 0% 93.7%)",
                  }}
                />
              </ColumnContainer>

              <ColumnContainer>
                <OwnParagraph>The Loop co.</OwnParagraph>
                <Experience>
                  <Note
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Web & Graphic Designer
                  </Note>
                  <Note
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Out 2018 → Jul 2019
                  </Note>
                </Experience>
                <Divider
                  css={{
                    margin: "0.5rem 0rem 2rem 0rem ",
                    borderColor: "hsl(0 0% 93.7%)",
                  }}
                />
              </ColumnContainer>

              <ColumnContainer>
                <OwnParagraph>Whitesmith</OwnParagraph>
                <Experience>
                  <Note
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Summer Internship
                  </Note>
                  <Note
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Jul 2018 → Ago 2018
                  </Note>
                </Experience>
                <Divider
                  css={{
                    margin: "0.5rem 0rem 2rem 0rem ",
                    borderColor: "hsl(0 0% 93.7%)",
                  }}
                />
              </ColumnContainer>
            </ColumnContainer>
          </SecondContainer>
          <SecondDivider />
          <Note>Let’s chat 👋🏼 </Note>
          <ThirdContainer>
            <Paragraph> geirinhas.beatriz@gmail.com</Paragraph>
          </ThirdContainer>
        </PageContainer>
      </Layout>
      <Footer />
    </div>
  );
};

export default AboutPage;
