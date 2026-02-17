import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  logoUrl: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "Start", href: "#hero", id: "hero" },
    { name: "O mnie", href: "#o-mnie", id: "o-mnie" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Kontakt", href: "#kontakt", id: "kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-brand-dark/95 backdrop-blur-md py-2 border-b border-white/5 shadow-2xl" : "bg-transparent py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center space-x-6 group"
        >
          <div className="bg-white p-1 rounded-sm shadow-inner transition-transform group-hover:scale-105">
            <img
              src={logoUrl}
              alt="Logo"
              className="h-14 w-auto object-contain max-w-[120px]"
              decoding="async"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/150x60?text=LOGO";
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-serif font-bold tracking-[0.3em] text-white uppercase leading-none">
              KACPER WIELGUS
            </span>
            <span className="text-[8px] tracking-[0.5em] text-brand-accent uppercase mt-1 font-bold">
              PHOTOGRAPHY
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-brand-accent relative py-2 ${activeSection === link.id ? "text-brand-accent" : "text-gray-400"}`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent"></span>
              )}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 md:hidden animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-2xl font-serif font-bold tracking-wide ${activeSection === link.id ? "text-brand-accent" : "text-white"}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
