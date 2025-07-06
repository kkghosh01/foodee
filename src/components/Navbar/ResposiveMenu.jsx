// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const ResposiveMenu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full z-50"
        >
          <ul className="bg-[#ff7426] flex flex-col justify-center items-center py-6 mx-4 rounded-2xl gap-3 text-white font-semibold shadow-lg">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">Recipes</li>
            <li className="hover:text-orange-500 cursor-pointer">Blog</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
            <li className="hover:text-orange-500 cursor-pointer">About us</li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResposiveMenu;
