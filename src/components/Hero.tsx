import React from 'react';
import { ChevronRight, Check, TrendingUp, MousePointer, Code, Monitor, Sparkle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden relative">
      {/* Soft ambient background radial glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-rosa-soft blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-rosa-soft/50 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline */}
            <span className="font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-rosa block mb-4">
              IDEAS EN MOVIMIENTO PARA TOMAR ACCIÓN
            </span>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.12] tracking-tight text-azul mb-6">
              El marketing no empieza en Instagram. <br />
              <span className="text-rosa">Empieza entendiendo el negocio.</span>
            </h1>

            {/* Description Paragraphs */}
            <div className="font-sans text-sm md:text-base text-slate-600 leading-relaxed font-light mb-8 max-w-xl space-y-4">
              <p className="font-semibold text-azul">
                Mi objetivo es ayudarte a crear y crecer un entorno digital.
              </p>
              <p>
                Durante más de 15 años ayudé a empresas a construir estrategias, organizar equipos, desarrollar marcas y convertir ideas en proyectos que funcionan.
              </p>
            </div>

            {/* Call to Actions (CTAs) */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-rosa hover:bg-rosa/90 text-white font-extrabold text-[11px] uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Hablemos
                <ChevronRight className="w-4 h-4 text-white" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-azul text-azul hover:bg-azul/5 font-extrabold text-[11px] uppercase tracking-wider rounded-full transition-all"
              >
                Conocer cómo trabajo
                <ChevronRight className="w-4 h-4 text-azul" />
              </a>
            </div>

            {/* Bottom Highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-azul block leading-none mb-1">Estrategia</span>
                  <span className="text-slate-500 font-light block leading-none">con foco en resultados</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-azul block leading-none mb-1">Equipos</span>
                  <span className="text-slate-500 font-light block leading-none">alineados y eficientes</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-azul block leading-none mb-1">Acciones</span>
                  <span className="text-slate-500 font-light block leading-none">que generan crecimiento</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Portrait & Floating graphical badges Column */}
          <div className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm flex items-center justify-center">
              
              {/* Main Circular/Oval frame for the picture */}
              <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-[#FCF8F5] border border-slate-100 -z-10" />
              <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border border-rosa-soft -z-10" />
              
              {/* Main Portrait Frame with highly rounded corners (3xl) */}
              <div className="overflow-hidden bg-[#FDFCFB] rounded-full shadow-2xl relative w-11/12 aspect-square flex items-center justify-center p-2 border border-slate-100">
                <img
                  src="perfil.jpg"
                  alt="Melisa Fontanessi"
                  className="w-full h-full object-cover rounded-full bg-slate-50 transition-all duration-700 hover:scale-[1.03]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // If local profile image fails, try github profile image, then fallback to unsplash
                    if (target.src.endsWith('perfil.jpg') || target.src.includes('/perfil.jpg')) {
                      target.src = 'https://github.com/melifontanessi.png';
                    } else if (target.src.includes('github.com')) {
                      target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                    }
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* FLOATING BADGES (matching the design image exactly) */}
              
              {/* Badge 1: 📈 (Top Left, Green line chart) */}
              <div className="absolute -top-3 left-4 bg-white border border-slate-100 rounded-2xl p-3 shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Badge 2: 🖱️ (Cursor / Mouse pointer click, middle left) */}
              <div className="absolute top-[45%] -left-6 bg-white border border-slate-100 rounded-2xl p-3 shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center text-rosa">
                  <MousePointer className="w-5 h-5 fill-current" />
                </div>
              </div>

              {/* Badge 3: ✦ (Four-pointed star in light pink box, bottom middle-left) */}
              <div className="absolute bottom-6 left-12 bg-white border border-slate-100 rounded-2xl p-3 shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-rosa-soft flex items-center justify-center text-rosa">
                  <Sparkle className="w-5 h-5 fill-current" />
                </div>
              </div>

              {/* Badge 4: </> (Code brackets, middle-right) */}
              <div className="absolute top-[15%] -right-4 bg-white border border-slate-100 rounded-2xl p-3 shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500">
                  <Code className="w-5 h-5" />
                </div>
              </div>

              {/* Badge 5: 💻 (Monitor / desktop, middle-lower right) */}
              <div className="absolute bottom-24 -right-2 bg-white border border-slate-100 rounded-2xl p-3 shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-[#1E2D42]">
                  <Monitor className="w-5 h-5" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
