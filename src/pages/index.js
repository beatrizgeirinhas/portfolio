import * as React from "react";
import Layout from "../components/layout";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import { styled } from "../../stitches.config";

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  height: "80vh",
});

const IndexPage = () => {
  return (
    <Layout pageTitle="Beatriz Geirinhas">
      <title>Beatriz Geirinhas</title>
      <StyledContainer>
        <Title>Hey! Thanks for stopping by 👋🏼</Title>
        <Subtitle>
          I am Beatriz, a designer with a love affair for frontend development
          based in Portugal.
        </Subtitle>
      </StyledContainer>
    </Layout>
  );
};

export default IndexPage;
