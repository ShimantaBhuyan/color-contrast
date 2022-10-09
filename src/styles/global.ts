import styled, { createGlobalStyle } from "styled-components";
import { devices } from "../constants";

type StyledTextProps = {
  type: "small" | "medium" | "large";
  color: string;
};

export const StyledColSection = styled.section<{ align?: "start" | "center" | "end" }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props =>
    props?.align && (props?.align == "start" ? "flex=start" : props?.align == "end" ? "flex-end" : "center")};
  grid-gap: 10px;
  gap: 10px;

  @media ${devices.mobileL} {
    align-items: center;
  }
`;

export const StyledText = styled.p<StyledTextProps>`
  font-size: ${props => (props.type === "small" ? "16px" : props.type === "medium" ? "24px" : "36px")};
  color: ${props => props.color};
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
   #root{
       margin:0 auto;
   }
`;

export default GlobalStyle;
