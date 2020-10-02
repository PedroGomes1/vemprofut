/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import {
  Container,
  Table,
  WrapperForm,
  WrapperPlayersPerTeam,
  WrapperRegisterPlayers,
} from './styles';
import api from '../../services/api';

interface FormDataProps {
  id: number;
  name: string;
  year: number;
  team: {
    id: number;
    name: string;
  };
  position: string;
}

interface FormDataProps2 {
  quantity: number;
}

interface PropsParam {
  match_id: number;
}

const Home: React.FC = () => {
  const { state } = useLocation<PropsParam>();

  const [matchId] = useState(state.match_id);
  const [tableData, setTableData] = useState<FormDataProps[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [updateTable, setUpdateTable] = useState(true);
  const [goalkeeper, setIsGoalkeeper] = useState(false);
  const [, setPlayersPerTeam] = useState(0);
  const [visibleFormPlayers, setVisibleFormPlayers] = useState(1);
  const [confirmPlayersPerTeam, setConfirmPlayersPerTeam] = useState(0);
  const { register, handleSubmit } = useForm<FormDataProps>();
  const {
    register: registerQuantity,
    handleSubmit: handleSubmitQuantity,
  } = useForm<FormDataProps2>();
  useEffect(() => {
    async function loadPlayers(): Promise<void> {
      if (updateTable === true) {
        const response = await api.get('/players');

        setTableData(response.data);
        setUpdateTable(false);
      }
    }
    loadPlayers();
  }, [updateTable]);

  const registerPlayersPerTeam = async (data: any): Promise<void> => {
    const randomTeam = Math.random() * (4 - 1) + 1;

    try {
      await api.post('/players', {
        name: data.name,
        year: data.year,
        position: data.position,
        team_id: Math.round(randomTeam),
        matches_id: matchId,
        // isgoalkeeper: data.isgoalkeeper,
      });
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

  const updateQuantityPlayers = async (data: any): Promise<void> => {
    try {
      await api.put('/teams', {
        quantity: data.quantity,
      });

      setConfirmPlayersPerTeam(1);
      setVisibleFormPlayers(0);
    } catch (error) {
      toast.error('Erro ao atualizar a quantidade por time');
    }
  };

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
                <td>{item.name}</td>
                <td>{item.year}</td>
                <td>{item.team.name}</td>
                <td>{item.position}</td>
                <td className="delete" onClick={() => handleDelete(item.id)}>
                  <MdDeleteForever color="#ff0015" size={20} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <WrapperForm>
          <WrapperPlayersPerTeam playersPerTeam={confirmPlayersPerTeam}>
            <form
              onSubmit={handleSubmitQuantity(updateQuantityPlayers)}
              key={2}
            >
              <label htmlFor="name">Quantidade de jogadores por time:</label>
              <select
                name="quantity"
                onChange={e => setPlayersPerTeam(Number(e.target.value))}
                ref={registerQuantity}
              >
                <option value="">Escolher</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
              </select>
              <Button type="submit">Confirmar</Button>
            </form>
          </WrapperPlayersPerTeam>

          <WrapperRegisterPlayers visibleFormPlayers={visibleFormPlayers}>
            <form onSubmit={handleSubmit(registerPlayersPerTeam)} key={1}>
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
              <select
                name="position"
                id="position"
                disabled={goalkeeper}
                ref={register}
                required
              >
                <option value="Goleiro"> Goleiro </option>
                <option value="Zagueiro"> Zagueiro </option>
                <option value="Meio de campo"> Meio de campo </option>
                <option value="Atacante"> Atacante </option>
              </select>

              <Button type="submit">Inserir jogador</Button>
              <Button type="button" onClick={() => setModalOpen(true)}>
                Sortear times
              </Button>
            </form>
          </WrapperRegisterPlayers>
        </WrapperForm>
      </main>

      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)} open={() => {}} />
      )}
    </Container>
  );
};

export default Home;
