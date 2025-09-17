import { Menu, X } from "lucide-react";

export default function SideMenu({ open, setOpen }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        block: 'center'
      });
      setOpen(false);
    }
  };

  return (
    <div className="flex">
      <button
        onClick={() => setOpen(!open)}
        className={`fixed top-4 left-4 z-50 p-3 transition-all duration-300 ${
          open
            ? " hover:bg-white/20 rounded-full"
            : "rounded-full bg-gradient-to-r from-[#5A4BFF] to-[#139BFC] hover:shadow-lg"
        }`}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#5A4BFF] to-[#139BFC] text-white p-6 pt-20 transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-6 text-lg font-roboto font-bold">
          <li 
            className="cursor-pointer hover:underline transition-all duration-200 hover:text-gray-200"
            onClick={() => scrollToSection('sobre-mi')}
          >
            ACERCA DE MÍ
          </li>
          <li 
            className="cursor-pointer hover:underline transition-all duration-200 hover:text-gray-200"
            onClick={() => scrollToSection('tecnologias')}
          >
            TECNOLOGÍAS
          </li>
          <li 
            className="cursor-pointer hover:underline transition-all duration-200 hover:text-gray-200"
            onClick={() => scrollToSection('experiencia')}
          >
            EXPERIENCIA
          </li>
          <li 
            className="cursor-pointer hover:underline transition-all duration-200 hover:text-gray-200"
            onClick={() => scrollToSection('proyectos')}
          >
            PROYECTOS
          </li>
          <li className="cursor-pointer hover:underline transition-all duration-200 hover:text-gray-200">
            CONTACTO
          </li>
        </ul>
      </aside>
    </div>
  );
}