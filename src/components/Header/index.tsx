import React from 'react';
import { Link } from 'react-router-dom';
import { CgLogOut } from 'react-icons/cg';
import Switch from '../SwitchTheme';
import { Container, Options } from './styles';
import logo from '../../assets/logofut-header.png';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Link to="/home">
        <img src={logo} alt="logo" />
      </Link>

      <Switch />
      <Options>
        <button type="button" onClick={signOut}>
          <CgLogOut size="20" />
          <span>Sair</span>
        </button>
      </Options>
    </Container>
  );
};

export default Header;
