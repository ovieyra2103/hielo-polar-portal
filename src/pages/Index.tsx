
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import AboutSection from "@/components/home/AboutSection";
import OurProcess from "@/components/home/OurProcess";
import Testimonials from "@/components/home/Testimonials";
import NewsSection from "@/components/home/NewsSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import Cta from "@/components/home/Cta";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Products />
      <AboutSection />
      <OurProcess />
      <Testimonials />
      <NewsSection />
      <InstagramFeed />
      <Cta />
    </Layout>
  );
};

export default Index;
