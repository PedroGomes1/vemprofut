import React, { useCallback, useEffect, useState } from 'react';
import { MdInfoOutline } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Container, Card, Icon, Table } from './styles';
import api from '../../services/api';
import Input from '../Input';

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
}

interface MatchPlayerProps {
  id: number;
  player_id: number;
}

interface ModalProps {
  onClose: () => void;
  open: () => void;
  selectedPlayer: (item: any) => void;
  matchId: number;
}

const SearchModal: React.FC<ModalProps> = ({
  onClose,
  open,
  selectedPlayer,
  matchId,
}) => {
  const { register } = useForm();
  const [tableData, setTableData] = useState<TableProps[]>([]);
  const [matchPlayers, setMatchPlayers] = useState<number[]>([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    async function loadMatchPlayer(): Promise<void> {
      const response = await api.get<MatchPlayerProps[]>(
        `/matches-players/${matchId}`,
      );

      setMatchPlayers(response.data.map(matchplayer => matchplayer.player_id));
    }
    loadMatchPlayer();
  }, [matchId]);

  useEffect(() => {
    async function loadPlayers(): Promise<void> {
      const response = await api.get<TableProps[]>('players', {
        params: {
          namePlayer: searchInput,
          is_active: 1,
        },
      });
      setTableData(
        response.data.filter(item => !matchPlayers.includes(item.id)),
      );
    }
    loadPlayers();
  }, [searchInput, matchPlayers]);

  const checkAvailablePlayers = useCallback(
    (id: number): void => {
      const availablePlayers = tableData.filter(item => item.id !== id);
      setTableData(availablePlayers);
      setMatchPlayers([...matchPlayers, id]);
    },

    [tableData, matchPlayers],
  );

  return (
    open && (
      <Container>
        <Card>
          <h2>
            <MdInfoOutline size="30" color="#018abd" />
            Selecione os jogadores abaixo
          </h2>

          <Input
            name="email"
            type="email"
            icon={FiSearch}
            placeholder="Busque por nome do jogador"
            register={register}
            onChange={e => setSearchInput(e.target.value)}
            required
          />

          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Posição</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(item => (
                <tr
                  key={item.id}
                  onClick={() => {
                    selectedPlayer(item);
                    checkAvailablePlayers(item.id);
                  }}
                >
                  <td>{item.name}</td>
                  <td>{item.year}</td>
                  <td>{item.position}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Icon onClick={onClose} />
        </Card>
      </Container>
    )
  );
};

export default SearchModal;
