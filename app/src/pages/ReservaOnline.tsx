import pages from '../data/wp_pages.json';
import { localizeWpHtml } from '../lib/utils';

type WpPage = {
  slug: string;
  title: string;
  content_html: string;
};

const ReservaOnline = () => {
  const page = (pages as WpPage[]).find((item) => item.slug === 'reserva-online');
  const title = page?.title ?? 'Reserva On-Line';
  const html = localizeWpHtml(page?.content_html ?? '');
  return (<>
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4a7c59] mb-8 text-center">{title}</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-gray-700">
          <div className="max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>);
};

export default ReservaOnline;
