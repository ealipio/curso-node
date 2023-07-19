type ResourceType = {
  src: string;
  href: string;
  title: string;
  description: string;
};
const Resource = ({ href, src, title, description }: ResourceType) => {
  return (
    <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
      <a href={href} target="_blank" className="transition-all hover:scale-105 hover:contrast-125">
        <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
          <div className="absolute inset-0 flex items-center justify-center bg-[#F3E050]">
            <img src={src} alt="js" className="h-auto w-36" />
          </div>
        </div>
        <div>
          <h3 className="pt-2 text-lg font-medium tracking-tight text-slate-900">{title}</h3>
          <p className="mt-2 text-sm text-slate-600">{description}</p>
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
      description: "Ya tenemos un curso 100% gratis para que aprendas a tu ritmo y de forma práctica JavaScript",
    },
    {
      href: "https://aprendejavascript.dev/",
      src: "/assets/noticias-dev.webp",
      title: "Noticias de Programación",
      description:
        "Todas las semanas, un correo con las noticias más importantes de la semana en el mundo de la programación web.",
    },
    {
      href: "https://aprendejavascript.dev/",
      src: "/assets/discord.ad5bcc98.svg",
      title: "Comunidad de desarrolladores",
      description:
        "Entra al servidor de Discord y encuentra apoyo entre más de 50.000 desarrolladores de todo el mundo.",
    },
  ];
  return (
    <ol className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20">
      {resources.map(({ src, title, description, href }) => (
        <Resource src={src} title={title} description={description} href={href} />
      ))}
    </ol>
  );
}
