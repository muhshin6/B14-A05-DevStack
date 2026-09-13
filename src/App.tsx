import "./App.css";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Suspense, lazy } from "react";

const TechnologyCatalog = lazy(() => import("./components/technology-catalog"));

function App() {
  return (
    <>
      <Navbar />
      <Banner />

      <Suspense fallback={<p>Loading...</p>}>
        <TechnologyCatalog />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
