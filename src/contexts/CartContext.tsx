import { produce } from 'immer';
import React, { createContext, ReactNode } from 'react';
import { Coffee } from '../pages/Home/components/CoffeeCard';

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  const cartQuantity = cartItems.length;

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      cartItem => cartItem.id === coffee.id,
    );

    const newCart = produce(cartItems, draft => {
      const draftCartItems = draft;
      if (coffeeAlreadyExistsInCart < 0) {
        draftCartItems.push(coffee);
      } else {
        draftCartItems[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, draft => {
      const draftCartItems = draft;
      const coffeeExistsInCart = cartItems.findIndex(
        cartItem => cartItem.id === cartItemId,
      );

      if (coffeeExistsInCart >= 0) {
        const item = draftCartItems[coffeeExistsInCart];
        draftCartItems[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
