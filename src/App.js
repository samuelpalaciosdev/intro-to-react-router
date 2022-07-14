import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Views/Contact";
import Pricing from "./Views/Pricing";
import Faq from "./Views/Faq";
import BlogHome from "./Views/BlogHome";
import BlogPost from "./Views/BlogPost";
import PortfolioOverview from "./Views/PortfolioOverview";
import PortfolioItem from "./Views/PortfolioItem";
import NotFound from "./Views/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <main className="flex-shrink-0">
          <Navbar />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog-home" element={<BlogHome />} />
            <Route path="/blog-post" element={<BlogPost />} />
            <Route path="/portfolio-overview" element={<PortfolioOverview />} />
            <Route path="/portfolio-item" element={<PortfolioItem />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
