import React, {useState} from "react";
import styled from "styled-components";
import {posts} from "data/posts";
import {Avatar} from "components/atoms/Avatar/Avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faComment } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 550px;
  border: 1px solid ${({theme}) => theme.colors.lightBlue};
  background-color: ${({theme}) => theme.colors.primaryDark};
  color: ${({theme}) => theme.colors.textPrimary};
  padding: 1em;
`;
const StyledAvatar = styled.div`
  display: flex;
  align-self: flex-start;
`;
const StyledPostWrapper  = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 10px;
`;

const StyledUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledName = styled.p`
  align-self: flex-start;
  margin: 0 4px 0 0;
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;

const StyledUserName = styled.p`
  color: ${({theme}) => theme.colors.textGrey};
  font-size: ${({theme}) => theme.fontSize.l};
  margin: 0;

`;

const PostText = styled.p`
  display: flex;
`;
const PostImg = styled.div`
  max-width: 100%;
  max-height: 250px;
  overflow: hidden;
  border-radius: 15px;
  border: 1px solid ${({theme}) => theme.colors.lightBlue};
  cursor: pointer;
  & img {
    max-width: 100%;
    height: 100%;
  }
`;
const Stats = styled.div`
  display: flex;
`;
const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2em 0 0;
  cursor: pointer;
  width: 2.5em;
  color: ${({theme}) => theme.colors.textGrey};
  
  &:hover {
    color: ${({theme}) => theme.colors.textSecondary};;
  }
`;


const Posts = () => {
    const [postsData, setPostsData] = useState(posts)
    return (
    <Wrapper>
        <StyledAvatar>
            <Avatar imgSrc={"images/avatars/avatar.jpg"}/>
        </StyledAvatar>
        <StyledPostWrapper>
        <StyledUser>
            <StyledName>Oskar Puchalski</StyledName>
            <StyledUserName>@puchalskioskar</StyledUserName>
        </StyledUser>
        <PostText>
            {posts[0].text}
        </PostText>
        <PostImg>
            <img src={posts[0].img} />
        </PostImg>
        <Stats>
            <StatContainer>
                <FontAwesomeIcon icon={faCoins} />
                <p>{posts[0].likes}</p>
            </StatContainer>
            <StatContainer>
                <FontAwesomeIcon icon={faComment} />
                <p>{posts[0].likes}</p>
            </StatContainer>
        </Stats>
        </StyledPostWrapper>
    </Wrapper>
)}

export default Posts;