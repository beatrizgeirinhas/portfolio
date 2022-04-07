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
import CV from "../beatriz-geirinhas-CV.pdf";

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
  paddingTop: "2rem",
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
  fontSize: "12px",
  lineHeight: "18px",
  color: "#7B7B7B",
  padding: "2rem 0",
  "@bp2": { fontSize: "14px", lineHeight: "22px" },
});

const OwnParagraph = styled(Paragraph, {
  paddingTop: "2rem",
});

const ImageContainer = styled("img", {
  width: "100%",
  padding: "2rem 0",
  "@bp1": { width: "400px", padding: "2rem 0" },
  "@bp2": { padding: "0" },
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

const SpecificExperienceContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingTop: "3rem",
  "@bp2": { paddingTop: "4rem" },
});

const ExperienceNote = styled("div", {
  fontFamily: "Roboto Mono, monospace",
  fontWeight: 400,
  fontSize: "11px",
  lineHeight: "18px",
  color: "#7B7B7B",
  "@bp2": { fontSize: "14px", lineHeight: "22px" },
});

const AboutPage = () => {
  return (
    <div>
      <Navbar variant2="disabled" />
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
                  Never though that my love for creativity and passion with
                  perfection would lead me to be a product designer based in
                  Portugal but yup, that’s me 👋🏼👩🏽💻
                </Subtitle>
                <Paragraph>
                  I firmly believe that a product designer should know a bit of
                  coding and if you give be both, I will be the happiest kid in
                  the block 🤸🏽
                  <br />I always try to take on complex problems and come up
                  with intuitive, functional, and simple design solutions that
                  will help create a cohesive experience across the entire
                  user’s journey. The user is always in the center of all my
                  decisions. 🎯
                </Paragraph>
              </StyledContainer>
            </ColumnContainer>
          </FirstContainer>
          <SecondDivider />
          <Note>/02</Note>
          <SecondContainer>
            <ColumnContainer>
              <ExperienceTitle>
                <Subtitle>Experience</Subtitle>
                <Link variant="primary" href={CV} target="_blank">
                  Download CV
                </Link>
              </ExperienceTitle>

              <SpecificExperienceContainer>
                <OwnParagraph>doDOC</OwnParagraph>
                <Experience>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Product Designer
                  </ExperienceNote>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Jan 2022 → Present
                  </ExperienceNote>
                </Experience>
                <Experience>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Communication Designer
                  </ExperienceNote>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Ago 2021 → Jan 2022
                  </ExperienceNote>
                </Experience>
                <Experience>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Frontend Developer
                  </ExperienceNote>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Set 2019 → Dez 2021
                  </ExperienceNote>
                </Experience>
              </SpecificExperienceContainer>

              <SpecificExperienceContainer>
                <OwnParagraph>The Loop co.</OwnParagraph>
                <Experience>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Web & Graphic Designer
                  </ExperienceNote>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Out 2018 → Jul 2019
                  </ExperienceNote>
                </Experience>
              </SpecificExperienceContainer>

              <SpecificExperienceContainer>
                <OwnParagraph>Whitesmith</OwnParagraph>
                <Experience>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Summer Internship
                  </ExperienceNote>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Jul 2018 → Ago 2018
                  </ExperienceNote>
                </Experience>
              </SpecificExperienceContainer>

              <SpecificExperienceContainer>
                <OwnParagraph>jeKnowledge</OwnParagraph>
                <Experience>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Senior Member
                  </ExperienceNote>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Dez 2018 → Abr 2019
                  </ExperienceNote>
                </Experience>
                <Experience>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Junior Member
                  </ExperienceNote>
                  <ExperienceNote
                    css={{
                      padding: "0rem 0rem",
                    }}
                  >
                    Out 2017 → Dez 2018
                  </ExperienceNote>
                </Experience>
              </SpecificExperienceContainer>
            </ColumnContainer>
          </SecondContainer>
          <SecondDivider />
          <Note>Let’s chat 👋🏼 </Note>
          <ThirdContainer>
            <Paragraph> geirinhas.beatriz@gmail.com</Paragraph>
            <Link
              href="https://www.linkedin.com/in/beatriz-geirinhas-21a2a4159/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </ThirdContainer>
        </PageContainer>
      </Layout>
      <Footer />
    </div>
  );
};

export default AboutPage;
