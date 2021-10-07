import react from "react";
import styled from "styled-components";
import { Avatar } from "components/atoms/Avatar/Avatar";
import { Button } from "components/atoms/Button/Button";

const Wrapper = styled.div`
  width: 100%;
  max-width: 270px;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const Name = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 8px;

  & p {
    margin: 0;
  }
  & p:first-child {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  & p:last-child {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const FollowListItem = ({ name, userName, followUser }) => (
  <Wrapper>
    <Avatar />
    <Name>
      <p>{name}</p>
      <p>{userName}</p>
    </Name>
    <Button onClick={() => followUser(userName)}>Follow</Button>
  </Wrapper>
);

export default FollowListItem;
