import pages from '../data/wp_pages.json';
import { localizeWpHtml } from '../lib/utils';
import HeroCarousel, { type Slide } from '../sections/HeroCarousel';

type WpPage = {
  slug: string;
  title: string;
  content_html: string;
};

const slides: Slide[] = [
  { id: 1, image: './wp-content/uploads/2021/07/Que-necesito-llevar-a-RuralCAn.jpg', alt: 'Qué necesito llevar a RuralCan' },
  { id: 2, image: './wp-content/uploads/2021/07/4.jpg', alt: 'Instalaciones de RuralCan' },
];

const QueLlevar = () => {
  const page = (pages as WpPage[]).find((item) => item.slug === 'llevar2');
  const title = page?.title ?? '¿Qué tengo que llevar a RuralCan?';
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

export default QueLlevar;
