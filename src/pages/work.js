import * as React from "react";
import { styled } from "../../stitches.config";
import { Layout, Card, Footer, Navbar } from "../components/index";
import Image1 from "../images/1.png";
import Image2 from "../images/2.png";
import Image3 from "../images/3.png";
import Image4 from "../images/4.png";

const PageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100vh",
});

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  flexWrap: "wrap",
  "@bp2": { flexDirection: "row" },
});

const WorkPage = () => {
  return (
    <PageContainer>
      <Navbar variant1="disabled" />
      <Layout pageTitle="Work">
        <title>Work</title>
        <StyledContainer>
          <Card
            title="Graphic Standard System"
            src={Image1}
            href="/Works/Thesis"
            target="_self"
            notes="branding, graphic design, systems"
          />
          <Card
            title="Valice"
            src={Image2}
            href="/Works/Valice"
            target="_self"
            notes="product design, interaction design, brading"
          />
          <Card
            title="Dodoc Brand Identity"
            src={Image4}
            href="/Works/Dodoc"
            target="_self"
            notes="branding, graphic design, systems"
          />
          <Card
            title="FPlace"
            src={Image3}
            href="/Works/FPlace"
            target="_self"
            notes="code, product design, systems"
          />
        </StyledContainer>
      </Layout>
      <Footer />
    </PageContainer>
  );
};

export default WorkPage;
