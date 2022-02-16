import React from "react";
import PropTypes from "prop-types";
import { styled } from "../../../stitches.config";
import ArrowRight from "./ArrowRight";

// Version 1.0

const ICON_SIZES = {
  16: ArrowRight,
};

const StyledIcon = styled("span", {
  display: "flex",
});

export const IconFactory = ({ size, icon, opacity, innerRef, color }) => {
  const Iconsize = ICON_SIZES[size];
  const Icon = Iconsize[icon];
  if (icon.indexOf("http") === 0) {
    return (
      <StyledIcon css={{ opacity }} ref={innerRef}>
        <img src={icon} width={size} height={size} alt={icon} />
      </StyledIcon>
    );
  }
  if (Icon) {
    return (
      <StyledIcon css={{ opacity }} size={size} ref={innerRef}>
        <Icon color={color} />
      </StyledIcon>
    );
  }

  console.error("Missing Icon:", icon);
  return null;
};

IconFactory.propTypes = {
  /** Changes the size of the icon */
  size: PropTypes.oneOf([16, 24, 32]).isRequired,
  /** Icon name  */
  icon: PropTypes.string.isRequired,
  /** Changes the opacity of the icon */
  opacity: PropTypes.number,
  /** Handler to be called on click */
  color: PropTypes.string,
  innerRef: PropTypes.node,
};

IconFactory.defaultProps = {
  opacity: 1,
  color: undefined,
  innerRef: undefined,
};

export default IconFactory;
