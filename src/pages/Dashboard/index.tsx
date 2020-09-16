import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';

import {
  Title, Form, Repositories, ApiError,
} from './styles';

interface ApiResponse {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<ApiResponse[]>(() => {
    const savedRepos = localStorage.getItem('@GithubExplorer:repositories');

    if (savedRepos) {
      return JSON.parse(savedRepos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo || !newRepo.match(/\//)) {
      setInputError('Digite no formato autor/nome do repositório.');
      return;
    }

    try {
      const response = await api.get<ApiResponse>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca pelo repositório.');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">
          Pesquisar
        </button>
      </Form>

      {inputError && (
        <ApiError>{inputError}</ApiError>
      )}

      <Repositories>
        {repositories.map((repo) => (
          <Link key={repo.full_name} to={`/repository/${repo.full_name}`}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>
                {repo.full_name}
              </strong>
              <p>{repo.description || 'No description available'}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
