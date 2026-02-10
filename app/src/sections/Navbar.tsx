import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
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
    { href: '#inicio', label: 'INICIO', active: true },
    { href: '#quienes-somos', label: '¿QUIENES SOMOS?' },
    { href: '#hotel-canino', label: 'HOTEL CANINO' },
    { href: '#adiestramiento', label: 'ADIESTRAMIENTO' },
    { href: '#tarifas', label: 'TARIFAS' },
    { href: '#contacto', label: 'CONTACTO' },
  ];

  return (
    <nav
      className={`bg-[#4a7c59] text-white py-4 px-4 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <div className="w-20 h-20 md:w-24 md:h-24 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Circle background */}
              <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="2" />
              {/* Mountain */}
              <path
                d="M20 60 L35 35 L50 55 L65 30 L80 60"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              {/* Dog silhouette */}
              <path
                d="M30 65 Q35 55 45 58 Q50 50 55 55 Q60 52 65 58 Q70 55 75 60 L75 70 Q70 75 65 72 Q60 78 55 75 Q50 80 45 75 Q40 78 35 72 Q30 75 25 70 Z"
                fill="white"
              />
              {/* Text */}
              <text
                x="50"
                y="88"
                textAnchor="middle"
                fill="white"
                fontSize="10"
                fontFamily="serif"
                fontStyle="italic"
              >
                RuralCan
              </text>
            </svg>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium tracking-wide ${
                link.active ? 'active text-[#8bc34a]' : 'hover:text-[#8bc34a]'
              } transition-colors`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reserva"
            className="border-2 border-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-[#4a7c59] transition-colors"
          >
            RESERVA ON-LINE
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
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
                className={`text-sm font-medium tracking-wide ${
                  link.active ? 'text-[#8bc34a]' : 'hover:text-[#8bc34a]'
                } transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reserva"
              className="border-2 border-white px-4 py-2 rounded-full text-sm font-medium text-center hover:bg-white hover:text-[#4a7c59] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESERVA ON-LINE
            </a>
          </div>
        </div>
      )}

      {/* Núcleo zoológico text */}
      <div className="container mx-auto mt-2">
        <p className="text-right text-xs text-white/70">
          Núcleo zoológico ES461180000115
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
