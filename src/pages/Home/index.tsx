import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BiAddToQueue } from 'react-icons/bi';
import { BsListCheck } from 'react-icons/bs';
import Button from '../../components/Button';
import ModalRegisterMatch from '../../components/ModalRegisterMatch';
import Header from '../../components/Header';
import { Container, WrapperButtons, Content } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Content>
        <Header switchVisible={false} />
        <Container>
          <h1>Seja bem vindo ao #VemProFut.</h1>
          <strong>Selecione a opção desejada:</strong>

          <WrapperButtons>
            <Button onClick={() => setModalOpen(true)}>
              <BiAddToQueue size={40} />
              Cadastrar novo
            </Button>

            <Button onClick={() => history.push('/list-matches')}>
              <BsListCheck size={40} />
              Listar peladas
            </Button>
          </WrapperButtons>

          {modalOpen && (
            <ModalRegisterMatch
              onClose={() => setModalOpen(false)}
              open={() => {}}
            />
          )}
        </Container>
      </Content>
    </>
  );
};

export default Home;
