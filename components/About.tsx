import React from "react";
import { BRANDING_IMAGES } from "../data/portfolio";

const About: React.FC = () => {
  return (
    <section
      id="o-mnie"
      className="py-32 bg-brand-dark overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-white/5 h-[600px] bg-white/5">
              <img
                src={BRANDING_IMAGES.hero}
                alt="Kacper Wielgus"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop&fm=webp";
                }}
              />
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-brand-accent uppercase tracking-[0.3em] text-xs font-bold">
                Moja Filozofia
              </h2>
              <h3 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-white">
                Zatrzymuję to, co <br />
                <span className="italic text-brand-accent">nieuchwytne.</span>
              </h3>
            </div>

            <div className="space-y-6 text-gray-200 leading-relaxed text-lg font-light">
              <p>
                W fotografii nie szukam doskonałości, lecz prawdy. Wierzę, że
                najpiękniejsze kadry powstają naturalnie, gdy światło rzeźbi
                emocje, a aparat staje się niewidocznym świadkiem wydarzeń.
              </p>
              <p>
                Nazywam się Kacper Wielgus. Pomogę Ci zatrzymać chwile, które
                przetrwają próbę czasu – od intymnych portretów po dynamiczne
                reportaże, zawsze z dbałością o autentyczność.
              </p>
            </div>

            <div className="pt-8">
              <p className="text-gray-400 text-sm italic font-serif">
                "Światło jest pędzlem, a chwila płótnem, na którym maluję Twoją
                historię."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
