import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  max-width: 125rem;

  a {
    padding: 2rem 0;
  }

  button {
    svg {
      margin-right: 0.5rem;
    }
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
