
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Star } from "lucide-react";
import { toast } from "sonner";

const products = [{
  id: 1,
  name: "Barras de Hielo Industrial (66kg)",
  description: "Conservación extrema para pescaderías, marisquerías y distribuidores. Mantén tus productos frescos por horas.",
  benefits: "✓ Duración prolongada ✓ Máxima capacidad de enfriamiento ✓ Ideal para transporte",
  image: "/lovable-uploads/Hielo-Polar-Barra-Azul.png",
  featured: true,
  sheet: "/lovable-uploads/barra-hielo-industrial.pdf",
  cta: "Solicitar Cotización"
}, {
  id: 2,
  name: "Hielo Premier - Cristalino",
  description: "Cubos premium ultra-transparentes que no alteran el sabor. Perfectos para bares, restaurantes y eventos de alto nivel.",
  benefits: "✓ 100% purificado ✓ Transparencia cristalina ✓ Sin sabor ni olor",
  image: "/lovable-uploads/52b6966c-1a4f-475a-b191-1b3980c90d9e.png",
  featured: true,
  sheet: "/lovable-uploads/hielo-premier.pdf",
  cta: "Pedir Ahora"
}, {
  id: 3,
  name: "Cubitos Tradicionales (5kg)",
  description: "Tu aliado diario para fiestas, tiendas y consumo familiar. Calidad garantizada a precio accesible.",
  benefits: "✓ Precio mayorista ✓ Entrega rápida ✓ Bolsas de 5kg",
  image: "/lovable-uploads/b49d0fd7-91e1-4d0d-9234-c10f6931662a.png",
  featured: false,
  sheet: "/lovable-uploads/cubitos-tradicionales.pdf",
  cta: "Comprar Ahora"
}];

const FeaturedProducts = () => {
  const handleDownload = (productName: string, fileUrl: string) => {
    // Mostrar una notificación toast informando que las fichas técnicas estarán disponibles pronto
    toast.info(`La ficha técnica de ${productName} estará disponible próximamente`, {
      description: "Estamos actualizando nuestras fichas técnicas. ¡Gracias por su paciencia!",
      duration: 5000
    });

    // No hacemos descarga para evitar archivos TXT temporales
  };

  return (
    <section className="py-24 frost-gradient">
      <div className="container">
        <SectionTitle 
          title="Soluciones Para Cada Necesidad" 
          subtitle="Elige el hielo perfecto para tu negocio o evento" 
          center 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {products.map(product => (
            <Card key={product.id} className="overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 border-none relative group hover:-translate-y-2">
              {product.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center shadow-frost glow-ice">
                    <Star size={12} className="mr-1 fill-white" />
                    Más Vendido
                  </span>
                </div>
              )}
              
              <div className="h-72 overflow-hidden bg-gradient-to-b from-secondary/30 to-white relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary mb-2">{product.name}</h3>
                <p className="text-foreground/80 leading-relaxed">{product.description}</p>
                <p className="text-sm text-muted-foreground border-l-4 border-accent pl-3">{product.benefits}</p>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    asChild 
                    className="flex-1 bg-primary hover:bg-primary/90 text-white shadow-ice"
                  >
                    <Link to="/contacto">{product.cta}</Link>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white flex items-center justify-center" 
                    onClick={() => handleDownload(product.name, product.sheet)}
                  >
                    <FileText size={16} className="mr-1" />
                    Ficha
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-ice px-8 py-6 text-lg">
            <Link to="/productos">Explorar Catálogo Completo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
