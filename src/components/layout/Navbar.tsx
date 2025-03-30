
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Phone, 
  Clock,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50">
      {/* Top info bar */}
      <div className="bg-ice-700 text-white py-2">
        <div className="container flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-2 sm:mb-0">
            <Phone size={16} className="mr-2" />
            <span>Contáctanos para más información</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span>L-S: 6:00 am - 7:00 pm | D: 6:00 am - 2:00 pm</span>
          </div>
        </div>
      </div>
      
      {/* Main navbar */}
      <nav className="bg-white border-b border-ice-100 py-4">
        <div className="container flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-ice-600">HIELO POLAR</span>
            <span className="text-xs text-ice-500 ml-1 mt-1">DEL CENTRO</span>
          </Link>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/nosotros">Quiénes Somos</NavLink>
            <NavLink to="/productos">Productos</NavLink>
            <NavLink to="/servicios">Servicios</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
            <Button variant="default" size="sm" className="bg-ice-500 hover:bg-ice-600">
              Solicitar Servicio
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-ice-600"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-ice-100 shadow-lg z-50">
          <div className="container py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={toggleMenu}>Inicio</MobileNavLink>
            <MobileNavLink to="/nosotros" onClick={toggleMenu}>Quiénes Somos</MobileNavLink>
            <MobileNavLink to="/productos" onClick={toggleMenu}>Productos</MobileNavLink>
            <MobileNavLink to="/servicios" onClick={toggleMenu}>Servicios</MobileNavLink>
            <MobileNavLink to="/contacto" onClick={toggleMenu}>Contacto</MobileNavLink>
            <Button variant="default" size="sm" className="bg-ice-500 hover:bg-ice-600 w-full">
              Solicitar Servicio
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-ice-800 hover:text-ice-500 font-medium transition-colors">
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link 
    to={to} 
    className="text-ice-800 hover:text-ice-500 font-medium transition-colors py-2 border-b border-ice-50"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
