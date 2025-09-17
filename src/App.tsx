import { useState } from "react";
import SideMenu from "./components/sideMenu";
import SobreMi from "./components/sobreMi";
import Tecnologias from "./components/carruselTech";
import Experiencia from "./components/experiencia";
import Proyectos from "./components/proyectos";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* Menú lateral */}
      <SideMenu open={open} setOpen={setOpen} />

      {/* Contenido principal */}
      <main
        className={`flex-1 p-0 bg-gray-100 min-h-screen transition-all duration-300 overflow-x-hidden ${
          open ? "ml-64" : "ml-0"
        }`}
      >
        <div id="sobre-mi">
          <SobreMi />
        </div>
        
        <div id="tecnologias">
          <Tecnologias />
        </div>
        
        <div id="experiencia">
          <Experiencia />
        </div>
        
        <div id="proyectos">
          <Proyectos />
        </div>
      </main>
    </div>
  );
}