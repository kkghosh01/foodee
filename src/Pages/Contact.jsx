// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import chefImg from "../assets/contact-chef.png";
import SubscribeSection from "../components/Cards/SubscribeSection";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  return (
    <div className="container mx-auto mt-25 px-4 py-8">
      <div className="flex flex-col justify-center items-center">
        {/* Heading */}
        <motion.h3
          className="text-4xl font-bold mb-12 text-[#ff7426]"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Contact Us
        </motion.h3>

        {/* Form */}
        <motion.form
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 bg-[#fdf9f4] p-8 rounded-2xl shadow-lg w-full max-w-6xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
        >
          {/* Image Section */}
          <motion.div
            className="flex justify-center items-center"
            variants={fadeInUp}
            custom={1.2}
          >
            <motion.img
              src={chefImg}
              alt="Chef"
              className="w-full max-w-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </motion.div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                label: "Name",
                type: "text",
                placeholder: "Enter your name...",
              },
              {
                label: "Email",
                type: "email",
                placeholder: "Your email address...",
              },
              { label: "Subject", type: "text", placeholder: "Subject" },
              {
                label: "Enquiry Type",
                type: "text",
                placeholder: "Advertising / Feedback / Support",
              },
            ].map((field, index) => (
              <motion.div
                key={field.label}
                variants={fadeInUp}
                custom={index + 2}
              >
                <label className="block mb-1 text-gray-700 font-medium">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7426]"
                />
              </motion.div>
            ))}

            {/* Message Field */}
            <motion.div variants={fadeInUp} custom={6}>
              <label className="block mb-1 text-gray-700 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Enter your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#ff7426]"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeInUp} custom={7}>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff7426] transition duration-300"
              >
                Submit
              </button>
            </motion.div>
          </div>
        </motion.form>
      </div>

      {/* Subscribe Section */}
      <motion.div
        className="mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={4}
      >
        <SubscribeSection />
      </motion.div>
    </div>
  );
};

export default Contact;
