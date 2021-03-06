import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiArrowLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RouteParams {
  repository: string;
}

interface ApiResponse {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<ApiResponse | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const { params } = useRouteMatch<RouteParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((res) => setRepository(res.data));
    api.get(`repos/${params.repository}/issues`).then((res) => setIssues(res.data));
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiArrowLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{(repository.full_name).split('/')[0]}</strong>
              <strong>{(repository.full_name).split('/')[1]}</strong>
              <p>{repository.description || 'Repository has no description'}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {(issues.length > 0)
          && (issues.map((issue) => (
            <a key={issue.id} href={issue.html_url}>
              <div>
                <strong>
                  {issue.title}
                </strong>
                <p>{issue.user.login}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          )))}
      </Issues>
    </>
  );
};

export default Repository;
