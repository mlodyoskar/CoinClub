import styled from "styled-components";
import React from "react";
import Header from "./Header";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { theme } from "./assets/styles/theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.primaryDark};
  padding: 4em 8em;
  height: 100vh;
`;

const Main = () => {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Feed />
        <Sidebar />
      </Wrapper>
    </Router>
  );
};

export default Main;
