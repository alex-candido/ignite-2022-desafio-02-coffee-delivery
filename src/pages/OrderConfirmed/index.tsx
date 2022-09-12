import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import React from 'react';
import { useTheme } from 'styled-components';
import confirmedOrderIllustration from '../../assets/confirmed-order.svg';
import InfoWithIcon from '../../components/InfoWithIcon';
import { RegularText, TitleText } from '../../components/Typography';
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles';

const OrderConfirmedPage: React.FC = () => {
  const { colors } = useTheme();
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em{' '}
                <strong>Rua Francisco Mendes de Oliveira, 102</strong>
                <br />
                Quintino Cunha - Fortaleza, CE
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} alt="" className="src" />
      </section>
    </OrderConfirmedContainer>
  );
};

export default OrderConfirmedPage;
