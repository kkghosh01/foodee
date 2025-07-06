import { GiAlarmClock, GiKnifeFork } from "react-icons/gi";
import { FaRegPlayCircle } from "react-icons/fa";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="mt-24 md:mt-28 px-4">
      <div className="bg-[#e7fafe] relative rounded-2xl w-[95%] max-w-screen-2xl mx-auto m-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6 px-4 py-4 md:px-6 md:py-1 shadow-sm overflow-hidden">
        {/* Text Section */}
        <span className="absolute top-3 left-1 z-10 md:left-6 flex flex-row gap-2 items-center bg-white px-3 py-1 rounded-full">
          <PiBookOpenTextDuotone />
          Hot item
        </span>
        <div className="md:w-1/2 w-full animate-fadeInLeft">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-3 leading-snug">
            Spicy delicious chicken wings
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            tempora commodi at, illum quis rerum.
          </p>

          {/* Info tags */}
          <div className="flex gap-3 flex-wrap text-xs md:text-sm font-medium">
            <span className="flex items-center gap-1.5 bg-black/50 text-white px-3 py-1 rounded-full">
              <GiAlarmClock /> 30 Min
            </span>
            <span className="flex items-center gap-1.5 bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
              <GiKnifeFork /> Chicken
            </span>
          </div>

          {/* Author + CTA */}
          <div className="flex items-center justify-between mt-6 md:mt-30">
            <div>
              <h3 className="font-semibold text-sm md:text-base">John Smith</h3>
              <p className="text-xs text-gray-500 font-light">15 March 2024</p>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-xs md:text-sm hover:bg-gray-800 transition"
            >
              View Recipes <FaRegPlayCircle size={16} />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full animate-fadeInRight">
          <img
            src={heroImg}
            alt="Delicious Chicken Wings"
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
