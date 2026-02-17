
import React from 'react';
import { Camera } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-10">
        <div className="flex items-center space-x-3">
          <Camera className="w-6 h-6 text-brand-accent" />
          <span className="text-xl font-serif font-bold tracking-[0.3em] uppercase">KACPER WIELGUS</span>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8 text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">
          <a href="#hero" className="hover:text-brand-accent transition-colors">Start</a>
          <a href="#o-mnie" className="hover:text-brand-accent transition-colors">O mnie</a>
          <a href="#portfolio" className="hover:text-brand-accent transition-colors">Portfolio</a>
          <a href="#kontakt" className="hover:text-brand-accent transition-colors">Kontakt</a>
        </nav>

        <div className="text-center space-y-3">
          <p className="text-gray-600 text-xs tracking-wider">
            &copy; {year} Kacper Wielgus Photography. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-gray-800 text-[10px] italic font-serif">
            Opowiadając historie światłem.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
