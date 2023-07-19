import StickyNav from "./components/StickyNav";

import FreeChapters from "./components/free-chapters";
import Header from "./components/header";
import Introduction from "./components/introduction";

export default function App() {
  return (
    <>
      <Header />
      <Introduction />
      <StickyNav />
      <FreeChapters />
    </>
  );
}
