import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from '../components/home/Hero';
import ClientLogos from '../components/home/ClientLogos';
import ServiceHighlight from '../Components/home/WhatWeDo';
import Work from '../Components/home/Work';


export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Wait for DOM to be ready
    setTimeout(() => {
      if (location.hash === "#footer") {
        const footer = document.getElementById("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      } 
      else if (location.hash === "#clientlogos") {
        const clientele = document.getElementById("clientlogos");
        if (clientele) {
          clientele.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 50);
  }, [location.hash]);

  return (
    <div>
      <Hero />
      <ServiceHighlight />
      <Work />
      {/* Add ID to ClientLogos for scrolling */}
      <div id="clientlogos">
        <ClientLogos />
      </div>
    </div>
  );
}