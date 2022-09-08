import { MapPin, ShoppingCart } from 'phosphor-react';
import React from 'react';
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg';
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogoImg} alt="coffeeLogoImg" />

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Fortaleza, CE
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
