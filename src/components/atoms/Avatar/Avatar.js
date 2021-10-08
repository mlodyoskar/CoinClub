import styled from "styled-components";
import AvatarImg from "assets/img/default_avatar.svg";

const Wrapper = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

export const Avatar = ({ imgSrc }) => (
  <Wrapper>
    <img src={imgSrc || AvatarImg} alt="User Avatar" />
  </Wrapper>
);
