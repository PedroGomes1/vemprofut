import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  register: ({ required }: { required?: boolean }) => RefReturn;
  icon?: React.ComponentType<IconBaseProps>;
};

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

const Input: React.FC<InputProps> = ({
  type,
  register,
  name,
  icon: Icon,
  required,
  placeholder,
  ...rest
}) => (
  <Container hasPlaceholder={placeholder}>
    {Icon && <Icon size={25} />}
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      ref={register({ required })}
      {...rest}
    />

    <label htmlFor="">{placeholder}</label>
  </Container>
);

export default Input;
