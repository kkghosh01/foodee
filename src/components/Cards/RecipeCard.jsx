import { useEffect, useState } from "react";
import { GiAlarmClock, GiKnifeFork } from "react-icons/gi";

import { Link } from "react-router-dom";
import recipesData from "../../data/recipes.json";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Variants for container with responsive stagger
const containerVariants = {
  visible: (isSmall) => ({
    opacity: 1,
    transition: {
      staggerChildren: isSmall ? 0.5 : 0.3,
    },
  }),
};

// Variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const RecipeCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  // Check for screen size
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 768); // Tailwind's md breakpoint
    };
    checkScreen(); // Initial check
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div ref={ref}>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6"
        variants={containerVariants}
        custom={isSmallScreen}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {recipesData.map((recipe) => (
          <motion.div
            key={recipe.id}
            className="bg-gradient-to-t from-regal-green to-regal-green-2 rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-xl"
            variants={cardVariants}
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-60 object-cover rounded-t-lg transition-transform hover:scale-105"
                loading="lazy"
              />
            </div>
            <Link
              to={`/recipes/${recipe.id}`}
              className="font-semibold text-xl hover:underline mt-2"
            >
              <h3>{recipe.title}</h3>
            </Link>
            <div className="flex justify-between items-center mt-6">
              <span className="text-black flex items-center gap-1">
                <GiAlarmClock /> {recipe.prepTime} min
              </span>
              <span className="text-black flex items-center gap-1">
                <GiKnifeFork /> {recipe.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RecipeCard;
