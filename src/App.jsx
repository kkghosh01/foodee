import Home from "./Pages/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Recipes from "./Pages/Recipes";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import RecipeDetails from "./Pages/RecipeDetails";
import BlogDetails from "./Pages/BlogDetails";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
