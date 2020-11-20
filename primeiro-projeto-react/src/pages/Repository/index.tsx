import React from 'react';

import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

// Same as function Dashboard() {}, but with the second way, I can more easily
// define type
const Repository: React.FunctionComponent = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return <h1>Repository:{params.repository}</h1>;
};

export default Repository;
