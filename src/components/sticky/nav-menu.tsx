export default function NavMenu() {
  const menuItems = [
    { label: "Contenido", href: "/#content" },
    { label: "Certificado", href: "/#certificate" },
    { label: "Profesor", href: "/#author" },
    { label: "Recursos", href: "/#resources" },
  ];
  return (
    <div className="sticky top-0 z-50">
      {/* xs menu */}
      <div className="hidden backdrop-blur-sm sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-slate-200">
        <ol className="grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-slate-900 [counter-reset:section]">
          {menuItems.map((item) => (
            <li className="flex [counter-increment:section]" key={item.href}>
              <a
                className="flex w-full flex-col items-center justify-center border-b-2 border-green-600 border-transparent bg-green-50 text-green-600 before:mb-2 before:font-mono before:text-sm before:text-green-600 before:content-[counter(section,decimal-leading-zero)]"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
