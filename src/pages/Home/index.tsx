import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { FiLogIn } from 'react-icons/fi';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { Container, Table, WrapperForm } from './styles';

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
