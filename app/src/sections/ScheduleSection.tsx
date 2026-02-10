import { Clock } from 'lucide-react';

const ScheduleSection = () => {
  return (
    <section id="horario" className="w-full bg-[#f5f5dc] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-[#4a7c59]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#4a7c59]">
              Horario – Cita Previa
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Weekdays */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-[#4a7c59] mb-3">
                Lunes – Viernes
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="text-lg">10:00 – 13:00</p>
                <p className="text-lg">16:00 – 19:00</p>
              </div>
            </div>

            {/* Saturday */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-[#4a7c59] mb-3">
                Sábados
              </h3>
              <p className="text-lg text-gray-700">10:00 – 13:00</p>
            </div>
          </div>

          {/* Sunday */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              Domingos y Festivos
            </h3>
            <p className="text-lg text-red-600 font-medium">Cerrado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
