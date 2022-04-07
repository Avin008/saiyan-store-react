import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  function cartReducerFunc(cartState, action) {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...cartState,
          cart: [...cartState.cart, { ...action.payload, cartQuantity: 1 }],
        };
      case "INCREMENT_QUANTITY":
        return {
          ...cartState,
          cart: cartState.cart.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 }
              : cartItem
          ),
        };
      case "DECREMENT_QUANTITY":
        return {
          ...cartState,
          cart: cartState.cart.map((cartItem) =>
            cartItem.id === action.payload.id
              ? {
                  ...cartItem,
                  cartQuantity:
                    cartItem.cartQuantity > 1
                      ? cartItem.cartQuantity - 1
                      : cartItem.cartQuantity,
                }
              : cartItem
          ),
        };
      case "REMOVE_FROM_CART":
        return {
          ...cartState,
          cart: cartState.cart.filter((obj) => obj._id != action.payload._id),
        };
      default:
        return { ...cartState };
    }
  }

  const [cartState, cartDispatch] = useReducer(cartReducerFunc, {
    cart: [],
  });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartContextProvider };
