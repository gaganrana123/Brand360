import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Services from '../Components/servicepage/Services';
import Portfolio from '../Pages/Portfolio';
import ProjectDetail from '../Pages/ProjectDetail';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}

export default AppRoutes;
