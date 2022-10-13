import React from "react";
import styled from "styled-components";
import { BRAND_TEXT_COLORS, devices } from "../constants";
import { StyledColSection, StyledRowSection, StyledText } from "../styles/global";

const Footnote = () => {
  return (
    <StyledFootnoteWrapper>
      <StyledFootnote>
        <InspireSection align="start" vAlign="start">
          <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY}>
            INSPIRED FROM:
            <ul>
              <li>
                <a href="http://www.myndex.com/BPCA/">Myndex BPCA Bridge</a>
              </li>
              <li>
                <a href="https://cliambrown.com/contrast/">C Liam Brown's Contrast Calculator</a>
              </li>
              <li>
                <a href="https://github.com/Myndex/colorparsley">Color Parsley</a>
              </li>
            </ul>
          </StyledText>
        </InspireSection>

        <NotesSection align="start">
          <StyledRowSection vAlign="start">
            <StyledText type="medium" color={BRAND_TEXT_COLORS.BODY}>
              Use directly from URL
            </StyledText>
            <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY}>
              All color formats mentioned above (after removing the # character) are supported to directly land on this
              page via url. Try these samples:
              <ul>
                <li>
                  <a href="https://color-contrast.dev?txtColor=abcdef&bgColor=rgb(123, 45, 67)" target="_blank">
                    https://color-contrast.dev?txtColor=abcdef&bgColor=rgb(123,45,67)
                  </a>
                </li>
                <li>
                  <a
                    href="https://color-contrast.dev?txtColor=magenta&bgColor=color(srgb 0.765 0.89 0.556)"
                    target="_blank"
                  >
                    https://color-contrast.dev?txtColor=magenta&bgColor=color(srgb 0.765 0.89 0.556)
                  </a>
                </li>
              </ul>
            </StyledText>
          </StyledRowSection>

          <StyledRowSection style={{ marginBottom: "20px" }}>
            <StyledText type="medium" color={BRAND_TEXT_COLORS.BODY}>
              <u>WCAG 2 Standards reference</u>
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
              <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY} style={{ padding: "10px 20px" }}>
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

              <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY} style={{ padding: "10px 20px" }}>
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
              <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY} style={{ padding: "10px 20px" }}>
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

              <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY} style={{ padding: "10px 20px" }}>
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
        </NotesSection>

        <APCANotesSection>
          <StyledRowSection style={{ marginBottom: "20px" }}>
            <StyledText type="medium" color={BRAND_TEXT_COLORS.LARGE}>
              The new, under-development WCAG 3 method using APCA sees great improvements over the current contrast
              system. Some of the important changes are listed below:
            </StyledText>
          </StyledRowSection>
          <StyledRowSection vAlign="start">
            <StyledText type="small" color={BRAND_TEXT_COLORS.SMALL_BODY}>
              <ul>
                <li>
                  The new APCA scoring system, scores accessibility in levels out of 106 &amp; -108 instead of ratios.
                  The higher the number, the higher the contrast. 15 is the minimum for non-text elements, while 75 is
                  the preferred level for body text.
                </li>
                <li>
                  The size and weight of text are considered to measure accessibility. Thinner the text, lower the
                  score.
                </li>
                <li>
                  If you swap text and background colours, the accessibility result differs; unlike WCAG 2, which yields
                  the same results.
                </li>
                <li>
                  Contrast is modelled perceptually, not mathematically. Unlike WCAG 2, the new APCA considers that
                  humans have different perception of contrast and do not perceive it linearly across hue and lightness.
                </li>
              </ul>
            </StyledText>
          </StyledRowSection>
        </APCANotesSection>
      </StyledFootnote>
    </StyledFootnoteWrapper>
  );
};

const StyledFootnoteWrapper = styled(StyledColSection)`
  padding: 5px 25px;
  margin-top: 80px;
  @media ${devices.mobileL} {
    margin-top: 50px;
  }
`;

const StyledFootnote = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-auto-rows: auto;
  gap: 50px 50px;
  grid-template-areas:
    "Inspire Notes"
    ". APCANotes";

  @media ${devices.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 20px;
    gap: 20px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const InspireSection = styled(StyledColSection)`
  grid-area: Inspire;
`;

const NotesSection = styled(StyledColSection)`
  grid-area: Notes;
  grid-gap: 30px;
`;

const APCANotesSection = styled(StyledColSection)`
  grid-area: APCANotes;
`;

export default Footnote;
