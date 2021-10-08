import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightBlue25};
  max-width: 290px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
`;
