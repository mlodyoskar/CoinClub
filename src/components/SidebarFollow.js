import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../themes/MainTheme";
import AvatarImg from "../assets/avatar2.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.primaryLight};
  border: 0.1em solid ${theme.lightBlue};
  border-radius: 0.5em;
  margin-bottom: 3em;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom: 0.1em solid ${theme.lightBlue};
  padding: 0.5em 0;
`;

const Header = styled.h2`
  color: ${theme.textPrimary};
  margin: 0;
  font-weight: ${theme.regular};
  font-size: 1.4em;
  text-align: center;
`;

const CellWrapper = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  text-decoration: none;
  padding: 0.5em 0;
  :hover {
    background-color: ${theme.primaryHover};
  }
`;
const AvatarWrapper = styled.div`
  justify-self: center;
`;
const Avatar = styled.img`
  display: flex;
  max-width: 2.8em;
  border-radius: 100%;
  align-self: center;
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-left: 0.8em;
`;
const FullName = styled.span`
  color: ${theme.textPrimary};
  font-size: 1.1em;
`;
const AppName = styled.span`
  color: ${theme.textSecondary};
`;
const ButtonWrapper = styled.div`
  align-self: center;
  justify-self: center;
`;
const FollowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 2em;
  font-size: 1em;
  background-color: ${theme.lightBlue};
  color: ${theme.textPrimary};
  padding: 0.6em 1.4em;
  cursor: pointer;
  :hover {
    background-color: ${theme.primary};
  }
`;

const SidebarFollowAccount = (name, appName) => {
  return (
    <CellWrapper to="/">
      <AvatarWrapper>
        <Avatar src={AvatarImg}></Avatar>
      </AvatarWrapper>
      <NameWrapper>
        <FullName>{name}</FullName>
        <AppName>@{appName}</AppName>
      </NameWrapper>
      <ButtonWrapper>
        <FollowButton>Follow</FollowButton>
      </ButtonWrapper>
    </CellWrapper>
  );
};

const SidebarFollow = () => {
  const [people, setPeople] = useState([
    {
      name: "Natalia Przybylska",
      appName: "wolskikuba",
    },
    {
      name: "Oskar Puchalkis",
      appName: "puchalskioskar",
    },
    {
      name: "Jakub Bryska",
      appName: "vhitek",
    },
  ]);

  return (
    <Container>
      <HeaderContainer>
        <Header>People you may follow</Header>
      </HeaderContainer>
      {people.map((person) =>
        SidebarFollowAccount(person.name, person.appName)
      )}
    </Container>
  );
};

export default SidebarFollow;
