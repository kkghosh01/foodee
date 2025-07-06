// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RecipeCard from "./RecipeCard";

const RecipeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="w-[95%] max-w-screen-2xl mx-auto flex flex-col items-center mb-10"
    >
      <motion.h2
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-semibold mb-3 text-center"
      >
        Simple and tasty recipes
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-lg text-gray-600 mb-8 text-center max-w-2xl"
      >
        Explore our collection of delicious recipes that are easy to make and
        perfect for any occasion.
      </motion.p>

      <RecipeCard />
    </div>
  );
};

export default RecipeSection;
