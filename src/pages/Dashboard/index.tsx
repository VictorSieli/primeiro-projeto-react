import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/29362449?s=460&u=b4928f735c6e351a0c702ae8a709d897e7c35a13&v=4"
            alt="Profile"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Mimimimi</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/29362449?s=460&u=b4928f735c6e351a0c702ae8a709d897e7c35a13&v=4"
            alt="Profile"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Mimimimi</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/29362449?s=460&u=b4928f735c6e351a0c702ae8a709d897e7c35a13&v=4"
            alt="Profile"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Mimimimi</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
