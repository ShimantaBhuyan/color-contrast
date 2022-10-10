import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { StyledColSection, StyledText } from "../styles/global";
import Blob from "./Blob";
import ContrastDisplay from "./ContrastDisplay";
import SwapIcon from "url:../assets/swap.svg";
import { BRAND_TEXT_COLORS, devices } from "../constants";
import { getContrast, parseColor } from "../utils";

const ContrastChecker = () => {
  const [textColor, setTextColor] = useState("#FEF3C7");
  const [tColorError, setTColorError] = useState(false);
  const [bgColor, setBgColor] = useState("#059669");
  const [bgColorError, setBgColorError] = useState(false);
  const [contrastRatio, setContrastRatio] = useState<number | null>(null);
  const [wcag2Ratio, setWcag2Ratio] = useState<string | null>(null);

  useEffect(() => {
    updateRatio(textColor, bgColor);
  }, [textColor, bgColor]);

  const updateRatio = (textColor: string, bgColor: string) => {
    const { contrastLC, wcag2Ratio } = getContrast(textColor, bgColor);
    setContrastRatio(contrastLC);
    setWcag2Ratio(wcag2Ratio);
  };

  const handleTextColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value.toUpperCase();
    setTextColor(color);

    if (parseColor(color)[4] === false) {
      setTColorError(true);
    } else {
      setTColorError(false);
    }
  };

  const handleBgColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value.toUpperCase();
    setBgColor(color);

    if (parseColor(color)[4] === false) {
      setBgColorError(true);
    } else {
      setBgColorError(false);
    }
  };

  const swapColors = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const tempColor = textColor;
    setTextColor(bgColor);
    setBgColor(tempColor);
  };

  const handleColorPickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value.toUpperCase();
    if (color) {
      if (event.target.id === "TextColorPicker") {
        setTextColor(color);
      } else if (event.target.id === "BGColorPicker") {
        setBgColor(color);
      }
    }
  };

  return (
    <Wrapper align="center">
      <StyledForm>
        <StyledColSection align="start">
          <StyledText type="small" color={BRAND_TEXT_COLORS.BODY}>
            Text Color
          </StyledText>
          {!tColorError ? (
            <>
              <Blob fill={textColor} width={48} height={48} style={{ cursor: "pointer" }} />
              <StyledColorPickerIcon color={textColor}>
                <input type="color" id="TextColorPicker" onInput={handleColorPickerChange} value={textColor} />
              </StyledColorPickerIcon>
            </>
          ) : (
            <InvalidColorText>Invalid Color!</InvalidColorText>
          )}
          <StyledInputs
            type="text"
            name="textColor"
            value={textColor}
            onChange={handleTextColorChange}
            placeholder="Enter text color"
          />
        </StyledColSection>

        <SwapButton onClick={swapColors} type="button">
          <img src={SwapIcon} alt="Swap icon" width={24} height={24} style={{ cursor: "pointer" }} />
        </SwapButton>

        <StyledColSection align="end">
          <StyledText type="small" color={BRAND_TEXT_COLORS.BODY}>
            Background Color
          </StyledText>
          {!bgColorError ? (
            <>
              <Blob fill={bgColor} width={48} height={48} style={{ cursor: "pointer" }} />
              <StyledColorPickerIcon color={bgColor}>
                <input type="color" id="BGColorPicker" onInput={handleColorPickerChange} value={bgColor} />
              </StyledColorPickerIcon>
            </>
          ) : (
            <InvalidColorText>Invalid Color!</InvalidColorText>
          )}
          <StyledInputs
            type="text"
            name="bgColor"
            value={bgColor}
            onChange={handleBgColorChange}
            placeholder="Enter background color"
          />
        </StyledColSection>
      </StyledForm>

      <ContrastDisplay contrastLC={contrastRatio} wcag2Ratio={wcag2Ratio} error={tColorError || bgColorError} />

      <StyledTextDisplay textColor={textColor} bgColor={bgColor}>
        The quick brown fox jumped over the lazy dog
      </StyledTextDisplay>
    </Wrapper>
  );
};

const Wrapper = styled(StyledColSection)`
  z-index: 1;
  margin-top: -10%;

  @media ${devices.mobileL} {
    margin-top: 10%;
  }
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  grid-gap: 20px;
  gap: 20px;

  @media ${devices.mobileL} {
    flex-direction: column;
    align-items: center;
    grid-gap: 10px;
    gap: 10px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const StyledInputs = styled.input`
  padding: 5px;
  border: 3px solid #cbf3f0;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 3px solid green;
  }

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

const StyledColorPickerIcon = styled.div<{ color: string }>`
  position: absolute;
  width: 48px;
  height: 48px;
  opacity: 0.01;
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  margin-top: -10px;
`;

const StyledTextDisplay = styled.div<{ textColor: string; bgColor: string }>`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  width: 300px;
  height: 200px;
  border: 2px solid #000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;

  @media ${devices.mobileL} {
    width: 90%;
    height: 200px;
  }
`;

const SwapButton = styled.button`
  background: transparent;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;

  @media ${devices.mobileL} {
    transform: rotateZ(90deg);
  }
`;

const InvalidColorText = styled.p`
  color: red;
  height: 48px;
  display: flex;
  align-items: center;
`;

export default ContrastChecker;
