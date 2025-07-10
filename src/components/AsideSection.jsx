import { useNavigate, useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import recipesData from "../data/recipes.json";

const AsideSection = ({ title = "Other Recipes" }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const otherRecipes = recipesData.filter((r) => r.id !== id);

  return (
    <aside className="max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 sticky top-20 bg-white p-4 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
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
  );
};

export default AsideSection;
