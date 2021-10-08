import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};
  width: 100%;
  text-align: center;
  padding: 8px 0;
`;

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const Title = ({ text }) => (
  <Wrapper>
    <StyledTitle>{text}</StyledTitle>
  </Wrapper>
);
