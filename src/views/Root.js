import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import FollowList from "components/organisms/FollowList/FollowList";
import CryptoList from "components/organisms/CryptoList/CryptoList";
import PostList from "components/organisms/PostList/PostList";
import {Wrapper} from "./Root.styles";


const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
          <PostList />
      </Wrapper>
    </ThemeProvider>
  </Router>
);
export default Root;
