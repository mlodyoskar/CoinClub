import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../themes/MainTheme";
import AvatarImg from "../assets/avatar2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { getAuth, signOut } from "firebase/auth";

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

const ExpandedOptionsAnimation = keyframes`
    0% {opacity: 0; bottom: 11%;}
    100% {opacity: 1, bottom: 10%;}
`;

const ExpandedOptions = styled.div`
  background-color: ${theme.lightBlue};
  position: absolute;
  bottom: 10%;
  width: 15em;
  border-radius: 10em;
  display: flex;
  justify-content: center;
  animation-name: ${ExpandedOptionsAnimation};
  animation-duration: 0.2s;
`;
const OptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Option = styled.li`
  color: ${theme.textPrimary};
  font-size: 20px;
  cursor: pointer;
  padding: 0.5em 0;
`;

const auth = getAuth();

const handleSignOut = () => {
  signOut(auth);
};

const Account = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      {active && (
        <ExpandedOptions>
          <OptionList>
            <Option onClick={handleSignOut}>Log Out</Option>
          </OptionList>
        </ExpandedOptions>
      )}
      <Wrapper
        onClick={() => {
          setActive(!active);
        }}
      >
        <AvatarWrapper>
          <Avatar src={AvatarImg}></Avatar>
        </AvatarWrapper>
        <NameWrapper>
          <FullName>Oskar Puchalski</FullName>
          <AppName>@puchalskioskar</AppName>
        </NameWrapper>
        <FontAwesomeIcon icon={faEllipsisH} />
      </Wrapper>
    </div>
  );
};

export default Account;