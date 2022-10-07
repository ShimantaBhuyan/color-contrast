import React from "react";
import styled from "styled-components";

import { StyledText, BRAND_TEXT_COLORS } from "../styles/global";

import Blob from "./Blob";
import Waves from "./Waves";

const Header = ({ type }: { type: "wave" | "blob" }) => {
  return (
    <StyledBlobWrapper>
      {type === "blob" ? <Blob width={"350px"} /> : <Waves color={"#cbf3f0"} />}
      <StyledTextWrapper type="large" color={BRAND_TEXT_COLORS.BODY}>
        Color Contrast Tool
      </StyledTextWrapper>
    </StyledBlobWrapper>
  );
};

const StyledBlobWrapper = styled.div`
  position: relative;
`;

const StyledTextWrapper = styled(StyledText)`
  position: absolute;
  top: 10px;
  left: 10px;
  text-transform: uppercase;
`;

export default Header;
