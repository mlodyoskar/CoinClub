import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Account from "./components/Account";

import { theme } from "./themes/MainTheme";

const StyledHeader = styled.header`
  /* position: fixed; */
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  max-width: 10em;
`;
const LogoWrapper = styled(Link)``;

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper to="/">
        <Logo src="./logo.png"></Logo>
      </LogoWrapper>
      <Nav />
      <Account />
    </StyledHeader>
  );
};

export default Header;
