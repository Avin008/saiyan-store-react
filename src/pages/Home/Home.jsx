import "./home.css";
import { Banner, SectionCard } from "../../components";
import { useCategoryContext } from "../../context/section-context";
import { useEffect } from "react";

const Home = () => {
  const { category } = useCategoryContext();

  useEffect(() => {
    document.title = "Home | Saiyan Store";
  }, []);

  return (
    <div>
      <Banner />
      <h2 className="main-heading">Best Anime Merch</h2>
      <main className="main-container">
        {category.map((categories) => (
          <SectionCard key={categories.id} category={categories} />
        ))}
      </main>
    </div>
  );
};

export default Home;
