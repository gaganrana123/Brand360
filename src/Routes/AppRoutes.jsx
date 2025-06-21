import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import Team from '../Pages/Team';
import AboutUs from '../Pages/AboutUs';
import Clientele from '../Pages/Clientele';
import Portfolio from '../Pages/Portfolio';

// Services sub-pages
import DigitalMarketing from '../Pages/ServicesComponents/DigitalMarketing';
import ATL from '../Pages/ServicesComponents/ATL';
import OOH from '../Pages/ServicesComponents/OOH'
import MediaBuying from '../Pages/ServicesComponents/MediaBuying';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
            <Route path="/servicescomponents/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/servicescomponents/atl" element={<ATL />} />
            <Route path="/servicescomponents/ooh" element={<OOH />} />
            <Route path="/servicescomponents/media-buying" element={<MediaBuying />} />
      <Route path="/team" element={<Team />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/clientele" element={<Clientele />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default AppRoutes;
