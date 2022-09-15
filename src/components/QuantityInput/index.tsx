import { Minus, Plus } from 'phosphor-react';
import React from 'react';
import { IconWrapper, QuantityInputContainer } from './styles';

interface QuantityInputProps {
  size?: 'medium' | 'small';
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium',
}) => {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
};

export default QuantityInput;
