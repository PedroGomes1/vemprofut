import styled from 'styled-components';

export const Container = styled.div`
  max-width: 125rem;
  margin: 0 auto;
  text-align: center;

  main {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }
`;
export const Table = styled.table`
  width: 50%;
  border-collapse: collapse;
  td,
  th {
    text-align: center;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.quaternary};
  }
`;
export const WrapperList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 5rem;

  li {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    align-items: center;
    justify-items: center;

    font-size: 2.4rem;

    height: 80px;
    background: ${({ theme }) => theme.colors.cards};
    border-radius: 10px;
    padding: 10px;

    svg {
      margin: auto;
    }
  }

  li + li {
    margin-top: 3rem;
  }
`;
