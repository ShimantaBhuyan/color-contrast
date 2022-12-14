import React from "react";
import styled from "styled-components";

import { BRAND_COLOR, BRAND_TEXT_COLORS, devices } from "../constants";
import { StyledColSection, StyledText } from "../styles/global";
import { getAALevel, mixpanelTrack } from "../utils";

const ContrastDisplay = ({
  contrastLC,
  wcag2Ratio,
  error,
}: {
  contrastLC: number | null;
  wcag2Ratio: string | null;
  error: boolean;
}) => {
  const contrastLCTooltip =
    contrastLC && contrastLC < 0
      ? "APCA Contrast Value: Negative value means light text on a dark background"
      : "APCA Contrast Value";
  const wcagTooltip = "WCAG 2 contrast ratio";
  return (
    <StyledDisplay>
      <StyledInfoText type="medium" color={BRAND_TEXT_COLORS.BODY}>
        {!error ? getAALevel(contrastLC ?? 0) : "?"}
      </StyledInfoText>
      <StyledColumnWrapper align="center">
        <StyledText type="medium" color={BRAND_TEXT_COLORS.BODY}>
          APCA Contrast L
          <strong>
            <sup>c</sup>
          </strong>
        </StyledText>
        <StyledText
          type="medium"
          color={BRAND_TEXT_COLORS.BODY}
          bold
          data-tooltip={contrastLCTooltip}
          onMouseEnter={() => {
            mixpanelTrack("Viewed", {
              source: "APCA Contrast Lc",
            });
          }}
        >
          {!error ? contrastLC?.toFixed(2) ?? "?" : "?"}
        </StyledText>
      </StyledColumnWrapper>
      <StyledColumnWrapper align="center">
        <StyledText type="medium" color={BRAND_TEXT_COLORS.BODY}>
          Compatibility with WCAG 2
        </StyledText>
        <StyledText
          type="medium"
          color={BRAND_TEXT_COLORS.BODY}
          bold
          data-tooltip={wcagTooltip}
          onMouseEnter={() => {
            mixpanelTrack("Viewed", {
              source: "WCAG2Ratio",
            });
          }}
        >
          {!error ? wcag2Ratio ?? "?" : "?"}
        </StyledText>
      </StyledColumnWrapper>
    </StyledDisplay>
  );
};

const StyledInfoText = styled(StyledText)`
  @media ${devices.mobileL} {
    font-size: 20px;
  }
`;

const StyledColumnWrapper = styled(StyledColSection)`
  background-color: ${BRAND_COLOR};
  border-radius: 5px;
  width: 100%;
  padding: 10px;
`;

const StyledDisplay = styled(StyledColSection)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export default ContrastDisplay;
