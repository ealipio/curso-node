import Author from "./sticky/author";
import Certificate from "./sticky/certificate";
import Resources from "./sticky/resources";
import Content from "./sticky/content";
import { useState, useEffect } from "react";

export default function StickyNav() {
  const [fragment, setFragment] = useState("");

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const fragmentFromUrl = currentUrl.hash;

    setFragment(fragmentFromUrl);
  }, []);

  console.log(fragment);

  return (
    <>
      <div className="sticky">
        <div className="hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-slate-200">
          <ol className="grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-slate-900 [counter-reset:section]">
            <li className="flex [counter-increment:section]">
              <a
                className="flex w-full flex-col items-center justify-center border-b-2 border-transparent before:mb-2 before:font-mono before:text-slate-500 before:content-[counter(section,decimal-leading-zero)]"
                href="/#content"
              >
                Contenido
              </a>
            </li>
            <li className="flex [counter-increment:section]">
              <a
                className="flex w-full flex-col items-center justify-center border-b-2 border-transparent before:mb-2 before:font-mono before:text-slate-500 before:content-[counter(section,decimal-leading-zero)]"
                href="/#certificate"
              >
                Certificado
              </a>
            </li>
            <li className="flex [counter-increment:section]">
              <a
                className="flex w-full flex-col items-center justify-center border-b-2 border-transparent before:mb-2 before:font-mono before:text-slate-500 before:content-[counter(section,decimal-leading-zero)]"
                href="/#author"
              >
                Profesor
              </a>
            </li>
            <li className="flex [counter-increment:section]">
              <a
                className="flex w-full flex-col items-center justify-center border-b-2 border-transparent before:mb-2 before:font-mono before:text-slate-500 before:content-[counter(section,decimal-leading-zero)]"
                href="/#resources"
              >
                Recursos
              </a>
            </li>
          </ol>
        </div>
      </div>
      <Content />
      <Certificate />
      <Author />
      <Resources />
    </>
  );
}
