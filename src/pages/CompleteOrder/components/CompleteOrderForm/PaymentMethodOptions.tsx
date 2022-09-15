import { Bank, CreditCard, Money } from 'phosphor-react';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { RegularText } from '../../../../components/Typography';
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
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register('paymentMethod')}
        />
      ))}

      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  );
};

export default PaymentMethodOptions;
