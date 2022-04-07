import "./navbar.css";
import { Link } from "react-router-dom";
import { useWishlistContext } from "../../context/wishlist-context";
import { useCartContext } from "../../context/cart-context";

const Navbar = () => {
  const { wishlistState } = useWishlistContext();
  const { cartState } = useCartContext();

  return (
    <nav className="saiyan-navbar navbar-fixed">
      <div className="navbar__brand-container">
        <Link to="/" className="navbar__brand__name navbar__links">
          Saiyan Store
        </Link>
      </div>

      <div className="navbar__search">
        <input
          className="navbar__searchbar"
          type="text"
          placeholder="Search Items"
        />
      </div>

      <div className="navbar__list-container">
        <ul className="navbar__list">
          <li className="navbar__items">
            <Link to="/login">
              <div className="navbar__icon-badge">
                <span className="navbar__badge__icon">
                  <i className="fa-solid fa-user"></i>
                </span>
              </div>
            </Link>
          </li>
          <li className="navbar__items">
            <Link to="/wishlist">
              <div className="navbar__icon-badge">
                <span className="navbar__badge__icon">
                  <i className="fa-solid fa-heart"></i>
                  <span className="navbar__badge__icon-badge">
                    {wishlistState.wishlist.length}
                  </span>
                </span>
              </div>
            </Link>
          </li>
          <li className="navbar__items">
            <Link to="/cart">
              <div className="navbar__icon-badge">
                <span className="navbar__badge__icon">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="navbar__badge__icon-badge">
                    {cartState.cart.length}
                  </span>
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
