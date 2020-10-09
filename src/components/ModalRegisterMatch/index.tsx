import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MdInfoOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import Input from '../Input';
import Button from '../Button';
import { Container, Card, Icon } from './styles';
import api from '../../services/api';

interface ModalProps {
  onClose: () => void;
  open: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, open }) => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const handleSubmitMatch = async (data: any): Promise<void> => {
    try {
      const response = await api.post('/matches', {
        name: data.name,
      });

      history.push('/register-teams', {
        match_id: response.data.id,
      });
    } catch (error) {
      toast.error('Erro ao cadastrar nome da pelada');
    }
  };

  return (
    open && (
      <Container>
        <Card>
          <h2>
            <MdInfoOutline size="30" color="#018abd" />
            Registrar nome da pelada
          </h2>

          <form onSubmit={handleSubmit(handleSubmitMatch)}>
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
