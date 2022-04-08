import "./cart.css";
import { Link } from "react-router-dom";
import { CartCard, CheckoutCard } from "../../components";
import { useCartContext } from "../../context/cart-context";
import { useEffect } from "react";

const Cart = () => {
  const { cartState } = useCartContext();

  useEffect(() => {
    document.title = `(${cartState.cart.length}) Cart | Saiyan Store`;
  }, [cartState.cart]);

  return (
    <div className="cart-container">
      {cartState.cart.length < 1 ? (
        <div className="empty-cart">
          <h2 className="empty-cart-title">No Items in Cart!</h2>
          <Link to="/products">
            <button className="empty-cart-btn">Shop Now</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart__header__container">
            <h2 className="cart__heading">MY CART ({cartState.cart.length})</h2>
          </div>

          <div className="cart__content__container">
            <div>
              {cartState.cart.map((cartItem) => (
                <CartCard key={cartItem.id} products={cartItem} />
              ))}
            </div>

            <CheckoutCard />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
