import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Clock, Mail, Phone, Facebook, Instagram } from 'lucide-react';

const slides = [
  { id: 1, image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop', alt: 'Perros jugando en RuralCan' },
  { id: 2, image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=600&fit=crop', alt: 'Instalaciones de RuralCan' },
  { id: 3, image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=1200&h=600&fit=crop', alt: 'Perros felices en RuralCan' },
  { id: 4, image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=600&fit=crop', alt: 'Área de juegos de RuralCan' },
  { id: 5, image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=1200&h=600&fit=crop', alt: 'Perros descansando en RuralCan' },
];

const cards = [
  { id: 1, title: 'RECUPERACIÓN Y CUIDADOS ESPECIALES', image: 'https://images.unsplash.com/photo-1601758124096-1fd661873b95?w=400&h=300&fit=crop', link: '#/recuperacion-y-cuidados-especiales/' },
  { id: 2, title: 'CHARLAS', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop', link: '#/charlas/' },
  { id: 3, title: 'RURALCAN EN LA PRENSA', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop', link: '#/video-tv-enguera/' },
  { id: 4, title: '¿QUÉ TENGO QUE LLEVAR A RURALCAN?', image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&h=300&fit=crop', link: '#/que-necesito-llevar-a-ruralcan/' },
  { id: 5, title: 'CONÓCENOS', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop', link: '#/quienes-somos/' },
  { id: 6, title: 'HAZ TU RESERVA', image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=400&h=300&fit=crop', link: '#/reserva-online/' },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
      {/* Hero Carousel */}
      <section className="relative w-full max-w-6xl mx-auto px-4 py-8">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative h-[300px] md:h-[500px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors" aria-label="Previous slide">
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors" aria-label="Next slide">
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`} aria-label={`Go to slide ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="bg-black rounded-lg overflow-hidden shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 bg-black border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#4a7c59] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">RuralCan Noticias A punt 15/08/23</span>
            </div>
            <button className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
              </svg>
            </button>
          </div>
          <div className="relative aspect-video">
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="RuralCan Noticias" className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      </section>

      {/* Content Cards */}
      <section className="w-full max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className="group relative overflow-hidden rounded-lg shadow-lg block"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={card.image} alt={card.title} className={`w-full h-full object-cover transition-transform duration-500 ${hoveredCard === card.id ? 'scale-110' : 'scale-100'}`} />
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${hoveredCard === card.id ? 'opacity-60' : 'opacity-40'}`} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white text-center font-bold text-lg md:text-xl uppercase tracking-wide drop-shadow-lg">{card.title}</h3>
              </div>
              <div className={`absolute inset-0 border-4 border-[#8bc34a] transition-opacity duration-300 ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`} />
            </a>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section className="w-full bg-[#f5f5dc] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-[#4a7c59]" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#4a7c59]">Horario – Cita Previa</h2>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-[#4a7c59] mb-3">Lunes – Viernes</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="text-lg">10:00 – 13:00</p>
                  <p className="text-lg">16:00 – 19:00</p>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-[#4a7c59] mb-3">Sábados</h3>
                <p className="text-lg text-gray-700">10:00 – 13:00</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-red-600 mb-2">Domingos y Festivos</h3>
              <p className="text-lg text-red-600 font-medium">Cerrado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-[#4a7c59] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">CONTACTO</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:ruralcan@gmail.com" className="text-white/80 hover:text-white transition-colors">ruralcan@gmail.com</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Teléfono</h3>
              <a href="tel:606616861" className="text-white/80 hover:text-white transition-colors">606616861</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Redes Sociales</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/RuralCan-Residencia-Canina-Rural-416372205755934/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/ruralcan_residenciacaninarural/?hl=es" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
