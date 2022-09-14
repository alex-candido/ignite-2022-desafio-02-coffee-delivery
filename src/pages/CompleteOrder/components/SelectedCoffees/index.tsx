import React from 'react';
import { TitleText } from '../../../../components/Typography';
import { useCart } from '../../../../hooks/useCart';
import CoffeeCartCard from '../CoffeeCartCard';
import ConfirmationSection from './ConfirmationSection';
import { DetailsContainer, SelectedCoffeesContainer } from './styled';

const SelectedCoffees: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map(item => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
};

export default SelectedCoffees;
