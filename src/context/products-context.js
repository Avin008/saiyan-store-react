import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const productsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsData = async () => {
      try {
        const response = await axios.get("/api/products");
        const productsData = await response.data.products;
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };
    productsData();
  }, []);

  return (
    <productsContext.Provider value={{ products, setProducts }}>
      {children}
    </productsContext.Provider>
  );
};

const useProducts = () => useContext(productsContext);

export { useProducts, ProductsContextProvider };
