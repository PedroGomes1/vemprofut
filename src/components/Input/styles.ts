import styled, { css } from 'styled-components';

interface IContainerProps {
  hasPlaceholder: string | undefined;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;

  height: 6rem;

  position: relative;

  border: 0.17rem solid ${({ theme }) => theme.colors.secondary};

  label {
    position: absolute;
    left: 5.5rem;
    top: 1.8rem;
    transition: 0.3s;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  input {
    border: 0;
    background: none;
    height: 60%;
    position: absolute;
    width: 80%;
    left: 5rem;
    z-index: 2;
    color: ${({ theme }) => theme.colors.quaternary};

    &:focus + label {
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.secondary};
      top: -1rem;
      left: 3rem;
      font-size: 1.4rem;
    }

    &::placeholder {
      color: transparent;
    }

    &:not(:placeholder-shown):not(:focus) + label {
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.secondary};
      top: -1rem;
      left: 3rem;
      font-size: 1.4rem;
    }

    /* only for inputs that have no placeholder */
    ${({ hasPlaceholder }) =>
      !hasPlaceholder &&
      css`
        width: 85%;
        left: 2rem;
      `}
  }

  svg {
    margin: 0 1.6rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
