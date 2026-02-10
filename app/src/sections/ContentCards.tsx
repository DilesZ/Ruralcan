import { useState } from 'react';

interface Card {
  id: number;
  title: string;
  image: string;
  link: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: 'RECUPERACIÓN Y CUIDADOS ESPECIALES',
    image: './wp-content/uploads/2021/06/Recuperacion-y-cuidados-especiales-dentro-con-el-texto-1024x768.jpg',
    link: '/recuperacion-y-cuidados-especiales/',
  },
  {
    id: 2,
    title: 'CHARLAS',
    image: './wp-content/uploads/2021/06/Boton-charlas-y-concienciacion-870x570.jpeg',
    link: '/charlas/',
  },
  {
    id: 3,
    title: 'RURALCAN EN LA PRENSA',
    image: './wp-content/uploads/2021/06/prensa-870x570.png',
    link: '/video-tv-enguera/',
  },
  {
    id: 4,
    title: '¿QUÉ TENGO QUE LLEVAR A RURALCAN?',
    image: './wp-content/uploads/2021/07/Que-necesito-llevar-a-RuralCAn-870x570.jpg',
    link: '/que-necesito-llevar-a-ruralcan/',
  },
  {
    id: 5,
    title: 'CONÓCENOS',
    image: './wp-content/uploads/2021/07/4-1536x864.jpg',
    link: '/quienes-somos/',
  },
  {
    id: 6,
    title: 'HAZ TU RESERVA',
    image: './wp-content/uploads/2021/06/Haz-tu-reserva-870x570.jpeg',
    link: '/reserva-online/',
  },
];

const ContentCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="servicios" className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.link}
            className="content-card group relative overflow-hidden rounded-lg shadow-lg"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredCard === card.id ? 'scale-110' : 'scale-100'
                }`}
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                  hoveredCard === card.id ? 'opacity-60' : 'opacity-40'
                }`}
              />
            </div>

            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h3 className="text-white text-center font-bold text-lg md:text-xl uppercase tracking-wide drop-shadow-lg">
                {card.title}
              </h3>
            </div>

            {/* Hover border effect */}
            <div
              className={`absolute inset-0 border-4 border-[#8bc34a] transition-opacity duration-300 ${
                hoveredCard === card.id ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContentCards;
