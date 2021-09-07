import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "./Navigation.styles";
import Nav from "../Nav";

const Navigation = () => {
  return (
    <Container>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </Container>
  );
};

export default Navigation;
