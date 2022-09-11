import { ShoppingCart } from 'phosphor-react';
import React from 'react';
import QuantityInput from '../../../../components/QuantityInput';
import { RegularText, TitleText } from '../../../../components/Typography';
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles';

const CoffeeCard: React.FC = () => {
  return (
    <CoffeeCardContainer>
      <img
        src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1663545600&Signature=WXD~HQrDr1GTGmE51fhaLsukSc4WLrWH6DocHC8hE~KNmYg~JPbSUTkALvvw8JTs2UttqiLynTfChu9DnfG2~ljz6WlpnqIi8oLhb3TBbHxWhIG-rEuSDBRCX~OGfgVEtwE0Drj7iYlwu6Yfjj3UfYTAKClEGH0mirjUGygVFQBoxSUn~MIi0xuK6kmGMk~6Iqn214LVy71sXARudNPmE6BaSJMHVF~L0EyjqlIDkT7wjY94iX3q3uyQclx8iCTcxHyEpBMa9tAmdeZsXc48ZKM7MFe88pBtgToyFFc-qqjta2mWoC-BkU2-Hlquha7LJxyB-gKKYsRSUNRT7YfAOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt="cup"
      />

      <Tags>
        <span>tradicional</span>
        <span>com leite</span>
      </Tags>

      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button type="submit">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
};

export default CoffeeCard;
