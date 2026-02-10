
const Prensa = () => {
  return (<>
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4a7c59] mb-8 text-center">RuralCan en la Prensa</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            RuralCan ha sido protagonista en diversos medios de comunicación locales y regionales, 
            destacando nuestro innovador concepto de residencia canina rural y nuestro compromiso 
            con el bienestar animal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-black">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="RuralCan en A Punt" 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#4a7c59] mb-2">A Punt - 15/08/2023</h3>
              <p className="text-gray-700">Reportaje sobre RuralCan en el programa A Punt de À Punt Media.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#4a7c59] mb-4">Artículos de Prensa</h3>
            <ul className="space-y-4">
              <li className="border-b border-gray-200 pb-4">
                <a href="#" className="block hover:bg-[#f5f5dc] p-3 rounded transition-colors">
                  <p className="font-semibold text-[#4a7c59]">Las Provincias</p>
                  <p className="text-sm text-gray-600">Una residencia canina diferente en el interior de Valencia</p>
                </a>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <a href="#" className="block hover:bg-[#f5f5dc] p-3 rounded transition-colors">
                  <p className="font-semibold text-[#4a7c59]">Levante-EMV</p>
                  <p className="text-sm text-gray-600">RuralCan: el hotel rural para perros</p>
                </a>
              </li>
              <li>
                <a href="#" className="block hover:bg-[#f5f5dc] p-3 rounded transition-colors">
                  <p className="font-semibold text-[#4a7c59]">Enguera Digital</p>
                  <p className="text-sm text-gray-600">Nuevo centro de adiestramiento en Navalón</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#4a7c59] text-white rounded-lg p-6 text-center">
          <p className="text-lg">¿Eres periodista y quieres más información sobre RuralCan?</p>
          <p className="mt-2">Contacta con nosotros en <a href="mailto:ruralcan@gmail.com" className="underline">ruralcan@gmail.com</a></p>
        </div>
      </div>
    </>);
};

export default Prensa;
