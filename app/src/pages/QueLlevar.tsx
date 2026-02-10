import pages from '../data/wp_pages.json';
import { localizeWpHtml } from '../lib/utils';

type WpPage = {
  slug: string;
  title: string;
  content_html: string;
};

const QueLlevar = () => {
  const page = (pages as WpPage[]).find((item) => item.slug === 'llevar2');
  const title = page?.title ?? '¿Qué tengo que llevar a RuralCan?';
  const html = localizeWpHtml(page?.content_html ?? '');
  return (
    <>
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
