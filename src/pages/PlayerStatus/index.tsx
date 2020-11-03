import React, { useState, useEffect, useCallback } from 'react';
import Switch from 'react-switch';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import api from '../../services/api';
import { Container, Content, Table } from './styles';

const PlayerStatus: React.FC = () => {
  const [players, setPlayers] = useState<TableProps[]>([]);

  const [updatedTable, setUpdatedTable] = useState(true);

  interface TableProps {
    id: number;
    name: string;
    year: number;
    team: {
      id: number;
      name: string;
    };
    matches: {
      name: string;
    };
    position: string;
    is_active: boolean;
  }
  useEffect(() => {
    async function loadPlayers(): Promise<void> {
      if (updatedTable) {
        const response = await api.get<TableProps[]>('players');
        setPlayers(response.data);
      }
      setUpdatedTable(false);
    }
    loadPlayers();
  }, [updatedTable]);

  const handleUpdated = useCallback(async (id: number, is_active: boolean) => {
    try {
      await api.put(`players/${id}`, {
        is_active: !is_active,
      });
      setUpdatedTable(true);
    } catch (error) {
      toast.error('Erro ao atualizar o estado do jogador');
    }
  }, []);
  return (
    <>
      <Content>
        <Header switchVisible={false} />
        <Container>
          <h1>Listagem de todos os jogadores cadastrados</h1>

          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Posição</th>
                <th>Habilitado/Desabilitado</th>
              </tr>
            </thead>
            <tbody>
              {players.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.year}</td>
                  <td>{item.position}</td>
                  <td>
                    <Switch
                      onChange={() => handleUpdated(item.id, item.is_active)}
                      handleDiameter={30}
                      height={30}
                      width={65}
                      offColor="#ff1a1a"
                      onColor="#00ff80"
                      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                      checked={!!item.is_active}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Content>
    </>
  );
};

export default PlayerStatus;
