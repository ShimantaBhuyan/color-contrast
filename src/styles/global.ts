import styled, { createGlobalStyle } from "styled-components";
import { devices } from "../constants";

type StyledTextProps = {
  type: "small" | "medium" | "large";
  color: string;
  bold?: boolean;
};

export const StyledRowSection = styled.section<{
  align?: "start" | "center" | "end";
  vAlign?: "start" | "center" | "end";
}>`
  display: flex;
  flex-direction: row;
  align-items: ${props =>
    props?.vAlign
      ? props?.vAlign == "start"
        ? "flex-start"
        : props?.vAlign == "end"
        ? "flex-end"
        : "center"
      : "center"};
  justify-content: ${props =>
    props?.align ? (props?.align == "start" ? "flex-start" : props?.align == "end" ? "flex-end" : "center") : "center"};
  grid-gap: 30px;
  gap: 30px;

  @media ${devices.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledColSection = styled.section<{
  align?: "start" | "center" | "end";
  vAlign?: "start" | "center" | "end";
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props?.vAlign
      ? props?.vAlign == "start"
        ? "flex-start"
        : props?.vAlign == "end"
        ? "flex-end"
        : "center"
      : "center"};
  align-items: ${props =>
    props?.align ? (props?.align == "start" ? "flex-start" : props?.align == "end" ? "flex-end" : "center") : "center"};
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
