
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, FileText, Star } from "lucide-react";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "Barras de Hielo Industrial",
    description: "Barra de hielo de 75 kg. Ideal para negocios, restaurantes y pescaderías.",
    image: "/lovable-uploads/Hielo-Polar-Barra-Azul.png",
    featured: true,
    sheet: "/lovable-uploads/barra-hielo-industrial.pdf"
  },
  {
    id: 2,
    name: "Hielo Premier",
    description: "Cubos de hielo premium, cristalinos, ideales para bebidas. Presentación: Bolsa de 5 kg.",
    image: "/lovable-uploads/Hielo-Polar-Premier-v2.png",
    featured: true,
    sheet: "/lovable-uploads/hielo-premier.pdf"
  },
  {
    id: 3,
    name: "Cubitos Tradicionales",
    description: "Perfectos para consumo diario y eventos. Presentación: Bolsa de 5 kg.",
    image: "/lovable-uploads/Hielo-Polar-Bolsa-5kg-min.png",
    featured: false,
    sheet: "/lovable-uploads/cubitos-tradicionales.pdf"
  }
];

const FeaturedProducts = () => {
  const handleDownload = (productName: string, fileUrl: string) => {
    // Since we don't have the actual PDF files, let's show a toast notification instead
    toast.info(`La ficha técnica de ${productName} estará disponible próximamente`, {
      description: "Estamos actualizando nuestras fichas técnicas. ¡Gracias por su paciencia!",
      duration: 5000,
    });
    
    // For demonstration, we'll create and download a simple text file
    const element = document.createElement("a");
    const file = new Blob([`Ficha técnica para ${productName}\n\nDetalles del producto estarán disponibles próximamente.`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${productName.toLowerCase().replace(/ /g, '-')}-ficha-tecnica.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="py-24 bg-ice-50">
      <div className="container">
        <SectionTitle title="Nuestros Productos" subtitle="Calidad y pureza en cada producto" center />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {products.map(product => (
            <Card key={product.id} className="overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 border-none relative">
              {product.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-ice-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Star size={12} className="mr-1" />
                    Destacado
                  </span>
                </div>
              )}
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ice-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button asChild variant="outline" className="border-ice-600 text-ice-600 hover:bg-ice-600 hover:text-white">
                    <Link to="/productos">Ver Detalles</Link>
                  </Button>
                  <Button 
                    className="bg-ice-600 hover:bg-ice-700 text-white flex items-center"
                    onClick={() => handleDownload(product.name, product.sheet)}
                  >
                    <FileText size={16} className="mr-1" />
                    Ficha Técnica
                  </Button>
                </div>
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
