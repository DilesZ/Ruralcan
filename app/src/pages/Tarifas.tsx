import pages from '../data/wp_pages.json';
import { localizeWpHtml } from '../lib/utils';

type WpPage = {
  slug: string;
  title: string;
  content_html: string;
};

const Tarifas = () => {
  const page = (pages as WpPage[]).find((item) => item.slug === 'tarifas');
  const title = page?.title ?? 'Tarifas';
  const html = localizeWpHtml(page?.content_html ?? '');
  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4a7c59] mb-8 text-center">{title}</h1>
        <div className="max-w-none bg-white rounded-lg shadow-lg p-6">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  );
};

export default Tarifas;
