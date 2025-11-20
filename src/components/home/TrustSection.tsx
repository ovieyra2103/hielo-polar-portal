import { Shield, Truck, Award, Clock } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";

const guarantees = [
  {
    icon: Shield,
    title: "Pureza Certificada",
    description: "100% agua purificada bajo estrictos controles de calidad. Hielo cristalino sin sabor ni olor."
  },
  {
    icon: Truck,
    title: "Entrega Puntual",
    description: "Logística infalible con cobertura en Guanajuato y Michoacán. Tu pedido siempre a tiempo."
  },
  {
    icon: Clock,
    title: "Servicio 7 días",
    description: "Abiertos de lunes a domingo de 6:00 am a 7:00 pm. Siempre disponibles cuando nos necesitas."
  },
  {
    icon: Award,
    title: "Desde 1932",
    description: "Más de 90 años de experiencia garantizando frescura. Tradición que respalda calidad."
  }
];

const TrustSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <SectionTitle 
          title="¿Por Qué Elegir Hielo Polar?" 
          subtitle="Compromiso total con tu satisfacción" 
          center 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {guarantees.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-ice transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-frost group-hover:shadow-ice transition-shadow duration-300 glow-ice">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-gradient-to-r from-primary to-accent shadow-ice">
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">90+</div>
            <div className="text-sm opacity-90">Años de experiencia</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-90">Clientes satisfechos</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-90">Producción continua</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-90">Hielo purificado</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
