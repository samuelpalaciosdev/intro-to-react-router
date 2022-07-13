import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
