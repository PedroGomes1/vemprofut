import React, { useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import logo from '../../assets/logofut.png';

import { Container } from './styles';

const Landing: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <div>
        <img src={logo} alt="logo" />
      </div>

      <h1>Seja bem vindo ao #VemProFut.</h1>
      <strong>Clique no botão abaixo para registrar uma nova pelada!</strong>
      <Button onClick={() => setModalOpen(true)}>Cadastrar novo</Button>

      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)} open={() => {}} />
      )}
    </Container>
  );
};

export default Landing;
