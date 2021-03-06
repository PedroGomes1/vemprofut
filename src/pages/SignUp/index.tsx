import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowDownLeft } from 'react-icons/fi';
import { FcCheckmark } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SwitchTheme from '../../components/SwitchTheme';
import {
  Container,
  Header,
  Content,
  Bacgkround,
  AnimationContainer,
  Info,
  Items,
} from './styles';
import image from '../../assets/soccer.png';
import api from '../../services/api';

const SignUp: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const itemsList = [
    'Sorteio de times e jogos',
    'Maior praticidade e organização',
    'Confiabilidade',
    'Rapidez em montar as equipes',
  ];

  const onSubmit = async (data: any): Promise<void> => {
    try {
      await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      toast.success(
        'Sua conta foi criada com sucesso! Faça login na plataforma.',
      );
      history.push('/');
    } catch (error) {
      toast.error('Erro ao fazer seu cadastro!');
    }
  };

  return (
    <Container>
      <Header>
        <SwitchTheme />
      </Header>

      <main>
        <Info>
          <Items>
            <h1>Organize suas peladas de forma eficiente.</h1>

            <ul>
              {itemsList.map(item => (
                <li>
                  <FcCheckmark size={40} />
                  <strong>{item}</strong>
                </li>
              ))}
            </ul>
          </Items>
          <Bacgkround>
            <img src={image} alt="background" />
          </Bacgkround>
        </Info>

        <Content>
          <AnimationContainer>
            <h1>Faça já o seu cadastro</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                type="text"
                placeholder="Nome"
                icon={FiUser}
                register={register}
                required
              />
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
              <Button type="submit">Finalizar cadastro</Button>
            </form>

            <Link to="/">
              <FiArrowDownLeft />
              Voltar para login
            </Link>
          </AnimationContainer>
        </Content>
      </main>
    </Container>
  );
};
export default SignUp;
