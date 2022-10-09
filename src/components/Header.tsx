import React from "react";
import styled from "styled-components";

import { BRAND_TEXT_COLORS, devices } from "../constants";
import { StyledText } from "../styles/global";

import Blob from "./Blob";
import Waves from "./Waves";

const Header = ({ type }: { type: "wave" | "blob" }) => {
  return (
    <StyledHeaderWrapper>
      {type === "blob" ? <Blob width={"350px"} /> : <Waves color={"#cbf3f0"} />}
      <StyledHeaderText type="large" color={BRAND_TEXT_COLORS.BODY}>
        Color Contrast Tool
      </StyledHeaderText>
      <StyledSubHeaderText type="small" color={BRAND_TEXT_COLORS.BODY}>
        Calculated using the new WCAG 3 - APCA algorithm currently being developed.
      </StyledSubHeaderText>
    </StyledHeaderWrapper>
  );
};

const StyledHeaderWrapper = styled.div`
  position: relative;
`;

const StyledHeaderText = styled(StyledText)`
  position: absolute;
  top: 10px;
  left: 10px;
  text-transform: uppercase;

  @media ${devices.mobileL} {
    font-size: 22px;
  }
`;

const StyledSubHeaderText = styled(StyledText)`
  position: absolute;
  top: 60px;
  left: 10px;
  width: 25%;
  word-wrap: normal;
  text-transform: uppercase;

  @media ${devices.mobileL} {
    top: 40px;
    width: 100%;
    font-size: 12px;
  }
`;

export default Header;
