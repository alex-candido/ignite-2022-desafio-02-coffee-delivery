import { CreditCard } from 'phosphor-react';
import React from 'react';
import { PaymentMethodContainer } from './styles';

const PaymentMethodInput: React.FC = () => {
  return (
    <PaymentMethodContainer>
      <CreditCard size={16} />
      Cartão de crédito
    </PaymentMethodContainer>
  );
};

export default PaymentMethodInput;
