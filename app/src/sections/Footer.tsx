const Footer = () => {
  const footerLinks = [
    { label: 'Politica de Privacidad', href: '/politica-privacidad/' },
    { label: 'Politica de Cookies', href: '/politica-de-cookies/' },
    { label: 'Quienes Somos', href: '/quienes-somos/' },
    { label: 'Nuestras Tarifas', href: '/tarifas/' },
    { label: 'Que tengo que llevar a Ruralcan', href: '/que-necesito-llevar-a-ruralcan/' },
    { label: 'Reserva On-Line', href: '/reserva-online/' },
  ];

  return (
    <footer className="w-full bg-[#4a7c59] py-8 border-t border-white/20">
      <div className="max-w-6xl mx-auto px-4">
        {/* About Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Sobre Nosotros</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            RuralCan es un nuevo concepto de residencia canina, centro de adiestramiento
            y educación, ubicado en Navalón, zona interior de Valencia.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            © Ruralcan, Marca Registrada © 2021-Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
