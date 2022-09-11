import React from 'react';
import CompleteOrderForm from './components/CompleteOrderForm';
import { CompleteOrderContainer } from './styles';

const CompleteOrderPage: React.FC = () => {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
    </CompleteOrderContainer>
  );
};

export default CompleteOrderPage;
