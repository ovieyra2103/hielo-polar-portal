
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { Info } from "lucide-react";

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

const IceCalculator = () => {
  const [guests, setGuests] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [tip, setTip] = useState<string>("");
  const [bags, setBags] = useState<number>(0);
  const [iceBars, setIceBars] = useState<number>(0);

  const calculateIce = () => {
    const selectedEvent = eventTypes.find((type) => type.id === eventType);
    if (!selectedEvent || !guests) return;

    const guestsNumber = parseInt(guests);
    const iceNeeded = guestsNumber * selectedEvent.kgPerPerson;
    
    // Calculate number of 5kg bags
    const calculatedBags = Math.ceil(iceNeeded / 5);
    
    // Calculate number of ice bars (1 bar per 20 guests for cooling bottles)
    const calculatedBars = Math.ceil(guestsNumber / 20);
    
    setResult(iceNeeded);
    setBags(calculatedBags);
    setIceBars(calculatedBars);
    
    // Set conservation tip based on amount
    if (iceNeeded < 50) {
      setTip(conservationTips.small);
    } else if (iceNeeded < 150) {
      setTip(conservationTips.medium);
    } else {
      setTip(conservationTips.large);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-ice-50 to-white">
      <div className="container">
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
                      {bags} bolsas de Hielo Polar de 5 Kg
                    </span>
                    {iceBars > 0 && (
                      <> y también, <span className="font-bold text-xl text-ice-700">
                        {iceBars} {iceBars === 1 ? "barra" : "barras"} de hielo
                      </span> para enfriar botellas</>
                    )}
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
    </section>
  );
};

export default IceCalculator;
