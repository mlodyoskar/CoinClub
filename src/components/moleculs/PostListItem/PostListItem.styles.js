import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 550px;
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  border-top: none;
  color: ${({theme}) => theme.colors.textPrimary};
  padding: 1em;
`;
export const StyledAvatar = styled.div`
  display: flex;
  align-self: flex-start;
  width: 10%;
`;
export const StyledPostWrapper  = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 10px;
`;

export const StyledUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledName = styled.p`
  align-self: flex-start;
  margin: 0 4px 0 0;
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;

export const StyledUserName = styled.p`
  color: ${({theme}) => theme.colors.textGrey};
  font-size: ${({theme}) => theme.fontSize.l};
  margin: 0;
`;

export const PostText = styled.p`
  display: flex;
`;
export const PostImg = styled.div`
  max-width: 100%;
  max-height: 250px;
  overflow: hidden;
  border-radius: 15px;
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  cursor: pointer;
  margin-bottom: 16px;
  & img {
    max-width: 100%;
    height: 100%;
  }
`;
export const Stats = styled.div`
  display: flex;
`;

export const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2em 0 0;
  cursor: pointer;
  color: ${({liked, theme}) => liked ? theme.colors.gold : theme.colors.textPrimary};
  animation: color 2s linear infinite;
  
  &:hover {
    transform: scale(1.01);
  }
  
  & p {
    margin: 0 0 0 8px;
  }
`;

export const Likes = styled.p`
  
  
`;
