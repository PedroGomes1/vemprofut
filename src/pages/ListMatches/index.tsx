/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { Container, Content } from './styles';
import api from '../../services/api';

interface MatchData {
  id: number;
  createdAt: string | number;
  name: string;
}

const RegisterTeams: React.FC = () => {
  const history = useHistory();
  const [matches, setMatches] = useState<MatchData[]>([]);

  useEffect(() => {
    async function loadMatches(): Promise<void> {
      const response = await api.get<MatchData[]>('/matches');

      const data = response.data.map(item => ({
        ...item,
        createdAt: new Intl.DateTimeFormat('pt-br').format(
          new Date(item.createdAt),
        ),
      }));
      setMatches(data);
    }
    loadMatches();
  }, []);

  return (
    <>
      <Content hasMatches={matches.length}>
        <Header switchVisible={false} />
        <Container>

          {matches.length > 0 ? (
            <>
            <h1>Vizualize suas peladas cadastradas.</h1>
            <ul>
              {matches.map(match => (
                <li
                  key={match.id}
                  onClick={() =>
                    history.push('/matches', {
                      match_id: match.id,
                    })}
                >
                  <img
                    src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2018/06/Futebol-Bola-de-Futebol-PNG.png"
                    alt="Bola"
                  />

                  <div>
                    <h3>{match.name}</h3>
                    <strong>{match.createdAt}</strong>
                  </div>

                  <FiChevronRight size={40} color="#000" />
                </li>
              ))}
            </ul>
           </>
          ) : (
              <h1>Você não tem possui pelada registrada ainda.</h1>
          )}
        </Container>
      </Content>
    </>
  );
};

export default RegisterTeams;
