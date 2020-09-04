import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowDownLeft } from 'react-icons/fi';
import { FcCheckmark } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import {
  Container,
  Content,
  Bacgkround,
  AnimationContainer,
  Info,
  Items,
} from './styles';
import image from '../../assets/soccer.png';

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const itemsList = [
    'Sorteio de times e jogos',
    'Maior praticidade e organização',
    'Confiabilidade',
    'Rapidez em montar as equipes',
  ];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
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
            <button type="submit">Finalizar cadastro</button>
          </form>

          <Link to="/">
            <FiArrowDownLeft />
            Voltar para login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;
