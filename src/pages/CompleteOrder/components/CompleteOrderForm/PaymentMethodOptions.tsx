import { Bank, CreditCard, Money } from 'phosphor-react';
import React from 'react';
import PaymentMethodInput from '../PaymentMethodInput/Index';
import { PaymentMethodOptionsContainer } from './styles';

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
};

const PaymentMethodOptions: React.FC = () => {
  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
        />
      ))}
    </PaymentMethodOptionsContainer>
  );
};

export default PaymentMethodOptions;
