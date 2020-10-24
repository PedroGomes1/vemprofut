/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ModalConfirmTeams from '../../components/ModalConfirmTeams';
import ModalSearchPlayers from '../../components/ModalSearchPlayers';
import { PropsParam } from '../RegisterTeams';
import {
  Container,
  Table,
  WrapperForm,
  WrapperRegisterPlayers,
} from './styles';

import api from '../../services/api';

export interface FormDataProps {
  id: number;
  players: {
    name: string;
    position: string;
    year: number;
  };
  team: {
    id: number;
    name: string;
  };
  matches: {
    name: string;
  };
  position: string;
}

const RegisterPlayers: React.FC = () => {
  const { state } = useLocation<PropsParam>();

  const [matchId] = useState(state.match_id);
  const [userId] = useState(state.user_id);
  const [allTeamsIds] = useState(state.allIds);
  const [tableData, setTableData] = useState<FormDataProps[]>([]);
  const [modalOpenConfirmTeams, setModalOpenConfirmTeams] = useState(false);
  const [modalOpenSearchPlayers, setModalOpenSearchPlayers] = useState(false);
  const [updateTable, setUpdateTable] = useState(true);

  const { register, handleSubmit } = useForm<FormDataProps>();

  useEffect(() => {
    async function loadPlayers(): Promise<void> {
      if (updateTable === true) {
        const response = await api.get(`/matches-players/${matchId}`)

        setTableData(response.data);
        setUpdateTable(false);
      }
    }
    loadPlayers();
  }, [updateTable, matchId]);

  const getRandom = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const registerPlayers = async (data: any): Promise<void> => {

    const randomTeam = getRandom(
      [...allTeamsIds].shift() || 0,
      [...allTeamsIds].pop() || 0,
    );

    try {
      const response = await api.post('/players', {
        name: data.name,
        year: data.year,
        position: data.position,
        user_id: userId
      });

      await api.post('/matches-players', {
        player_id: response.data.id,
        team_id: randomTeam,
        match_id: matchId
      })

      setUpdateTable(true);
      toast.success('Jogador cadastrado com sucesso!');
    } catch (error) {
      if (error.response.data.error.includes('O limite de jogadores do time')) {
        toast.info(`${error.response.data.error}`);
      } else {
        toast.error('Erro ao cadastrar');
      }
    }
  };

  const registerPlayersAlreadyExists = async(data: any): Promise<void> => {

    const randomTeam = getRandom(
      [...allTeamsIds].shift() || 0,
      [...allTeamsIds].pop() || 0,
    );

    try {
      await api.post('/matches-players', {
        player_id: data.id,
        team_id: randomTeam,
        match_id: matchId
      })

      setUpdateTable(true);
    } catch (error) {
      toast.error('Erro ao inserir jogador!');
    }
  }

  const handleDelete = async (id: number): Promise<void> => {
    try {
      await api.delete(`/players/${id}`);

      toast.success('Jogador deletado com sucesso!');

      setTableData(tableData.filter(element => element.id !== id));
    } catch (error) {
      toast.error('Erro ao deletar jogador');
    }
  };

  return (
    <Container>
      <Header />

      <main>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Time</th>
              <th>Posição</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(item => (
              <tr key={item.id}>
                <td>{item.players.name}</td>
                <td>{item.players.year}</td>
                <td>{item.team.name}</td>
                <td>{item.players.position}</td>
                <td className="delete" onClick={() => handleDelete(item.id)}>
                  <MdDeleteForever color="#ff0015" size={20} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <WrapperForm>
          <WrapperRegisterPlayers>
            <form onSubmit={handleSubmit(registerPlayers)} key={1}>
              <h2>Cadastro de jogadores </h2>
              <label htmlFor="name">Nome/Apelido:</label>
              <Input
                id="name"
                name="name"
                type="name"
                register={register}
                required
              />
              <label htmlFor="year">Idade:</label>
              <Input
                id="year"
                name="year"
                type="number"
                label="Idade"
                register={register}
                required
              />

              <label htmlFor="position">Posição:</label>
              <select name="position" id="position" ref={register} required>
                <option value="Goleiro"> Goleiro </option>
                <option value="Zagueiro"> Zagueiro </option>
                <option value="Meio de campo"> Meio de campo </option>
                <option value="Atacante"> Atacante </option>
              </select>

              <Button type="submit">Inserir jogador</Button>
              <Button type="button" onClick={() => setModalOpenSearchPlayers(true)}>
                Selecionar jogadores
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setModalOpenConfirmTeams(true);
                }}
              >
                Sortear times
              </Button>
            </form>
          </WrapperRegisterPlayers>
        </WrapperForm>
      </main>

      {modalOpenConfirmTeams && (
        <ModalConfirmTeams
          onClose={() => setModalOpenConfirmTeams(false)}
          open={() => {}}
          matchId={matchId}
          allTeams={allTeamsIds}
          quantityTeams={allTeamsIds.length}
        />
      )}

      {modalOpenSearchPlayers && (
        <ModalSearchPlayers
          onClose={() => setModalOpenSearchPlayers(false)}
          open={() => {}}
          userId={userId}
          selectedPlayer={registerPlayersAlreadyExists}
          matchId={matchId}
        />
      )}
    </Container>
  );
};

export default RegisterPlayers;
