import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Account from "./components/Account";
import LogoImg from "assets/img/logo_resized.png";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding-left: 10em;
  padding-top: 4em;
  max-width: 24em;
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  max-width: 10em;
`;
const LogoWrapper = styled(Link)`
  padding-bottom: 3em;
`;

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper to="/">
        <Logo src={LogoImg}></Logo>
      </LogoWrapper>
      <Nav />
      <Account />
    </StyledHeader>
  );
};

export default Header;
