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

  a + a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.quaternary};
    svg {
      margin-right: 0.5rem;
    }
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  input {
    width: 2rem;
    height: 2rem;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    transition: 0.2s;
    svg {
      color: ${({ theme }) => theme.colors.quaternary};
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;
