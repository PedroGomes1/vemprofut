import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1.8rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  display: flex;

  border: 0.17rem solid ${({ theme }) => theme.colors.secondary};

  input {
    width: 100%;
    border: 0;
    background: none;

    color: ${({ theme }) => theme.colors.quaternary};
  }

  svg {
    margin-right: 16px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
