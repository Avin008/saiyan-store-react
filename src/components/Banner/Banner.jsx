import "./banner.css";
import { Link } from "react-router-dom";
import { useFilterContext } from "../../context/filter-context";

const Banner = () => {
  const { productListDispatch } = useFilterContext();

  return (
    <header className="header">
      <div className="header__img-container">
        <Link
          to="/products"
          onClick={() =>
            productListDispatch({ type: "CATEGORY", payload: "Dragon Ball Z" })
          }
        >
          <img
            src="https://saiyanshop.netlify.app/Assets/img/header-img.webp"
            alt="Dragon Ball Z Banner"
            className="header__img"
          />
        </Link>
      </div>
    </header>
  );
};

export default Banner;
