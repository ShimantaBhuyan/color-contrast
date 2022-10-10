import React from "react";
import GlobalStyle from "./styles/global";

import ContrastChecker from "./components/ContrastChecker";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footnote from "./components/Footnote";
import Footer from "./components/Footer";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header type="wave" />
      <Layout>
        <ContrastChecker />
        <Footnote />
        <Footer />
      </Layout>
    </>
  );
}
