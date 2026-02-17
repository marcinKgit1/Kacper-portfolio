import React from "react";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  heroUrl: string;
}

const Hero: React.FC<HeroProps> = ({ heroUrl }) => {
  const handleManualScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden scroll-mt-0"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroUrl}
          alt="Kacper Wielgus"
          className="w-full h-full object-cover opacity-50 scale-100 transition-all duration-1000"
          decoding="async"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop&fm=webp";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-transparent to-brand-dark"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.5em] border-b border-brand-accent/30 pb-2">
            Portfolio Autorskie
          </span>
        </div>
        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-10 leading-[1.2] animate-in fade-in slide-in-from-bottom-6 duration-1000 text-white tracking-tight">
          Profesjonalna Fotografia <br />{" "}
          <span className="italic text-brand-accent/90">
            Portretowa i Reportażowa
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-14 font-normal leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Realizuję wysokiej jakości sesje zdjęciowe, które skutecznie
          uwieczniają ważne wydarzenia i budują profesjonalny wizerunek.
        </p>
        <div className="flex items-center justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <a
            href="#portfolio"
            onClick={(e) => handleManualScroll(e, "portfolio")}
            className="bg-brand-accent text-brand-dark px-16 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-2xl"
          >
            Zobacz Portfolio
          </a>
        </div>
      </div>

      <a
        href="#o-mnie"
        onClick={(e) => handleManualScroll(e, "o-mnie")}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer p-2 text-brand-accent/50 hover:text-brand-accent transition-colors"
      >
        <ArrowDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
