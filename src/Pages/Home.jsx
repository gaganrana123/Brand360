import Hero from '../components/home/Hero';
import ClientLogos from '../components/home/ClientLogos';
import ServiceHighlight from '../Components/home/WhatWeDo'; // Fixed path
import Work from '../Components/home/Work';
export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceHighlight />
      <Work/>
      <ClientLogos />
    </div>
  );
}