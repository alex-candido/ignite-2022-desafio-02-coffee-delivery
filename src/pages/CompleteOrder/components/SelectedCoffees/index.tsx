import React from 'react';
import { TitleText } from '../../../../components/Typography';
import { DetailsContainer, SelectedCoffeesContainer } from './styled';

const SelectedCoffees: React.FC = () => {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <p>itens</p>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
};

export default SelectedCoffees;
