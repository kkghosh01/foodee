import { useEffect } from "react";
import CategoryCard from "../components/Cards/CategoryCard";
import Hero from "../components/Hero/Hero";
import RecipeSection from "../components/Cards/RecipeSection";
import LearnMoreSection from "../components/LearnMoreSection";
import InstagramCard from "../components/Cards/InstagramCard";
import TryRecipeSection from "../components/Cards/TryRecipeSection";
import SubscribeSection from "../components/Cards/SubscribeSection";
import { useLoading } from "../hooks/useLoading";

const Home = () => {
  const { setLoading } = useLoading();

  // Simulate loading delay (e.g., 2 seconds)
  useEffect(() => {
    setLoading(true);
    document.body.style.overflowY = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflowY = "";
    }, 500); // Adjust the delay as needed
    return () => {
      clearTimeout(timer);
      document.body.style.overflowY = "";
    };
  }, [setLoading]);

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
