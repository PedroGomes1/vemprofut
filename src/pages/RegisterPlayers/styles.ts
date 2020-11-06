import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 3rem;

  @media (max-width: 740px) {
    padding: 1rem;
  }

  main {
    margin: 0 auto;
    max-width: 125rem;

    margin-top: 3.5rem;

    display: flex;

    @media (max-width: 740px) {
      flex-direction: column;
      align-items: center;

      > div {
        margin: 3rem 0 3rem;
      }
    }
  }
`;

export const WrapperTable = styled.div`
  width: 50%;
  @media (max-width: 740px) {
    width: 100%;
    overflow-y: scroll;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;

  td,
  th {
    text-align: center;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.quaternary};
  }

  .delete {
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  margin-left: 5rem;
`;

export const WrapperRegisterPlayers = styled.div`
  width: 100%;

  > form {
    display: flex;
    flex-direction: column;

    width: 100%;

    border: 1px solid ${({ theme }) => theme.colors.quaternary};
    border-radius: 0.5rem;

    padding: 2rem;

    select {
      width: 30%;
      height: 3rem;
      margin-bottom: 1rem;
      border-radius: 0.5rem;
      border: 0.17rem solid ${({ theme }) => theme.colors.secondary};
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

    > div {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;

      label {
        margin-bottom: 0;
        margin-left: 0.5rem;
      }

      input [type='checkbox'] {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;
