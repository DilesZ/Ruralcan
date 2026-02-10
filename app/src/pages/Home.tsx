import { useState } from 'react';
import HeroCarousel, { type Slide } from '../sections/HeroCarousel';

const slides: Slide[] = [
  { id: 1, image: './wp-content/uploads/2021/07/4.jpg', alt: 'Instalaciones de RuralCan' },
  { id: 2, image: './wp-content/uploads/2021/07/5-1-2048x1536.jpg', alt: 'Espacios al aire libre de RuralCan' },
  { id: 3, image: './wp-content/uploads/2021/06/3002b950-a801-47c8-802b-306d813f3006.jpg', alt: 'Zona de juego en RuralCan' },
  { id: 4, image: './wp-content/uploads/2021/06/1623700082133-min-1-2048x1536.jpg', alt: 'Piscina para perros en RuralCan' },
  { id: 5, image: './wp-content/uploads/2021/07/1625772157889.jpeg', alt: 'Servicio de recogida RuralCan' },
];

const cards = [
  { id: 1, title: 'RECUPERACIÓN Y CUIDADOS ESPECIALES', image: './wp-content/uploads/2021/06/Recuperacion-y-cuidados-especiales-dentro-con-el-texto-1024x768.jpg', link: '#/recuperacion-y-cuidados-especiales/' },
  { id: 2, title: 'CHARLAS', image: './wp-content/uploads/2021/06/Boton-charlas-y-concienciacion-870x570.jpeg', link: '#/charlas/' },
  { id: 3, title: 'RURALCAN EN LA PRENSA', image: './wp-content/uploads/2021/06/prensa-870x570.png', link: '#/video-tv-enguera/' },
  { id: 4, title: '¿QUÉ TENGO QUE LLEVAR A RURALCAN?', image: './wp-content/uploads/2021/07/Que-necesito-llevar-a-RuralCAn-870x570.jpg', link: '#/que-necesito-llevar-a-ruralcan/' },
  { id: 5, title: 'CONÓCENOS', image: './wp-content/uploads/2021/07/4-1536x864.jpg', link: '#/quienes-somos/' },
  { id: 6, title: 'HAZ TU RESERVA', image: './wp-content/uploads/2021/06/Haz-tu-reserva-870x570.jpeg', link: '#/reserva-online/' },
];

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <>
      <HeroCarousel slides={slides} />

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
            <iframe src="https://www.youtube.com/embed/-SNUzLqgPVQ" title="RuralCan Noticias" className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
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

    </>
  );
};

export default Home;
