import React from "react";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="kontakt"
      className="py-24 bg-brand-dark border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-brand-accent uppercase tracking-widest text-sm font-bold">
                Bądźmy w kontakcie
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-white">
                Masz projekt w głowie? <br /> Porozmawiajmy o nim.
              </h3>
              <p className="text-gray-400 max-w-md text-lg">
                Każda wiadomość to początek nowej przygody. Odpowiadam zazwyczaj
                w ciągu 24 godzin.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-brand-accent transition-colors">
                  <Mail className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                    Email
                  </p>
                  <a
                    href="mailto:kacperwielgus5@gmail.com"
                    className="text-xl text-white hover:text-brand-accent transition-colors"
                  >
                    kacperwielgus5@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-brand-accent transition-colors">
                  <Phone className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                    Telefon
                  </p>
                  <a
                    href="tel:+48500347936"
                    className="text-xl text-white hover:text-brand-accent transition-colors"
                  >
                    +48 500 347 936
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex gap-6">
              <a
                href="https://instagram.com/kw.shots83"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-full text-white hover:bg-brand-accent hover:text-brand-dark transition-all transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1AeoyJbXL9/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-full text-white hover:bg-brand-accent hover:text-brand-dark transition-all transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl">
            <form
              className="space-y-6"
              action="https://formspree.io/f/xzzdebrd"
              method="POST"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Imię i Nazwisko
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="np. Anna Kowalska"
                    required
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-4 outline-none focus:border-brand-accent transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="twoj@email.pl"
                    required
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-4 outline-none focus:border-brand-accent transition-colors text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                  Temat
                </label>
                <select
                  name="subject"
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-4 outline-none focus:border-brand-accent transition-colors appearance-none text-white"
                >
                  <option>Sesja Portretowa</option>
                  <option>Fotografia Ślubna</option>
                  <option>Współpraca Komercyjna</option>
                  <option>Inne</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                  Wiadomość
                </label>
                <textarea
                  rows={6}
                  name="message"
                  placeholder="Opisz swój pomysł..."
                  required
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-4 outline-none focus:border-brand-accent transition-colors resize-none text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-accent text-brand-dark font-bold uppercase tracking-widest py-5 rounded-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl"
              >
                Wyślij Wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
