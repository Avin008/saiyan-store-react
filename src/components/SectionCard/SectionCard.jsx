import "./section-card.css";
import { Link } from "react-router-dom";
import { useFilterContext } from "../../context/filter-context";

const SectionCard = ({ category }) => {
  const { productListDispatch } = useFilterContext();

  return (
    <div className="saiyan-explore-card">
      <div className="card__img__container img-responsive">
        <img
          className="card__img"
          src={category.img}
          alt="anime show category"
        />
      </div>

      <div className="card__body">
        <h4 className="card__heading">{category.name}</h4>
        <Link
          to="/products"
          className="card__btn"
          onClick={() =>
            productListDispatch({ type: "CATEGORY", payload: category.name })
          }
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default SectionCard;
