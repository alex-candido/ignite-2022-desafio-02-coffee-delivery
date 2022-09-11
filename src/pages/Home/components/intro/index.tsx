import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import React from 'react';
import { useTheme } from 'styled-components';
import introImg from '../../../../assets/intro-img.png';
import InfoWithIcon from '../../../../components/InfoWithIcon';
import { RegularText } from '../../../../components/Typography';
import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles';

const Intro: React.FC = () => {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconBg={colors['brand-yellow-dark']}
            />
            <InfoWithIcon
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
              iconBg={colors['base-text']}
            />
            <InfoWithIcon
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
              iconBg={colors['brand-yellow']}
            />
            <InfoWithIcon
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
              iconBg={colors['brand-purple']}
            />
          </BenefitsContainer>
        </div>

        <img src={introImg} alt="introImg" />
      </IntroContent>
    </IntroContainer>
  );
};

export default Intro;
