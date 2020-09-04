import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;

  align-items: stretch;

  @media (max-width: 535px) {
    display: flex;
    flex-direction: column;

    padding: 2rem;
    height: 100% !important;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 50rem;

  padding: 0 2rem;

  h1 {
    font-size: 2.5rem;
  }
`;

const appearFromRight = keyframes`
from {
  opacity: 0;
  transform: translateX(5rem);
}
to {
  opacity: 1;
  transform: translateX(0);
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
  width: 100%;
  max-width: 60rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    width: 100%;
    max-width: 34rem;
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin: 1.5rem 0;
    color: ${({ theme }) => theme.colors.quaternary};
  }

  button {
    background: ${({ theme }) => theme.colors.secondary};
    height: 5.6rem;
    border-radius: 1rem;
    border: 0;
    color: ${({ theme }) => theme.colors.quaternary};
    padding: 1.6rem;
    width: 100%;
    font-weight: bold;
    margin-top: 1.6rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
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

  @media (max-width: 535px) {
    a {
      padding-bottom: 2rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  animation: ${appearFromLeft} 1s;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 3rem;

  h1 {
    font-size: 3.6rem;
  }

  ul {
    li {
      display: flex;
      align-items: center;
    }
  }

  svg {
    margin: 1rem 1rem 1rem 0;
  }

  @media (max-width: 535px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export const Bacgkround = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1210px) {
    display: none;
  }
`;
