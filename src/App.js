import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import Pricing from './Views/Pricing';
import Faq from './Views/Faq';
import BlogHome from './Views/BlogHome';
import BlogPost from './Views/BlogPost';
import PortfolioOverview from './Views/PortfolioOverview';
import PortfolioItem from './Views/PortfolioItem';
import NotFound from './Views/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
