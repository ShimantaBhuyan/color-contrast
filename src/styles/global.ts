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
`;

export default GlobalStyle;
