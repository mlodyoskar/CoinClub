import React from "react";
import styled from "styled-components";
import { theme } from "../themes/MainTheme";
import AvatarImg from "../assets/avatar2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.textPrimary};
  font-size: 20px;
  bottom: 0;
  margin-bottom: 3em;
  cursor: pointer;
`;
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1em;
`;
const Avatar = styled.img`
  display: flex;
  max-width: 2.5em;
  border-radius: 100%;
`;
const FullName = styled.span`
  display: flex;
  font-size: 0.9em;
`;
const AppName = styled.span`
  display: flex;
  font-size: 0.8em;
  color: ${theme.textSecondary};
`;

const Account = () => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar src={AvatarImg}></Avatar>
      </AvatarWrapper>
      <NameWrapper>
        <FullName>Oskar Puchalski</FullName>
        <AppName>@puchalskioskar</AppName>
      </NameWrapper>
      <FontAwesomeIcon icon={faEllipsisH} />
    </Wrapper>
  );
};

export default Account;
