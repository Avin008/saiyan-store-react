import "./cart-card.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart-context";
import { useWishlistContext } from "../../context/wishlist-context";
import axios from "axios";
import { useAuthContext } from "../../context/auth-context";

const CartCard = ({ products }) => {
  const { setCartState } = useCartContext();
  const { wishlistState, setWishlistState } = useWishlistContext();
  const { authState } = useAuthContext();

  const removeProductFromCart = async (product) => {
    const res = await axios.delete(`/api/user/cart/${product._id}`, {
      headers: {
        authorization: authState.token,
      },
    });
    setCartState(res.data.cart);
  };

  const addProductToWishlist = async (product) => {
    const res = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: authState.token,
        },
      }
    );
    setWishlistState(res.data.wishlist);
  };

  const increaseItemQty = async (product) => {
    const res = await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: authState.token,
        },
      }
    );
    setCartState(res.data.cart);
  };

  const decreaseItemQty = async (product) => {
    const res = await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: authState.token,
        },
      }
    );
    setCartState(res.data.cart);
  };

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
            <button
              className="card__quantity__btn card__quantity__btn--minus"
              onClick={() => products.qty > 1 && decreaseItemQty(products)}
            >
              -
            </button>
            <input
              className="card__quantity__box"
              type="text"
              value={products.qty}
            />
            <button
              className="card__quantity__btn card__quantity__btn--plus"
              onClick={() => increaseItemQty(products)}
            >
              +
            </button>
          </span>
        </div>

        <div className="card__CTA__container">
          <div
            className="card__CTA__btn card__CTA__btn--primary"
            onClick={() => removeProductFromCart(products)}
          >
            Remove From Cart
          </div>

          {wishlistState.find((obj) => obj._id === products._id) ? (
            <Link
              to="/wishlist"
              className="card__CTA__btn card__CTA__btn--secondary"
            >
              Go to Wishlist
            </Link>
          ) : (
            <div
              className="card__CTA__btn card__CTA__btn--secondary"
              onClick={() => addProductToWishlist(products)}
            >
              Add to Wishlist
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
