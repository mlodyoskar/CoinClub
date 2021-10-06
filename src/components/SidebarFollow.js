import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AvatarImg from "../assets/avatar2.jpg";
import Button from "components/atoms/Button/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border: 0.1em solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 0.5em;
  margin-bottom: 3em;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom: 0.1em solid ${({ theme }) => theme.colors.lightBlue};
  padding: 0.5em 0;
`;

const Header = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 1.4em;
  text-align: center;
`;

const CellWrapper = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  text-decoration: none;
  padding: 0.5em 0;
  :hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
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
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.1em;
`;
const AppName = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary}; ;
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
      <Button text="Follow" />
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
