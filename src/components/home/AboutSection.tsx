import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return <section className="py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-ice-800 mb-6">Quiénes Somos</h2>
            <div className="w-20 h-1 bg-ice-500 mb-8"></div>
            <p className="text-lg text-gray-700 mb-6">
              Hielo Polar del Centro es una empresa líder en la producción y 
              distribución de hielo en Guanajuato y Michoacán. Nos especializamos 
              en la fabricación de barras de hielo industrial y bolsas de cubos de 
              hielo, garantizando un producto de alta calidad.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Nuestro hielo se elabora con agua purificada y con un proceso de 
              congelación controlado, brindando un servicio eficiente, con entregas 
              puntuales y productos que cumplen con los estándares más exigentes del mercado.
            </p>
            <Button asChild className="bg-ice-600 hover:bg-ice-700 text-white">
              <Link to="/nosotros">Leer Más</Link>
            </Button>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img alt="Fábrica de hielo" className="w-full h-[500px] object-cover" src="/lovable-uploads/d913f418-6570-4c04-871c-cb785496b76f.jpg" />
            </div>
            <div className="absolute top-10 -left-10 w-full h-full border-4 border-ice-500 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;