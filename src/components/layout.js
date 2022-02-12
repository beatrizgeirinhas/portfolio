import * as React from "react";
import Navbar from "./navbar";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 0 30px 0 30px;
`;

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Navbar />
      <StyledMain>{children}</StyledMain>
    </div>
  );
};

export default Layout;
