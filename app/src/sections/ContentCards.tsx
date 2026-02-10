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
    image: 'https://images.unsplash.com/photo-1601758124096-1fd661873b95?w=400&h=300&fit=crop',
    link: '/recuperacion-y-cuidados-especiales/',
  },
  {
    id: 2,
    title: 'CHARLAS',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
    link: '/charlas/',
  },
  {
    id: 3,
    title: 'RURALCAN EN LA PRENSA',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
    link: '/video-tv-enguera/',
  },
  {
    id: 4,
    title: '¿QUÉ TENGO QUE LLEVAR A RURALCAN?',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&h=300&fit=crop',
    link: '/que-necesito-llevar-a-ruralcan/',
  },
  {
    id: 5,
    title: 'CONÓCENOS',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop',
    link: '/quienes-somos/',
  },
  {
    id: 6,
    title: 'HAZ TU RESERVA',
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=400&h=300&fit=crop',
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
