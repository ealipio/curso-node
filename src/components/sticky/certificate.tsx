import List from "../shared/ul-list";
import SectionButton from "../shared/section-button";

export default function Certificate() {
  return (
    <section
      id="certificate"
      className="scroll-mt-14 bg-sky-100 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
    >
      {/* description */}
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <SectionButton label="Certificado" counter="02" />
        <p className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          ¡Consigue tu certificado!
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          <strong>El curso es 100% gratuito</strong> pero puedes conseguir un certificado opcional para demostrar tus
          conocimientos a base de ejercicios y proyectos que serán <strong>revisados</strong> por el profesor.
        </p>
      </div>
      {/* price */}
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid gap-3 bg-green-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-3xl md:px-8 md:pt-16 lg:p-20">
          <div className="relative bg-gray-200 px-4 py-16 sm:rounded-3xl sm:px-10 md:py-12 lg:px-12">
            <div className="relative flex flex-col">
              <p className="ml-1 mt-1 text-7xl font-bold tracking-tight text-slate-900">Gratis</p>
              <h3 className="mt-7 text-lg font-semibold tracking-tighter text-slate-900">Curso</h3>
              <p className="mb-4 mt-2 text-lg tracking-tighter text-slate-600">
                El contenido es 100% gratis y siempre lo será. Podrás asistir a los directos, hacer preguntas y acceder
                a los vídeos.
              </p>

              <a
                href="#"
                className="inline-flex justify-center rounded-md bg-slate-900 px-4 py-1 text-base font-semibold tracking-tighter text-white shadow-sm hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 "
              >
                Guardar Fecha
              </a>
              <div className="mt-8">
                <List
                  textColor="text-slate-900"
                  items={[
                    "Contenido del curso",
                    "Código fuente de los ejemplos",
                    "Hacer preguntas en directo",
                    "Vídeos editados del curso",
                    "Soporte de la comunidad en Discord",
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Right Block */}
          <div className="relative bg-green-600 px-4 py-16 sm:rounded-3xl sm:px-10 sm:shadow-lg md:py-12 lg:px-12">
            <div className="flex flex-col">
              <h3 className="mt-7 text-lg font-semibold tracking-tight text-white">Certificado</h3>
              <p className="mt-2 text-lg tracking-tight text-white">
                Certifica tus conocimientos con ejercicios y proyectos prácticos revisados por el profesor.
              </p>
              <p className="font-display order-first flex font-bold">
                <span className="text-3xl leading-tight text-green-200">€</span>
                <span className="ml-1 mt-1 text-7xl tracking-tight text-white">
                  149
                  <span className="text-sm tracking-normal opacity-70">+ impuestos si proceden</span>
                </span>
              </p>
              <div className="mt-4 flex items-center justify-center gap-x-2">
                <span className="text-xs font-medium text-yellow-300">¡No quedan plazas!</span>
              </div>
              <a
                className="pointer-events-none mt-4 inline-flex cursor-not-allowed justify-center rounded-md bg-white px-4 py-1 text-base font-semibold tracking-tight text-green-600 opacity-70 shadow-sm hover:text-green-700 focus:outline-none focus-visible:text-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-green-900/80 disabled:opacity-40 disabled:hover:text-green-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://buy.stripe.com/8wM01XeqT2G4dvG3cd"
              >
                Comprar certificación
              </a>
              <div className="order-last mt-8">
                <List
                  items={[
                    "Revisión de ejercicios prácticos",
                    "Feedback sobre proyectos",
                    "Certificación final digital",
                    "Acceso a canal privado en Discord",
                    "Llamada grupal 1h cada 15 días",
                    "Acceso repositorio GitHub privado",
                  ]}
                  textColor="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* picture */}
      <div className="m-auto flex items-center justify-center">
        <a
          href="#"
          className="group mx-auto px-8 transition duration-200 hover:scale-110 hover:opacity-70 hover:contrast-125"
        >
          <img
            src="/assets/certificado.png"
            alt="certificado"
            className="mx-auto mt-16 w-full max-w-2xl rounded shadow-lg group-hover:scale-110 "
          />
        </a>
      </div>
    </section>
  );
}
