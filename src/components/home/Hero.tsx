
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-ice-900/50"></div>
      </div>
      
      {/* Content */}
      <div className="container relative h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            HIELO POLAR DEL CENTRO
          </h1>
          <p className="text-xl text-ice-100 mb-8">
            Líderes en producción y distribución de hielo en Guanajuato y Michoacán. 
            Calidad garantizada con agua purificada y proceso de congelación controlado.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-ice-500 hover:bg-ice-600 text-white"
            >
              <Link to="/productos">
                Nuestros Productos
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/contacto">
                Contáctanos
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 50C840 40 960 20 1080 15C1200 10 1320 20 1380 25L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
