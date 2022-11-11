import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "../context/auth-context";
const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);
  const { authState } = useAuthContext();

  useEffect(() => {
    const getCartData = async () => {
      const res = await axios.get("/api/user/cart", {
        headers: {
          authorization: authState.token,
        },
      });

      setCartState(res.data.cart);
    };

    getCartData();
  }, [authState.status]);

  return (
    <CartContext.Provider value={{ cartState, setCartState }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartContextProvider };
