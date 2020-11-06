import styled from 'styled-components';

interface PropsRegisterTeams {
  disabled: boolean;
}

interface PropsPlayersPerTeam {
  disabled: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  max-width: 125rem;
  margin: auto;

  padding: 0 3rem;

  header {
    width: 100%;
  }

  @media (max-width: 400px) {
    h2 {
      margin-top: 3rem;
    }
  }
`;

export const WrapperPlayersPerTeam = styled.div<PropsPlayersPerTeam>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 2rem auto 2rem;

  border-radius: 0.5rem;
  padding: 1rem;
  border: 0.17rem solid ${({ theme }) => theme.colors.quaternary};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? '0.2' : '1')};

  select {
    height: 3rem;
    border-radius: 0.5rem;
    border: 0.17rem solid ${({ theme }) => theme.colors.secondary};
  }

  select,
  button {
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  }

  label {
    margin-right: 0.5rem;
  }

  button {
    margin: 2rem auto 0;
    width: 45%;
    height: 4rem;
  }
`;

export const WrapperRegisterTeams = styled.div<PropsRegisterTeams>`
  display: ${({ disabled }) => (disabled ? 'none' : 'block')};

  i {
    font-size: 1.4rem;
    margin-left: 0.5rem;
  }
`;
