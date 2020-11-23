import styled from 'styled-components';

export const Container = styled.div`
  max-width: 125rem;
  margin: 0 auto;
  text-align: center;

  padding: 0 3rem;

  > button {
    margin: 0 auto 2rem;
    width: 30%;
  }

  main {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;

    @media (max-width: 715px) {
      display: flex;
      flex-direction: column;
      > div {
        margin: 3rem 0;
      }
    }

    @media (max-width: 398px) {
      display: flex;
      flex-direction: column;

      > div {
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: 398px) {
    h1 {
      font-size: 2.4rem;
      margin-top: 2rem;
    }
  }
`;

export const WrapperTable = styled.div`
  width: 60%;
  margin-bottom: 3rem;

  @media (max-width: 715px) {
    width: 100%;
  }

  @media (max-width: 398px) {
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
`;

export const WrapperList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 5rem;

  @media (max-width: 385px) {
    strong {
      font-size: 1.8rem;
    }
  }

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
