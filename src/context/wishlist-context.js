import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useAuthContext } from "./auth-context";

const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const [wishlistState, setWishlistState] = useState([]);
  const { authState } = useAuthContext();

  useEffect(() => {
    const getWishlistProducts = async () => {
      const res = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: authState.token,
        },
      });
      setWishlistState(res.data.wishlist);
    };
    getWishlistProducts();
  }, [authState.status]);

  return (
    <WishlistContext.Provider value={{ wishlistState, setWishlistState }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => useContext(WishlistContext);

export { useWishlistContext, WishlistContextProvider };
