import React from 'react';
import { TitleText } from '../../../../components/Typography';
import CoffeeCartCard from '../CoffeeCartCard';
import { DetailsContainer, SelectedCoffeesContainer } from './styled';

const SelectedCoffees: React.FC = () => {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
};

export default SelectedCoffees;
