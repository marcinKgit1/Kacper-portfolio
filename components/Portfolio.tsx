import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Photo, Category } from "../types";
import { INITIAL_PHOTOS } from "../data/portfolio";

const Portfolio: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>(INITIAL_PHOTOS);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Clear old cache on mount
  React.useEffect(() => {
    localStorage.removeItem("kacper_portfolio_cache");
  }, []);

  const categories: Category[] = ["Portrety", "Krajobrazy", "Eventy"];

  return (
    <section
      id="portfolio"
      className="py-24 bg-slate-900 text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-brand-accent uppercase tracking-widest text-sm font-bold">
              Kolekcje
            </h2>
            <h3 className="text-5xl md:text-6xl font-serif font-bold text-white">
              Moje Portfolio
            </h3>
            <div className="w-20 h-1 bg-brand-accent"></div>
          </div>
        </div>

        <div className="space-y-32">
          {categories.map((cat) => {
            const categoryPhotos = photos.filter((p) => p.category === cat);
            return (
              <div key={cat} className="space-y-12">
                <div className="flex items-center gap-6">
                  <h4 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-white">
                    {cat}
                  </h4>
                  <div className="flex-1 h-px bg-white/10"></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                    {categoryPhotos.length} fotografii
                  </span>
                </div>

                {categoryPhotos.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {categoryPhotos.map((photo) => (
                      <div
                        key={photo.id}
                        className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-2xl border border-black/5 transition-all duration-500 hover:-translate-y-2"
                      >
                        <img
                          src={photo.url}
                          alt={photo.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                          <button
                            onClick={() => setSelectedPhoto(photo)}
                            className="bg-white text-brand-dark py-5 rounded-[1.25rem] text-[10px] font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors shadow-2xl"
                          >
                            Podgląd
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-24 bg-white/5 rounded-[3rem] border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-gray-400 group hover:border-brand-accent transition-colors">
                    <p className="text-sm font-light italic text-center px-6">
                      Brak zdjęć w sekcji {cat}.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-6 animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-12 h-12" />
          </button>
          <div className="max-w-6xl w-full flex flex-col items-center gap-8">
            <img
              src={selectedPhoto.url}
              className="max-h-[85vh] rounded-2xl shadow-2xl border border-white/5 object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
