import React from 'react';
import Input from '../../../../components/Input';
import { AddressFormContainer } from './styles';

const AddressForm: React.FC = () => {
  return (
    <AddressFormContainer>
      <Input placeholder="CEP" type="number" className="cep" />
      <Input placeholder="Rua" className="street" />
      <Input type="number" placeholder="Número" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </AddressFormContainer>
  );
};

export default AddressForm;
