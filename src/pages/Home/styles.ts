import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 125rem;

  margin: 0 auto;
  margin-top: 8rem;

  h1 {
    max-width: 50rem;
    margin-top: 3rem;
  }

  strong {
    margin-top: 1rem;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: row;

  button {
    width: 15rem;
    height: 10rem;
    margin-right: 1rem;
  }
`;
