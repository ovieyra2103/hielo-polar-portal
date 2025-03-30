import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const products = [{
  id: 1,
  name: "Barras de Hielo Industrial",
  description: "Barra de hielo de 75 kg. Ideal para negocios, restaurantes y pescaderías.",
  image: "https://images.unsplash.com/photo-1594016114271-9a255950c6bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
  id: 2,
  name: "Hielo Premier",
  description: "Cubos de hielo premium, cristalinos, ideales para bebidas. Presentación: Bolsa de 5 kg.",
  image: "https://images.unsplash.com/photo-1578107265452-32f4ab4afb93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
  id: 3,
  name: "Cubitos Tradicionales",
  description: "Perfectos para consumo diario y eventos. Presentación: Bolsa de 5 kg.",
  image: "https://images.unsplash.com/photo-1514997130083-2304083899de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}];
const FeaturedProducts = () => {
  return <section className="py-24 bg-ice-50">
      <div className="container">
        <SectionTitle title="Nuestros Productos" subtitle="Calidad y pureza en cada producto" center />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {products.map(product => <Card key={product.id} className="overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 border-none">
              <div className="h-64 overflow-hidden">
                
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ice-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button asChild variant="outline" className="w-full border-ice-600 text-ice-600 hover:bg-ice-600 hover:text-white">
                  <Link to="/productos">Ver Detalles</Link>
                </Button>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-ice-600 hover:bg-ice-700 text-white">
            <Link to="/productos">Ver Todos los Productos</Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default FeaturedProducts;