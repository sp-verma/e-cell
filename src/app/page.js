import Herosection from "@/components/herosection";
import Aboutme from "@/components/aboutme";
import Moto from '@/components/moto';
import Events from '@/components/events';
import Gallery from '@/components/Gallery';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-black h-auto">
      <Herosection />
      
        <Aboutme />
        <Moto />
        <Events />
        <Gallery />
      
      <Footer />
    </div>
  );
}
