import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import FollowList from "components/organisms/FollowList/FollowList";
import CryptoList from "components/organisms/CryptoList/CryptoList";
import Posts from "components/Posts";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Posts />

      </Wrapper>
    </ThemeProvider>
  </Router>
);
export default Root;
