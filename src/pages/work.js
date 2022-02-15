import * as React from "react";
import { styled } from "../../stitches.config";
import { Layout, Link } from "../components/index";

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const WorkPage = () => {
  return (
    <Layout pageTitle="Work">
      <title>Work</title>
      <h1>Work</h1>
      <StyledContainer>
        <Link href="/Works/Dodoc" target="_self">
          dodoc
        </Link>
        <Link href="/Works/Valice" target="_self">
          Valice
        </Link>
        <Link href="/Works/Thesis" target="_self">
          Graphic Standard System beyond Computer Science
        </Link>
        <Link href="/Works/FPlace" target="_self">
          FPlace
        </Link>
      </StyledContainer>
    </Layout>
  );
};

export default WorkPage;
