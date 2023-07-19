import StickyNav from "./components/StickyNav";
import Footer from "./components/footer";

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
      <Footer />
    </>
  );
}
