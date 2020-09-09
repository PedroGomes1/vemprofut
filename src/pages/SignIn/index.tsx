import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Bacgkround, AnimationContainer } from './styles';
import signInBackgroundImg from '../../assets/background-signin.svg';
import logo from '../../assets/logofut.png';

const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const onSubmit = (data: any) => {
    console.log(data);
    history.push('/home');
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="logo" />
          <h1>Faça seu login</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              type="email"
              icon={FiMail}
              placeholder="E-mail"
              register={register}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={FiLock}
              register={register}
              required
            />
            <Button type="submit">Entrar</Button>
          </form>

          <Link to="/signup">
            <FiLogIn />
            Registrar-se
          </Link>
        </AnimationContainer>
      </Content>

      <Bacgkround>
        <img src={signInBackgroundImg} alt="background" />
      </Bacgkround>
    </Container>
  );
};
export default SignIn;
