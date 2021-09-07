import styled, { css } from "styled-components";
import React from "react";
import Navigation from "./Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Explore, Notification, Profile, More } from "./views";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = () => {
  return (
    <Router>
      <Wrapper>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/notification" component={Notification} />
          <Route path="/profile" component={Profile} />
          <Route path="/more" component={More} />
        </Switch>
        {/* <Tables /> */}
      </Wrapper>
    </Router>
  );
};

export default Main;
