import React from 'react';
import { Link } from 'react-router-dom';
import { CgLogOut } from 'react-icons/cg';
import { Container } from './styles';
import logo from '../../assets/logofut-header.png';

const Header: React.FC = () => (
  <Container>
    <Link to="/home">
      <img src={logo} alt="logo" />
    </Link>

    <Link to="/">
      <CgLogOut size="20" color="#312e38" />
      Sair
    </Link>
  </Container>
);

export default Header;
