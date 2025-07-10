import { IoIosArrowRoundBack } from "react-icons/io";
import posts from "../data/blogs.json";
import { useNavigate, useParams } from "react-router-dom";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLoading } from "../hooks/useLoading";
import SubscribeSection from "../components/Cards/SubscribeSection";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const BlogDetails = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const navigate = useNavigate();
  const { setLoading } = useLoading();

  // Simulate loading delay (e.g., 2 seconds)
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay as needed
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [setLoading]);

  if (!post) {
    return (
      <motion.div
        className="text-center mt-32 text-red-500 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Blog post not found
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full max-w-4xl mx-auto mt-20 px-4 py-6"
    >
      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-500 hover:text-[#ff7426] mb-6"
        variants={fadeInUp}
        custom={0}
      >
        <IoIosArrowRoundBack className="text-2xl mr-1" />
        Back
      </motion.button>

      {/* Header */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold mb-4"
        variants={fadeInUp}
        custom={1}
      >
        {post.title}
      </motion.h1>
      <motion.div
        className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6"
        variants={fadeInUp}
        custom={2}
      >
        <span>
          <strong className="text-black">{post.author.name}</strong>
        </span>
        <span>{post.author.published_date}</span>
      </motion.div>

      <motion.p
        className="text-gray-700 text-lg mb-10"
        variants={fadeInUp}
        custom={3}
      >
        {post.intro}
      </motion.p>

      {/* Cover Image */}
      <motion.img
        src={post.cover_image}
        alt={post.title}
        className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow mb-10"
        variants={fadeInUp}
        custom={4}
      />

      {/* QA Sections */}
      <motion.div
        className="space-y-10 text-base leading-relaxed"
        initial="hidden"
        animate="visible"
      >
        {post.qa_sections.map((q, index) => (
          <motion.div key={index} variants={fadeInUp} custom={5 + index}>
            <h3 className="text-xl font-semibold mb-2">{q.question}</h3>
            <p className="text-gray-700">{q.answer}</p>
            {q.quote && (
              <blockquote className="mt-4 border-l-4 pl-4 italic text-gray-600 text-sm border-[#ff7426]">
                {q.quote}
              </blockquote>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Follow Us */}
      <motion.div
        className="mt-16 text-center"
        variants={fadeInUp}
        custom={post.qa_sections.length + 6}
      >
        <h3 className="text-xl font-semibold mb-4">Follow us</h3>
        <div className="flex justify-center gap-6 text-2xl text-gray-700">
          <a href="#" className="hover:text-blue-600 transition">
            <TiSocialFacebook />
          </a>
          <a href="#" className="hover:text-sky-400 transition">
            <TiSocialTwitter />
          </a>
          <a href="#" className="hover:text-pink-600 transition">
            <FaInstagram />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-20"
      >
        <SubscribeSection />
      </motion.div>
    </motion.div>
  );
};

export default BlogDetails;
