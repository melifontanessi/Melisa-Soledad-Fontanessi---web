import React from 'react';
import { ArrowDownRight, ExternalLink, Sparkles, TrendingUp, Award, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="perfil" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FDFCFB] overflow-hidden relative">
      {/* Decorative background elements reminiscent of modern UI designs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-rosa/15 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-ocre/10 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Tag - customized to look like a premium pill badge */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 bg-rosa/20 border border-rosa/30 text-azul text-[11px] font-bold tracking-[0.1em] rounded-full mb-6 shadow-xs animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-[#C68E4B]" />
              <span className="text-azul">Estrategia Digital & Branding Activo</span>
            </div>

            {/* Display Headline - exact requested replacement */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-azul mb-6">
              Donde la estrategia digital y el diseño conectan con los resultados.
            </h1>

            {/* Supporting Paragraph - exact requested bajada */}
            <p className="font-sans text-base md:text-lg text-azul/80 leading-relaxed font-light mb-8 max-w-xl">
              Traduzco tus necesidades de comunicación, presencia y visibilidad en planes de acción claros que impulsan el rendimiento comercial y la identidad de tu negocio.
            </p>

            {/* Core Pillars / Bullet Highlights - updated with rounded pills and pink markers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-lg">
              <div className="flex items-start gap-3 bg-white/50 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-100 hover:border-rosa/40 transition-colors">
                <div className="w-6 h-6 rounded-full bg-rosa/20 flex items-center justify-center text-rose-500 shrink-0">
                  <TrendingUp className="w-3.5 h-3.5 text-ocre" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-azul uppercase tracking-wider font-mono">Dirección Estratégica</span>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">Creación de áreas de marketing de raíz.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/50 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-100 hover:border-rosa/40 transition-colors">
                <div className="w-6 h-6 rounded-full bg-rosa/20 flex items-center justify-center text-rose-500 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#C68E4B]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-azul uppercase tracking-wider font-mono">E-commerce de Conversión</span>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">Optimización de pauta y embudo digital.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/50 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-100 hover:border-rosa/40 transition-colors">
                <div className="w-6 h-6 rounded-full bg-rosa/20 flex items-center justify-center text-rose-500 shrink-0">
                  <Award className="w-3.5 h-3.5 text-ocre" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-azul uppercase tracking-wider font-mono">Liderazgo & MBA</span>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">Postgrado en IEBS de Barcelona.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/50 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-100 hover:border-rosa/40 transition-colors">
                <div className="w-6 h-6 rounded-full bg-rosa/20 flex items-center justify-center text-rose-500 shrink-0">
                  <Heart className="w-3.5 h-3.5 text-rose-500" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-azul uppercase tracking-wider font-mono">Identidad de Negocio</span>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">Coherencia estética y prestigio de marca.</p>
                </div>
              </div>
            </div>

            {/* CTAs - redesigned to be gorgeous rounded pills */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#servicios"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-azul hover:bg-azul/90 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Ver Soluciones & Paquetes
                <ArrowDownRight className="w-4 h-4 text-rosa" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2.5 px-7 py-4 border-2 border-azul text-azul hover:bg-azul hover:text-white font-bold text-xs uppercase tracking-widest rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Agendar Consultoría
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Picture Column - modeled after the Civi design (soft circles, floating badges with rounded-2xl) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-sm flex items-center justify-center">
              
              {/* Soft decorative background circles (Civi style) */}
              <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-rosa/30 -z-10" />
              <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border border-rosa/20 -z-10 animate-spin-slow" />
              
              {/* Elegant Portrait Frame with highly rounded corners (3xl) */}
              <div className="overflow-hidden bg-[#FAF8F5] p-3 border border-slate-100 rounded-[2.5rem] shadow-xl relative w-11/12 aspect-square">
                <img
                  src="https://github.com/melifontanessi.png"
                  alt="Melisa Fontanessi"
                  className="w-full h-full object-cover rounded-[2rem] bg-slate-100 transition-all duration-700 hover:scale-[1.03]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                
                {/* Embedded dynamic Floating Badge - Rounded Pill style */}
                <div className="absolute bottom-6 left-6 bg-azul text-white px-4 py-2 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rosa animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-bold text-white">FOMO Streaming Co-Creator</span>
                </div>
              </div>
              
              {/* Floating detail tag 1 (Top Left, elegant white card with pink bell/notif details) */}
              <div className="absolute -top-4 -left-2 bg-white border border-slate-100 rounded-2xl p-3.5 shadow-md hidden sm:flex items-center gap-3 animate-bounce-slow">
                <div className="w-9 h-9 rounded-full bg-rosa/20 text-[#C68E4B] flex items-center justify-center font-bold text-sm">
                  ★
                </div>
                <div>
                  <p className="text-[9px] uppercase font-mono tracking-widest text-slate-400">Postgrado</p>
                  <p className="text-xs font-bold text-azul">MBA IEBS Barcelona</p>
                </div>
              </div>

              {/* Floating detail tag 2 (Bottom Right, Civi style "5k+ candidates" representation with real credentials) */}
              <div className="absolute -bottom-2 -right-2 bg-white border border-slate-100 rounded-2xl p-3.5 shadow-md hidden sm:flex flex-col gap-1 items-start max-w-[170px]">
                <div className="flex items-center gap-1.5 text-rose-500">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-rose-500">Resultados</span>
                </div>
                <p className="text-xs font-bold text-azul font-sans leading-tight">15+ Años de Liderazgo Estratégico</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
