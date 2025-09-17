import { useState } from "react";
import { ChevronDown } from "lucide-react";

const proyectos = [
  {
    id: 1,
    titulo: "SGI PROJECT",
    subtitulo: "Aplicación web",
    fecha: "Marzo - Junio 2025",
    descripcion: "Sistema de gestión de proyectos para concursos.",
    tecnologias: ["React", "Node.js", "Tailwind CSS", "Mysql"],
    github: "https://github.com/usuario/sgi-project",
    demo: "https://sgi-project-demo.netlify.app"
  },
  {
    id: 2,
    titulo: "PETBOOK",
    subtitulo: "Aplicación web",
    fecha: "En desarrollo",
    descripcion: "Sistema de adopción de mascotas.",
    tecnologias: ["Vue.js", "Supabase", "Tailwind CSS", "Hoppscotch"],
    github: "https://github.com/usuario/petbook",
    demo: null
  }
];

export default function Proyectos() {
  const [expandido, setExpandido] = useState<number | null>(null);

  const toggleExpansion = (id: number) => {
    setExpandido(expandido === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#0A0258] to-[#494296] px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-archivo text-white text-center mb-16">
        PROYECTOS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 pb-12 border border-white/30  transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-roboto font-bold text-white mb-2">
                  {proyecto.titulo}
                </h3>
                <p className="text-lg font-roboto text-white/90 mb-1">
                  {proyecto.subtitulo}
                </p>
                <p className="text-sm font-robotoRegular text-white/70 mb-4">
                  {proyecto.fecha}
                </p>
              </div>

              <button
                onClick={() => toggleExpansion(proyecto.id)}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#5A4BFF] to-[#139BFC] hover:bg-blue-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <ChevronDown 
                  className={`w-6 h-6 text-white transition-transform duration-300 ${
                    expandido === proyecto.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expandido === proyecto.id 
                ? 'max-h-96 opacity-100 mt-8' 
                : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-white/90 font-robotoRegular mb-4 leading-relaxed">
                  {proyecto.descripcion}
                </p>

           
                <div className="mb-4">
                  <h4 className="text-white font-roboto  font-bold mb-2">Tecnologías:</h4>
                  <div className="flex flex-wrap gap-2">
                    {proyecto.tecnologias.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-[#5A4BFF] to-[#139BFC] text-white px-3 py-1 rounded-full text-sm font-robotoRegular"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}