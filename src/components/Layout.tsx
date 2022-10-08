import React from "react";
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

const StyledLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-self: center;
  margin-top: 20px;
`;

export default Layout;
