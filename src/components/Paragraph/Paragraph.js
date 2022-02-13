import React from "react";
import { StyledText } from "../Text/Text";

const Paragraph = ({ children }) => (
  <StyledText
    as="h1"
    weight={400}
    size={{
      "@initial": "1",
      "@bp2": "2",
    }}
  >
    {children}
  </StyledText>
);

export default Paragraph;
