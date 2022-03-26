import React from "react";
import { StyledText } from "../Text/Text";

const Paragraph = ({ children, css }) => (
  <StyledText
    as="h1"
    weight={400}
    size={{
      "@initial": "2",
      "@bp2": "3",
    }}
  >
    {children}
  </StyledText>
);

export default Paragraph;
