import styled from 'styled-components';
import fundo from '../../assets/gramado2.png';

export const Content = styled.div`
  background-image: url(${fundo});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 100%;
  min-height: 100vh;
  padding: 0 3rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 125rem;
  margin: 0 auto;

  padding-bottom: 1.5rem;
  li {
    display: flex;
    align-items: center;
    height: 10rem;
    background: ${({ theme }) => theme.colors.cards};
    border-radius: 1rem;
    padding: 3rem;

    cursor: pointer;

    max-width: 70rem;
    width: 100%;
    margin-top: 3rem;

    transition: 0.3s;

    &:hover {
      transform: translate(3px, -3px);
    }

    img {
      height: 7rem;
      width: 7rem;
    }

    div {
      margin: 0 5rem;

      h3 {
        color: ${({ theme }) => theme.colors.quaternary};
        font-size: 2.3rem;
        font-weight: bold;
        margin-bottom: 0.8rem;
      }

      strong {
        color: ${({ theme }) => theme.colors.quaternary};
      }
    }

    svg {
      margin-left: auto;
    }
  }

  @media (max-width: 640px) {
    text-align: center;
  }

  @media (max-width: 450px) {
    li {
      div {
        margin: 0 3rem;

        h3 {
          font-size: 2rem;
        }
      }
    }
  }

  @media (max-width: 390px) {
    h1 {
      font-size: 2.8rem;
    }

    li {
      div {
        margin: 0 1rem;
      }

      img {
        display: none;
      }
    }
  }
`;
