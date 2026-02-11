import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#/', label: 'INICIO' },
    { href: '#/quienes-somos/', label: '¿QUIENES SOMOS?' },
    { href: '#/residencia/', label: 'HOTEL CANINO' },
    { href: '#/adiestramiento/', label: 'ADIESTRAMIENTO' },
    { href: '#/tarifas/', label: 'TARIFAS' },
    { href: '#/contacto/', label: 'CONTACTO' },
  ];

  const isActive = (path: string) => {
    return currentPath === path.replace('#', '');
  };

  return (
    <nav
      className={`bg-[#2d7b30] text-white px-3 transition-all duration-300 font-mali relative ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center min-h-[120px] w-full">
        {/* Logo */}
        <a href="#/" className="flex items-center ml-1 py-2">
          <img
            src="./images/logo.png"
            alt="RuralCan"
            className="w-[130px] h-[130px] object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7 mr-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-base font-semibold tracking-wide transition-colors ${
                isActive(link.href) ? 'text-white nav-link-active' : 'hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#/reserva-online/"
            className="border-2 border-white px-5 py-2 rounded-full text-base font-semibold hover:bg-white hover:text-[#2d7b30] transition-colors"
          >
            RESERVA ON-LINE
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide ${
                  isActive(link.href) ? 'text-white nav-link-active' : 'hover:text-white'
                } transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#/reserva-online/"
              className="border-2 border-white px-4 py-2 rounded-full text-sm font-semibold text-center hover:bg-white hover:text-[#2d7b30] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESERVA ON-LINE
            </a>
          </div>
        </div>
      )}

      <p className="absolute right-4 bottom-2 text-xs text-white/70">
        Núcleo zoológico ES461180000115
      </p>
    </nav>
  );
};

export default Navbar;
