import * as React from "react";
import { navigate } from "gatsby";
import { styled } from "../../../stitches.config";
import {
  Layout,
  Title,
  Paragraph,
  Button,
  NextProject,
  Footer,
  Navbar,
} from "../../components/index";
import Image1 from "../../images/Thesis/1.png";
import Image2 from "../../images/Thesis/2.png";

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
  flexDirection: "row",
  padding: "4rem 0rem",
});

const ValicePage = () => {
  const work = () => {
    navigate("/work");
  };
  const FPlace = () => {
    navigate("/Works/FPlace");
  };
  return (
    <div>
      <Navbar />
      <Layout pageTitle="Graphic Standard System beyond Computer Science">
        <title>Graphic Standard System beyond Computer Science</title>
        <PageContainer>
          <RowContainer>
            <StyledLeft>
              <Button onClick={work}> ← Back to works</Button>
              <Title>Graphic Standard System beyond Computer Science</Title>
              <Paragraph>
                The idea of systems in the graphic design world is not new. With
                the creation of the first graphic identity manuals—in which
                designers compile a set of rules or visual guidelines to ensure
                the best practices of a brand—the concept of design systems has
                increased. <br /> Nowadays, the use of systems in design is,
                above all, focused on the development of digital product
                interfaces, and it was in this framework and context that design
                systems emerged.
                <br /> A design system is a collection of reusable components
                that are guided by styles, patterns, and rules that, when
                assembled, allow teams to develop interfaces, all coherent and
                consistent with each other, offering a systemic design
                methodology. However, this form of methodology is strictly
                focused on interface design, and the research for its usability
                and optimizing it to other areas such as graphic design is still
                very incipient. <br /> The goal of this work was to show how the
                creation of a brand system for a tech company — doDOC — supports
                building a coherent graphic universe, ensuring that the brand
                remains strong and solid, capable of growing and maximizing
                itself without neglecting the values and ideas shared by the
                company.
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
          </ImagesContainer>
        </PageContainer>
      </Layout>
      <NextProject title="FPlace" onClick={FPlace} />
      <Footer />
    </div>
  );
};

export default ValicePage;
