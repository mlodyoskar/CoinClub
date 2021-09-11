import React from "react";
import styled from "styled-components";
import { theme } from "./themes/MainTheme";
import AvatarImg from "./assets/avatar2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperclip } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TweetWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 2fr 1fr;
  border: 1px solid ${theme.postBorder};
  padding: 1em 0;
`;
const AvatarWrapper = styled.div`
  justify-self: center;
`;
const Avatar = styled.img`
  max-width: 4em;
  border-radius: 100%;
`;
const InputWrapper = styled.div`
  grid-column: 2/4;
  width: 90%;
`;
const Input = styled.textarea`
  border: none;
  width: 100%;
  height: 100%;
  background-color: unset;
  color: ${theme.textPrimary};
  margin-bottom: -1px;
  font-size: 1.6em;
  font-family: "Rubik";
  outline: none;
  ::placeholder {
    color: ${theme.textSecondary};
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  justify-self: center;
  grid-column: 3;
  grid-row: 2;
`;
const Button = styled.button`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.primary};
  color: ${theme.textPrimary};
  border: none;
  border-radius: 1em;
  font-size: 1.2em;
  font-family: "Rubik";
  padding: 0.4em 1em;
  cursor: pointer;
`;
const AttachmentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
`;
const IconWrapper = styled.button`
  color: ${theme.primary};
  background-color: unset;
  border: none;
  font-size: 1.6em;
  cursor: pointer;
`;

const Post = styled.div`
  width: 100%;
  border: 1px solid ${theme.postBorder};
  border-top: none;
`;

const Home = () => {
  return (
    <Wrapper>
      <TweetWrapper>
        <AvatarWrapper>
          <Avatar src={AvatarImg}></Avatar>
        </AvatarWrapper>
        <InputWrapper>
          <Input placeholder="What's happening?"></Input>
        </InputWrapper>
        <AttachmentsWrapper>
          <IconWrapper>
            <FontAwesomeIcon icon={faImage} />
          </IconWrapper>
          <IconWrapper>
            <FontAwesomeIcon icon={faPaperclip} />
          </IconWrapper>
        </AttachmentsWrapper>
        <ButtonWrapper>
          <Button>Tweet</Button>
        </ButtonWrapper>
      </TweetWrapper>
      <Post>
        <h1>Siema</h1>
      </Post>
      <Post>
        <h1>Siema</h1>
      </Post>
    </Wrapper>
  );
};

export default Home;
