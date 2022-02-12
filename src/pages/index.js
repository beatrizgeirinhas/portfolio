import * as React from "react";
import { Layout, Title, Subtitle } from "../components/index";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 80vh;
`;

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
