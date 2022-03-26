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
  height: "100vh",
});

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

const RowContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
});

const ColumnContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const WorkPage = () => {
  return (
    <PageContainer>
      <Navbar variant1="active" />
      <Layout pageTitle="Work">
        <title>Work</title>
        <StyledContainer>
          <RowContainer>
            <Card
              orientation="vertical"
              title="Graphic Standard System"
              src={Image1}
              href="/Works/Thesis"
              target="_self"
            />
            <ColumnContainer>
              <RowContainer>
                <Card
                  orientation="square"
                  title="Valice"
                  src={Image2}
                  href="/Works/Valice"
                  target="_self"
                />
                <Card
                  orientation="square"
                  title="Dodoc Brand Identity"
                  src={Image4}
                  href="/Works/Dodoc"
                  target="_self"
                />
              </RowContainer>
              <RowContainer>
                <Card
                  orientation="square"
                  title="FPlace"
                  src={Image3}
                  href="/Works/FPlace"
                  target="_self"
                />
              </RowContainer>
            </ColumnContainer>
          </RowContainer>
        </StyledContainer>
      </Layout>
      <Footer />
    </PageContainer>
  );
};

export default WorkPage;
