import { FaGithub } from "react-icons/fa";

export default function SobreMi() {
  return (
    <section className="flex justify-center items-center px-16 py-20 h-[450px] bg-[radial-gradient(circle_at_center,_#CFE0FF,_#E7E0F9)] gap-12">
      <a
        href="https://github.com/Diesor"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#0A0258] to-[#494296] rounded-md text-white hover:scale-110 transition-transform"
      >
        <FaGithub className="w-6 h-6" />
      </a>
      
      <div className="max-w-xl">
        <h1 className="text-6xl font-archivo font-bold bg-gradient-to-r from-[#0A0258] to-[#494296] bg-clip-text text-transparent">
          DIEGO SORIA MAGOS
        </h1>

        <p className="mt-4 robotoRegular text-lg text-gray-700r">
          Estudiante de Ingeniería en Sistemas Computacionales, interesado en el
          diseño y desarrollo de software.
        </p>
      </div>

      <div className="relative w-56 h-56 rounded-full p-1 bg-gradient-to-r from-[#5A4BFF] to-[#139BFC]">
        <img
          src="/mi-foto.jpg"
          alt="Foto de Diego Soria"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </section>
  );
}
