import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { theme } from "../themes/MainTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHashtag,
  faBell,
  faUser,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

const StyledNav = styled.nav``;
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;
const StyledListItem = styled.li`
  padding: 1.2em 0;
`;
const StyledLink = styled(Link)`
  color: ${theme.textPrimary};
  text-decoration: none;
  font-size: 1.6em;
  font-weight: ${theme.normal};
`;
const Nav = () => {
  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyledLink to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/explore">
            <FontAwesomeIcon icon={faHashtag} /> Explore
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/notification">
            <FontAwesomeIcon icon={faBell} /> Notification
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/profile">
            <FontAwesomeIcon icon={faUser} /> Profile
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/more">
            <FontAwesomeIcon icon={faEllipsisH} /> More
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};

export default Nav;
