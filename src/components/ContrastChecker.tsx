import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { StyledColSection, StyledRowSection, StyledText } from "../styles/global";
import Blob from "./Blob";
import ContrastDisplay from "./ContrastDisplay";
import SwapIcon from "url:../assets/swap.svg";
import QuestionIcon from "url:../assets/question-mark.svg";
import SuggestionIcon from "url:../assets/suggestion.svg";
import { BRAND_COLOR, BRAND_TEXT_COLORS, devices } from "../constants";
import { getContrast, getFromQueryParams, getHexColor, parseColor, mixpanelTrack } from "../utils";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import ContrastSuggester from "./ContrastSuggester";

const ContrastChecker = () => {
  const firstUrlParams = new URLSearchParams(window.location.search);
  const suggesterRef = useRef(null);
  const colorFormatContainerRef = useRef(null);

  const getFirstUrlParamsColor = (key: string) => {
    let param = firstUrlParams.get(key);
    if (!param) return null;
    return "#" + param;
  };

  const [textColor, setTextColor] = useState(() => getFirstUrlParamsColor("txtColor") || "#FEF3C7");
  const [tColorError, setTColorError] = useState(false);
  const [bgColor, setBgColor] = useState(() => getFirstUrlParamsColor("bgColor") || "#059669");
  const [bgColorError, setBgColorError] = useState(false);
  const [contrastRatio, setContrastRatio] = useState<number | null>(null);
  const [wcag2Ratio, setWcag2Ratio] = useState<string | null>(null);
  const [showColorFormats, setShowColorFormats] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const handleClickOutsideSuggester = () => {
    setShowSuggestion(false);
  };
  useOnClickOutside(suggesterRef, handleClickOutsideSuggester);

  const handleClickOutsideColorFormatContainer = () => {
    setShowColorFormats(false);
  };
  useOnClickOutside(colorFormatContainerRef, handleClickOutsideColorFormatContainer);

  useEffect(() => {
    const colorsFromUrl = getFromQueryParams();
    if (
      colorsFromUrl.txtColorFromUrl != undefined &&
      colorsFromUrl.txtColorFromUrl !== -1 &&
      colorsFromUrl.txtColorFromUrl !== -2 &&
      colorsFromUrl.bgColorFromUrl != undefined &&
      colorsFromUrl.bgColorFromUrl !== -1 &&
      colorsFromUrl.bgColorFromUrl !== -2
    ) {
      setTextColor(colorsFromUrl.txtColorFromUrl.toString().toUpperCase());
      setBgColor(colorsFromUrl.bgColorFromUrl.toString().toUpperCase());
      mixpanelTrack("Viewed", {
        source: "urlWithCorrectColors",
        txtColor: colorsFromUrl.txtColorFromUrl.toString(),
        bgColor: colorsFromUrl.bgColorFromUrl.toString(),
      });
      return;
    }

    if (
      (colorsFromUrl.txtColorFromUrl != undefined && colorsFromUrl.txtColorFromUrl == -1) ||
      (colorsFromUrl.bgColorFromUrl != undefined && colorsFromUrl.bgColorFromUrl == -1)
    ) {
      mixpanelTrack("Viewed", {
        source: "urlWithIncorrectColors",
        txtColor: colorsFromUrl.txtColorFromUrl.toString(),
        bgColor: colorsFromUrl.bgColorFromUrl.toString(),
      });
      return;
    }

    if (
      (colorsFromUrl.txtColorFromUrl != undefined && colorsFromUrl.txtColorFromUrl == -2) ||
      (colorsFromUrl.bgColorFromUrl != undefined && colorsFromUrl.bgColorFromUrl == -2)
    ) {
      mixpanelTrack("Viewed", {
        source: "direct",
      });
      return;
    }
  }, []);

  useEffect(() => {
    updateRatio(textColor, bgColor);
    updateUrl(textColor, bgColor);
  }, [textColor, bgColor]);

  const updateRatio = (textColor: string, bgColor: string) => {
    const { contrastLC, wcag2Ratio } = getContrast(textColor, bgColor);
    setContrastRatio(contrastLC);
    setWcag2Ratio(wcag2Ratio);
  };

  const updateUrl = (textColor: string, bgColor: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("txtColor", textColor.startsWith("#") ? textColor.substring(1) : textColor);
    urlParams.set("bgColor", bgColor.startsWith("#") ? bgColor.substring(1) : bgColor);
    window.history.replaceState(null, "", "?" + urlParams.toString());
    // window.location.search = urlParams.toString();
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value.toUpperCase();

    if (event.target.id === "textColorInput") {
      setTextColor(color);
      if (color.length > 0 && parseColor(color)[4] === false) {
        setTColorError(true);
      } else {
        setTColorError(false);
      }
    } else if (event.target.id === "bgColorInput") {
      setBgColor(color);
      if (color.length > 0 && parseColor(color)[4] === false) {
        setBgColorError(true);
      } else {
        setBgColorError(false);
      }
    }
  };

  const swapColors = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const tempColor = textColor;
    setTextColor(bgColor);
    setBgColor(tempColor);
    mixpanelTrack("Click", {
      source: "swap",
    });
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
      <StyledTextDisplay textColor={getHexColor(textColor)} bgColor={getHexColor(bgColor)}>
        The quick brown fox jumped over the lazy dog
      </StyledTextDisplay>
      <StyledForm>
        <StyledColSection align="start">
          <StyledText type="small" color={BRAND_TEXT_COLORS.BODY}>
            Text Color
          </StyledText>
          {!tColorError ? (
            <>
              <Blob fill={getHexColor(textColor)} width={48} height={48} />
              <StyledColorPicker
                type="color"
                id="TextColorPicker"
                onInput={handleColorPickerChange}
                value={getHexColor(textColor)}
                onClick={() => {
                  mixpanelTrack("Click", {
                    source: "textColorPicker",
                  });
                }}
              />
              <label htmlFor="TextColorPicker">Click</label>
            </>
          ) : (
            <InvalidColorText>Invalid Color!</InvalidColorText>
          )}
          <StyledInputs
            id="textColorInput"
            type="text"
            name="textColor"
            value={textColor}
            onChange={handleColorChange}
            placeholder="Enter text color"
          />
          <label htmlFor="textColorInput">Click</label>
        </StyledColSection>

        <IconButton onClick={swapColors} type="button" data-tooltip={"Click to swap text and background color"}>
          <img src={SwapIcon} alt="Swap icon" width={24} height={24} />
        </IconButton>

        <StyledColSection align="end">
          <StyledText type="small" color={BRAND_TEXT_COLORS.BODY}>
            Background Color
          </StyledText>
          {!bgColorError ? (
            <>
              <Blob fill={getHexColor(bgColor)} width={48} height={48} />
              <StyledColorPicker
                type="color"
                id="BGColorPicker"
                onInput={handleColorPickerChange}
                value={getHexColor(bgColor)}
                onClick={() => {
                  mixpanelTrack("Click", {
                    source: "bgColorPicker",
                  });
                }}
              />
              <label htmlFor="BGColorPicker">Click</label>
            </>
          ) : (
            <InvalidColorText>Invalid Color!</InvalidColorText>
          )}
          <StyledInputs
            id="bgColorInput"
            type="text"
            name="bgColor"
            value={bgColor}
            onChange={handleColorChange}
            placeholder="Enter background color"
          />
          <label htmlFor="bgColorInput">Click</label>
        </StyledColSection>
      </StyledForm>

      <StyledColSection style={{ width: "100%" }}>
        <StyledRowSection noCol>
          <IconButton
            onClick={() => {
              setShowColorFormats(!showColorFormats);
              setShowSuggestion(false);
              mixpanelTrack("Click", {
                source: "show-formats",
              });
            }}
            type="button"
            data-tooltip={"Click to show compatible color formats"}
            border={false}
          >
            <img src={QuestionIcon} alt="Info icon" width={30} height={30} />
          </IconButton>

          <IconButton
            onClick={() => {
              setShowSuggestion(!showSuggestion);
              setShowColorFormats(false);
              mixpanelTrack("Click", {
                source: "show-suggestions",
              });
            }}
            type="button"
            data-tooltip={"Click to show color suggestions with different contrast"}
            border={false}
          >
            <img src={SuggestionIcon} alt="Suggestion icon" width={24} height={24} />
          </IconButton>
        </StyledRowSection>

        {showColorFormats && (
          <ColorFormatInfo vAlign="between" ref={colorFormatContainerRef}>
            <StyledText type="medium" color={BRAND_TEXT_COLORS.BODY} style={{ textAlign: "center" }}>
              You can input colors in these formats:
            </StyledText>
            <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY}>
              <ul>
                <li>#abc or abc (interpreted as aabbcc)</li>
                <li>#abcdef or abcdef</li>
                <li>rgb(123, 45, 67) or 123,45,67 or [123,45,67]</li>
                <li>aquamarine or magenta (full CSS4 named colors list)</li>
                <li>color(srgb 0.765 0.89 0.556)</li>
                <li>#abcf or abcf (interpreted as aabbccff)</li>
                <li>#123456ff or 123456ff</li>
                <li>rgba(123, 45, 67, 1.0)</li>
              </ul>
              Greyscale shorthand
              <ul>
                <li>#ab or ab (interpreted as 'ababab')</li>
                <li>123 (interpreted as ifrgb(123, 123, 123))</li>
                <li>87% (interpreted as if rgb(87%, 87%, 87%) = [221.85,221.85,221.85])</li>
              </ul>
            </StyledText>
          </ColorFormatInfo>
        )}

        {showSuggestion && (
          <ContrastSuggester
            innerRef={suggesterRef}
            textColor={textColor}
            bgColor={bgColor}
            setTxtColor={setTextColor}
            setBackColor={setBgColor}
          />
        )}
      </StyledColSection>

      <ContrastDisplay contrastLC={contrastRatio} wcag2Ratio={wcag2Ratio} error={tColorError || bgColorError} />
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
    width: 90%;
    align-items: center;
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

const StyledColorPicker = styled.input`
  position: absolute;
  width: 48px;
  height: 48px;
  opacity: 0.01;
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  margin-top: -10px;
  cursor: pointer;
  pointer-events: all;
  z-index: 1;
`;

const ColorFormatInfo = styled(StyledColSection)`
  padding: 20px 30px;
  border: 3px solid ${BRAND_COLOR};
  border-radius: 8px;

  @media ${devices.mobileL} {
    width: 90%;
  }
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
  margin-bottom: 25px;

  @media ${devices.mobileL} {
    width: 90%;
    height: 200px;
  }
`;

const IconButton = styled.button<{ border?: boolean; rotateOnMobile?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: ${props => (props.border == undefined || props.border ? "1px solid #000" : "none")};
  cursor: pointer;

  @media ${devices.mobileL} {
    ${props =>
      props?.rotateOnMobile &&
      `& > img {
      transform: rotateZ(90deg);
    }`}
    &[data-tooltip]:hover::before {
      display: none;
    }
  }
`;

const InvalidColorText = styled.p`
  color: red;
  height: 48px;
  display: flex;
  align-items: center;
`;

export default ContrastChecker;
