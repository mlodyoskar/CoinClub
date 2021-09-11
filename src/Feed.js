import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 0 24em;
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

const Home = () => {
  return <h1>Home</h1>;
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
