import { Link } from "react-router-dom";
import foodeeImg from "../../assets/foodee.webp";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { scrollToTop } from "../../utils/scrollToTop";

const Footer = () => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Recipes", link: "/recipes" },
    { name: "Blog", link: "/blogs" },
    { name: "Contact", link: "/contact" },
    { name: "About us", link: "/about" },
  ];

  return (
    <motion.div
      className="m-auto py-10 bg-gradient-to-b from-regal-green-2 to-regal-green rounded-2xl text-gray-700 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <footer className="max-w-[90%] mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 flex-wrap">
        {/* Logo Left */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/" onClick={scrollToTop}>
            <img src={foodeeImg} alt="Foodee Logo" className="w-28 md:w-32" />
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            {navLinks.map(({ name, link }, idx) => (
              <li key={idx}>
                <Link
                  to={link}
                  onClick={scrollToTop}
                  className="hover:text-[#ff7426] transition"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Follow Us */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.facebook.com"
                className="hover:text-blue-500 transition flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialFacebook className="text-lg" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                className="hover:text-pink-500 transition flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-lg" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                className="hover:text-sky-500 transition flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialTwitter className="text-lg" /> Twitter
              </a>
            </li>
          </ul>
        </motion.div>
      </footer>

      {/* Footer Bottom */}
      <p className="text-center text-sm mt-6 px-4">
        © {new Date().getFullYear()} Foodee. All rights reserved | Made by{" "}
        <a
          href="https://your-portfolio-link.com"
          className="underline hover:text-[#ff7426] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kishor Kumar
        </a>
      </p>
    </motion.div>
  );
};

export default Footer;
