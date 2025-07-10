// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";
import { useEffect, useRef } from "react";

const ResposiveMenu = ({ open, NavLinks, setOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full z-50"
        >
          <ul className="bg-[#ff7426] flex flex-col justify-center items-center py-6 mx-4 rounded-2xl gap-3 text-white font-semibold shadow-lg">
            {NavLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-[#ff7426] transition"
                onClick={() => setOpen(false)}
              >
                <Link to={link.link} onClick={scrollToTop}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResposiveMenu;
