import { useEffect, useState } from "react";
import CategoryCard from "../components/Cards/CategoryCard";
import Hero from "../components/Hero/Hero";
import Loader from "./Loader";
import RecipeSection from "../components/Cards/RecipeSection";
import LearnMoreSection from "../components/LearnMoreSection";

const Home = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay (e.g., 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
      <Hero />
      <CategoryCard />
      <RecipeSection />
      <LearnMoreSection />
    </div>
  );
};
export default Home;
