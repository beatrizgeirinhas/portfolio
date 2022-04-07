import * as React from "react";
import {
  Layout,
  Title,
  Subtitle,
  Link,
  Footer,
  Navbar,
} from "../components/index";
import styled from "styled-components";
import linkedIn from "../images/linkedin.png";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 1rem;
`;

const IndexPage = () => {
  return (
    <StyledContainer>
      <Navbar />
      <Layout pageTitle="Beatriz Geirinhas">
        <title>Beatriz Geirinhas</title>
        <Title>Hey! Thanks for stopping by 👋🏼</Title>
        <Subtitle>
          I'm Beatriz, a designer with a love affair for frontend development
          based in Portugal.
        </Subtitle>
        <RowContainer>
          <LinkContainer>
            <Link
              href="https://www.linkedin.com/in/beatriz-geirinhas-21a2a4159/"
              target="_blank"
              padding="2.5rem 0 0 0"
            >
              LinkedIn
            </Link>
          </LinkContainer>
          <LinkContainer>
            <Link
              href="https://www.linkedin.com/in/beatriz-geirinhas-21a2a4159/"
              target="_blank"
              padding="2.5rem 0 0 0"
            >
              Github
            </Link>
          </LinkContainer>
          <LinkContainer>
            <Link
              href="https://www.linkedin.com/in/beatriz-geirinhas-21a2a4159/"
              target="_blank"
              padding="2.5rem 0 0 0"
            >
              Behance
            </Link>
          </LinkContainer>
        </RowContainer>
      </Layout>
      <Footer />
    </StyledContainer>
  );
};

export default IndexPage;
