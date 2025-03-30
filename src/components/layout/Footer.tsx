
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ice-800 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">HIELO POLAR DEL CENTRO</h3>
            <p className="text-ice-100 mb-4">
              Empresa líder en la producción y distribución de hielo en Guanajuato y Michoacán, 
              especializada en barras de hielo industrial y bolsas de cubos de hielo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-ice-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-ice-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-ice-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-ice-100 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-ice-100 hover:text-white transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-ice-100 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-ice-100 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-ice-100 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 shrink-0 mt-1" />
                <span className="text-ice-100">
                  Guanajuato y Michoacán, México
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 shrink-0" />
                <span className="text-ice-100">+52 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 shrink-0" />
                <span className="text-ice-100">info@hielopolardelcentro.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-2 shrink-0 mt-1" />
                <div className="text-ice-100">
                  <p>Lunes a Sábado: 6:00 am - 7:00 pm</p>
                  <p>Domingo: 6:00 am - 2:00 pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-ice-900 py-4">
        <div className="container text-center text-ice-300 text-sm">
          <p>
            © {new Date().getFullYear()} Hielo Polar del Centro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
