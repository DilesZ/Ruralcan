import pages from '../data/wp_pages.json';
import { localizeWpHtml } from '../lib/utils';
import HeroCarousel, { type Slide } from '../sections/HeroCarousel';

type WpPage = {
  slug: string;
  title: string;
  content_html: string;
};

const slides: Slide[] = [
  { id: 1, image: './wp-content/uploads/slider4/1623429259765-2048x1536.jpeg', alt: 'Hotel Canino RuralCan' },
  { id: 2, image: './wp-content/uploads/slider6/1-2048x1536.jpeg', alt: 'Zona de recuperación y cuidados especiales' },
  { id: 3, image: './wp-content/uploads/slider6/2-e1624816755201-870x570.jpeg', alt: 'Instalaciones de RuralCan' },
];

const HotelCanino = () => {
  const page = (pages as WpPage[]).find((item) => item.slug === 'residencia');
  const title = page?.title ?? 'Hotel Canino';
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

export default HotelCanino;
