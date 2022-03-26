import * as React from "react";
import Navbar from "../Navbar/Navbar";
import { styled } from "../../../stitches.config";

const StyledMain = styled("main", {
  padding: "0 16px 0 16px",
  "@bp2": { padding: "0 32px 0 32px" },
});

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
