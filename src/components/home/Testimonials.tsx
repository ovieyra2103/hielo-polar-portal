
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Restaurant La Marina",
    role: "Cliente Mayorista",
    content: "Llevamos 5 años trabajando con Hielo Polar del Centro y el servicio siempre ha sido excepcional. El hielo es de excelente calidad y las entregas siempre son puntuales.",
  },
  {
    id: 2,
    name: "Grupo Eventos MX",
    role: "Organizador de Eventos",
    content: "Para nuestros eventos siempre requerimos grandes cantidades de hielo. Hielo Polar del Centro siempre nos ha brindado un servicio eficiente y productos de calidad.",
  },
  {
    id: 3,
    name: "Pescadería El Marlín",
    role: "Cliente Frecuente",
    content: "El préstamo de conservadores ha sido una gran ventaja para nuestro negocio. Gracias a Hielo Polar del Centro podemos mantener nuestros productos frescos.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-ice-50">
      <div className="container">
        <SectionTitle 
          title="Lo Que Dicen Nuestros Clientes" 
          subtitle="Testimonios de quienes ya confían en nosotros"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Quote className="text-ice-500 mb-4" size={32} />
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-ice-100 rounded-full flex items-center justify-center text-ice-700 font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-ice-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
