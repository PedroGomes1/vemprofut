import styled from 'styled-components';
import fundo from '../../assets/gramado2.png';

export const Content = styled.div`
background-image: url(${fundo});
background-position: center;
background-size: cover;
height: 100vh;
padding: 0 3rem;
`

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 15rem;
    height: 13rem;
    margin-right: 1rem;
  }
`;
