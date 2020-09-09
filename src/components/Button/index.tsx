import React, { ButtonHTMLAttributes } from 'react';

import { Buttons } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Buttons type="button" {...rest}>
    {children}
  </Buttons>
);

export default Button;
