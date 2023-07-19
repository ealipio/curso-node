import React from "react";

type ResourceType = {
  src: string;
  href: string;
  title: string;
  description: string;
  bg: string;
};

type Props = {
  resource: ResourceType;
};

const Resource: React.FC<Props> = ({ resource }) => {
  return (
    <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
      <a href={resource.href} target="_blank" className="transition-all hover:scale-105 hover:contrast-125">
        <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
          <div className={`absolute inset-0 flex items-center justify-center bg-[${resource.bg}]`}>
            <img src={resource.src} alt="js" className={`${resource.bg && "h-auto w-36"}`} />
          </div>
        </div>
        <div>
          <h3 className="pt-2 text-lg font-medium tracking-tight text-slate-900">{resource.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{resource.description}</p>
        </div>
      </a>
    </li>
  );
};

export default function ResourcesList() {
  const resources: ResourceType[] = [
    {
      href: "https://aprendejavascript.dev/",
      src: "/assets/js-logo.svg",
      title: "Aprende Javascript",
      bg: "#F3E050",
      description: "Ya tenemos un curso 100% gratis para que aprendas a tu ritmo y de forma práctica JavaScript",
    },
    {
      href: "https://noticias.dev",
      src: "/assets/noticias-dev.webp",
      title: "Noticias de Programación",
      bg: "",
      description:
        "Todas las semanas, un correo con las noticias más importantes de la semana en el mundo de la programación web.",
    },
    {
      href: "https://discord.gg/midudev",
      src: "/assets/discord.ad5bcc98.svg",
      // bg: "#50d71e",
      bg: "#F3E050",
      title: "Comunidad de desarrolladores",
      description:
        "Entra al servidor de Discord y encuentra apoyo entre más de 50.000 desarrolladores de todo el mundo.",
    },
  ];
  return (
    <ol className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20">
      {resources.map((resource) => (
        <Resource key={resource.src} resource={resource} />
      ))}
    </ol>
  );
}
