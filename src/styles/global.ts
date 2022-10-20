import styled, { createGlobalStyle } from "styled-components";
import { BRAND_TEXT_COLORS, devices } from "../constants";
import { getFlexAlign } from "../utils";

type StyledTextProps = {
  type: "small" | "medium" | "large";
  color: string;
  bold?: boolean;
};

export const StyledRowSection = styled.section<{
  vAlign?: "start" | "center" | "end" | "stretch";
  align?: "start" | "center" | "end" | "between" | "around" | "evenly";
  noCol?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: ${props => (props?.vAlign ? getFlexAlign(props?.vAlign) : "center")};
  justify-content: ${props => (props?.align ? getFlexAlign(props?.align) : "center")};
  grid-gap: 30px;
  gap: 30px;

  ${props =>
    !props?.noCol &&
    `@media ${devices.mobileL} {
    flex-direction: column;
    align-items: center;
  }`}
`;

export const StyledColSection = styled.section<{
  vAlign?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "stretch";
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props?.vAlign ? getFlexAlign(props?.vAlign) : "center")};
  align-items: ${props => (props?.align ? getFlexAlign(props?.align) : "center")};
  grid-gap: 10px;
  gap: 10px;

  @media ${devices.mobileL} {
    align-items: center;
  }
`;

export const StyledText = styled.p<StyledTextProps>`
  font-size: ${props => (props.type === "small" ? "16px" : props.type === "medium" ? "24px" : "36px")};
  color: ${props => props.color};
  ${props => props?.bold && `font-weight: 700`}
`;

export const StyledButton = styled.button<{ buttonType: "normal" | "rounded"; bold?: boolean }>`
  padding: 8px;
  border: 2px solid ${BRAND_TEXT_COLORS.LARGE};
  border-radius: ${props => (props.buttonType === "rounded" ? "50%" : "4px")};
  font-size: 12px;
  font-weight: ${props => (props?.bold ? "bold" : "regular")};
  text-align: center;
  cursor: pointer;
`;

export const PillButton = styled.a<{ fillColor?: string; color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 8px;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  width: 100px;
  height: 35px;
  color: ${props => props?.color};
  background-color: ${props => props?.fillColor};
  border-radius: 35px;
  border: 2px solid ${BRAND_TEXT_COLORS.LARGE};
  cursor: pointer;
`;

const GlobalStyle = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      outline:0;
      box-sizing:border-box;
      font-family: 'Inter Tight', sans-serif;
      overscroll-behavior: none;
   }
   html, body{     
    background-color: rgb(249, 250, 251);
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
      box-shadow: linear-gradient(90deg,#434343,#434343 1px,#111 0,#111)
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${BRAND_TEXT_COLORS.BODY};
      border-radius: 8px;
      box-shadow: inset 2px 2px 2px hsl(0deg 0% 100% / 25%), inset -2px -2px 2px rgb(0 0 0 / 25%);
    }
   }
   #root{
      margin: 0 auto 50px auto;
   }
  [data-tooltip] {
    position: relative;
    cursor: help;
    text-decoration: underline;
  }
  [data-tooltip]:hover::before {
  transform: translate(0);
  opacity: 1;
  }
  [data-tooltip]::before {
    content: attr(data-tooltip);
    position: absolute;
    width: 150px;
    display: block;
    background: #FFF;
    padding: 10px;
    top: -50px;
    box-shadow: 0px 2px 5px #0000008c;
    border-radius: 5px;
    text-align: center;
    left: 0;
    z-index: 2;
    opacity: 0;
    pointer-events: none;
    transform: translateY(20px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 12px;
  }
  label{
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

export default GlobalStyle;
