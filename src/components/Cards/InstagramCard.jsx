import { posts } from "../../data/posts";
import foodeeImg from "../../assets/foodee.webp";
import heroImg from "../../assets/hero.webp";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { CiHeart, CiBookmark } from "react-icons/ci";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Animation Variants
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const InstagramCard = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <div
      className="max-w-[90%] m-auto py-15 mb-10 rounded-2xl bg-gradient-to-b from-regal-green-2 to-regal-green text-center"
      ref={ref}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4"
      >
        Check out <span className="text-black">@foodee</span> on Instagram
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-600 max-w-xl mx-auto mb-10"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            custom={idx}
            variants={cardVariant}
            initial="hidden"
            animate={controls}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center space-x-2">
                <img
                  src={foodeeImg}
                  alt="Avatar"
                  className="w-5 h-3 rounded-full"
                />
                <div className="text-left">
                  <h4 className="text-sm font-semibold flex items-center gap-1">
                    Foodee. <MdVerified className="text-blue-500" />
                  </h4>
                  <p className="text-xs text-gray-500">Dhaka, Bangladesh</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">1/3</span>
            </div>

            {/* Image */}
            <img
              src={post.img}
              alt={`Instagram post ${idx + 1}`}
              className="w-full h-60 object-cover"
            />

            {/* Icons */}
            <div className="flex justify-between items-center px-4 pt-4 text-gray-800 text-lg">
              <div className="flex space-x-4">
                <CiHeart size={23} className="cursor-pointer" />
                <FaRegComment className="cursor-pointer text-gray-700" />
                <IoPaperPlaneOutline className="cursor-pointer" />
              </div>
              <CiBookmark className="cursor-pointer" />
            </div>

            {/* Likes & Caption */}
            <div className="text-left text-sm px-4 py-2">
              <div className="flex gap-1">
                <img
                  src={heroImg}
                  alt="Avator"
                  className="w-5 h-5 rounded-full pt-0.5"
                />
                <p className="text-gray-800 mb-1">
                  Liked by craig_love and 44,686 others
                </p>
              </div>
              <p>
                <span className="font-semibold">Foodee. </span>
                {post.text}
              </p>
            </div>

            {/* Date */}
            <div className="px-4 pb-4 text-left text-xs text-gray-400">
              September 20, 2024
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 bg-black text-white px-6 py-3 rounded-full hover:bg-[#ff7426] transition-colors duration-500 ease-in-out hover:shadow-lg"
      >
        Visit Our Instagram
      </motion.button>
    </div>
  );
};

export default InstagramCard;
