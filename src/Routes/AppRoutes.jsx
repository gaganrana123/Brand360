import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Services from '../Components/servicepage/Services';
import Clientele from '../Pages/Clientele';
import Portfolio from '../Pages/Portfolio';



function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/clientele" element={<Clientele />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default AppRoutes;
