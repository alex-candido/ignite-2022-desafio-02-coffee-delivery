import React from 'react';
import { TitleText } from '../../../../components/Typography';
import { CompleteOrderFormContainer } from './styles';

const CompleteOrderForm: React.FC = () => {
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
    </CompleteOrderFormContainer>
  );
};

export default CompleteOrderForm;
