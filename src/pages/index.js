import * as React from "react";
import { Layout, Title, Subtitle, Link } from "../components/index";
import styled from "styled-components";
import linkedIn from "../images/linkedin.png";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 80vh;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const IndexPage = () => {
  return (
    <Layout pageTitle="Beatriz Geirinhas">
      <title>Beatriz Geirinhas</title>
      <StyledContainer>
        <Title>Hey! Thanks for stopping by 👋🏼</Title>
        <Subtitle>
          I'm Beatriz, a designer with a love affair for frontend development
          based in Portugal.
        </Subtitle>
        <RowContainer>
          <Link
            href="https://www.linkedin.com/in/beatriz-geirinhas-21a2a4159/"
            target="_blank"
            padding="2.5rem 0 0 0"
          >
            LinkedIn /
          </Link>
          <Link
            href="https://www.linkedin.com/in/beatriz-geirinhas-21a2a4159/"
            target="_blank"
            padding="2.5rem 0 0 0"
          >
            Github /
          </Link>
          <Link
            href="https://www.linkedin.com/in/beatriz-geirinhas-21a2a4159/"
            target="_blank"
            padding="2.5rem 0 0 0"
          >
            Behance
          </Link>
        </RowContainer>
      </StyledContainer>
    </Layout>
  );
};

export default IndexPage;
