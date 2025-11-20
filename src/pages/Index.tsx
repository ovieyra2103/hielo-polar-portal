
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import OurProcess from "@/components/home/OurProcess";
import Testimonials from "@/components/home/Testimonials";
import NewsSection from "@/components/home/NewsSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import Cta from "@/components/home/Cta";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TrustSection from "@/components/home/TrustSection";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Link } from "react-router-dom";
import { Calculator, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustSection />
      <FeaturedProducts />
      <OurProcess />
      
      {/* Calculadora de Hielo CTA - Rediseñada */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Herramienta Exclusiva</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Calculadora Inteligente de Hielo
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Descubre exactamente cuánto hielo necesitas - Sin desperdicios, sin quedarte corto
            </p>
            
            <div className="max-w-2xl mx-auto mt-8">
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Nuestra calculadora profesional te indica la cantidad exacta de bolsas o barras 
                para tu boda, fiesta o negocio. <strong className="text-white">Ahorra dinero y garantiza el éxito de tu evento.</strong>
              </p>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-lg font-semibold shadow-2xl hover:shadow-frost transition-all duration-300 hover:scale-105"
              >
                <Link to="/calculadora" className="flex items-center gap-3">
                  <Calculator className="w-6 h-6" />
                  Calcular Mi Hielo Ahora - Gratis
                </Link>
              </Button>

              <p className="text-white/70 text-sm mt-6">
                ⚡ Resultados instantáneos · 📊 Recomendaciones personalizadas · 💰 Optimiza tu compra
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <Testimonials />
      <NewsSection />
      <InstagramFeed />
      <Cta />
    </Layout>
  );
};

export default Index;
