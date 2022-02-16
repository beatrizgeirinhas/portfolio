import * as React from "react";
import { styled } from "../../stitches.config";
import { Layout, Link, Card, Footer } from "../components/index";
import Image1 from "../images/Thesis/1.png";
import Image2 from "../images/Thesis/2.png";

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const RowContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
});

const WorkPage = () => {
  return (
    <Layout pageTitle="Work">
      <title>Work</title>
      <h1>Work</h1>
      <StyledContainer>
        <RowContainer>
          <Card
            title="dodoc"
            notes="branding, ui/ux"
            src={Image2}
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
            title="Graphic Standard System beyond Computer Science"
            notes="branding, systems"
            src={Image1}
            href="/Works/Thesis"
            target="_self"
          />
          <Card
            title="FPlace"
            notes="branding, ui/ux"
            src={Image1}
            href="/Works/FPlace"
            target="_self"
          />
        </RowContainer>
      </StyledContainer>
      <Footer />
    </Layout>
  );
};

export default WorkPage;
