import SectionButton from "../shared/section-button";

export default function Content() {
  return (
    <section
      id="content"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <SectionButton counter="01" label="Contenido" />
        <p className="mt-8 text-4xl [text-wrap:balance]">
          Todo lo que aprenderás en el curso de Node.js.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Empezamos desde cero y llegamos a temas más avanzados:
        </p>
        <ol>
          <li>Introducción a Node.js</li>
        </ol>
      </div>
    </section>
  );
}
