import React from "react";
import styled, { css } from "styled-components";
import logo from "../assets/logo_resized.png";

const LogoWrapper = styled.a`
  position: absolute;
  top: 5em;
  left: 3em;
  align-self: flex-start;
`;
const LogoImg = styled.img`
  width: 50%;
`;

const Logo = () => {
  return (
    <LogoWrapper href="/">
      <LogoImg src={logo}></LogoImg>
    </LogoWrapper>
  );
};

export default Logo;
