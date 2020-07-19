import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';
interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explore"></img>
        <Link to="/">
          <FiChevronLeft size={16}></FiChevronLeft>Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/29362449?s=460&u=b4928f735c6e351a0c702ae8a709d897e7c35a13&v=4"
            alt="Profile Image"
          />
          <div>
            <strong>Titulo</strong>
            <p>Descrição do Repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={'isahnasjvnjak'}>
          <div>
            <strong>asiocaschas</strong>
            <p>ancoisancasn</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
