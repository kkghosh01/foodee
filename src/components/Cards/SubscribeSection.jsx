import bannerImg1 from "../../assets/bannerImg1.webp";
import bannerImg2 from "../../assets/bannerImg2.webp";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SubscribeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full max-w-[90%] mx-auto m-auto py-15 mb-10 rounded-2xl bg-gradient-to-b from-regal-green-2 to-regal-green text-center relative overflow-hidden overflow-x-hidden">
        {/* Animated Banner Left */}
        <motion.img
          src={bannerImg1}
          alt="banner image left"
          className="w-40 md:w-60 absolute -right-16 -bottom-16 opacity-50"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          loading="lazy"
        />

        {/* Animated Banner Right */}
        <motion.img
          src={bannerImg2}
          alt="banner image right"
          className="w-40 md:w-60 absolute -left-16 -bottom-16 opacity-50"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          loading="lazy"
        />

        <h2 className="text-4xl font-semibold mb-3">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Stay updated with the latest recipes, cooking tips, and exclusive
          offers.
        </p>

        {/* Animated Form */}
        <motion.form
          className="flex justify-center items-center flex-wrap gap-4 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-[#ff7426] text-white px-6 py-3 rounded-lg hover:bg-[#e66822] transition-colors duration-300"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default SubscribeSection;
