import StickyNav from "./components/sticky-nav";
import Footer from "./components/footer";

import FreeChapters from "./components/free-chapters";
import Header from "./components/header";
import Introduction from "./components/introduction";
import HomePage from "./components/sample";

export default function App() {
  return (
    <>
      <Header />
      <Introduction />
      <StickyNav />
      <FreeChapters />
      <HomePage />
      <Footer />
    </>
  );
}
