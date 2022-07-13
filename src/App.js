import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Views/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
