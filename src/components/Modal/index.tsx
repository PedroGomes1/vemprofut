import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MdInfoOutline } from 'react-icons/md';
import Input from '../Input';
import Button from '../Button';
import { Container, Card, Icon } from './styles';

interface ModalProps {
  onClose: () => void;
  open: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, open }) => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const addToTable = (data: any) => {
    history.push('/matches');
  };

  return (
    open && (
      <Container>
        <Card>
          <h2>
            <MdInfoOutline size="30" color="#018abd" />
            Registrar nome da pelada
          </h2>

          <form onSubmit={handleSubmit(addToTable)}>
            <label htmlFor="name">Digite o nome desejado:</label>
            <Input
              id="name"
              name="name"
              type="name"
              register={register}
              required
            />
            <Button type="submit">Finalizar</Button>
          </form>
          <Icon onClick={onClose} />
        </Card>
      </Container>
    )
  );
};

export default Modal;
