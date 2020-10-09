import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import ModalRegisterMatch from '../../components/ModalRegisterMatch';
import Header from '../../components/Header';
import { Container, WrapperButtons } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header />
      <Container>
        <h1>Seja bem vindo ao #VemProFut.</h1>
        <strong>Selecione a opção desejada:</strong>

        <WrapperButtons>
          <Button onClick={() => setModalOpen(true)}>Cadastrar novo</Button>

          <Button onClick={() => history.push('/list-matches')}>
            Listar peladas cadastradas
          </Button>
        </WrapperButtons>

        {modalOpen && (
          <ModalRegisterMatch
            onClose={() => setModalOpen(false)}
            open={() => {}}
          />
        )}
      </Container>
    </>
  );
};

export default Home;
