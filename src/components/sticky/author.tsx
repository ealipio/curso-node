import SectionButton from "../shared/section-button";

export default function Author() {
  return (
    <section id="author" className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16  ">
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="sm:rounded-6xl bg-green-50 pt-px">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-green-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <img src="/assets/author.png" alt="author" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionButton counter="03" label="Author" />
            <p className="font-display mb-10 mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-green-600"> Miguel Ángel Durán –</span>
              <span className="text-5xl font-bold">¡Hola 👋! Yo seré tu profesor.</span>
            </p>
            <p className="mt-4 text-lg tracking-tight text-green-700">
              Tengo <strong>+18 años de experiencia</strong> trabajando como desarrollador web. En los últimos 5 años he
              sido <strong>Lead Frontend Architect</strong> y ahora divulgo y creo contenido sobre programación en las
              redes sociales.
            </p>

            <p className="mt-4 text-lg tracking-tight text-green-700">
              Estoy en{" "}
              <a className="underline" href="https://twitch.tv/midudev" target="_blank">
                directo
              </a>
              casi todos los días en Twitch, donde programo y comparto tutoriales de programación.
            </p>

            <p className="mt-8">
              <a
                className="inline-flex items-center rounded-lg px-4 py-2 text-base font-semibold tracking-tight text-green-600 transition hover:bg-green-600 hover:text-green-50"
                href="https://twitter.com/midudev"
              >
                <svg aria-hidden="true" viewBox="0 0 40 40" className="h-10 w-10 fill-current">
                  <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066"></path>
                </svg>
                <span className="ml-4">Sígueme en Twitter</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
