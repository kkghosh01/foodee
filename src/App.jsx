import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
