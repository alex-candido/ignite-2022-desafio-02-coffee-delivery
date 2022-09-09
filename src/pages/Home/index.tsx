import React from 'react';
import Intro from './components/intro';
import { HomeContainer } from './styles';

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Intro />;
    </HomeContainer>
  );
};

export default HomePage;
