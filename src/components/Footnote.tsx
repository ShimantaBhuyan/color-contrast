import React from "react";
import styled from "styled-components";
import { BRAND_TEXT_COLORS, devices } from "../constants";
import { StyledColSection, StyledRowSection, StyledText } from "../styles/global";

const Footnote = () => {
  return (
    <StyledFootnote>
      <StyledColSection align="start">
        <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY}>
          INSPIRED FROM:
          <ul>
            <li>
              <a href="http://www.myndex.com/BPCA/">Myndex BPCA Bridge</a>
            </li>
            <li>
              <a href="https://cliambrown.com/contrast/">C Liam Brown's Contrast Calculator</a>
            </li>
          </ul>
        </StyledText>
      </StyledColSection>

      <StyledColSection>
        <StyledRowSection>
          <StyledText type="medium" color={BRAND_TEXT_COLORS.BODY}>
            WCAG 2 Standards reference
          </StyledText>
        </StyledRowSection>

        <StyledRowSection vAlign="start">
          <StyledColSection align="start" vAlign="start">
            <StyledText type="medium" color={BRAND_TEXT_COLORS.BODY}>
              AA, Enhanced
            </StyledText>
            <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY} bold>
              SHOULD
            </StyledText>
            <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY}>
              <ul>
                <li>
                  L<sup>c</sup> 15 (W 1.3:1) Minimum for disabled elements (not hidden).
                </li>
                <li>
                  L<sup>c</sup> 30 (W 1.8:1) Minimum for incidental text such as placeholders.
                </li>
                <li>
                  L<sup>c</sup> 45 (W 2:1) Minimum for logotypes.
                </li>
              </ul>
            </StyledText>

            <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY} bold>
              SHALL
            </StyledText>

            <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY}>
              <ul>
                <li>
                  L<sup>c</sup> 60 (W 3:1) Large font only, no body text. Non-text okay.
                </li>
                <li>
                  L<sup>c</sup> 75 (W 4.5:1) 16px minimum for body text, 12px minimum otherwise
                </li>
                <li>
                  L<sup>c</sup> 90 (W 7:1) 14px minimum body text, 10px minimum otherwise
                </li>
              </ul>
            </StyledText>
          </StyledColSection>

          <StyledColSection align="start" vAlign="start">
            <StyledText type="medium" color={BRAND_TEXT_COLORS.BODY}>
              AAA, Enhanced
            </StyledText>
            <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY} bold>
              SHOULD
            </StyledText>
            <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY}>
              <ul>
                <li>
                  L<sup>c</sup> 15 (W 1.3:1) Minimum for disabled elements (not hidden).
                </li>
                <li>
                  L<sup>c</sup> 30 (W 1.8:1) Minimum for incidental text such as placeholders.
                </li>
              </ul>
            </StyledText>

            <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY} bold>
              SHALL
            </StyledText>

            <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY}>
              <ul>
                <li>
                  L<sup>c</sup> 60 (W 3:1) Minimum for logotypes and essential non-text.
                </li>
                <li>
                  L<sup>c</sup> 75 (W 4.5:1) Large font only, no body text.
                </li>
                <li>
                  L<sup>c</sup> 90 (W 7:1) 16px minimum for body text, 12px minimum otherwise
                </li>
              </ul>
            </StyledText>
          </StyledColSection>
        </StyledRowSection>
      </StyledColSection>
    </StyledFootnote>
  );
};

const StyledFootnote = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin-top: 20px;
  grid-gap: 50px;
  gap: 50px;

  @media ${devices.mobileL} {
    flex-direction: column;
    align-items: center;
    grid-gap: 20px;
    gap: 20px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default Footnote;
