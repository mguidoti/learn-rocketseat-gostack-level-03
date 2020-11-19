import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';
// Same as function Dashboard() {}, but with the second way, I can more easily
// define type
const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/44419136?s=460&v=4"
            alt="Marcus Guidoti"
          />
          <div>
            <strong>mguidoti/lycophron</strong>
            <p>description of the repo</p>
          </div>
          <FiChevronRight />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/44419136?s=460&v=4"
            alt="Marcus Guidoti"
          />
          <div>
            <strong>mguidoti/lycophron</strong>
            <p>description of the repo</p>
          </div>
          <FiChevronRight />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/44419136?s=460&v=4"
            alt="Marcus Guidoti"
          />
          <div>
            <strong>mguidoti/lycophron</strong>
            <p>description of the repo</p>
          </div>
          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
