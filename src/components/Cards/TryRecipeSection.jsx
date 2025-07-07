import { recipes } from "../../data/recipes";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Animation Variants
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TryRecipeSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div ref={ref}>
      <div className="max-w-[90%] m-auto py-15 mb-10 rounded-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold mb-3"
        >
          Try Our Recipes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Discover delicious recipes that are easy to make and perfect for any
          occasion.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto">
          {recipes.map((recipe, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              custom={index}
              variants={cardVariant}
              initial="hidden"
              animate={controls}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />

              {/* Fixed height box */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                  <p className="text-gray-600">{recipe.description}</p>
                </div>

                <button className="mt-4 bg-black text-white px-6 py-1.5 rounded-full hover:bg-[#ff7426] transition-colors duration-500 ease-in-out hover:shadow-lg">
                  View Recipe
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TryRecipeSection;
