import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  max-width: 125rem;

  a {
    padding: 2rem 0;
  }

  input {
    width: 2rem;
    height: 2rem;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    background: transparent;
    color: ${({ theme }) => theme.colors.quaternary};

    transition: 0.2s;
    svg {
      color: ${({ theme }) => theme.colors.quaternary};
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;
