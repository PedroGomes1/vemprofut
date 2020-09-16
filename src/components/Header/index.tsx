import React from 'react';
import { Link } from 'react-router-dom';
import { CgLogOut } from 'react-icons/cg';
import Switch from '../SwitchTheme';
import { Container, Options } from './styles';
import logo from '../../assets/logofut-header.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/home">
        <img src={logo} alt="logo" />
      </Link>

      <Switch />
      <Options>
        <Link to="/">
          <CgLogOut size="20" />
          Sair
        </Link>
      </Options>
    </Container>
  );
};

export default Header;
