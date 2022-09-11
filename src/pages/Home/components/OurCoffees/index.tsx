import React from 'react';
import { TitleText } from '../../../../components/Typography';
import CoffeeCard from '../CoffeeCard';
import { CoffeeList, OurCoffeesContainer } from './styles';

const OurCoffees: React.FC = () => {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeList>
    </OurCoffeesContainer>
  );
};

export default OurCoffees;
