
import pages from '../data/wp_pages.json';
import { localizeWpHtml } from '../lib/utils';
import HeroCarousel, { type Slide } from '../sections/HeroCarousel';

type WpPage = {
  slug: string;
  title: string;
  content_html: string;
};

const slides: Slide[] = [
  { id: 1, image: './wp-content/uploads/2021/07/hada-busca-trufa.jpeg', alt: 'Adiestramiento en RuralCan' },
  { id: 2, image: './wp-content/uploads/2021/07/perro-agresivo.jpg.webp', alt: 'Educación y comportamiento canino' },
  { id: 3, image: './wp-content/uploads/2021/07/1625430363034-2048x1621.jpg', alt: 'Entrenamiento al aire libre' },
];

const Adiestramiento = () => {
  const page = (pages as WpPage[]).find((item) => item.slug === 'adiestramiento');
  const title = page?.title ?? 'Adiestramiento';
  const html = localizeWpHtml(page?.content_html ?? '');
  return (<>
      <HeroCarousel slides={slides} />
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4a7c59] mb-8 text-center">{title}</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-gray-700">
          <div className="max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>);
};

export default Adiestramiento;
