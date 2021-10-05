import styled from "styled-components";
import React, { useReducer, useState } from "react";
import { auth } from "../Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { theme } from "assets/styles/theme";

const StyledForm = styled.form`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledFormHeader = styled.h2`
  font-size: 2.5em;
  text-align: center;
`;
const StyledFormLabel = styled.label`
  font-size: 1em;
  text-align: center;
  padding: 1em;
`;
const StyledInput = styled.input`
  width: 24rem;
  font-size: 1rem;
  background-color: #dfdfdf;
  padding: 15px 20px;
  border: none;
  outline: none;
  border-radius: 1em;
`;
const StyledButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const StyledButton = styled.button`
  color: #fff;
  font-size: 1.1rem;
  background-color: #e94a3d;
  border-radius: 1em;
  align-self: center;
  width: 12rem;
  height: 3rem;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  font-family: "Rubik";
`;
const StyledSignUpButton = styled.button`
  position: absolute;
  margin: 5em 3em;
  top: 0;
  right: 0;
  background-color: #0e1428;
  font-size: 1em;
  color: #ffffff;
  padding: 0.6em;
  border: none;
  border-radius: 1em;
  cursor: pointer;
  font-family: "Rubik";
  @media (max-width: 768px) {
    background-color: ${theme.colors.secondaryBackground};
    color: ${theme.darkBlue};
  }
`;

const Form = () => {
  const [formAction, setFormAction] = useState("signIn");
  const [inputsContent, setInputsContent] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: "",
    }
  );
  const handleInputChange = (e) => {
    setInputsContent({
      [e.target.name]: e.target.value,
    });
  };
  const { email, password } = inputsContent;

  const handleSignIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      alert(
        `Your email or password is incorrect, please check your data, ${error}`
      )
    );
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      alert(`Email is already in use, sign in or use other email, ${error}`)
    );
  };

  const handleChangeFormAction = () => {
    if (formAction === "signIn") {
      setFormAction("signUp");
    } else if (formAction === "signUp") {
      setFormAction("signIn");
    }
  };

  return (
    <StyledForm>
      <StyledFormHeader>
        {formAction === "signIn" ? "Sign In" : "Sign Up"} to CoinClub
      </StyledFormHeader>
      <StyledFormLabel htmlFor="email-input">Email address</StyledFormLabel>
      <StyledInput
        placeholder="jondoe@gmail.com"
        id="email-input"
        type="email"
        name="email"
        required
        onChange={handleInputChange}
        value={email}
      />
      <StyledFormLabel htmlFor="passowrd-input">Password</StyledFormLabel>
      <StyledInput
        placeholder="**********"
        id="password-input"
        type="password"
        name="password"
        required
        onChange={handleInputChange}
        value={password}
      />
      <StyledButtonsWrapper>
        {formAction === "signIn" ? (
          <StyledButton
            type="submit"
            name="submit"
            value="1"
            onClick={handleSignIn}
          >
            Sign in
          </StyledButton>
        ) : (
          <StyledButton
            type="submit"
            name="submit"
            value="1"
            onClick={handleSignUp}
          >
            Sign up
          </StyledButton>
        )}

        <StyledSignUpButton onClick={handleChangeFormAction}>
          {formAction === "signIn" ? "Sign Up" : "Sign In"}
        </StyledSignUpButton>
      </StyledButtonsWrapper>
    </StyledForm>
  );
};
export default Form;
