import { MapPin, ShoppingCart } from 'phosphor-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg';
import { useCart } from '../../hooks/useCart';
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles';

const Header: React.FC = () => {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="coffeeLogoImg" />
        </NavLink>

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Fortaleza, CE
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
