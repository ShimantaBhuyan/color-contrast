import React from "react";
import GlobalStyle from "./styles/global";

import ContrastChecker from "./components/ContrastChecker";
import Layout from "./components/Layout";
import Header from "./components/Header";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header type="wave" />
      <Layout>
        <ContrastChecker />
      </Layout>
    </>
  );
}
