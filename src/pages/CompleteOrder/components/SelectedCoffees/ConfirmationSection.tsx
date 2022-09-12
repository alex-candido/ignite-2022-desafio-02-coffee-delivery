import React from 'react';
import Button from '../../../../components/Button';
import { RegularText } from '../../../../components/Typography';
import { ConfirmationSectionContainer } from './styled';

const ConfirmationSection: React.FC = () => {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ 29,70</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 3,58</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ 33,20
        </RegularText>
      </div>

      <Button text="Confirmar Pedido" />
    </ConfirmationSectionContainer>
  );
};

export default ConfirmationSection;
