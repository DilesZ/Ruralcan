import pages from '../data/wp_pages.json';
import { localizeWpHtml } from '../lib/utils';
import HeroCarousel, { type Slide } from '../sections/HeroCarousel';

type WpPage = {
  slug: string;
  title: string;
  content_html: string;
};

const slides: Slide[] = [
  { id: 1, image: './wp-content/uploads/2021/07/4.jpg', alt: 'Instalaciones de RuralCan' },
  { id: 2, image: './wp-content/uploads/2021/07/5-1-2048x1536.jpg', alt: 'Zona exterior de RuralCan' },
  { id: 3, image: './wp-content/uploads/2021/07/1625430363034-2048x1621.jpg', alt: 'Espacios verdes en RuralCan' },
];

const QuienesSomos = () => {
  const page = (pages as WpPage[]).find((item) => item.slug === 'quienes-somos');
  const title = page?.title ?? '¿Quienes Somos?';
  const html = localizeWpHtml(page?.content_html ?? '');
  return (
    <>
      <HeroCarousel slides={slides} />
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4a7c59] mb-8 text-center">{title}</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  );
};

export default QuienesSomos;
