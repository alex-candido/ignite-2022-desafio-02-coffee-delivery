import React from 'react';
import CompleteOrderForm from './components/CompleteOrderForm';
import SelectedCoffees from './components/SelectedCoffees';
import { CompleteOrderContainer } from './styles';

const CompleteOrderPage: React.FC = () => {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  );
};

export default CompleteOrderPage;
