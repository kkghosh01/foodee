import { useRef } from "react";
import { Categories } from "../../data/category";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategoryCard = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="max-w-[90%] w-full mx-auto md:py-10 py-4 mt-8 relative overflow-hidden">
      <h2 className="text-2xl font-bold mb-8">Categories</h2>

      {/* Left Arrow */}
      <button
        className="absolute -left-1 md:-left-0.5 hidden md:block top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        onClick={handlePrev}
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute -right-1 md:-right-0.5 hidden md:block  top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        onClick={handleNext}
      >
        <FaChevronRight />
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Mousewheel]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={8}
        loop={true}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        direction="horizontal"
        className="px-6"
        breakpoints={{
          320: { slidesPerView: 2 },
          400: { slidesPerView: 2.5 },
          490: { slidesPerView: 3 },
          640: { slidesPerView: 3.5 },
          768: { slidesPerView: 4 },
          850: { slidesPerView: 4.5 },
          1024: { slidesPerView: 5 },
          1100: { slidesPerView: 5.5 },
          1280: { slidesPerView: 6 },
          1400: { slidesPerView: 7 },
          1536: { slidesPerView: 8 },
          1620: { slidesPerView: 8.5 },
        }}
        style={{ paddingBottom: "20px" }}
      >
        {Categories.map((category, index) => (
          <SwiperSlide key={category.id}>
            <motion.div
              className="w-[150px] h-[150px] flex flex-col items-center justify-end rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white relative"
              style={{
                background: `linear-gradient(to top, ${category.color} 0%, ${
                  category.color + "1A"
                } 0.3%, transparent 100%)`,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-24 h-24 object-cover absolute bottom-14 hover:bottom-15 rounded-full shadow-md transition-all duration-300"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold mt-16 py-2">
                {category.name}
              </h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCard;
