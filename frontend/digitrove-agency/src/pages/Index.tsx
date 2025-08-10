import { useParams } from "react-router-dom";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Import service pages
import DigitalMarketingPage from '@/pages/DigitalMarketingPage';
import EcommercePage from '@/pages/EcommercePage';
import GraphicDesignPage from '@/pages/GraphicDesignPage';
import WebDevPage from '@/pages/WebDevPage';
import ProductPhotographyPage from '@/pages/ProductPhotographyPage';
// import NotFoundPage from '@/pages/NotFoundPage';

const Index = () => {
  const { serviceId } = useParams<{ serviceId?: string }>();

  const renderServicePage = () => {
    switch (serviceId) {
      case "digital-marketing":
        return <DigitalMarketingPage />;
      case "ecommerce":
        return <EcommercePage />;
      case "graphic-design":
        return <GraphicDesignPage />;
      case "web-development":
        return <WebDevPage />;
      case "product-photography":
        return <ProductPhotographyPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {serviceId ? (
          renderServicePage()
        ) : (
          <>
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;