import "./product-card.css";
import { Link } from "react-router-dom";
import { useWishlistContext } from "../../context/wishlist-context";
import { useCartContext } from "../../context/cart-context";
import { useAuthContext } from "../../context/auth-context";
import axios from "axios";

const ProductCard = ({ products }) => {
  const { wishlistState, wishlistDispatch } = useWishlistContext();
  const { cartState, setCartState } = useCartContext();
  const { authState } = useAuthContext();

  const addProductToCart = async (product) => {
    const res = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: authState.token,
        },
        body: {
          product,
        },
      }
    );

    setCartState(res.data.cart);
  };

  return (
    <div className="saiyan-vertical-card">
      <img className="card__img" src={products.img} alt="anime tshirt" />

      <div className="card__body">
        <h3 className="card__heading">{products.brand}</h3>
        <h4 className="card__subtext">{products.name}</h4>
        <div className="card__price__container spacing">
          <span className="card__price">Rs. {products.discountedPrice}</span>
          <span className="card__price__stricked">Rs. {products.price}</span>
          <span className="card__price__discount">
            ({products.discountInPercentage}% OFF)
          </span>
        </div>
        <div className="card__actions">
          {cartState.find((cartItem) => cartItem._id === products._id) ? (
            <Link className="card__btn__links" to="/cart">
              <div className="card__btn card__btn__primary">
                <i className="fa-solid fa-cart-arrow-down"></i> Go To Cart
              </div>
            </Link>
          ) : (
            <div
              className="card__btn card__btn__secondary"
              onClick={() => addProductToCart(products)}
            >
              <i className="fa-solid fa-cart-arrow-down"></i> Add to Cart
            </div>
          )}

          <div className="card__like__btn">
            <div className="card__badge card__icon__badge">
              <span className="card__badge__icon">
                {wishlistState.wishlist.find(
                  (obj) => obj._id === products._id
                ) ? (
                  <i
                    onClick={() =>
                      wishlistDispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: products,
                      })
                    }
                    className="fa-regular fa-heart fa-solid fa-heart"
                  ></i>
                ) : (
                  <i
                    onClick={() =>
                      wishlistDispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: products,
                      })
                    }
                    className="fa-regular fa-heart"
                  ></i>
                )}
              </span>
            </div>

            <div className="ratings">
              <span>
                {products.ratings} <i class="fa-solid fa-star"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
