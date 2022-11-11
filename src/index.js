import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CatergoryContextProvider } from "./context/section-context";
import { ProductsContextProvider } from "./context/products-context";
import { FilterContextProvider } from "./context/filter-context";
import { WishlistContextProvider } from "./context/wishlist-context";
import { CartContextProvider } from "./context/cart-context";
import { AuthContextProvider } from "./context/auth-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CatergoryContextProvider>
          <CartContextProvider>
            <ProductsContextProvider>
              <WishlistContextProvider>
                <FilterContextProvider>
                  <App />
                </FilterContextProvider>
              </WishlistContextProvider>
            </ProductsContextProvider>
          </CartContextProvider>
        </CatergoryContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
