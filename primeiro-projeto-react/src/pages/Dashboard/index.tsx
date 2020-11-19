import React from 'react';

import { Title } from './styles';
// Same as function Dashboard() {}, but with the second way, I can more easily
// define type
const Dashboard: React.FunctionComponent = () => {
  return <Title>Explore Repositórios no GitHub</Title>;
};

export default Dashboard;
