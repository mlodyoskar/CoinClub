import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.primaryDark};
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;
