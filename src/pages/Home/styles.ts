import styled from 'styled-components';

export const Container = styled.div`
  main {
    margin: 0 auto;
    max-width: 125rem;

    margin-top: 3.5rem;

    display: flex;
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
export const WrapperForm = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;
  margin-left: 5rem;

  form {
    display: flex;
    flex-direction: column;

    width: 100%;

    border: 1px solid ${({ theme }) => theme.colors.quaternary};
    border-radius: 0.5rem;

    padding: 2rem;

    select {
      width: 30%;
      margin-bottom: 1rem;
    }

    button {
      width: 50%;
      margin: 1rem auto;
    }

    label {
      margin-bottom: 0.5rem;
    }

    h2 {
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`;
