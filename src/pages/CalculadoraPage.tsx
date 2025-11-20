
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Calculator, Beer, Sparkles } from "lucide-react";

const eventTypes = [
  { id: "party", label: "Fiesta", kgPerPerson: 0.5 },
  { id: "wedding", label: "Boda", kgPerPerson: 0.8 },
  { id: "corporate", label: "Evento Corporativo", kgPerPerson: 0.4 },
  { id: "cocktail", label: "Coctelería", kgPerPerson: 0.3 },
  { id: "birthday", label: "Fiesta Infantil", kgPerPerson: 0.3 },
  { id: "graduation", label: "Graduación", kgPerPerson: 0.6 },
  { id: "pool", label: "Fiesta en Alberca", kgPerPerson: 1.0 },
];

const beerTypes = [
  { id: "small", label: "24 cervezas ampolleta (255ml)", kgPerCarton: 4.375, cartonsPerBar: 15 },
  { id: "regular", label: "24 cervezas regulares (355ml)", kgPerCarton: 7, cartonsPerBar: 9 },
  { id: "family", label: "12 cervezas familiares", kgPerCarton: 8, cartonsPerBar: 8 },
];

const conservationTips = {
  small: "Guarda el hielo en conservadores térmicos y mantenlos en sombra.",
  medium: "Utiliza conservadores térmicos y cubre con mantas térmicas para mayor duración.",
  large: "Para eventos grandes, programa entregas escalonadas o renta un refrigerador adicional."
};

