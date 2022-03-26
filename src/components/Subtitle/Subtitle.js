import React from "react";
import { StyledText } from "../Text/Text";

const Subtitle = ({ children }) => (
  <StyledText
    as="h1"
    size={{
      "@initial": "3",
      "@bp2": "5",
    }}
  >
    {children}
  </StyledText>
);

export default Subtitle;
