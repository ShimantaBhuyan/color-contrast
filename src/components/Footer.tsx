import React from "react";
import styled from "styled-components";
import { BRAND_TEXT_COLORS } from "../constants";
import { StyledRowSection, StyledText } from "../styles/global";

const Footer = () => {
  return (
    <StyledRowSection style={{ marginTop: 50 }}>
      <StyledText type="medium" color={BRAND_TEXT_COLORS.LARGE}>
        Made with &#9749; by <a href="https://github.com/ShimantaBhuyan">Shimanta</a>
      </StyledText>
    </StyledRowSection>
  );
};

export default Footer;
