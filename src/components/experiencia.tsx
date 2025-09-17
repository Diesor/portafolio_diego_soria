export default function Educacion() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#C8C8E8] to-[#E8E8F8] px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl font-archivo text-[#0A0258] mb-8">
        EDUCACIÓN
      </h2>

      <div className="mb-12">
        <div className="bg-white/90 rounded-xl p-5 border border-[#0A0258] flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
          <div className="flex-1">
            <h3 className="text-lg font-roboto font-bold text-gray-800">
              INSTITUTO TECNOLÓGICO DE MORELIA
            </h3>
            <p className="text-base font-roboto text-gray-700">
              INGENIERÍA EN SISTEMAS COMPUTACIONALES
            </p>
            <p className="text-sm font-robotoRegular text-gray-500">
              Ago 2022 - En progreso
            </p>
          </div>
          <div className="flex-shrink-0 ml-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img 
                  src="https://sic.cultura.gob.mx/images/136706" 
                  alt="Instituto Tecnológico de Morelia"
                  className="w-24 h-24 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-archivo text-[#0A0258] mb-6">
            IDIOMAS
          </h3>
          
          <div className="space-y-3">
            <div className="bg-white/90 rounded-lg p-4 border border-[#0A0258] hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-base font-roboto font-bold text-gray-800 mb-1">
                ESPAÑOL
              </h4>
              <p className="text-sm font-robotoRegular text-gray-600">
                Lengua materna
              </p>
            </div>

            <div className="bg-white/90 rounded-lg p-4 border border-[#0A0258] hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-base font-bold font-roboto text-gray-800 mb-1">
                INGLÉS
              </h4>
              <p className="text-sm font-robotoRegular text-gray-600">
                B1
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-archivo text-[#0A0258] mb-6">
            CERTIFICACIONES
          </h3>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-[#0A0258] border-dashed  transition-shadow duration-300">
            <p className="text-sm font-robotoRegular text-gray-500 text-center italic">
              Certificaciones próximamente...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}