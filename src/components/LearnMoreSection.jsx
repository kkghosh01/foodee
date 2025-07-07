// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ctaImg from "../assets/chef.webp";

const LearnMoreSection = () => {
  return (
    <div className="w-[95%] max-w-screen-2xl mx-auto rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 min-h-[400px] mt-24 mb-10 px-6">
      {/* Image Section with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.6 }}
        className="w-full md:w-1/2 flex justify-center order-1 md:order-2 bg-gradient-to-t from-regal-green to-regal-green-2 rounded-lg"
      >
        <img
          src={ctaImg}
          alt="Cooking Illustration"
          className="w-full max-w-[180px] md:max-w-[400px] h-auto"
        />
      </motion.div>

      {/* Text Section with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.6 }}
        className="w-full flex flex-col md:items-start items-center justify-center px-2 order-2 md:order-1"
      >
        <h2 className="text-xl md:text-4xl font-semibold mb-4 text-center md:text-left">
          Everyone can be a chef in their own kitchen
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-12 text-center md:text-left">
          Discover the joy of cooking with our easy-to-follow recipes and tips.
          Whether you're a beginner or an experienced cook, there's something
          for everyone.
        </p>
        <a
          href="#"
          className="bg-black text-white mt-2 md:mt-10 px-4 py-2 rounded-full text-xs md:text-sm hover:bg-[#ff7426] transition-colors duration-500 ease-in-out hover:shadow-lg"
        >
          Learn More
        </a>
      </motion.div>
    </div>
  );
};

export default LearnMoreSection;
