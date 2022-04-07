import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext();

function wishlistReducerFunc(wishlistState, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        wishlist: [
          ...wishlistState.wishlist,
          { ...action.payload, isWishlist: true },
        ],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishlistState,
        wishlist: wishlistState.wishlist.filter(
          (product) => product._id != action.payload._id
        ),
      };
    default:
      return { ...wishlistState };
  }
}

const WishlistContextProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducerFunc, {
    wishlist: [],
  });

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => useContext(WishlistContext);

export { useWishlistContext, WishlistContextProvider };
