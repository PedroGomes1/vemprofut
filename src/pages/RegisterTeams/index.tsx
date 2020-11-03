/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useLocation, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  WrapperPlayersPerTeam,
  WrapperRegisterTeams,
} from './styles';

import api from '../../services/api';

export interface PropsParam {
  match_id: number;
  user_id: number;
  allIds: Array<number>;
}

interface responseDataTeams {
  id: number;
  name: string;
  quantity: number;
  match_id: number;
}

interface formDataProps {
  name?: string;
}

const RegisterTeams: React.FC = () => {
  const history = useHistory();
  const { state } = useLocation<PropsParam>();

  const [matchId] = useState(state.match_id);
  const [userId] = useState(state.user_id);

  const { register, handleSubmit } = useForm();

  const [quantityPlayersPerTeam, setQuantityPlayersPerTeam] = useState(5);
  const [visibleRegisterTeams, setVisibleRegisterTeams] = useState(true);
  const [visiblePlayersPerTeam, setPlayersPerTeam] = useState(false);

  const handleRegisterTeams = async (data: formDataProps): Promise<void> => {
    const teams = data.name?.split(',').map((item: string) => item.trim());

    if (teams && !(teams.length % 2 === 0)) {
      toast.error('Digite quantidades pares de times');
      return;
    }

    try {
      const response = await api.post('/teams', {
        teams,
        match_id: matchId,
        quantity: quantityPlayersPerTeam,
      });

      const allIds = response.data.map((item: responseDataTeams) => item.id);

      toast.success('Times cadastrados com sucesso!');

      history.push('/register-players', {
        match_id: matchId,
        user_id: userId,
        allIds,
      });
    } catch (error) {
      toast.error('Deu ruim');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h2>Registre o modo e os nomes dos times participantes abaixo.</h2>

        <WrapperPlayersPerTeam disabled={visiblePlayersPerTeam}>
          <label htmlFor="name">Escolha o modo de jogo:</label>
          <select
            name="quantity"
            onChange={e => setQuantityPlayersPerTeam(Number(e.target.value))}
          >
            <option value="5">Futsal - (5 jogadores por time) </option>
            <option value="7">Society - (7 jogadores por time) </option>
            <option value="11">Campo - (11 jogadores por time) </option>
          </select>
          <Button
            type="button"
            onClick={() => {
              setVisibleRegisterTeams(false);
              setPlayersPerTeam(true);
            }}
          >
            Confirmar
          </Button>
        </WrapperPlayersPerTeam>

        <WrapperRegisterTeams disabled={visibleRegisterTeams}>
          <form onSubmit={handleSubmit(handleRegisterTeams)}>
            <label htmlFor="name">Digite os nomes desejados:</label>
            <i>(Ex: Corinthians, São Paulo, Internacional, Flamengo)</i>
            <Input
              id="name"
              name="name"
              type="name"
              register={register}
              required
            />
            <Button type="submit">Finalizar</Button>
          </form>
        </WrapperRegisterTeams>
      </Container>
    </>
  );
};

export default RegisterTeams;
