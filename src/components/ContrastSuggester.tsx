import React, { useState, memo, RefObject } from "react";
import styled from "styled-components";

import { PillButton, StyledColSection, StyledRowSection, StyledText } from "../styles/global";
import { BRAND_COLOR, BRAND_TEXT_COLORS, devices } from "../constants";
import { suggestContrastColor } from "../utils";

type PROPS = {
  innerRef: RefObject<HTMLDivElement>;
  textColor: string;
  bgColor: string;
  setTxtColor: (color: string) => void;
  setBackColor: (color: string) => void;
};

const ContrastSuggester = ({ innerRef, textColor, bgColor, setTxtColor, setBackColor }: PROPS) => {
  const [isTextColor, setIsTextColor] = useState<boolean | null>(null);
  const [suggestedColor, setSuggestedColor] = useState<string | null>(null);

  const suggestColor = (color: string, isTextColor: boolean, targetContrast: number) => {
    if (isTextColor != null) {
      setSuggestedColor(suggestContrastColor(color, isTextColor, targetContrast));
    }
  };

  return (
    <StyledSuggestContainer ref={innerRef}>
      <StyledText type="small" color={BRAND_TEXT_COLORS.BODY} style={{ textAlign: "center" }}>
        Get suggestions for
      </StyledText>
      <StyledRowSection noCol>
        <PillButton
          onClick={() => {
            setIsTextColor(true);
            suggestColor(bgColor, false, 90);
          }}
        >
          Text
        </PillButton>
        <PillButton
          onClick={() => {
            setIsTextColor(false);
            suggestColor(textColor, true, 90);
          }}
        >
          Background
        </PillButton>
      </StyledRowSection>
      {suggestedColor != undefined && (
        <StyledRowSection>
          <PillButton
            onClick={() => {
              console.log(isTextColor, suggestedColor);
              isTextColor ? setTxtColor(suggestedColor) : setBackColor(suggestedColor);
            }}
            color={isTextColor ? suggestedColor : textColor}
            fillColor={isTextColor ? bgColor : suggestedColor}
          >
            Apply
          </PillButton>
        </StyledRowSection>
      )}
    </StyledSuggestContainer>
  );
};

const StyledSuggestContainer = styled(StyledColSection)`
  padding: 20px 30px;
  border: 3px solid ${BRAND_COLOR};
  border-radius: 8px;
  grid-gap: 15px;
  gap: 15px;
  width: 100%;

  @media ${devices.mobileL} {
    width: 90%;
  }
`;

export default memo(ContrastSuggester);
