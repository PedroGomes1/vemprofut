import styled from 'styled-components';

export const Buttons = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  height: 5.6rem;
  border-radius: 1rem;
  border: 0;
  color: ${({ theme }) => theme.colors.background};
  padding: 1.6rem;
  width: 100%;
  font-weight: bold;
  margin-top: 1.6rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
