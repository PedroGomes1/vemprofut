import styled from 'styled-components';

import { MdClose } from 'react-icons/md';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.8rem;
  width: 60rem;
  transition: 400ms;
  padding: 2rem;

  @media (max-width: 900px) {
    width: 40rem;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 3rem 0 2rem 0;

    svg {
      margin-right: 1rem;
    }
  }

  form {
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
  }
`;

export const Icon = styled(MdClose)`
  position: absolute;
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.colors.quaternary};
  right: 2rem;
  top: 0.8rem;
  cursor: pointer;
`;
