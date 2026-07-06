import React, { useState } from 'react';
import { Menu, X, Linkedin, Instagram, MapPin } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Casos', href: '#casos' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      {/* Top Banner Bar */}
      <div className="bg-[#1E2D42] text-white text-[11px] font-sans">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-10 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="w-3.5 h-3.5 text-rosa" /> Rosario, Argentina
            </span>
            <span className="hidden sm:flex items-center gap-1.5 opacity-90">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponible para nuevos proyectos
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/melisafontanessi"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 hover:text-rosa transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/melifontanessi.ok/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 hover:text-rosa transition-all"
              title="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="group flex flex-col">
          <span className="font-serif text-lg md:text-xl font-black tracking-tight text-azul group-hover:text-rosa transition-colors uppercase leading-none">
            Melisa
          </span>
          <span className="font-serif text-lg md:text-xl font-black tracking-tight text-azul group-hover:text-rosa transition-colors uppercase leading-none">
            Fontanessi
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-[12px] font-bold tracking-wider text-azul/80 hover:text-rosa transition-colors relative ${
                index === 0 ? "after:absolute after:bottom-[-22px] after:left-0 after:right-0 after:h-0.5 after:bg-rosa" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Call to Action Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contacto"
            className="px-6 py-2.5 bg-rosa hover:bg-rosa/90 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-azul hover:text-rosa transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[104px] left-0 right-0 bg-white border-b border-slate-100 shadow-xl px-6 py-8 flex flex-col gap-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold uppercase tracking-widest text-azul hover:text-rosa border-b border-slate-50 pb-2"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <span className="text-[11px] font-medium text-slate-500">
              🟢 Disponible para nuevos proyectos
            </span>
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 bg-rosa text-white text-[11px] font-bold uppercase tracking-widest rounded-full"
            >
              Hablemos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
