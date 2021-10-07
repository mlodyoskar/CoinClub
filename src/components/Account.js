import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { getAuth, signOut } from "firebase/auth";
import { Avatar } from "./atoms/Avatar/Avatar";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 20px;
  bottom: 3em;
  margin-bottom: 3em;
  cursor: pointer;
`;
// const AvatarWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1em;
`;
// const Avatar = styled.img`
//   display: flex;
//   max-width: 2.5em;
//   border-radius: 100%;
// `;
const FullName = styled.span`
  display: flex;
  font-size: 0.9em;
`;
const AppName = styled.span`
  display: flex;
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ExpandedOptionsAnimation = keyframes`
    0% {opacity: 0; bottom: 11%;}
    100% {opacity: 1, bottom: 1.5em;}
`;

const ExpandedOptions = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  position: absolute;
  bottom: 11em;
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
  color: ${({ theme }) => theme.colors.textPrimary};
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
        {/* <AvatarWrapper>
          <Avatar src={AvatarImg}></Avatar>
        </AvatarWrapper> */}
        <Avatar />
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
