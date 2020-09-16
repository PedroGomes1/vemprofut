import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    display: flex;
    flex-direction: row;

    height: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;

  > div {
    margin-top: 2rem;
  }
`;

const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-5rem);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
  }

  h1 {
    margin: 1.5rem 0;
    color: ${({ theme }) => theme.colors.quaternary};
  }

  a {
    margin-top: 3rem;
    color: ${({ theme }) => theme.colors.quaternary};
    transition: opacity 0.2s;

    svg {
      margin-right: 1rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Bacgkround = styled.div`
  display: flex;
  flex: 1;

  animation: ${appearFromLeft} 1s;

  img {
    width: 100%;
  }

  svg {
    align-items: flex-start;
    margin: 3rem 5rem;

    cursor: pointer;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;
