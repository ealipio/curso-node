import { CheckIcon } from "@heroicons/react/20/solid";

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="bg-slate-100 pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <div className="mx-auto px-4 text-lg tracking-tight text-slate-700 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <p className="text-4xl font-bold tracking-tight text-slate-900">
          Aprenderás <span className="text-green-600">Node.js</span> desde zero,
          el entorno de ejecución de
          <span className="text-orange-700">JavaScript</span> más popular del
          mundo.
        </p>
        <p className="mt-4">
          Node.js es una de las tecnologías más utilizadas y demandadas en el
          mundo de la programación. Es la base del famoso stack <em>MERN</em> y
          te permite llevar tus conocimientos de JavaScript a un nuevo nivel.
        </p>

        <p className="mt-4">
          En este curso aprenderás a crear muchos proyectos:
        </p>
        <ul className="mt-8 space-y-3">
          <li className="flex">
            <CheckIcon className="h-6 text-green-500" />
            <span className="ml-4">API REST con Express</span>
          </li>
          <li className="flex">
            <CheckIcon className="h-6 text-green-500" />
            <span className="ml-4">Programa de línea de comandos (CLI)</span>
          </li>
          <li className="flex">
            <CheckIcon className="h-6 text-green-500" />
            <span className="ml-4">Servidor web desde cero</span>
          </li>
          <li className="flex">
            <CheckIcon className="h-6 text-green-500" />
            <span className="ml-4">
              Aplicaciones web en tiempo real con Web Sockets
            </span>
          </li>
          <li className="flex">
            <CheckIcon className="h-6 text-green-500" />
            <span className="ml-4">
              Conexión a bases de datos mySQL y mongoDB
            </span>
          </li>
          <li className="flex">
            <CheckIcon className="h-6 text-green-500" />
            <span className="ml-4">Aplicaciones de scraping web</span>
          </li>
        </ul>
        <p className="mt-8">
          Al terminar el curso, tendrás la confianza para crear tus propios
          proyectos y trabajar con Node.js en cualquier entorno.
        </p>

        <p className="mt-10">
          <a
            target="_blank"
            href="https://www.youtube.com/@cod3a"
            className="text-base font-medium text-green-600 hover:text-green-700"
          >
            El curso es en directo en Youtube, guarda la fecha
            <span aria-hidden="true">→</span>
          </a>
        </p>
      </div>
    </section>
  );
}
