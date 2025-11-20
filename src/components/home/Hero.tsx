import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Hero = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 w-full h-full bg-ice-900">
        {/* Fallback image if video fails to load */}
        {videoError && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1500820242045-8a794ef5fd55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            }}
          />
        )}
        
        {/* Video element */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
          onError={() => {
            console.error("Error loading video");
            setVideoError(true);
          }}
        >
          <source src="/hielo-polar.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Content */}
      <div className="container relative h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl">
          {/* Badge Superior */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Servicio Premium en Guanajuato y Michoacán</span>
          </div>

          {/* H1 Orientado a Beneficios */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Frescura Garantizada<br />
            <span className="text-accent">Para Tu Negocio</span>
          </h1>

          {/* Propuesta de Valor */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto">
            Hielo 100% purificado con entrega puntual. Mantén tus bebidas frías y tu negocio en marcha.
          </p>
          
          <p className="text-base md:text-lg text-white/75 mb-10">
            ✓ Pureza cristalina ✓ Logística infalible ✓ Precios mayoristas
          </p>

          {/* CTAs Premium */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-accent text-white hover:bg-accent/90 border-2 border-accent shadow-frost text-lg px-8 py-6 glow-ice"
            >
              <Link to="/contacto">
                Cotiza Ahora - Entrega Inmediata
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10 text-lg px-8 py-6"
            >
              <Link to="/productos">
                Ver Productos
              </Link>
            </Button>
          </div>

          {/* Prueba Social */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-primary border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-accent/80 border-2 border-white"></div>
              </div>
              <span>+500 clientes confían en nosotros</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.9/5 en satisfacción</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
          <svg 
            className="w-6 h-6 text-ice-700" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;