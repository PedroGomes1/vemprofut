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
  justify-content: center;
  margin-left: 5rem;

  li {
    display: flex;
    align-items: center;

    font-size: 2.4rem;

    border-bottom: 1px solid #c0c0c0;

    svg {
      margin: 0 2rem;
    }
  }

  li + li {
    margin-top: 3rem;
  }
`;
