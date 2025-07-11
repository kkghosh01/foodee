// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import aboutImg from "../assets/about-chef.svg";

const fadeInVariant = {
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

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20 mt-10 overflow-x-hidden">
      {/* Title Section */}
      <motion.div
        className="text-center mb-16"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Foodee</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Sharing flavors from our kitchen to yours. Simple, healthy, and
          delicious recipes crafted with love.
        </p>
      </motion.div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <img
            src={aboutImg}
            alt="About Foodee"
            className="w-full rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1.2}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
          <p className="text-gray-700 mb-4">
            Foodee started with a simple goal — to make cooking fun,
            approachable, and rewarding for everyone. From humble beginnings in
            a home kitchen, we’ve grown into a trusted space for food lovers of
            all skill levels.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Over 1000+ tested recipes</li>
            <li>Step-by-step guidance for beginners</li>
            <li>Handpicked ingredients & tips</li>
            <li>Built for real life cooking</li>
          </ul>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <motion.div
        className="mb-20 text-center"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1.4}
      >
        <h2 className="text-3xl font-bold mb-6">Why Choose Foodee?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Easy Recipes",
              desc: "Quick, simple, and tasty meals anyone can make.",
            },
            {
              title: "Healthy Choices",
              desc: "We care about your health without sacrificing flavor.",
            },
            {
              title: "Community Driven",
              desc: "Recipes contributed & loved by our amazing foodies.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="p-6 bg-[#e7fafe] rounded-xl shadow hover:shadow-lg transition"
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1.6 + i * 0.2}
            >
              <h3 className="text-xl font-semibold text-[#ff7426] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="text-center"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2.2}
      >
        <h2 className="text-2xl font-bold mb-4">Join Our Foodie Family</h2>
        <p className="text-gray-600 mb-6">
          Love cooking? Subscribe for weekly tips, recipes, and more!
        </p>
        <a
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-[#ff7426] transition"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
};

export default About;
