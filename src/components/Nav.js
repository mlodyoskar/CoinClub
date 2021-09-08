import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const StyledNav = styled.nav``;
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;
const StyledListItem = styled.li`
  padding: 1em 0;
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.6em;
`;
const Nav = () => {
  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyledLink to="/">Home</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/explore">Explore</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/notification">Notification</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/profile">Profile</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/more">More</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};

export default Nav;
