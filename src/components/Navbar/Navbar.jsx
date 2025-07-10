import foodeeImg from "../../assets/foodee.png";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { useState, useEffect } from "react";
import ResposiveMenu from "./ResposiveMenu";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";

const Navbar = () => {
  const NavLinks = [
    { name: "Home", link: "/" },
    { name: "Recipes", link: "/recipes" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
    { name: "About us", link: "/about" },
  ];

  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastSrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastSrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastSrollY]);
  return (
    // Full-width border container
    <div
      className={`w-full mx-auto border-b border-gray-300 shadow-sm fixed top-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white`}
    >
      {/* Centered navbar content container */}
      <section className="flex justify-between items-center w-full max-w-[95%] mx-auto m-auto h-20 px-4">
        <div>
          <Link to={"/"} onClick={scrollToTop}>
            <img src={foodeeImg} alt="logo" className="w-[90px]" />
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-md">
            {NavLinks.map((link, index) => (
              <li key={index} className="hover:text-[#ff7426] transition">
                <Link to={link.link} onClick={scrollToTop}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4 text-xl text-gray-600">
          <TiSocialFacebook className="hover:text-blue-500 cursor-pointer" />
          <TiSocialTwitter className="hover:text-sky-500 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <div
            className="block md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <RxCrossCircled /> : <MdMenuOpen />}
          </div>
        </div>
        <ResposiveMenu open={open} NavLinks={NavLinks} setOpen={setOpen} />
      </section>
    </div>
  );
};

export default Navbar;
