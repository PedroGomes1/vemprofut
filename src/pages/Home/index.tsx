import React, { useState, FormEvent } from 'react';

import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { Container, Table, WrapperForm, WrapperPlayersPerTeam } from './styles';

interface FormDataProps {
  name: string;
  age: number;
  position: string;
}

interface TableDataProps extends FormDataProps {
  active: string;
  team: string;
  actions: string;
}

const Home: React.FC = () => {
  const [tableData, setTableData] = useState<TableDataProps[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [playersPerTeam, setPlayersPerTeam] = useState(0);
  const [confirmPlayersPerTeam, setConfirmPlayersPerTeam] = useState(0);
  const { register, handleSubmit } = useForm<FormDataProps>();

  const addToTable = (data: FormDataProps) => {
    setTableData([
      ...tableData,
      {
        name: data.name,
        active: '✔',
        age: data.age,
        team: 'Corinthians',
        position: data.position,
        actions: '❌',
      },
    ]);
  };

  const registerPlayersPerTeam = (event: FormEvent) => {
    event.preventDefault();

    setConfirmPlayersPerTeam(playersPerTeam);
  };

  return (
    <Container>
      <Header />

      <main>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Ativo</th>
              <th>Idade</th>
              <th>Time</th>
              <th>Posição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(item => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.active}</td>
                <td>{item.age}</td>
                <td>{item.team}</td>
                <td>{item.position}</td>
                <td>{item.actions}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <WrapperForm>
          <WrapperPlayersPerTeam playersPerTeam={confirmPlayersPerTeam}>
            <form onSubmit={registerPlayersPerTeam}>
              <label htmlFor="name">Quantidade de jogadores por time:</label>
              <select
                name="peoples-team"
                onChange={e => setPlayersPerTeam(Number(e.target.value))}
              >
                <option value="">Escolher</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
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

          <form onSubmit={handleSubmit(addToTable)}>
            <h2>Cadastro de jogadores </h2>
            <label htmlFor="name">Nome/Apelido:</label>
            <Input
              id="name"
              name="name"
              type="name"
              register={register}
              required
            />
            <label htmlFor="age">Idade:</label>
            <Input
              id="age"
              name="age"
              type="number"
              label="Idade"
              register={register}
              required
            />
            <div>
              <input type="checkbox" name="goleiro" ref={register} />
              <label htmlFor="goleiro">Goleiro do time</label>
            </div>

            <label htmlFor="position">Posição:</label>
            <select name="position" id="position" ref={register} required>
              <option value="valor1"> Goleiro </option>
              <option value="valor2"> Zagueiro </option>
              <option value="valor3"> Meio de campo </option>
              <option value="valor3"> Atacante </option>
            </select>

            <Button type="submit">Inserir jogador</Button>
            <Button type="button" onClick={() => setModalOpen(true)}>
              Sortear times
            </Button>
          </form>
        </WrapperForm>
      </main>

      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)} open={() => {}} />
      )}
    </Container>
  );
};

export default Home;
