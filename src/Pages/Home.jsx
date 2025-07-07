import { useEffect, useState } from "react";
import CategoryCard from "../components/Cards/CategoryCard";
import Hero from "../components/Hero/Hero";
import Loader from "./Loader";
import RecipeSection from "../components/Cards/RecipeSection";
import LearnMoreSection from "../components/LearnMoreSection";
import InstagramCard from "../components/Cards/InstagramCard";
import TryRecipeSection from "../components/Cards/TryRecipeSection";
import SubscribeSection from "../components/Cards/SubscribeSection";

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
      <InstagramCard />
      <TryRecipeSection />
      <SubscribeSection />
    </div>
  );
};
export default Home;
