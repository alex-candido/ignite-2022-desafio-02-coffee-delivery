import React from 'react';
import PaymentMethodInput from '../PaymentMethodInput/Index';
import { PaymentMethodOptionsContainer } from './styles';

const PaymentMethodOptions: React.FC = () => {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionsContainer>
  );
};

export default PaymentMethodOptions;
