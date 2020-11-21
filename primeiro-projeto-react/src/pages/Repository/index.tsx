import React, { useEffect, useState } from 'react';

import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/Api';

import logImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

// These info comes from the API
interface Repository {
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

// These info comes from the API
interface Issue {
  id: number;
  title: string;
  user: {
    login: string;
  };
  html_url: string;
}

// Same as function Dashboard() {}, but with the second way, I can more easily
// define type
const Repository: React.FunctionComponent = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    // This is the best approach because the two calls are independent and they
    // would have to wait the initial one to be requested
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });
    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });

    // This make the calls assynchronous in the sense of requesting the second
    // only after receiving the first.
    // async function loadData(): Promise<void> {
    //   const repository = await api.get(`repos/${params.repository}`);
    //   const issues = await api.get(`repos/${params.repository}/issues`);

    //   console.log(repository);
    //   console.log(issues);

    // This way executes the promises at the same time
    // const response = await Promise.all([
    //   api.get(`repos/${params.repository}`)
    //   api.get(`repos/${params.repository}/issues`)
    // ]);

    // console.log(response[0]);
    // console.log(response[1]);
    // }
    // loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
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
              <span>Issues abertos</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
