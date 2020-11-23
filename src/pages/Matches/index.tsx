/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';

import { MdClose } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import Loading from 'react-loading';
import { Container, WrapperTable, Table, WrapperList } from './styles';
import Button from '../../components/Button';
import { FormDataProps } from '../RegisterPlayers';
import { PropsParam } from '../RegisterTeams';
import Header from '../../components/Header';
import api from '../../services/api';

interface ConfrontationsData {
  id: number;
  teamone: {
    name: string;
  };
  teamtwo: {
    name: string;
  };
}

const Matches: React.FC = () => {
  const { state } = useLocation<PropsParam>();
  const [matchId] = useState(state.match_id);
  const [tableData, setTableData] = useState<FormDataProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [confrontations, setConfrontations] = useState<ConfrontationsData[]>(
    [],
  );

  useEffect(() => {
    async function loadMatches(): Promise<void> {
      const response = await api.get('/confrontations', {
        params: {
          match_id: matchId,
        },
      });

      setConfrontations(response.data);
    }
    loadMatches();
  }, [matchId]);

  useEffect(() => {
    async function loadPlayers(): Promise<void> {
      const response = await api.get(`/matches-players/${matchId}`);

      setTableData(response.data);
    }
    loadPlayers();
  }, [matchId]);

  const handleGeneratePdf = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await api.post('/pdf', {
        tableData,
        confrontations,
      });

      window.open(response.data);
      setLoading(false);
    } catch (err) {
      alert('Erro ao gerar relatório');
    }
  };

  return (
    <Container>
      <Header />
      <h1>{tableData[0]?.matches.name}</h1>
      <main>
        <WrapperTable>
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Time</th>
                <th>Posição</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(player => (
                <tr key={player.id}>
                  <td>{player.players.name}</td>
                  <td>{player.players.year}</td>
                  <td>{player.team.name}</td>
                  <td>{player.players.position}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </WrapperTable>
        <WrapperList>
          <ul>
            {confrontations.map(confrontation => (
              <li key={confrontation.id}>
                <strong>{confrontation.teamone.name}</strong>
                <MdClose size="30" color="#000" />
                <strong>{confrontation.teamtwo.name}</strong>
              </li>
            ))}
          </ul>
        </WrapperList>
      </main>

      <Button type="button" onClick={handleGeneratePdf}>
        {loading ? (
          <>
            <Loading
              type="spinningBubbles"
              color="#ffffff"
              height="40px"
              width="40px"
            />
            <span style={{ marginLeft: 20 }}>Aguarde</span>
          </>
        ) : (
          'Gerar relatório'
        )}
      </Button>
    </Container>
  );
};

export default Matches;
