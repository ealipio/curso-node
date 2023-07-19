export default function FreeChapters() {
  return (
    <section id="free-chapters" className="scroll-mt-14 bg-green-600 sm:scroll-mt-32">
      <div className="overflow-hidden lg:relative">
        <div className="relative mx-auto grid grid-cols-1 items-end gap-y-12 px-4 py-20 sm:px-6 md:max-w-2xl md:px-4 lg:static lg:max-w-5xl lg:grid-cols-2 lg:px-8 lg:py-28 xl:py-32">
          <svg
            aria-hidden="true"
            width="432"
            height="184"
            className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:left-2/3 xl:right-auto"
          >
            <defs>
              <symbol id=":Rcm:-0" width="40" height="40">
                <rect className="fill-green-500" width="40" height="40"></rect>
                <circle className="fill-green-600" cx="20" cy="20" r="13"></circle>
              </symbol>
              <symbol id=":Rcm:-1" width="40" height="40">
                <circle className="fill-green-300" cx="20" cy="20" r="20"></circle>
                <rect className="fill-green-600" width="20" height="20" x="10" y="10"></rect>
              </symbol>
            </defs>
            <use href="#:Rcm:-0" x="0" y="0"></use>
            <use href="#:Rcm:-1" x="56" y="0"></use>
            <use href="#:Rcm:-0" x="112" y="0"></use>
            <use href="#:Rcm:-1" x="168" y="0"></use>
            <use href="#:Rcm:-1" x="224" y="0"></use>
            <use href="#:Rcm:-0" x="280" y="0"></use>
            <use href="#:Rcm:-1" x="336" y="0"></use>
            <use href="#:Rcm:-0" x="392" y="0"></use>
            <use href="#:Rcm:-1" x="0" y="48"></use>
            <use href="#:Rcm:-0" x="56" y="48"></use>
            <use href="#:Rcm:-1" x="112" y="48"></use>
            <use href="#:Rcm:-1" x="168" y="48"></use>
            <use href="#:Rcm:-0" x="224" y="48"></use>
            <use href="#:Rcm:-0" x="280" y="48"></use>
            <use href="#:Rcm:-0" x="336" y="48"></use>
            <use href="#:Rcm:-1" x="392" y="48"></use>
            <use href="#:Rcm:-0" x="0" y="96"></use>
            <use href="#:Rcm:-1" x="56" y="96"></use>
            <use href="#:Rcm:-0" x="112" y="96"></use>
            <use href="#:Rcm:-1" x="168" y="96"></use>
            <use href="#:Rcm:-1" x="224" y="96"></use>
            <use href="#:Rcm:-0" x="280" y="96"></use>
            <use href="#:Rcm:-1" x="336" y="96"></use>
            <use href="#:Rcm:-0" x="392" y="96"></use>
            <use href="#:Rcm:-1" x="0" y="144"></use>
            <use href="#:Rcm:-0" x="56" y="144"></use>
            <use href="#:Rcm:-1" x="112" y="144"></use>
            <use href="#:Rcm:-1" x="168" y="144"></use>
            <use href="#:Rcm:-0" x="224" y="144"></use>
            <use href="#:Rcm:-0" x="280" y="144"></use>
            <use href="#:Rcm:-0" x="336" y="144"></use>
            <use href="#:Rcm:-1" x="392" y="144"></use>
          </svg>
          <div>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              No te pierdas cuando empieza
            </h1>
            <p className="mt-4 text-lg tracking-tight text-green-200">
              Deja tu correo para suscribirte y recibirás un email cuando empiece el curso además de noticias sobre
              programación.
            </p>
          </div>
          <form className="lg:pl-16">
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="text"
                  placeholder="tu.correo@gmail.com"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-green-300 peer-focus:bg-green-500 peer-focus:ring-1 peer-focus:ring-green-300 sm:rounded-xl"></div>
              </div>
              <button className="group relative isolate flex-none rounded-md border border-transparent py-1.5 pl-2.5 pr-[calc(9/16*1rem)] text-[0.8125rem]/6 font-semibold text-white  transition-all">
                <span className="group-hover:opacity-15 absolute inset-0 rounded-md bg-gradient-to-b from-white/80 to-white opacity-10 transition-opacity"></span>
                <span className="opacity-7.5 absolute inset-0 rounded-md transition-opacity group-hover:opacity-10"></span>
                ¡Me apunto!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
