import React from "react";
import { StyledText } from "../Text/Text";

const Title = ({ children }) => (
  <StyledText
    as="h1"
    weight={600}
    size={{
      "@initial": "8",
      "@bp2": "9",
    }}
  >
    {children}
  </StyledText>
);

export default Title;
