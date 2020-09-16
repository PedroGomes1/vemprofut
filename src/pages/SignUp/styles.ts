import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  @media (max-width: 535px) {
    display: flex;
    flex-direction: column;

    padding: 2rem;
    height: 100% !important;
  }

  main {
    display: flex;
    height: 100%;
  }

  @media (max-width: 535px) {
    main {
      flex-direction: column;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;

  > div {
    margin-top: 2rem;
  }

  @media (max-width: 535px) {
    > div {
      padding-bottom: 2rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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
  transform: translateX(0rem);
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
  width: 70%;

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
  @media (max-width: 1210px) {
    display: none;
  }
`;
