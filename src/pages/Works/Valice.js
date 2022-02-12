import * as React from "react";
import styled from "styled-components";
import { Layout, Title, Subtitle } from "../../components/index";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const StyledRight = styled.div`
  font-size: 14px;
`;

const ValicePage = () => {
  return (
    <Layout pageTitle="Valice">
      <title>Valice</title>
      <Title>Valice</Title>
      <StyledContainer>
        <StyledLeft>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Subtitle>
        </StyledLeft>
        <StyledRight>
          <p>February 2022</p>
          <p>
            <b>Techonologies:</b> React, Bla, bla
          </p>
        </StyledRight>
      </StyledContainer>
    </Layout>
  );
};

export default ValicePage;
