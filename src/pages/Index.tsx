
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import OurProcess from "@/components/home/OurProcess";
import IceCalculator from "@/components/home/IceCalculator";
import Testimonials from "@/components/home/Testimonials";
import NewsSection from "@/components/home/NewsSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import Cta from "@/components/home/Cta";
import FeaturedProducts from "@/components/home/FeaturedProducts";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <OurProcess />
      <IceCalculator />
      <Testimonials />
      <NewsSection />
      <InstagramFeed />
      <Cta />
    </Layout>
  );
};

export default Index;
