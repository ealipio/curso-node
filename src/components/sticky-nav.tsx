import Author from "./sticky/author";
import Certificate from "./sticky/certificate";
import Resources from "./sticky/resources";
import Content from "./sticky/content";
import { useState, useEffect } from "react";
import NavMenu from "./sticky/nav-menu";

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
      <NavMenu />
      <Content />
      <Certificate />
      <Author />
      <Resources />
    </>
  );
}
