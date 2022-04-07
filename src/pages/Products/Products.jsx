import "./products.css";
import { SidebarFilter, ProductCard } from "../../components";
import { useProducts } from "../../context/products-context";
import { useFilterContext } from "../../context/filter-context";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    document.title = "Products | Saiyan Merch";
  }, []);

  const { products } = useProducts();
  const { productList } = useFilterContext();

  const sortByPrice = (products, productList) => {
    if (productList.sortBy === "HIGH_TO_LOW") {
      return products.sort((a, b) => b.discountedPrice - a.discountedPrice);
    } else if (productList.sortBy === "LOW_TO_HIGH") {
      return products.sort((a, b) => a.discountedPrice - b.discountedPrice);
    }
    return products;
  };

  const filterByPrice = (products, productList) => {
    return products.filter(
      (item) => item.discountedPrice >= productList.priceRange
    );
  };

  const filterByCategory = (products, productList) => {
    if (productList.category.length !== 0) {
      return products.filter((item) =>
        productList.category.includes(item.name)
      );
    }
    return products;
  };

  const filterByRatings = (products, productList) => {
    return products.filter((x) => x.ratings >= productList.ratings);
  };

  const productsWithFilteredRatings = filterByRatings(products, productList);
  const productsWithCategoryFilter = filterByCategory(
    productsWithFilteredRatings,
    productList
  );
  const productsWithPriceFilter = filterByPrice(
    productsWithCategoryFilter,
    productList
  );
  const filteredProductList = sortByPrice(productsWithPriceFilter, productList);

  return (
    <main className="container-main">
      <SidebarFilter />
      <div className="content-main">
        <h4 className="content__heading">
          Showing All Products
          <span className="content__span">
            (showing {filteredProductList.length} products)
          </span>
        </h4>
        <div className="product__card__container">
          {filteredProductList.map((filterProducts) => (
            <ProductCard key={filterProducts._id} products={filterProducts} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
