import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Package2 } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Barras de Hielo Industrial",
    description: "Barra de hielo de 75 kg. Ideal para negocios, restaurantes, pescaderías y eventos. Servicio de molino sin costo adicional para moler las barras según la necesidad del cliente.",
    icon: Package2,
    image: "./public/lovable-uploads/Hielo-Polar-Barra-Azul.png",
  },
  {
    id: 2,
    title: "Bolsa de Hielo 5 kg",
    description: "Bolsa de hielo ideal para refrigeración doméstica o comercial. Práctica, económica y con cubos resistentes que mantienen la temperatura por más tiempo.",
    icon: Package,
    image: "./public/lovable-uploads/Hielo-Polar-Bolsa-5kg-min.png",
  },
  {
    id: 3,
    title: "Bolsa de Hielo Premier",
    description: "Hielo cristalino de alta pureza, ideal para bebidas premium. Presentación en bolsa con diseño moderno. Disponible en puntos de venta selectos.",
    icon: Package,
    image: "./public/lovable-uploads/Hielo-Polar-Premier-v2.png",
  },
  {
    id: 4,
    title: "Bolsa de Hielo 3 kg",
    description: "Bolsa de hielo tradicional en presentación de 3 kg. Perfecta para eventos pequeños, reuniones familiares o uso personal diario.",
    icon: Package,
    image: "./public/lovable-uploads/Hielo-Polar-Bolsa-3kg-min.png",
  },
  {
    id: 5,
    title: "Hielo Polar Ice & Water",
    description: "Una presentación innovadora que combina agua purificada y hielo de alta calidad. Ideal para viajes, días de campo y uso en exteriores.",
    icon: Package2,
    image: "./public/lovable-uploads/Hielo-Polar-Ice-n-Water-v2.png",
  },
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
                <div
                  data-lov-id="src/components/home/FeaturedProducts.tsx:28:14"
                  data-lov-name="div"
                  data-component-path="src/components/home/FeaturedProducts.tsx"
                  data-component-line="28"
                  data-component-file="FeaturedProducts.tsx"
                  data-component-name="div"
                  data-component-content='{"className":"h-64 overflow-hidden"}'
                  className="h-64 overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
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
