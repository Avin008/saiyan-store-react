import "./wishlist.css";
import { Link } from "react-router-dom";
import { ProductCard } from "../../components";
import { useWishlistContext } from "../../context/wishlist-context";
import { useEffect } from "react";

const Wishlist = () => {
  const { wishlistState } = useWishlistContext();

  useEffect(() => {
    document.title = `(${wishlistState.length}) Wishlist | Saiyan Store`;
  }, [wishlistState]);

  return (
    <div className="wishlist-container">
      {wishlistState.length < 1 ? (
        <div className="empty-wishlist">
          <h2 className="empty-wishlist-title">No Items in Wishlist!</h2>
          <Link to="/products">
            <button className="empty-wishlist-btn">Add Products</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="wishlist__header__container">
            <h2 className="cart__heading">My Wishlist</h2>
          </div>

          <div className="wishlist__card__container">
            {wishlistState.map((item) => (
              <ProductCard key={item.id} products={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
