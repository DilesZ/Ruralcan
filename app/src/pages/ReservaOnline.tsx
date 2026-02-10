import pages from '../data/wp_pages.json';
import { localizeWpHtml } from '../lib/utils';
import HeroCarousel, { type Slide } from '../sections/HeroCarousel';

type WpPage = {
  slug: string;
  title: string;
  content_html: string;
};

const slides: Slide[] = [
  { id: 1, image: './wp-content/uploads/2021/06/Haz-tu-reserva-870x570.jpeg', alt: 'Reserva en RuralCan' },
  { id: 2, image: './wp-content/uploads/2021/07/4.jpg', alt: 'Instalaciones RuralCan' },
  { id: 3, image: './wp-content/uploads/2021/06/3002b950-a801-47c8-802b-306d813f3006.jpg', alt: 'Espacios al aire libre' },
];

const ReservaOnline = () => {
  const page = (pages as WpPage[]).find((item) => item.slug === 'reserva-online');
  const title = page?.title ?? 'Reserva On-Line';
  const html = localizeWpHtml(page?.content_html ?? '');
  return (<>
      <HeroCarousel slides={slides} />
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4a7c59] mb-8 text-center">{title}</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-gray-700">
          <div className="max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>);
};

export default ReservaOnline;
