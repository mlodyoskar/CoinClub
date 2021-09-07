import styled, { css } from "styled-components";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import Form from "./components/Form.js";
import Main from "./Main";

const App = () => {
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

  const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  `;

  const Wrapper = styled.div`
    width: 50%;
    height: 100%;
    padding: 3rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    background-color: ${(props) => (props.primary ? "#0e1428" : "#F4F4F4")};
  `;

  const StyledHeading = styled.h1`
    color: #ffffff;
    font-size: 6em;
  `;
  const SecondaryHighlight = styled.span`
    color: #e94a3d;
  `;

  return (
    <div>
      {currentUser ? (
        <Main />
      ) : (
        <Container>
          <Wrapper primary>
            <StyledHeading>
              <SecondaryHighlight>Biggest news </SecondaryHighlight>
              from cryptocurrency world!
            </StyledHeading>
          </Wrapper>
          <Wrapper>
            <Form />
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default App;
