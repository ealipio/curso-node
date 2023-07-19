export default function Header() {
  return (
    <header className="m-auto overflow-hidden bg-sky-100 lg:px-5">
      <div className="flex flex-col justify-center gap-16 px-8 pt-32 lg:flex-row">
        <div className="relative -mb-40 flex lg:mb-0">
          <div className="relative z-10 m-auto flex w-72">
            <img
              className="h-full w-full"
              src="/assets/cover.png"
              alt="nodejs"
            />
          </div>
        </div>
        <div className="flex items-center justify-center pt-32 lg:pt-0">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <div className="group relative">
              <div className="absolute -inset-1 animate-tilt rounded-lg bg-pink-600 bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur-sm transition duration-200 group-hover:opacity-100"></div>
              <span className="relative flex items-center justify-center divide-x-2 rounded-lg bg-black px-7 py-4 leading-none">
                <span className="pr-6 text-gray-100 hover:animate-pulse">
                  starts 20 de julio
                </span>
                <span className="pl-6 text-purple-700 transition duration-200 group-hover:text-purple-400">
                  Twitch
                </span>
              </span>
            </div>
            <h1 className="mt-8 text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Curso práctico de Node.js desde cero
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              Aprende Node.js, el entorno de ejecución de JavaScript del lado
              del servidor, y crea aplicaciones web y APIs.
            </p>

            <div className="mt-8 flex gap-4">
              <div className="relative flex flex-col">
                <a
                  className="inline-flex justify-center rounded-md bg-green-600 px-4 py-1 text-base font-semibold tracking-tight text-white shadow-sm hover:bg-green-500"
                  href="/#pricing"
                >
                  conseguir certificado
                </a>
                <span className="mt-1 text-center text-xs text-red-700">
                  Plazas agotadas
                </span>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex justify-center rounded-md border border-green-300 px-4 py-1 text-base font-semibold tracking-tight text-green-600 hover:border-green-400 hover:bg-green-50 "
                >
                  Me apunto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
