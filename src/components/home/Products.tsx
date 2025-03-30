
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Package2 } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Barras de Hielo Industrial",
    description: "Barra de hielo de 75 kg. Ideal para negocios, restaurantes, pescaderías y eventos. Servicio de molino sin costo adicional para moler las barras según la necesidad del cliente.",
    icon: Package2,
  },
  {
    id: 2,
    title: "Cubos de Hielo",
    description: "Ofrecemos Hielo Premier con cubos premium cristalinos ideales para bebidas, y Cubitos Tradicionales perfectos para consumo diario y eventos. Disponible en bolsas de 5 kg.",
    icon: Package,
  }
];

const Products = () => {
  return (
    <section className="py-20 bg-ice-50">
      <div className="container">
        <SectionTitle 
          title="Nuestros Productos" 
          subtitle="Calidad y pureza garantizada"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-white border-ice-100 shadow-lg transition-transform hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className="w-16 h-16 mb-4 rounded-full bg-ice-100 flex items-center justify-center text-ice-600">
                  <product.icon size={32} />
                </div>
                <CardTitle className="text-2xl text-ice-700">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="border-ice-500 text-ice-500 hover:bg-ice-500 hover:text-white">
                  <Link to="/productos">Más detalles</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-ice-500 hover:bg-ice-600">
            <Link to="/productos">Ver todos los productos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
