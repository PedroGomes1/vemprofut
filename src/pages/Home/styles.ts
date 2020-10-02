import styled, { css } from 'styled-components';

interface IPlayersPerTeam {
  playersPerTeam: number;
}
interface IVisibleFormPlayers {
  visibleFormPlayers: number;
}
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
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  margin-left: 5rem;
`;

export const WrapperPlayersPerTeam = styled.div<IPlayersPerTeam>`
  display: flex;
  flex-direction: row;
  margin: 0 auto 2rem;

  cursor: ${({ playersPerTeam }) =>
    playersPerTeam > 0 ? 'not-allowed' : 'auto'};

  opacity: ${({ playersPerTeam }) => (playersPerTeam > 0 ? '0.2' : '1')};

  select,
  button {
    pointer-events: ${({ playersPerTeam }) =>
      playersPerTeam > 0 ? 'none' : 'auto'};
  }

  select {
    height: 3rem;
    border-radius: 0.5rem;
    border: 0.17rem solid ${({ theme }) => theme.colors.secondary};
  }

  label {
    margin-right: 0.5rem;
  }

  button {
    margin: 2rem auto 0;
    width: 50%;
    height: 4rem;
  }

  form {
    border-radius: 0.5rem;
    padding: 2rem;
    border: 0.17rem solid ${({ theme }) => theme.colors.quaternary};
  }
`;

export const WrapperRegisterPlayers = styled.div<IVisibleFormPlayers>`
  width: 100%;

  cursor: ${({ visibleFormPlayers }) =>
    visibleFormPlayers > 0 ? 'not-allowed' : 'auto'};

  input,
  select,
  button {
    pointer-events: ${({ visibleFormPlayers }) =>
      visibleFormPlayers > 0 ? 'none' : 'auto'};
  }

  opacity: ${({ visibleFormPlayers }) =>
    visibleFormPlayers > 0 ? '0.2' : '1'};

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
