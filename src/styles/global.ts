import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;

    @media (min-width: 1981px) {
      font-size: 80%;
    };
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;

  }
  body, #root {
    background: ${({ theme }) => theme.colors.background};
    min-height: 100%;
    height: 100%;
  }


  #root {
    width: 100%;
    /* filter: hue-rotate(180deg) invert(1); */
  }

  body, input, button {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.48;
  }

  h1, h2, h3, h4, h5, h6, label, table, a, i, strong {
    color:${({ theme }) => theme.colors.quaternary};
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

  button {
    cursor: pointer;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`;
