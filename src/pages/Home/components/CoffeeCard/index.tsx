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
  Tags
} from './styles';

interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

const CoffeeCard: React.FC<CoffeeProps> = ({ coffee }) => {
  return (
    <CoffeeCardContainer>
      <img
        src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1663545600&Signature=WXD~HQrDr1GTGmE51fhaLsukSc4WLrWH6DocHC8hE~KNmYg~JPbSUTkALvvw8JTs2UttqiLynTfChu9DnfG2~ljz6WlpnqIi8oLhb3TBbHxWhIG-rEuSDBRCX~OGfgVEtwE0Drj7iYlwu6Yfjj3UfYTAKClEGH0mirjUGygVFQBoxSUn~MIi0xuK6kmGMk~6Iqn214LVy71sXARudNPmE6BaSJMHVF~L0EyjqlIDkT7wjY94iX3q3uyQclx8iCTcxHyEpBMa9tAmdeZsXc48ZKM7MFe88pBtgToyFFc-qqjta2mWoC-BkU2-Hlquha7LJxyB-gKKYsRSUNRT7YfAOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt="cup"
      />

      <Tags>
        {coffee.tags.map(tag => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

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
