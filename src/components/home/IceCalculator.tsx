
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const eventTypes = [
  { id: "party", label: "Fiesta", kgPerPerson: 1 },
  { id: "wedding", label: "Boda", kgPerPerson: 1.5 },
  { id: "corporate", label: "Evento Corporativo", kgPerPerson: 0.8 },
  { id: "cocktail", label: "Coctelería", kgPerPerson: 0.5 },
];

const IceCalculator = () => {
  const [guests, setGuests] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const calculateIce = () => {
    const selectedEvent = eventTypes.find((type) => type.id === eventType);
    if (!selectedEvent || !guests) return;

    const guestsNumber = parseInt(guests);
    const iceNeeded = guestsNumber * selectedEvent.kgPerPerson;
    setResult(iceNeeded);
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
                  <p className="text-center text-ice-800">
                    Para tu evento necesitarás aproximadamente{" "}
                    <span className="font-bold text-ice-700">
                      {result} kg
                    </span>{" "}
                    de hielo
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IceCalculator;
