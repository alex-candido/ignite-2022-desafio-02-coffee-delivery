import React from 'react';
import Intro from './components/intro';
import OurCoffees from './components/OurCoffees';
import { HomeContainer } from './styles';

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  );
};

export default HomePage;
