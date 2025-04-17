
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Barras de Hielo Industrial",
    description: "Barra de hielo de 75 kg. Ideal para negocios, restaurantes y pescaderías.",
    image: "/lovable-uploads/Hielo-Polar-Barra-Azul.png"
  },
  {
    id: 2,
    name: "Hielo Premier",
    description: "Cubos de hielo premium, cristalinos, ideales para bebidas. Presentación: Bolsa de 5 kg.",
    image: "/lovable-uploads/Hielo-Polar-Premier-v2.png"
  },
  {
    id: 3,
    name: "Cubitos Tradicionales",
    description: "Perfectos para consumo diario y eventos. Presentación: Bolsa de 5 kg.",
    image: "/lovable-uploads/Hielo-Polar-Bolsa-5kg-min.png"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-ice-50">
      <div className="container">
        <SectionTitle title="Nuestros Productos" subtitle="Calidad y pureza en cada producto" center />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {products.map(product => (
            <Card key={product.id} className="overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 border-none">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ice-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button asChild variant="outline" className="w-full border-ice-600 text-ice-600 hover:bg-ice-600 hover:text-white">
                  <Link to="/productos">Ver Detalles</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-ice-600 hover:bg-ice-700 text-white">
            <Link to="/productos">Ver Todos los Productos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
