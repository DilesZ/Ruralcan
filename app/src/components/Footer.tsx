import PineBorder from './PineBorder';

const Footer = () => {
  const footerLinks = [
    { label: 'Politica de Privacidad', href: '#/politica-privacidad/' },
    { label: 'Politica de Cookies', href: '#/politica-de-cookies/' },
    { label: 'Quienes Somos', href: '#/quienes-somos/' },
    { label: 'Nuestras Tarifas', href: '#/tarifas/' },
    { label: 'Que tengo que llevar a Ruralcan', href: '#/que-necesito-llevar-a-ruralcan/' },
    { label: 'Reserva On-Line', href: '#/reserva-online/' },
  ];

  return (
    <footer className="w-full bg-[#2d7b30] text-white">
      <PineBorder />
      <div className="flex flex-col min-h-[420px]">
        <div className="max-w-6xl mx-auto px-4 py-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Horario – Cita Previa</h4>
              <div className="flex flex-col sm:flex-row gap-6 text-sm">
                <ul className="space-y-1">
                  <li>Lunes – Viernes</li>
                  <li className="text-white/80">10:00 – 13:00</li>
                  <li className="text-white/80">16:00 – 19:00</li>
                </ul>
                <ul className="space-y-1">
                  <li>Sabados</li>
                  <li className="text-white/80">10:00 – 13:00</li>
                  <li className="text-white/80">Domingos y Festivos Cerrado</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">CONTACTO</h4>
              <div className="flex flex-col xl:flex-row gap-6">
                <div className="space-y-4 text-sm xl:w-[55%]">
                  <div className="flex items-start gap-3">
                    <img src="./wp-content/uploads/2021/06/emailicon.png" alt="Email" className="w-5 h-5 mt-0.5" />
                    <p>ruralcan@gmail.com</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="./wp-content/uploads/2021/06/whatsapp.png" alt="WhatsApp" className="w-6 h-6 mt-0.5" />
                    <p>606616861</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="./wp-content/uploads/2021/06/Faceicon.png" alt="Facebook" className="w-6 h-6 mt-0.5" />
                    <a href="https://www.facebook.com/RuralCan-Residencia-Canina-Rural-416372205755934/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Facebook
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="./wp-content/uploads/2021/06/instaicon.png" alt="Instagram" className="w-7 h-7 mt-0.5" />
                    <a href="https://www.instagram.com/ruralcan_residenciacaninarural/?hl=es" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Instagram
                    </a>
                  </div>
                </div>
                <div className="w-full xl:w-[250px] max-w-[250px] xl:max-w-none self-start">
                  <iframe
                    title="RuralCan Google Maps"
                    className="border-0 w-full h-[200px]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.2735713233337!2d-0.952767484649039!3d38.91772417956753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6141e9f8af326d%3A0xf843159c257a34d6!2sRuralCan!5e0!3m2!1ses!2ses!4v1643501657690!5m2!1ses!2ses"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Sobre Nosotros</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#/reserva-online/" className="inline-block bg-white text-[#2d7b30] px-4 py-2 rounded-sm font-semibold text-sm hover:bg-white/90 transition-colors">
                Reserva On-Line
              </a>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
              <img src="./wp-content/uploads/2021/07/Secuencia-perro-21.png" alt="RuralCan" className="w-full h-auto" />
              <img src="./wp-content/uploads/2021/07/secuencia-perro-11.png" alt="RuralCan" className="w-full h-auto" />
              <img src="./wp-content/uploads/2021/07/Secuencia-perro-31.png" alt="RuralCan" className="w-full h-auto" />
              <img src="./wp-content/uploads/2021/07/Secuencia-perro-41.png" alt="RuralCan" className="w-full h-auto" />
            </div>
            <p className="text-white/80 text-sm text-center mt-6">
              © Ruralcan, Marca Registrada © 2021-Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
