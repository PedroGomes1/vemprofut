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
  background: #fff;
  border-radius: 8px;
  width: 600px;
  transition: 400ms;
  padding: 20px;

  @media (max-width: 900px) {
    width: 400px;
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
`;

export const Icon = styled(MdClose)`
  position: absolute;
  height: 30px;
  width: 30px;
  color: #000000;
  right: 2rem;
  top: 0.8rem;
  cursor: pointer;
`;
