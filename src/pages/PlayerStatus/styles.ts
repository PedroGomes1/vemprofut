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
  margin-top: 8rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  background: #fff;

  thead,
  tbody,
  tr,
  td,
  th {
    width: 20%;
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
