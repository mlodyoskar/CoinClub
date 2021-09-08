import styled, { css } from "styled-components";
import React from "react";
import Header from "./Header";
import Feed from "./Feed";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { theme } from "./themes/MainTheme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.darkBlue};
  padding: 4em 6em;
`;

const Main = () => {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Feed />
        {/* <Sidebar /> */}
      </Wrapper>
    </Router>
  );
};

export default Main;
