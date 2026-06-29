import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Perfil', href: '#perfil' },
    { name: 'Soluciones', href: '#servicios' },
    { name: 'Trayectoria', href: '#experiencia' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Substack', href: '#substack' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCFB]/85 backdrop-blur-md border-b border-azul/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <a href="#perfil" className="group flex flex-col">
          <span className="font-serif text-lg font-bold tracking-tight text-azul group-hover:text-ocre transition-colors uppercase">
            Melisa Fontanessi
          </span>
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-ocre font-bold">
            Estrategia Digital & Branding
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] uppercase tracking-widest font-bold text-azul/80 hover:text-ocre transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Social Links */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/melisafontanessi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-azul/70 hover:text-[#0077B5] transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:melifontanessi@gmail.com"
            className="p-2 text-azul/70 hover:text-ocre transition-all"
            title="Escribir email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/5493424481854"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-1.5 bg-azul hover:bg-ocre text-white text-[10px] font-bold tracking-widest uppercase transition-all"
          >
            WhatsApp <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-azul hover:text-ocre transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-16 left-0 right-0 bg-[#FDFCFB] border-b border-azul/10 shadow-lg px-6 py-8 flex flex-col gap-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold uppercase tracking-widest text-azul hover:text-ocre border-b border-azul/5 pb-2"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-between pt-4 border-t border-azul/5">
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/melisafontanessi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-azul/70 hover:text-ocre"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:melifontanessi@gmail.com"
                className="p-2 text-azul/70 hover:text-ocre"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://wa.me/5493424481854"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2 bg-azul text-white text-[10px] font-bold uppercase tracking-widest"
            >
              WhatsApp <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
