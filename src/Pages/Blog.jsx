import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AsideSection from "../components/AsideSection";
import posts from "../data/blogs.json";
import SubscribeSection from "../components/Cards/SubscribeSection";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { highlightText } from "../utils/highlightText.jsx";
import { truncate } from "../utils/truncate";
import { useLoading } from "../hooks/useLoading.js";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const { setLoading } = useLoading();

  // Simulate loading delay (e.g., 2 seconds)
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay as needed
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [setLoading]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPostsPerPage(3);
      } else if (window.innerWidth < 1024) {
        setPostsPerPage(4);
      } else {
        setPostsPerPage(6);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.intro.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="container mx-auto mt-20 px-4 py-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Article</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to the blog page! Explore insightful articles, culinary tips,
          and inspiring stories.
        </p>

        {/* Search */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <div className="relative w-full sm:w-[400px] mx-auto mt-8">
            <input
              value={searchTerm}
              onChange={handleSearch}
              type="text"
              placeholder="Search articles, news or recipes..."
              className="w-full px-4 py-2 md:py-3 pr-14 border text-xs md:text-sm border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff7426] transition"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-black text-white rounded-full hover:bg-[#ff7426] transition"
            >
              Search
            </button>
          </div>
        </form>
      </motion.div>

      {/* Blog Section */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mt-20">
        {/* Left - Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentPosts.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500 text-lg mt-10"
            >
              No posts found for "<strong>{searchTerm}</strong>"
            </motion.p>
          ) : (
            currentPosts.map((post) => (
              <motion.div
                key={post.slug}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <Link to={`/blogs/${post.slug}`}>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8 hover:bg-gray-50 p-2 rounded-lg transition">
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      className="w-full sm:w-40 aspect-video object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">
                        {highlightText(post.title, searchTerm)}
                      </h3>
                      <p className="mt-2 text-gray-600 text-sm">
                        {highlightText(truncate(post.intro, 140), searchTerm)}
                      </p>
                      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-sm text-gray-500">
                        <strong className="text-black">
                          {post.author.name}
                        </strong>
                        <span>{post.author.published_date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center items-center mt-10 gap-2"
            >
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-1 border rounded-md text-sm hover:bg-gray-100 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-4 py-1 text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-1 border rounded-md text-sm hover:bg-gray-100 disabled:opacity-50"
              >
                Next
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Right - Aside Section */}
        <AsideSection title={"Tasty Recipes"} />
      </div>

      {/* Subscribe */}
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

export default Blog;
