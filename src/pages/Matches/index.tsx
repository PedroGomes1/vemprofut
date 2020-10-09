import React, { useEffect, useState } from 'react';

import { MdClose } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { Container, Table, WrapperList } from './styles';
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
      const response = await api.get('/players', {
        params: {
          match_id: matchId,
        },
      });

      setTableData(response.data);
    }
    loadPlayers();
  }, [matchId]);

  return (
    <Container>
      <Header />
      <h1>{tableData[0]?.matches.name}</h1>
      <main>
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
                <td>{player.name}</td>
                <td>{player.year}</td>
                <td>{player.team.name}</td>
                <td>{player.position}</td>
              </tr>
            ))}
          </tbody>
        </Table>

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
    </Container>
  );
};

export default Matches;
