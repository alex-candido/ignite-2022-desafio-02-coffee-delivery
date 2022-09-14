import { Trash } from 'phosphor-react';
import React from 'react';
import QuantityInput from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import { CartItem } from '../../../../contexts/CartContext';
import { useCart } from '../../../../hooks/useCart';
import { formatMoney } from '../../../../utils/formatMoney';
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles';

interface CoffeeCartCardProps {
  coffee: CartItem;
}

const CoffeeCartCard: React.FC<CoffeeCartCardProps> = ({ coffee }) => {
  const { changeCartItemQuantity } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase');
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease');
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedPrice = formatMoney(coffeeTotal);

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt={coffee.name} />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  );
};

export default CoffeeCartCard;
