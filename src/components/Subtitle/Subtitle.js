import React from "react";
import { StyledText } from "../Text/Text";

const Subtitle = ({ children }) => (
  <StyledText
    as="h2"
    weight={500}
    size={{
      "@initial": "5",
      "@bp2": "6",
    }}
  >
    {children}
  </StyledText>
);

export default Subtitle;
