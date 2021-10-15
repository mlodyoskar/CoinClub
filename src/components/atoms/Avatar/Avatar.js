import styled from "styled-components";
import AvatarImg from "assets/img/default_avatar.svg";

const Wrapper = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    max-width: 50px;
    max-height: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`;

export const Avatar = ({ imgSrc }) => (
  <Wrapper>
    <img src={imgSrc || AvatarImg} alt="User Avatar" />
  </Wrapper>
);
