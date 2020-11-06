import styled from 'styled-components';

interface HeaderProps {
  hasSwitch: boolean;
}

export const Container = styled.header<HeaderProps>`
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

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    div:first-child {
      margin-bottom: 2rem;
    }
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
