import { useContext, createContext, useReducer } from "react";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  function filterReducerFunc(productList, action) {
    switch (action.type) {
      case "SORT_BY":
        return { ...productList, sortBy: action.payload };
      case "PRICE_RANGE":
        return { ...productList, priceRange: action.payload };
      case "RATINGS":
        return { ...productList, ratings: action.payload };
      case "CATEGORY":
        return {
          ...productList,
          category: productList.category.includes(action.payload)
            ? productList.category.filter((value) => value !== action.payload)
            : [...productList.category, action.payload],
        };
      default:
        return {
          sortBy: null,
          ratings: 1,
          priceRange: 0,
          category: [],
        };
    }
  }

  const [productList, productListDispatch] = useReducer(filterReducerFunc, {
    sortBy: null,
    ratings: 1,
    priceRange: 0,
    category: [],
  });

  return (
    <FilterContext.Provider value={{ productList, productListDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { FilterContextProvider, useFilterContext };
