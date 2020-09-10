import React from 'react';

import { MdClose } from 'react-icons/md';
import { Container, Table, WrapperList } from './styles';

import Header from '../../components/Header';

const Matches: React.FC = () => (
  <Container>
    <Header />
    <h1>Pelada tal</h1>
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
          <tr>
            <td>name</td>
            <td>age</td>
            <td>team</td>
            <td>position</td>
          </tr>
          <tr>
            <td>name</td>
            <td>age</td>
            <td>team</td>
            <td>position</td>
          </tr>
          <tr>
            <td>name</td>
            <td>age</td>
            <td>team</td>
            <td>position</td>
          </tr>
          <tr>
            <td>name</td>
            <td>age</td>
            <td>team</td>
            <td>position</td>
          </tr>
          <tr>
            <td>name</td>
            <td>age</td>
            <td>team</td>
            <td>position</td>
          </tr>
          <tr>
            <td>name</td>
            <td>age</td>
            <td>team</td>
            <td>position</td>
          </tr>
        </tbody>
      </Table>

      <WrapperList>
        <ul>
          <li>
            Curinthia
            <MdClose size="30" color="#000" />
            Peppas
          </li>
          <li>
            Curinthia
            <MdClose size="30" color="#000" />
            Peppas
          </li>
          <li>
            Curinthia
            <MdClose size="30" color="#000" />
            Peppas
          </li>
          <li>
            Curinthia
            <MdClose size="30" color="#000" />
            Peppas
          </li>
          <li>
            Curinthia
            <MdClose size="30" color="#000" />
            Peppas
          </li>
          <li>
            Curinthia
            <MdClose size="30" color="#000" />
            Peppas
          </li>
          <li>
            Curinthia
            <MdClose size="30" color="#000" />
            Peppas
          </li>
          <li>
            Curinthia
            <MdClose size="30" color="#000" />
            Peppas
          </li>
        </ul>
      </WrapperList>
    </main>
  </Container>
);

export default Matches;
