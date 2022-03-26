import * as React from "react";
import { styled } from "../../stitches.config";
import { Layout, Link, Card, Footer } from "../components/index";
import Image1 from "../images/1.png";
import Image2 from "../images/2.png";
import Image3 from "../images/3.png";
import Image4 from "../images/4.png";

const PageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
});

const RowContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
});

const WorkPage = () => {
  return (
    <PageContainer>
      <Layout pageTitle="Work">
        <title>Work</title>
        <StyledContainer>
          <RowContainer>
            <Card
              title="dodoc"
              notes="branding, ui/ux"
              src={Image4}
              href="/Works/Dodoc"
              target="_self"
            />
            <Card
              title="Valice"
              notes="branding, ui/ux"
              src={Image1}
              href="/Works/Valice"
              target="_self"
            />
            <Card
              title="Graphic Standard System"
              notes="branding, systems"
              src={Image2}
              href="/Works/Thesis"
              target="_self"
            />
            <Card
              title="FPlace"
              notes="branding, ui/ux"
              src={Image3}
              href="/Works/FPlace"
              target="_self"
            />
          </RowContainer>
        </StyledContainer>
      </Layout>
      <Footer />
    </PageContainer>
  );
};

export default WorkPage;
