import Hero from '../components/home/Hero';
import ClientLogos from '../components/home/ClientLogos';
import ServiceHighlight from '../components/home/ServiceHighlight';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div>
      <Hero />
      <ClientLogos />
      <ServiceHighlight />
      <CTASection />
    </div>
  );
}