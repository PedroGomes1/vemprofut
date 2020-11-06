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

  h1 {
    text-align: center;
  }

  @media (max-width: 495px) {
    h1 {
      font-size: 2.4rem;
      margin-top: 2rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: 125rem;
  width: 100%;

  margin: 3rem auto;

  @media (max-width: 495px) {
    width: 100%;
    overflow-y: scroll;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  background: #fff;

  thead,
  tbody,
  tr,
  td,
  th {
    width: 25%;
  }

  td,
  th {
    text-align: center;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.quaternary};
  }

  td {
    &:hover {
      background: 1px solid ${({ theme }) => theme.colors.quaternary};
    }
  }
`;
