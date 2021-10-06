import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { getAuth } from "firebase/auth";
import Form from "../components/Form.js";
import Logo from "../components/Logo";
import Main from "../Main";
import { theme } from "../assets/styles/theme";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
  }
`;

const LeftWrapper = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 0 3em;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightWrapper = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
  background-color: #fefefe;
  @media (max-width: 768px) {
    width: 100%;
    background-color: ${theme.primaryDark};
    color: ${theme.textPrimary};
  }
`;

const StyledHeading = styled.h1`
  color: #ffffff;
  font-size: 6em;
  overflow: hidden;
  font-weight: 400;
`;
const SecondaryHighlight = styled.span`
  color: #e94a3d;
`;

const Root = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        console.log(currentUser);
        localStorage.setItem("currentUser", user.uid);
      } else {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
      }
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {currentUser ? (
        <Main />
      ) : (
        <Container>
          <LeftWrapper>
            <Logo></Logo>
            <StyledHeading>
              <SecondaryHighlight>Biggest news </SecondaryHighlight>
              from cryptocurrency world!
            </StyledHeading>
          </LeftWrapper>
          <RightWrapper>
            <Form />
          </RightWrapper>
        </Container>
      )}
    </ThemeProvider>
  );
};

export default Root;
