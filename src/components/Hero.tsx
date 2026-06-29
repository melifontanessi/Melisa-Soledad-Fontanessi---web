import React from 'react';
import { ArrowDownRight, ExternalLink, Sparkles, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="perfil" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-blanco">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-1.5 self-start px-3.5 py-1 bg-white border border-azul/10 text-ocre text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              <Sparkles className="w-3 h-3 text-ocre fill-ocre" />
              15+ AÑOS DE LIDERAZGO PROFESIONAL
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-azul mb-8">
              Impulsando el crecimiento y posicionamiento de marcas a través del pensamiento estratégico y la creatividad.
            </h1>

            {/* Supporting Paragraph */}
            <p className="font-sans text-base md:text-lg text-azul/80 leading-relaxed font-light mb-8 max-w-xl">
              Con una amplia experiencia en Estrategia Digital y Branding, no me limito a crear logotipos o publicar contenidos estéticos. Lidero la transformación visual y de negocio integral, convirtiendo necesidades de presencia, comunicacionales y de presencia en planes de acción y estrategias ejecutables orientadas a resultados reales.
            </p>

            {/* Core Pillars / Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg">
              <div className="flex items-start gap-3 border-l border-ocre/30 pl-4 py-1">
                <div>
                  <span className="text-[10px] font-bold text-azul uppercase tracking-widest font-mono">Dirección Estratégica</span>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">Creación de áreas de marketing corporativas de raíz.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-l border-ocre/30 pl-4 py-1">
                <div>
                  <span className="text-[10px] font-bold text-azul uppercase tracking-widest font-mono">E-commerce de Conversión</span>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">Optimización de pauta y embudo de ventas digital.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-l border-ocre/30 pl-4 py-1">
                <div>
                  <span className="text-[10px] font-bold text-azul uppercase tracking-widest font-mono">Liderazgo & MBA</span>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">Postgrado en Negocios Digitales por IEBS de Barcelona.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-l border-ocre/30 pl-4 py-1">
                <div>
                  <span className="text-[10px] font-bold text-azul uppercase tracking-widest font-mono">Estrategia Integrada</span>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">Gestión de presupuestos y coordinación de equipo.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-6 py-4 bg-azul hover:bg-azul/90 text-white font-bold text-xs uppercase tracking-widest transition-all"
              >
                Ver Soluciones & Paquetes
                <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-4 border border-azul text-azul hover:bg-azul hover:text-white font-bold text-xs uppercase tracking-widest transition-colors"
              >
                Agendar Consultoría
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Picture Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Background solid decoration */}
              <div className="absolute inset-0 bg-rosa/20 transform rotate-2 scale-102 -z-10" />
              
              {/* Image Frame */}
              <div className="overflow-hidden bg-white p-3 border border-azul/10 shadow-lg relative">
                <img
                  src="https://github.com/melifontanessi.png"
                  alt="Melisa Fontanessi"
                  className="w-full aspect-square object-cover bg-slate-100 grayscale hover:grayscale-0 transition-all duration-550"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                
                {/* Embedded dynamic Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-azul text-white px-3.5 py-1.5 border border-white/10 shadow-lg flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-rosa animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-bold">FOMO Streaming Co-Creator</span>
                </div>
              </div>
              
              {/* Floating detail tag */}
              <div className="absolute -top-4 -left-4 bg-white border border-azul/10 p-3 shadow-md hidden sm:flex items-center gap-2.5 animate-bounce-slow">
                <div className="w-8 h-8 rounded-full bg-azul text-white flex items-center justify-center font-serif italic font-bold text-sm">
                  M
                </div>
                <div>
                  <p className="text-[9px] uppercase font-mono tracking-widest text-slate-400">Postgrado</p>
                  <p className="text-xs font-bold text-azul">MBA IEBS Barcelona</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
