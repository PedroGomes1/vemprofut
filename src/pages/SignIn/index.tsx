import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  Header,
  Content,
  Bacgkround,
  AnimationContainer,
} from './styles';
import signInBackgroundImg from '../../assets/background-signin.svg';
import logo from '../../assets/logofut.png';
import SwitchTheme from '../../components/SwitchTheme';

const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const { signIn } = useAuth();

  const onSubmit = async (data: any): Promise<void> => {
    try {
      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      toast.error('Erro ao fazer o login!');
    }
  };

  return (
    <Container>
      <Header>
        <SwitchTheme />
      </Header>

      <main>
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
      </main>
    </Container>
  );
};
export default SignIn;
