
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Package, Package2, Info } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const eventTypes = [
  { id: "party", label: "Fiesta", kgPerPerson: 1 },
  { id: "wedding", label: "Boda", kgPerPerson: 1.5 },
  { id: "corporate", label: "Evento Corporativo", kgPerPerson: 0.8 },
  { id: "cocktail", label: "Coctelería", kgPerPerson: 0.5 },
  { id: "birthday", label: "Fiesta Infantil", kgPerPerson: 0.7 },
  { id: "graduation", label: "Graduación", kgPerPerson: 1.2 },
  { id: "pool", label: "Fiesta en Alberca", kgPerPerson: 1.8 },
];

const conservationTips = {
  small: "Guarda el hielo en conservadores térmicos y mantenlos en sombra.",
  medium: "Utiliza conservadores térmicos y cubre con mantas térmicas para mayor duración.",
  large: "Para eventos grandes, programa entregas escalonadas o renta un refrigerador adicional."
};

const ProductsPage = () => {
  const [guests, setGuests] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [tip, setTip] = useState<string>("");

  const calculateIce = () => {
    const selectedEvent = eventTypes.find((type) => type.id === eventType);
    if (!selectedEvent || !guests) return;

    const guestsNumber = parseInt(guests);
    const iceNeeded = guestsNumber * selectedEvent.kgPerPerson;
    setResult(iceNeeded);
    
    // Set conservation tip based on amount
    if (iceNeeded < 50) {
      setTip(conservationTips.small);
    } else if (iceNeeded < 150) {
      setTip(conservationTips.medium);
    } else {
      setTip(conservationTips.large);
    }
  };

  const handleDownload = (productName: string) => {
    // Mostrar una notificación toast informando que las fichas técnicas estarán disponibles pronto
    toast.info(`La ficha técnica de ${productName} estará disponible próximamente`, {
      description: "Estamos actualizando nuestras fichas técnicas. ¡Gracias por su paciencia!",
      duration: 5000,
    });
    
    // No hacemos descarga para evitar archivos TXT temporales
  };

  return (
    <Layout>
      {/* Hero section */}
      <section className="relative py-20 bg-ice-700">
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Productos</h1>
            <div className="h-1 w-20 bg-white mt-4 mb-8 rounded-full" />
            <p className="text-xl">
              Descubre nuestra variedad de productos de hielo, elaborados con 
              agua purificada y con los más altos estándares de calidad.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTVMNDUgNDVNMTUgNDVMNDUgMTUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')]"></div>
      </section>
      
      {/* Main content */}
      <section className="py-20">
        <div className="container">
          <SectionTitle 
            title="Nuestros Productos" 
            subtitle="Calidad garantizada en cada pieza de hielo"
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Industrial Ice */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-ice-100">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="/lovable-uploads/Hielo-Polar-Barra-Azul.jpg" 
                  alt="Barras de hielo industrial"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ice-900/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Barras de Hielo Industrial</h3>
                    <p>La solución perfecta para negocios y eventos</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center space-x-2">
                  <Package2 className="h-6 w-6 text-ice-600" />
                  <h4 className="text-lg font-semibold text-ice-700">Especificaciones</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-ice-100 flex items-center justify-center text-ice-600 text-sm mr-2 shrink-0">1</span>
                    <span><strong>Peso:</strong> 75 kg.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-ice-100 flex items-center justify-center text-ice-600 text-sm mr-2 shrink-0">2</span>
                    <span><strong>Uso:</strong> Ideal para negocios, restaurantes, pescaderías y eventos.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-ice-100 flex items-center justify-center text-ice-600 text-sm mr-2 shrink-0">3</span>
                    <span><strong>Servicio de molido:</strong> Sin costo adicional para moler las barras según la necesidad del cliente.</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button 
                    className="w-full bg-ice-500 hover:bg-ice-600 flex items-center justify-center"
                    onClick={() => handleDownload("Barras de Hielo Industrial")}
                  >
                    <FileText size={16} className="mr-1" />
                    Descargar Ficha Técnica
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Cubed Ice */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-ice-100">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img src="/lovable-uploads/Hielo-Polar-Bolsa-5kg.jpg" 
                  alt="Cubos de hielo"
                  className="w-full h-64 object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-ice-900/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Cubos de Hielo</h3>
                    <p>Perfectos para todas tus bebidas y eventos</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center space-x-2">
                  <Package className="h-6 w-6 text-ice-600" />
                  <h4 className="text-lg font-semibold text-ice-700">Variedades</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-ice-100 flex items-center justify-center text-ice-600 text-sm mr-2 shrink-0">1</span>
                    <span><strong>Hielo Premier:</strong> Cubos de hielo, cristalinos, ideales para tus bebidas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-ice-100 flex items-center justify-center text-ice-600 text-sm mr-2 shrink-0">2</span>
                    <span><strong>Cubitos Tradicionales:</strong> Perfectos para consumo diario y cualquier evento.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-ice-100 flex items-center justify-center text-ice-600 text-sm mr-2 shrink-0">3</span>
                    <span><strong>Presentación:</strong> Bolsa de 5 kg.</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button 
                    className="w-full bg-ice-500 hover:bg-ice-600 flex items-center justify-center"
                    onClick={() => handleDownload("Cubos de Hielo")}
                  >
                    <FileText size={16} className="mr-1" />
                    Descargar Ficha Técnica
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ice Calculator Section */}
          <div className="mt-20">
            <SectionTitle 
              title="Calculadora de Hielo" 
              subtitle="¿Cuánto hielo necesitas para tu evento?" 
              center
            />
            
            <div className="max-w-3xl mx-auto mt-12">
              <Card className="border-ice-100 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-ice-700">
                    Calcula la cantidad ideal de hielo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="guests" className="text-sm font-medium text-ice-600">
                        Número de Invitados
                      </label>
                      <Input
                        id="guests"
                        type="number"
                        placeholder="Ej: 100"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="border-ice-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ice-600">
                        Tipo de Evento
                      </label>
                      <Select value={eventType} onValueChange={setEventType}>
                        <SelectTrigger className="border-ice-200">
                          <SelectValue placeholder="Selecciona el tipo de evento" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateIce}
                    className="w-full bg-ice-600 hover:bg-ice-700 text-white"
                    disabled={!guests || !eventType}
                  >
                    Calcular
                  </Button>

                  {result !== null && (
                    <div className="mt-6 p-4 bg-ice-50 rounded-lg border border-ice-100">
                      <p className="text-center text-ice-800 text-lg font-medium">
                        Para tu evento necesitarás aproximadamente{" "}
                        <span className="font-bold text-xl text-ice-700">
                          {result} kg
                        </span>{" "}
                        de hielo
                      </p>
                      
                      <div className="mt-4 flex items-start bg-white p-3 rounded-md border border-ice-100">
                        <Info size={20} className="text-ice-600 mr-2 mt-1 shrink-0" />
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Recomendación: </span>
                          {tip}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-4 bg-ice-50 rounded-lg border border-ice-100">
                    <h4 className="font-medium text-ice-700 mb-2">¿Sabías que...?</h4>
                    <p className="text-sm text-gray-600">
                      Para conservar mejor el hielo, mantenlo en un lugar fresco y seco, 
                      alejado de la luz solar directa. Si necesitas mantenerlo durante varias horas, 
                      utiliza conservadores de poliestireno o hieleras de alta calidad.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Quality Guarantee */}
          <div className="mt-20 bg-ice-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-ice-700 mb-4">Garantía de Calidad</h3>
                <p className="text-gray-700 mb-4">
                  En Hielo Polar, nos esforzamos por mantener los más altos estándares 
                  de calidad en cada uno de nuestros productos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-ice-500 mr-2"></div>
                    <span>Agua 100% purificada</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-ice-500 mr-2"></div>
                    <span>Proceso de congelación controlado</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-ice-500 mr-2"></div>
                    <span>Almacenamiento higiénico</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-ice-500 mr-2"></div>
                    <span>Distribución estratégica</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-ice-100 rounded-full text-ice-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Solicita más información</h4>
                  <p className="text-gray-600 mb-4">
                    Si quieres ser nuestro socio comercial.
                  </p>
                  <Button asChild className="bg-ice-500 hover:bg-ice-600">
                    <Link to="/contacto">Contactar ahora</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