const CalculadoraPage = () => {
  const [guests, setGuests] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [beerCartons, setBeerCartons] = useState<string>("");
  const [beerType, setBeerType] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [tip, setTip] = useState<string>("");
  const [bags, setBags] = useState<number>(0);
  const [iceBars, setIceBars] = useState<number>(0);
  const [beerIceBars, setBeerIceBars] = useState<number>(0);

  const calculateIce = () => {
    const selectedEvent = eventTypes.find((type) => type.id === eventType);
    if (!selectedEvent || !guests) return;

    const guestsNumber = parseInt(guests);
    const iceNeeded = guestsNumber * selectedEvent.kgPerPerson;
    
    // Calculate number of 5kg bags - this is the main ice needed
    const calculatedBags = Math.ceil(iceNeeded / 5);
    
    // Calculate ice bars for general cooling (1 bar per 40-50 guests)
    const calculatedBars = Math.ceil(guestsNumber / 45);
    
    // Calculate ice bars needed for beer if specified
    let calculatedBeerBars = 0;
    if (beerCartons && beerType) {
      const selectedBeer = beerTypes.find((beer) => beer.id === beerType);
      if (selectedBeer) {
        const cartonsNumber = parseInt(beerCartons);
        calculatedBeerBars = Math.ceil(cartonsNumber / selectedBeer.cartonsPerBar);
      }
    }
    
    setResult(iceNeeded);
    setBags(calculatedBags);
    setIceBars(calculatedBars);
    setBeerIceBars(calculatedBeerBars);
    
    // Set conservation tip based on amount
    if (iceNeeded < 25) {
      setTip(conservationTips.small);
    } else if (iceNeeded < 75) {
      setTip(conservationTips.medium);
    } else {
      setTip(conservationTips.large);
    }
  };

  return (
    <Layout>
      {/* Hero section */}
      <section className="relative py-24 bg-gradient-to-br from-arctic via-glacial to-arctic overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Calculator className="w-4 h-4" />
              <span className="text-sm font-medium">Herramienta Profesional</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Calculadora de Hielo
              <span className="block mt-2 text-white/90">Inteligente y Precisa</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Calcula la cantidad exacta de hielo para tu evento en segundos.
              <span className="block mt-2 font-semibold">¡Incluye cálculos específicos para cerveza y diferentes tipos de eventos!</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Sparkles className="w-4 h-4" />
                <span>Resultados Instantáneos</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Info className="w-4 h-4" />
                <span>Recomendaciones Personalizadas</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Beer className="w-4 h-4" />
                <span>Cálculo de Cerveza</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-ice-100 shadow-lg">
              <CardHeader className="bg-ice-50">
                <CardTitle className="text-center text-2xl text-ice-700 flex items-center justify-center">
                  <Calculator className="mr-2" /> 
                  Calcula la cantidad ideal de hielo para tu evento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
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

                {/* Sección adicional para cervezas */}
                <div className="border-t pt-6">
                  <h4 className="font-medium text-ice-700 mb-4 flex items-center">
                    <Beer className="mr-2" size={20} />
                    Cálculo adicional para cervezas (opcional)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="beerCartons" className="text-sm font-medium text-ice-600">
                        Número de Cartones de Cerveza
                      </label>
                      <Input
                        id="beerCartons"
                        type="number"
                        placeholder="Ej: 5"
                        value={beerCartons}
                        onChange={(e) => setBeerCartons(e.target.value)}
                        className="border-ice-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ice-600">
                        Tipo de Cerveza
                      </label>
                      <Select value={beerType} onValueChange={setBeerType}>
                        <SelectTrigger className="border-ice-200">
                          <SelectValue placeholder="Selecciona el tipo de cerveza" />
                        </SelectTrigger>
                        <SelectContent>
                          {beerTypes.map((beer) => (
                            <SelectItem key={beer.id} value={beer.id}>
                              {beer.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={calculateIce}
                  className="w-full bg-ice-600 hover:bg-ice-700 text-white py-6 text-lg"
                  disabled={!guests || !eventType}
                >
                  Calcular
                </Button>

                {result !== null && (
                  <div className="mt-6 p-6 bg-ice-50 rounded-lg border border-ice-100">
                    <p className="text-center text-ice-800 text-lg font-medium mb-4">
                      Para tu evento necesitarás aproximadamente{" "}
                      <span className="font-bold text-2xl text-ice-700">
                        {bags} bolsas de Hielo Polar de 5 Kg
                      </span>
                      <br />
                      <span className="text-sm text-gray-600">
                        (Total: {result} kg de hielo)
                      </span>
                    </p>
                    
                    {iceBars > 0 && (
                      <div className="mt-3 p-3 bg-blue-50 rounded-md border border-blue-100">
                        <p className="text-sm text-blue-800">
                          <span className="font-medium">Servicio general:</span> Para enfriamiento general, 
                          considera {iceBars} {iceBars === 1 ? "barra" : "barras"} de hielo de 66kg.
                        </p>
                      </div>
                    )}

                    {beerIceBars > 0 && (
                      <div className="mt-3 p-3 bg-amber-50 rounded-md border border-amber-100">
                        <p className="text-sm text-amber-800">
                          <span className="font-medium">Para cervezas:</span> Necesitarás {beerIceBars} {beerIceBars === 1 ? "barra" : "barras"} 
                          de hielo de 66kg adicionales para mantener las cervezas frías.
                        </p>
                      </div>
                    )}
                    
                    <div className="mt-4 flex items-start bg-white p-4 rounded-md border border-ice-100">
                      <Info size={20} className="text-ice-600 mr-2 mt-1 shrink-0" />
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Recomendación: </span>
                        {tip}
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-ice-50 rounded-lg border border-ice-100">
                    <h4 className="font-medium text-ice-700 mb-2">Especificaciones técnicas</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Barras de hielo: 66kg (1m × 0.4m × 0.18m)</li>
                      <li>• Densidad del hielo: 917 kg/m³</li>
                      <li>• Bolsas de hielo: 5kg cada una</li>
                      <li>• Enfriamiento óptimo: 50-75% del volumen</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-ice-50 rounded-lg border border-ice-100">
                    <h4 className="font-medium text-ice-700 mb-2">Cantidad por bebida</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Coctelería: 2-3 cubitos por bebida</li>
                      <li>• Refresco o agua: 3-4 cubitos por vaso</li>
                      <li>• Cartón 24 cervezas 355ml: 7kg de hielo</li>
                      <li>• Cartón 24 ampollas 255ml: 4.4kg de hielo</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* CTA Section */}
            <div className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-arctic via-glacial to-arctic p-8 text-white">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitas Asesoría Personalizada?</h3>
                <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                  Nuestro equipo de expertos está listo para ayudarte a calcular la cantidad exacta
                  de hielo para tu evento o negocio. 
                  <span className="block mt-2 font-semibold">¡Sin compromiso y totalmente gratis!</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-white text-arctic hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    <a href="/contacto">
                      <Calculator className="w-5 h-5 mr-2" />
                      Solicitar Asesoría Gratis
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold"
                  >
                    <a 
                      href="https://wa.me/524431234567?text=Hola! Necesito ayuda con el cálculo de hielo para mi evento"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📱 WhatsApp Directo
                    </a>
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

export default CalculadoraPage;
