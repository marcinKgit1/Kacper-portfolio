import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Contact = React.lazy(() => import("./components/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));
import { BRANDING_IMAGES } from "./data/portfolio";

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-brand-dark bg-brand-dark overflow-x-hidden">
      <Navbar logoUrl={BRANDING_IMAGES.logo} />
      <main>
        <Hero heroUrl={BRANDING_IMAGES.hero} />
        <About />
        <Suspense fallback={<div className="h-screen bg-brand-dark" />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-brand-dark" />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-48 bg-brand-dark" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
