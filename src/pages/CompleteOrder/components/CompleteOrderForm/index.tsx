import { MapPinLine } from 'phosphor-react';
import React from 'react';
import { useTheme } from 'styled-components';
import { TitleText } from '../../../../components/Typography';
import SectionTitle from '../SectionTitle';
import AddressForm from './AddressForm';
import { CompleteOrderFormContainer, FormSectionContainer } from './styles';

const CompleteOrderForm: React.FC = () => {
  const { colors } = useTheme();

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
        />

        <AddressForm />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
};

export default CompleteOrderForm;
