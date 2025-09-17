const tecnologias = [
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F264-2646582_logo-transparent-background-java.png&f=1&nofb=1&ipt=66de98e34eb3577bc336e24cb0c1a4e78754431e5234d4efb181b2e4edab82c5",
    titulo: "Java",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FPython-Logo-PNG-Clipart.png&f=1&nofb=1&ipt=ba6e90419e965f13ccb96343af72ab2000d7cf213d49a307c19f8e343be3cd75",
    titulo: "Python",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.netgen.co.za%2Fwp-content%2Fuploads%2F2022%2F03%2FC-image-for-Netgen-1024x1024.png&f=1&nofb=1&ipt=4c307b646189d55f3ccd68a35022658cb44d289920c2be1a88dfb18dde0e7d00",
    titulo: "C#",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fd%2Fmysql_PNG9.png&f=1&nofb=1&ipt=c441e418b2f946d88660e792ac38aefa81852bcffb5f670c261de3037cbd8c9a",
    titulo: "MySQL",
  },

  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Fpostgresql%2Fpostgresql-2048.png&f=1&nofb=1&ipt=457dea3fd5ccbaae8d38fc29b2ad6aafe7ae734cb846b471d883f442035a308c",
    titulo: "PostgreSQL",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F166383%2Fisolated%2Fpreview%2F6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png&f=1&nofb=1&ipt=3fae5dedd4c3d828e5e50c62d5e3a0216be75c16236aebb79443ab924b49ea8e",
    titulo: "HTML",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-512%2Fjavascript-2038874-1720087.png&f=1&nofb=1&ipt=765833b1dead0e8eaf968924fc7aa428b5e8fd31fc7373c9fab12f8d6ae46a98",
    titulo: "JavaScript",
  },
  {
    logo: "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png",
    titulo: "CSS",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreazilla-store.fra1.digitaloceanspaces.com%2Ficons%2F3257079%2Ffile-type-tailwind-icon-md.png&f=1&nofb=1&ipt=88f78ad0aab42747d1b7d89da4a3374c884a8005f30a7af75917c4e34f83ceb8",
    titulo: "Tailwind",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fphp%2Fphp_PNG25.png&f=1&nofb=1&ipt=5f1986175fbff0363834fbac4d5c36989b1ff9ca859fe22ecd38ef3eec12f583",
    titulo: "PHP",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficons.veryicon.com%2Fpng%2Fo%2Fbusiness%2Fvscode-program-item-icon%2Freact-3.png&f=1&nofb=1&ipt=5b4fc74482c98d22d3c26ecfb9698d74d77a5a4f6e4b3d49b6e4934a9c7858ea",
    titulo: "React",
  },
  {
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-icon-svg-download-png-1174925.png?f=webp",
    titulo: "Node.js",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    titulo: "Laravel",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/768px-Vue.js_Logo_2.svg.png?20170919082558https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.pnghttps://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
    titulo: "Vue.js",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png",
    titulo: "Git",
  },
  {
    logo: "https://img.icons8.com/fluent/512/supabase.png",
    titulo: "Supabase",
  },
];

export default function Tecnologias() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0A0258] to-[#494296] overflow-hidden">
      <h2 className="text-4xl font-archivo text-[#DCDEF8] text-center mb-12">
        TECNOLOGÍAS
      </h2>

      <div className="w-full overflow-hidden relative">
        <div className="flex gap-3 animate-marquee">
          {[...tecnologias, ...tecnologias].map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-40 bg-white/25 border border-white/30  rounded-lg flex flex-col items-center justify-center p-4"
            >
              <img
                src={tech.logo}
                alt={tech.titulo}
                className="w-24 h-24 mb-2"
              />
              <span className="text-white font-roboto font-semibold">
                {tech.titulo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind no trae keyframes por defecto, se agregan así */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
