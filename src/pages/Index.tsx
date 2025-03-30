
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";
import Coverage from "@/components/home/Coverage";
import Contact from "@/components/home/Contact";
import Cta from "@/components/home/Cta";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Products />
      <Services />
      <Coverage />
      <Cta />
      <Contact />
    </Layout>
  );
};

export default Index;
