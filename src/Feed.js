import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  margin: 0 25em;
`;

const Feed = () => {
  return (
    <Wrapper>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/notification" component={Notification} />
        <Route path="/profile" component={Profile} />
        <Route path="/more" component={More} />
      </Switch>
    </Wrapper>
  );
};

const Explore = () => {
  return <h1>Explore</h1>;
};
const Notification = () => {
  return <h1>Notifications</h1>;
};
const Profile = () => {
  return <h1>Profile</h1>;
};
const More = () => {
  return <h1>More</h1>;
};
export default Feed;
