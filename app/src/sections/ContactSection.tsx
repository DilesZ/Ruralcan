import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="w-full bg-[#4a7c59] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            CONTACTO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a
              href="mailto:ruralcan@gmail.com"
              className="text-white/80 hover:text-white transition-colors"
            >
              ruralcan@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Teléfono</h3>
            <a
              href="tel:606616861"
              className="text-white/80 hover:text-white transition-colors"
            >
              606616861
            </a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Redes Sociales</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/RuralCan-Residencia-Canina-Rural-416372205755934/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/ruralcan_residenciacaninarural/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
