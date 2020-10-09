import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  max-width: 125rem;
  margin: 0 auto;

  li {
    display: flex;
    align-items: center;
    height: 100px;
    background: ${({ theme }) => theme.colors.cards};
    border-radius: 10px;
    padding: 10px;

    cursor: pointer;

    width: 700px;
    margin-top: 30px;

    transition: 0.3s;

    &:hover {
      transform: translate(3px, -3px);
    }

    img {
      height: 70px;
      width: 70px;
    }

    div {
      margin-left: 50px;

      h3 {
        color: ${({ theme }) => theme.colors.quaternary};
        font-size: 23px;
        font-weight: bold;
        margin-bottom: 8px;
      }

      strong {
        color: ${({ theme }) => theme.colors.quaternary};
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;
