import pages from '../data/wp_pages.json';
import { localizeWpHtml } from '../lib/utils';
import HeroCarousel, { type Slide } from '../sections/HeroCarousel';

type WpPage = {
  slug: string;
  title: string;
  content_html: string;
};

const slides: Slide[] = [
  { id: 1, image: './wp-content/uploads/2021/07/perrotele%CC%81fono.jpeg', alt: 'Contacto RuralCan' },
  { id: 2, image: './wp-content/uploads/2021/07/Captura-de-pantalla-2021-07-15-a-las-16.41.09.png', alt: 'Seguimiento por WhatsApp' },
  { id: 3, image: './wp-content/uploads/2021/07/1625772157889.jpeg', alt: 'Servicio de recogida' },
];

const Contacto = () => {
  const page = (pages as WpPage[]).find((item) => item.slug === 'contacto');
  const title = page?.title ?? 'Contacto';
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

export default Contacto;
