import React from "react";
import styled from "styled-components";

import { BRAND_COLOR, BRAND_TEXT_COLORS, devices } from "../constants";
import { StyledText } from "../styles/global";

import AnimatedBlob from "./AnimatedBlob";
import Waves from "./Waves";
import GithubLogo from "url:../assets/github-logo.png";

const Header = ({ type }: { type: "wave" | "animatedBlob" }) => {
  return (
    <StyledHeaderWrapper>
      {type === "animatedBlob" ? <AnimatedBlob width={"350px"} /> : <Waves color={BRAND_COLOR} />}
      <StyledHeaderText type="large" color={BRAND_TEXT_COLORS.BODY}>
        Color Contrast Tool
      </StyledHeaderText>
      <StyledSubHeaderText type="small" color={BRAND_TEXT_COLORS.BODY}>
        <a href="https://github.com/Myndex/SAPC-APCA/" target="_blank">
          APCA™
        </a>
        &nbsp;is the candidate contrast method for WCAG 3, and is currently in public beta. WCAG 3 is still in
        development and subject to changes prior to adoption.
      </StyledSubHeaderText>
      <RepoSectionWrapper href="https://github.com/ShimantaBhuyan/color-contrast" about="Repo Link" target={"_blank"}>
        {/* <a target="_blank" href="https://icons8.com/icon/106567/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
        <GithubLogoWrapper src={GithubLogo} alt="Repo Link" width={48} height={48} />
      </RepoSectionWrapper>
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

const RepoSectionWrapper = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;
`;

const GithubLogoWrapper = styled.img`
  width: 48px;
  height: 48px;

  @media ${devices.mobileL} {
    width: 24px;
    height: 24px;
  }
`;

export default Header;
