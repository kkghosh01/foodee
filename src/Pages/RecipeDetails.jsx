import { useNavigate, useParams } from "react-router-dom";
import recipesData from "../data/recipes.json";
import { IoIosArrowRoundBack, IoIosPeople, IoMdShare } from "react-icons/io";
import { IoFastFood, IoPrintOutline } from "react-icons/io5";
import { FaClock, FaHourglassHalf } from "react-icons/fa";
import { GiCampCookingPot } from "react-icons/gi";
import SubscribeSection from "../components/Cards/SubscribeSection";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useLoading } from "../hooks/useLoading";
import { useEffect } from "react";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const RecipeDetails = () => {
  const { setLoading } = useLoading();
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Adjust the delay as needed
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [setLoading]);

  if (!recipe) {
    return (
      <div className="container mx-auto mt-20 px-4 py-6 text-center text-red-500 font-semibold">
        Recipe not found
      </div>
    );
  }

  const otherRecipes = recipesData.filter((r) => r.id !== id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeIn" }}
      className="w-full max-w-[90%] mx-auto mt-20 px-4 py-6 printable"
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-500 hover:text-[#ff7426] mb-6"
      >
        <IoIosArrowRoundBack className="text-2xl mr-1" />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        {/* Left Column */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl font-bold mb-4"
          >
            {recipe.title}
          </motion.h1>

          <motion.ul
            className="flex flex-wrap gap-x-6 gap-y-3 text-gray-600 mb-8 text-base"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: <IoFastFood />, text: recipe.category },
              { icon: <FaClock />, text: recipe.prepTime },
              {
                icon: <GiCampCookingPot />,
                text: `${recipe.cookTime} minutes`,
              },
              { icon: <IoIosPeople />, text: recipe.servings },
              { icon: <FaHourglassHalf />, text: recipe.difficulty },
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-center gap-2"
              >
                {item.icon} {item.text}
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            <motion.img
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              src={recipe.image}
              alt={recipe.title}
              className="w-full lg:w-1/2 h-[300px] object-cover rounded-xl shadow-md"
            />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
              className="w-full lg:w-1/2 bg-[#e7fafe] p-6 rounded-xl shadow-md flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold mb-3">Nutrition Facts</h2>
              <ul className="text-gray-800 text-sm space-y-2">
                {Object.entries(recipe.nutrition).map(([key, value]) => (
                  <li
                    key={key}
                    className="flex justify-between border-b pb-1 capitalize"
                  >
                    {key}: <span>{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Ingredients */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <motion.ul
              className="list-disc pl-6 text-gray-700 space-y-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {recipe.ingredients.map((ing, i) => (
                <motion.li key={i} variants={itemVariants}>
                  {ing}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* Instructions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-10 bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <motion.ol
              className="list-decimal pl-6 text-gray-700 space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {recipe.steps.map((step, i) => (
                <motion.li key={i} variants={itemVariants}>
                  {step.title && (
                    <strong className="text-gray-800">{step.title}: </strong>
                  )}
                  {step.description}
                </motion.li>
              ))}
            </motion.ol>
          </motion.section>

          {/* Print & Share Buttons */}
          <div className="w-full max-w-[90%] mx-auto mt-20 px-4 py-6 space-x-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => window.print()}
              className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              <IoPrintOutline className="inline-block mr-2" />
              Print
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={async () => {
                if (navigator.share) {
                  try {
                    await navigator.share({
                      title: recipe.title,
                      text: recipe.description,
                      url: window.location.href,
                    });
                  } catch (err) {
                    console.error("Share failed:", err);
                  }
                } else {
                  alert("Share not supported in this browser.");
                }
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              <IoMdShare className="inline-block mr-2" />
              Share
            </motion.button>
          </div>
        </div>

        {/* Right Column: Other Recipes */}
        <aside className="max-h-[80vh] overflow-y-auto custom-scroll sticky top-50 bg-white p-4 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Other Recipes</h3>
          <ul className="space-y-4">
            {otherRecipes.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-center gap-4 cursor-pointer hover:bg-[#e7fafe] p-2 rounded-lg transition"
                onClick={() => navigate(`/recipes/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md shadow-sm"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-3xl font-semibold">
          You may like this recipes too
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {otherRecipes.slice(0, 4).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate(`/recipes/${item.id}`)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-25">
        <SubscribeSection />
      </div>
    </motion.div>
  );
};

export default RecipeDetails;
