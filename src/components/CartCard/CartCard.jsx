import "./cart-card.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart-context";
import { useWishlistContext } from "../../context/wishlist-context";

const CartCard = ({ products }) => {
  const { setCartData } = useCartContext();
  const { wishlistState, wishlistDispatch } = useWishlistContext();

  return (
    <div className="saiyan-horizontal-card">
      <div className="card__img__container">
        <img className="card__img" src={products.img} alt="Mens Tshirt" />
      </div>

      <div className="saiyan-horizontal-card__body">
        <h3>{products.brand}</h3>
        <h1 className="card__price spacing">
          Rs. {products.discountedPrice}
          <span className="card__price__stricked">Rs. {products.price}</span>
        </h1>
        <h2 className="card__price__discount">
          {products.discountInPercentage}% off
        </h2>

        <div className="card__quantity">
          <span>Quantity:</span>
          <span className="spacing">
            <button className="card__quantity__btn card__quantity__btn--minus">
              -
            </button>
            <input
              className="card__quantity__box"
              type="text"
              value={products.qty}
            />
            <button className="card__quantity__btn card__quantity__btn--plus">
              +
            </button>
          </span>
        </div>

        <div className="card__CTA__container">
          <div className="card__CTA__btn card__CTA__btn--primary">
            Remove From Cart
          </div>

          {wishlistState.wishlist.find((obj) => obj._id === products._id) ? (
            <Link
              to="/wishlist"
              className="card__CTA__btn card__CTA__btn--secondary"
            >
              Go to Wishlist
            </Link>
          ) : (
            <div
              className="card__CTA__btn card__CTA__btn--secondary"
              onClick={() =>
                wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: products })
              }
            >
              Move to Wishlist
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
