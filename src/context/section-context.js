import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CategoryContext = createContext();

const CatergoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const categoriesData = async () => {
      try {
        const response = await axios.get("/api/categories");
        const categoriesData = response.data.categories;
        setCategory(categoriesData);
      } catch (error) {
        console.log(error);
      }
    };
    categoriesData();
  }, []);

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategoryContext = () => useContext(CategoryContext);

export { CatergoryContextProvider, useCategoryContext };
