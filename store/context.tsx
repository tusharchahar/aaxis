import { ReactNode, useState } from 'react';
import { createContext } from 'use-context-selector';
import { product } from '../types/types';

export const CartContext = createContext({
    cartItems: [] as product[],
    addToCart: (item: product)=>{},
    removeFromCart: (item: product)=>{},
    getCartTotal: (): number => { return 1; },
    changeQuantity: (item: product, quantity: number)=>{}
});

export const CartProvider = ({ children }: { children: ReactNode}) => {
    const [cartItems, setCartItems] = useState<product[]>([]);

    const addToCart = (item: product): void => {
        const isItemInCart = cartItems.find((cartItem: product) => cartItem.id === item.id); // check if the item is already in the cart
      
        if (isItemInCart) {
        setCartItems(
            cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity? cartItem.quantity + 1 : 1 }
                : cartItem // otherwise, return the cart item
            )
        );
        } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
        }
    };

    const changeQuantity = (item: product, quantitty: number) => {
        setCartItems(
          cartItems.map((cartItem) => //set the quantity of the item only is id matches
          cartItem.id === item.id
              ? { ...cartItem, quantity: quantitty }
              : cartItem // otherwise, return the cart item
          )
        );
    }

    const removeFromCart = (item : product): void => {
        const isItemInCart: product| undefined = cartItems.find((cartItem : product) => cartItem.id === item.id);
      
        if (isItemInCart) {
          setCartItems(cartItems.filter((cartItem : product) => cartItem.id !== item.id));
        }
    };

    const getCartTotal = (): number => {
        return cartItems.reduce((total, item: product) => total + item.price * (item.quantity? item.quantity : 0), 0); // calculate the total price of the items in the cart
    };

    return (
        <CartContext.Provider
          value={{
            cartItems,
            addToCart,
            removeFromCart,
            getCartTotal,
            changeQuantity
          }}
        >
          {children}
        </CartContext.Provider>
    );
}