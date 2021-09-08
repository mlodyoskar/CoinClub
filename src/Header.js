import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";

const StyledHeader = styled.header`
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  width: 100%;
`;
const LogoWrapper = styled(Link)``;

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper>
        <Logo src="./logo.png"></Logo>
      </LogoWrapper>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
