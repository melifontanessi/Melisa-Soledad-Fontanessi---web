import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section id="sobre-mi-bio" className="py-20 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story Bio */}
          <div className="lg:col-span-7">
            <span className="font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#84CC16] block mb-4">
              SOBRE MÍ
            </span>
            <h2 className="font-serif text-3xl md:text-[38px] font-black leading-[1.15] text-azul tracking-tight mb-6">
              Soy Melisa Fontanessi
            </h2>
            
            <div className="space-y-6 text-slate-600 font-sans text-sm md:text-base leading-relaxed font-light">
              <p>
                El marketing no se trata solo de vender; se trata de conectar y de entender el negocio desde adentro. Con más de 10 años de experiencia liderando estrategias y equipos, mi enfoque siempre ha sido el mismo: cruzar la creatividad visual con el análisis de datos para generar crecimiento real y sostenible.
              </p>
              <p>
                No creo en las soluciones mágicas ni en las fórmulas repetidas. Cada marca tiene su propia identidad y cada negocio tiene sus propios desafíos. Por eso, trabajo de forma personalizada, involucrándome en los procesos de tu empresa para diseñar estrategias que se adapten a tu realidad y te ayuden a alcanzar tus objetivos.
              </p>
            </div>

            {/* Micro details or CTA link */}
            <div className="mt-8">
              <a 
                href="#contacto" 
                className="inline-flex items-center gap-2 py-3 px-6 bg-[#FF3B7A] hover:bg-[#E22E67] text-white font-extrabold uppercase tracking-widest text-[10px] rounded-xl transition-all"
              >
                Trabajemos juntos <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Beautiful Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden bg-rose-50 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="Melisa Fontanessi Portrait" 
                className="w-full h-full object-cover grayscale brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
              {/* Soft pink ambient frame overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-azul/20 via-transparent to-transparent mix-blend-multiply" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
