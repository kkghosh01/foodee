import { Link } from "react-router-dom";
import recipesData from "../data/recipes.json";
import bannerImg from "../assets/recipeBanner.webp";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SubscribeSection from "../components/Cards/SubscribeSection";

const Recipes = () => (
  <div className="container mx-auto mt-20 px-4 py-6">
    {/* Banner */}
    <motion.img
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      src={bannerImg}
      alt="Banner"
      className="h-96 w-full object-cover rounded-2xl shadow-md"
    />

    {/* Header */}
    <div className="mt-10 flex flex-col items-center text-center">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        All Recipes
      </motion.h2>

      {/* Quick Links */}
      <motion.div
        className="bg-white px-6 py-4 border-b border-b-gray-400 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h3 className="text-lg font-semibold mb-2 text-gray-700">
          Quick Links
        </h3>
        <ul className="flex flex-wrap justify-center gap-3">
          {[
            ["All Recipes", "/recipes"],
            ["Breakfast", "/recipes?category=breakfast"],
            ["Lunch", "/recipes?category=lunch"],
            ["Dinner", "/recipes?category=dinner"],
            ["Dessert", "/recipes?category=dessert"],
            ["Snacks", "/recipes?category=snacks"],
            ["Vegan", "/recipes?category=vegan"],
            ["Sea Food", "/recipes?category=gluten-free"],
          ].map(([label, path]) => (
            <li key={label}>
              <Link
                to={path}
                className="text-sm font-medium text-blue-600 bg-[#f7f7f7] px-3 py-1 rounded-full hover:bg-[#ff7426] hover:text-white transition duration-300 shadow"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>

    {/* Recipe Grid */}
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {recipesData.map((recipe) => (
        <motion.div
          key={recipe.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link
            to={`/recipes/${recipe.id}`}
            className="block bg-white hover:shadow-xl transition duration-300 rounded-lg overflow-hidden transform hover:-translate-y-1"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {recipe.title}
              </h3>
              <p className="mt-1 text-gray-500 text-sm line-clamp-2">
                {recipe.description}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
    <div className="mt-10">
      <SubscribeSection />
    </div>
  </div>
);

export default Recipes;
