
import HeroCarousel, { type Slide } from '../sections/HeroCarousel';

const slides: Slide[] = [
  { id: 1, image: './wp-content/uploads/2021/06/Recuperacion-y-cuidados-especiales-dentro-con-el-texto-2048x1536.jpg', alt: 'Recuperación y cuidados especiales' },
  { id: 2, image: './wp-content/uploads/2021/07/1625430363034-2048x1621.jpg', alt: 'Zonas tranquilas de recuperación' },
  { id: 3, image: './wp-content/uploads/2024/05/Habitacion-estufa2.jpeg.png', alt: 'Habitaciones climatizadas' },
];

const Recuperacion = () => {
  return (<>
      <HeroCarousel slides={slides} />
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4a7c59] mb-8 text-center">Recuperación y Cuidados Especiales</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            En RuralCan ofrecemos servicios especializados de recuperación y cuidados especiales 
            para perros que han pasado por cirugías, tienen movilidad reducida, o necesitan 
            atención veterinaria continua.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Nuestro equipo está formado para atender las necesidades específicas de cada perro, 
            administrando medicación, realizando curas y proporcionando la atención necesaria 
            para una recuperación óptima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="./wp-content/uploads/2021/06/Recuperacion-y-cuidados-especiales-dentro-con-el-texto-1024x768.jpg" alt="Cuidados especiales" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#4a7c59] mb-3">Servicios Incluidos</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#8bc34a] mt-1">✓</span>
                  <span>Administración de medicación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8bc34a] mt-1">✓</span>
                  <span>Curas y vendajes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8bc34a] mt-1">✓</span>
                  <span>Fisioterapia básica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8bc34a] mt-1">✓</span>
                  <span>Seguimiento veterinario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8bc34a] mt-1">✓</span>
                  <span>Informes diarios al propietario</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="./wp-content/uploads/2024/05/umareducida.png" alt="Instalaciones adaptadas" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#4a7c59] mb-3">Instalaciones Adaptadas</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#8bc34a] mt-1">✓</span>
                  <span>Boxes en planta baja</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8bc34a] mt-1">✓</span>
                  <span>Rampas de acceso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8bc34a] mt-1">✓</span>
                  <span>Zonas de descanso tranquilas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8bc34a] mt-1">✓</span>
                  <span>Climatización controlada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#4a7c59] text-white rounded-lg p-6 text-center">
          <p className="text-lg mb-2">¿Tu perro necesita cuidados especiales?</p>
          <p>Contacta con nosotros para evaluar su caso y ofrecerte un plan personalizado.</p>
        </div>
      </div>
    </>);
};

export default Recuperacion;
