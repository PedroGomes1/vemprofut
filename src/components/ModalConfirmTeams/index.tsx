import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdInfoOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import Button from '../Button';
import { Container, Card, Icon } from './styles';
import api from '../../services/api';

interface ModalProps {
  onClose: () => void;
  open: () => void;
  matchId: number;
  allTeams: Array<number>;
  quantityTeams: number;
}

const ModalConfirmTeams: React.FC<ModalProps> = ({
  onClose,
  open,
  matchId,
  allTeams,
  quantityTeams,
}) => {
  const history = useHistory();

  const handleSubmit = async (): Promise<void> => {
    try {
      await api.post('/confrontations', {
        teams: allTeams,
        match_id: matchId,
        quantity_teams: quantityTeams,
      });

      history.push('/matches', {
        match_id: matchId,
      });
    } catch (error) {
      toast.error('Erro ao cadastrar confrontos');
    }
  };

  return (
    open && (
      <Container>
        <Card>
          <h2>
            <MdInfoOutline size="30" color="#018abd" />
            Deseja confirmar o sorteio dos times?
          </h2>

          <div>
            <Button type="button" onClick={handleSubmit}>
              Finalizar
            </Button>
            <Button type="button" onClick={onClose}>
              Cancelar
            </Button>
          </div>

          <Icon onClick={onClose} />
        </Card>
      </Container>
    )
  );
};

export default ModalConfirmTeams;
