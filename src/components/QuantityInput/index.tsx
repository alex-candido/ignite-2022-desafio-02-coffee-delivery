import { Minus, Plus } from 'phosphor-react';
import React from 'react';
import { IconWrapper, QuantityInputContainer } from './styles';

interface QuantityInputProps {
  size?: 'medium' | 'small';
}

const QuantityInput: React.FC<QuantityInputProps> = ({ size = 'medium' }) => {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
};

export default QuantityInput;
