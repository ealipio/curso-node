import SectionButton from "../shared/section-button";

export default function Resources() {
  return (
    <section id="resources" className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32">
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <SectionButton counter="04" label="Recursos" />
        <p className="font-display mt-8 text-4xl font-bold tracking-tight text-slate-900">
          Estos recursos te ayudarán a empezar más rápido y a progresar aún más lejos.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Contenido 100% gratis, cursos en vídeo y formas de acelerar tu aprendizaje a base de feedback de la comunidad.
        </p>
      </div>

      <div className="mx-auto mt-16 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8">
        <Resources />
      </div>
    </section>
  );
}
