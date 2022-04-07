import "./sidebar-filter.css";
import { useFilterContext } from "../../context/filter-context";

const SidebarFilter = () => {
  const { productList, productListDispatch } = useFilterContext();

  return (
    <div className="filter">
      <div className="filter-header">
        <h3 className="heading">Filter</h3>

        <h5
          className="clear-btn"
          onClick={() => productListDispatch({ type: "" })}
        >
          Clear
        </h5>
      </div>

      <div className="filter-range">
        <h3>Price</h3>
        <div className="range">
          <span>Rs. 500</span>
          <span>Rs. 1,000</span>
          <span>Rs. 15,00</span>
        </div>
        <input
          className="range__controller"
          type="range"
          min="500"
          max="1500"
          step="100"
          onChange={(e) =>
            productListDispatch({
              type: "PRICE_RANGE",
              payload: parseInt(e.target.value),
            })
          }
          value={productList.priceRange}
        />
      </div>

      <div className="categories">
        <h3>Categories</h3>
        <div className="category">
          <ul>
            <li>
              <input
                type="checkbox"
                checked={productList.category.includes("Dragon Ball Z")}
                onChange={() =>
                  productListDispatch({
                    type: "CATEGORY",
                    payload: "Dragon Ball Z",
                  })
                }
              />
              <label htmlFor="category">Dragon Ball Z</label>
            </li>
            <li>
              <input
                type="checkbox"
                checked={productList.category.includes("My Hero Academia")}
                onChange={() =>
                  productListDispatch({
                    type: "CATEGORY",
                    payload: "My Hero Academia",
                  })
                }
              />
              <label htmlFor="category">My Hero Academia</label>
            </li>
            <li>
              <input
                type="checkbox"
                checked={productList.category.includes("Dr. Stone")}
                onChange={() =>
                  productListDispatch({
                    type: "CATEGORY",
                    payload: "Dr. Stone",
                  })
                }
              />
              <label htmlFor="category">Dr. Stone</label>
            </li>
            <li>
              <input
                type="checkbox"
                checked={productList.category.includes("Haikyuu")}
                onChange={() =>
                  productListDispatch({
                    type: "CATEGORY",
                    payload: "Haikyuu",
                  })
                }
              />
              <label htmlFor="category">Haikyuu</label>
            </li>
            <li>
              <input
                type="checkbox"
                checked={productList.category.includes("Death Note")}
                onChange={() =>
                  productListDispatch({
                    type: "CATEGORY",
                    payload: "Death Note",
                  })
                }
              />
              <label htmlFor="category">Death Note</label>
            </li>
            <li>
              <input
                type="checkbox"
                checked={productList.category.includes("Attack On Titan")}
                onChange={() =>
                  productListDispatch({
                    type: "CATEGORY",
                    payload: "Attack On Titan",
                  })
                }
              />
              <label htmlFor="category">Attack On Titan</label>
            </li>
          </ul>
        </div>
      </div>

      <div className="Ratings">
        <h3>Ratings</h3>
        <div className="category">
          <ul>
            <li>
              <input
                type="radio"
                checked={productList.ratings === 4}
                onChange={() =>
                  productListDispatch({ type: "RATINGS", payload: 4 })
                }
              />
              <label htmlFor="ratings">4 star & above</label>
            </li>
            <li>
              <input
                type="radio"
                checked={productList.ratings === 3}
                onChange={() =>
                  productListDispatch({ type: "RATINGS", payload: 3 })
                }
              />
              <label htmlFor="ratings">3 star & above</label>
            </li>
            <li>
              <input
                type="radio"
                checked={productList.ratings === 2}
                onChange={() =>
                  productListDispatch({ type: "RATINGS", payload: 2 })
                }
              />
              <label htmlFor="ratings">2 star & above</label>
            </li>
            <li>
              <input
                type="radio"
                checked={productList.ratings === 1}
                onChange={() =>
                  productListDispatch({ type: "RATINGS", payload: 1 })
                }
              />
              <label htmlFor="ratings">1 star & above</label>
            </li>
          </ul>
        </div>
      </div>

      <div className="Ratings">
        <h3>Sort By</h3>
        <div className="category">
          <ul>
            <li>
              <input
                type="radio"
                name="priceRange"
                checked={productList.sortBy === "HIGH_TO_LOW"}
                onChange={() =>
                  productListDispatch({
                    type: "SORT_BY",
                    payload: "HIGH_TO_LOW",
                  })
                }
              />
              <label htmlFor="price">High to Low</label>
            </li>
            <li>
              <input
                type="radio"
                name="priceRange"
                checked={productList.sortBy === "LOW_TO_HIGH"}
                onChange={() =>
                  productListDispatch({
                    type: "SORT_BY",
                    payload: "LOW_TO_HIGH",
                  })
                }
              />
              <label htmlFor="price">Low to High</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
