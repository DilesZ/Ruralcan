
const Charlas = () => {
  return (<>
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4a7c59] mb-8 text-center">Charlas</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            En RuralCan organizamos charlas y talleres sobre educación canina, bienestar animal 
            y convivencia responsable. Nuestro objetivo es compartir conocimientos y promover 
            una relación armoniosa entre los perros y sus familias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#4a7c59] mb-4">Charlas Disponibles</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-[#4a7c59]">Educación para cachorros</h4>
                <p className="text-sm">Todo lo que necesitas saber para los primeros meses de tu cachorro.</p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-[#4a7c59]">Comunicación canina</h4>
                <p className="text-sm">Aprende a entender el lenguaje corporal de tu perro.</p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-[#4a7c59]">Socialización correcta</h4>
                <p className="text-sm">Cómo socializar a tu perro de forma positiva.</p>
              </li>
              <li>
                <h4 className="font-semibold text-[#4a7c59]">Problemas de comportamiento</h4>
                <p className="text-sm">Soluciones prácticas para los problemas más comunes.</p>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#4a7c59] mb-4">Próximas Fechas</h3>
            <div className="space-y-4">
              <div className="bg-[#f5f5dc] p-4 rounded-lg">
                <p className="font-semibold text-[#4a7c59]">15 de Marzo - 18:00h</p>
                <p className="text-gray-700">Educación para cachorros</p>
              </div>
              <div className="bg-[#f5f5dc] p-4 rounded-lg">
                <p className="font-semibold text-[#4a7c59]">22 de Marzo - 18:00h</p>
                <p className="text-gray-700">Comunicación canina</p>
              </div>
              <div className="bg-[#f5f5dc] p-4 rounded-lg">
                <p className="font-semibold text-[#4a7c59]">5 de Abril - 18:00h</p>
                <p className="text-gray-700">Socialización correcta</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=500&fit=crop" alt="Charlas" className="w-full h-80 object-cover" />
        </div>
      </div>
    </>);
};

export default Charlas;
