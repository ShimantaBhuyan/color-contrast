import React, { useState } from "react";
// import { APCAcontrast, sRGBtoY, displayP3toY, colorParsley } from "bridge-pca";

import styled from "styled-components";
import { BRAND_TEXT_COLORS, StyledColSection, StyledText } from "../styles/global";
import SwapIcon from "url:../assets/swap.svg";

const ContrastChecker = () => {
  const [textColor, setTextColor] = useState("#FEF3C7");
  const [bgColor, setBgColor] = useState("#059669");

  const handleTextColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(event.target.value.toUpperCase());
  };

  const handleBgColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(event.target.value.toUpperCase());
  };

  const swapColors = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const tempColor = textColor;
    setTextColor(bgColor);
    setBgColor(tempColor);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event.target, { textColor, bgColor });
  };

  return (
    <Wrapper align="center">
      <StyledForm onSubmit={handleSubmit}>
        <StyledColSection>
          <StyledText type="small" color={BRAND_TEXT_COLORS.BODY}>
            Text Color
          </StyledText>
          <StyledColorPickerIcon color={textColor} />
          <StyledInputs type="text" name="textColor" value={textColor} onChange={handleTextColorChange} />
        </StyledColSection>

        <SwapButton onClick={swapColors} type="button">
          <img src={SwapIcon} alt="Swap icon" />
        </SwapButton>

        <StyledColSection align="end">
          <StyledText type="small" color={BRAND_TEXT_COLORS.BODY}>
            Background Color
          </StyledText>
          <StyledColorPickerIcon color={bgColor} />
          <StyledInputs type="text" name="bgColor" value={bgColor} onChange={handleBgColorChange} />
        </StyledColSection>
      </StyledForm>

      <StyledTextDisplay textColor={textColor} bgColor={bgColor}>
        The quick brown fox jumped over the lazy dog
      </StyledTextDisplay>
    </Wrapper>
  );
};

const Wrapper = styled(StyledColSection)``;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  grid-gap: 20px;
  gap: 20px;
`;

const StyledInputs = styled.input`
  padding: 5px;
  border: 3px solid #cbf3f0;
  border-radius: 5px;
`;

const StyledColorPickerIcon = styled.div<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${props => props.color};
`;

const StyledTextDisplay = styled.div<{ textColor: string; bgColor: string }>`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  width: 300px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
`;

const SwapButton = styled.button`
  background: transparent;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
`;

export default ContrastChecker;
