
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { Info, Beer, Calculator, Sparkles, Package, TrendingUp } from "lucide-react";

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

const IceCalculator = () => {
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
    <section className="py-24 bg-gradient-to-b from-background via-arctic/5 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-arctic/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-glacial/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-arctic/10 border border-arctic/20 mb-6">
            <Sparkles className="w-4 h-4 text-arctic" />
            <span className="text-sm font-medium text-arctic">Calculadora Inteligente</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-arctic via-glacial to-arctic bg-clip-text text-transparent">
            Calcula Tu Hielo al Instante
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Obtén la cantidad exacta de hielo que necesitas para tu evento en segundos.
            <br />
            <span className="text-arctic font-medium">Preciso. Rápido. Confiable.</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-arctic/20 shadow-2xl shadow-arctic/10 bg-card/80 backdrop-blur-sm">
            <CardHeader className="border-b border-arctic/10 bg-gradient-to-r from-arctic/5 to-glacial/5">
              <CardTitle className="text-center text-2xl flex items-center justify-center gap-3">
                <Calculator className="w-6 h-6 text-arctic" />
                <span className="bg-gradient-to-r from-arctic to-glacial bg-clip-text text-transparent">
                  Configuración del Evento
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
              {/* Main Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="guests" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-arctic" />
                    Número de Invitados
                  </label>
                  <Input
                    id="guests"
                    type="number"
                    placeholder="Ej: 100"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="border-arctic/30 focus:border-arctic focus:ring-arctic h-12 text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Package className="w-4 h-4 text-arctic" />
                    Tipo de Evento
                  </label>
                  <Select value={eventType} onValueChange={setEventType}>
                    <SelectTrigger className="border-arctic/30 focus:border-arctic focus:ring-arctic h-12">
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

              {/* Beer Section */}
              <div className="border-t border-arctic/10 pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-lg">
                    <Beer className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Cálculo de Cerveza</h4>
                    <p className="text-sm text-muted-foreground">Opcional - Para enfriamiento de bebidas</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="beerCartons" className="text-sm font-medium text-foreground">
                      Número de Cartones
                    </label>
                    <Input
                      id="beerCartons"
                      type="number"
                      placeholder="Ej: 5"
                      value={beerCartons}
                      onChange={(e) => setBeerCartons(e.target.value)}
                      className="border-amber-500/30 focus:border-amber-500 focus:ring-amber-500 h-12"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-foreground">
                      Tipo de Cerveza
                    </label>
                    <Select value={beerType} onValueChange={setBeerType}>
                      <SelectTrigger className="border-amber-500/30 focus:border-amber-500 focus:ring-amber-500 h-12">
                        <SelectValue placeholder="Selecciona el tipo" />
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

              {/* Calculate Button */}
              <Button 
                onClick={calculateIce}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-arctic to-glacial hover:from-arctic/90 hover:to-glacial/90 text-white shadow-lg shadow-arctic/30 transition-all duration-300 hover:shadow-xl hover:shadow-arctic/40 hover:scale-[1.02]"
                disabled={!guests || !eventType}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calcular Cantidad de Hielo
              </Button>

              {/* Results */}
              {result !== null && (
                <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {/* Main Result */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-arctic/10 via-glacial/10 to-arctic/10 border border-arctic/20 p-8">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                    <div className="relative">
                      <div className="text-center mb-6">
                        <p className="text-sm font-medium text-muted-foreground mb-2">Necesitarás aproximadamente</p>
                        <div className="flex items-center justify-center gap-3">
                          <Package className="w-8 h-8 text-arctic" />
                          <span className="text-5xl font-bold bg-gradient-to-r from-arctic to-glacial bg-clip-text text-transparent">
                            {bags}
                          </span>
                        </div>
                        <p className="text-xl font-semibold text-foreground mt-2">
                          Bolsas de Hielo Polar de 5 Kg
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Total: <span className="font-bold text-arctic">{result.toFixed(1)} kg</span> de hielo
                        </p>
                      </div>
                      
                      {/* Quick Action */}
                      <div className="flex justify-center">
                        <Button 
                          asChild
                          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-md hover:shadow-lg transition-all"
                        >
                          <a 
                            href={`https://wa.me/524431234567?text=${encodeURIComponent(`Hola! Necesito ${bags} bolsas de hielo (${result.toFixed(1)} kg) para mi ${eventTypes.find(t => t.id === eventType)?.label}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="mr-2">📱</span>
                            Ordenar por WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Ice Bars for General Cooling */}
                  {iceBars > 0 && (
                    <div className="p-5 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Barras de Hielo - Servicio General</p>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Para enfriamiento general, considera <span className="font-bold">{iceBars} {iceBars === 1 ? "barra" : "barras"}</span> de hielo de 66kg.
                            Ideal para conservar y mantener temperatura en contenedores grandes.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Ice Bars for Beer */}
                  {beerIceBars > 0 && (
                    <div className="p-5 bg-amber-50/50 dark:bg-amber-950/20 rounded-xl border border-amber-200/50 dark:border-amber-800/50">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                          <Beer className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">Barras de Hielo - Enfriamiento de Cerveza</p>
                          <p className="text-sm text-amber-700 dark:text-amber-300">
                            Necesitarás <span className="font-bold">{beerIceBars} {beerIceBars === 1 ? "barra" : "barras"}</span> adicionales de hielo de 66kg
                            para mantener tus cervezas perfectamente frías durante todo el evento.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Recommendation */}
                  <div className="flex items-start gap-3 p-5 bg-card/50 rounded-xl border border-border">
                    <Info className="w-5 h-5 text-arctic shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">💡 Recomendación de Conservación</p>
                      <p className="text-sm text-muted-foreground">{tip}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-arctic/10">
                <div className="p-5 bg-gradient-to-br from-arctic/5 to-glacial/5 rounded-xl border border-arctic/20">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Package className="w-4 h-4 text-arctic" />
                    Especificaciones Técnicas
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-arctic mt-0.5">•</span>
                      <span>Barras de hielo: <strong className="text-foreground">66kg</strong> (1m × 0.4m × 0.18m)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-arctic mt-0.5">•</span>
                      <span>Densidad del hielo: <strong className="text-foreground">917 kg/m³</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-arctic mt-0.5">•</span>
                      <span>Bolsas de hielo: <strong className="text-foreground">5kg</strong> cada una</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-arctic mt-0.5">•</span>
                      <span>Enfriamiento óptimo: <strong className="text-foreground">50-75%</strong> del volumen</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-5 bg-gradient-to-br from-amber-500/5 to-amber-600/5 rounded-xl border border-amber-500/20">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Beer className="w-4 h-4 text-amber-600" />
                    Guía de Enfriamiento
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">•</span>
                      <span>Coctelería: <strong className="text-foreground">2-3</strong> cubitos por bebida</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">•</span>
                      <span>Refresco/Agua: <strong className="text-foreground">3-4</strong> cubitos por vaso</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">•</span>
                      <span>24 cervezas 355ml: <strong className="text-foreground">7kg</strong> de hielo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">•</span>
                      <span>24 ampollas 255ml: <strong className="text-foreground">4.4kg</strong> de hielo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IceCalculator;
