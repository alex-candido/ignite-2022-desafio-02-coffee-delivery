import { Trash } from 'phosphor-react';
import React from 'react';
import QuantityInput from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles';

const CoffeeCartCard: React.FC = () => {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1664150400&Signature=J7IdVg5UdXRL-xzgoKnwbaLzC7q4PBNg2fkLMvis6ge~Q9tNvUjdTVFoGjg0wIbTeyeZKTt9EF4JVvYyYnMMytRtW17RpaIHR1OHHoLjmVbw8plB1jN7Hjwq-tGFb7OMeMy8qeM32CCX7EcczsCpBo8ovrYWH3bLiTmnptIcnUaSpCxYu~WoydQSyHsBNIqUc5Yci5-TNbBFtx51fNNmdbjGBqtuP1DKMKs0oepI5q0z3PW3br7T6OyJGQ4tqftSh9bseOwYb9efmAoQUHypSLu-79xdK29tn68-HAocALYYs0cvnd0pGjQYTJLMeqTmQswtbpeTzBKWCLxYQClHqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="Coffee"
        />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  );
};

export default CoffeeCartCard;
