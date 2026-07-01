import React from 'react';
import { Sparkles, Users, Radio, ShieldAlert, Check, ArrowRight } from 'lucide-react';

export default function Approach() {
  return (
    <section id="enfoque" className="py-24 bg-[#FDFCFB] border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ocre font-bold bg-rosa/25 text-azul px-3 py-1 rounded-full inline-block mb-4">
            FILOSOFÍA DE TRABAJO
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-azul leading-tight tracking-tight mb-6">
            Donde la creatividad y el análisis se encuentran con la acción.
          </h2>
          <p className="font-sans text-lg text-azul/80 leading-relaxed font-light">
            Más que crear identidad visual o publicar contenido, mi objetivo es acompañarte en la evolución de tu marca. Escucho tus necesidades de comunicación, presencia y visibilidad para transformarlas en estrategias prácticas, ejecutables y enfocadas en hacer crecer tu negocio.
          </p>
        </div>

        {/* 3-Pillar Grid - Styled like Civi with rounded-3xl and pastel colors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Pillar 1: Analítica y Negocio (Soft Mint-Sage Card) */}
          <div className="p-8 rounded-[2rem] border border-slate-100 bg-[#eef5f1] hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-emerald-800 text-white flex items-center justify-center font-serif text-lg font-bold mb-6">
                01
              </div>
              <h3 className="font-serif text-2xl font-bold text-emerald-950 mb-4">
                Visión Analítica
              </h3>
              <p className="font-sans text-sm text-emerald-900/80 leading-relaxed font-light">
                Cada acción tiene un número detrás. Analizo el embudo de conversión, diagnostico oportunidades de mejora y reporto con KPIs tangibles. La creatividad sin datos es solo decoración.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-emerald-900/10 flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-emerald-850 group-hover:translate-x-1 transition-transform">
              <span>Orientación a Métricas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 2: Creatividad Visual (Soft Rose Card - Incorporating requested Pink/Rose details) */}
          <div className="p-8 rounded-[2rem] border border-rose-100 bg-[#fdf0ec] hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-rose-450 bg-[#E5B7B1] text-azul flex items-center justify-center font-serif text-lg font-bold mb-6">
                02
              </div>
              <h3 className="font-serif text-2xl font-bold text-rose-950 mb-4">
                Diseño & Detalle
              </h3>
              <p className="font-sans text-sm text-rose-900/80 leading-relaxed font-light">
                Atención obsesiva a los detalles que marcan la diferencia. Desde la tipografía editorial hasta la consistencia cromática, garantizo que la marca transmita prestigio y solidez.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-rose-900/10 flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-rose-800 group-hover:translate-x-1 transition-transform">
              <span>Estética Editorial</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C68E4B]" />
            </div>
          </div>

          {/* Pillar 3: Liderazgo Operativo (Soft Warm White Card) */}
          <div className="p-8 rounded-[2rem] border border-slate-100 bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-azul text-white flex items-center justify-center font-serif text-lg font-bold mb-6">
                03
              </div>
              <h3 className="font-serif text-2xl font-bold text-azul mb-4">
                Gestión de Equipos
              </h3>
              <p className="font-sans text-sm text-azul/80 leading-relaxed font-light">
                Lidero equipos multidisciplinares (diseño, IT, pauta y redactores) eliminando cuellos de botella y alineando el esfuerzo diario con la visión estratégica del negocio.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-azul/5 flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-ocre group-hover:translate-x-1 transition-transform">
              <span>Estructura & Procesos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

        {/* Agency vs Consulting Highlight Block - rounded layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20 bg-azul text-white p-8 md:p-12 rounded-[2.5rem] shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rosa/10 rounded-full blur-2xl -z-10" />
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-rosa text-[9px] font-bold uppercase tracking-[0.25em] rounded-full mb-6">
                <ShieldAlert className="w-3.5 h-3.5" />
                DIFERENCIAL COMPETITIVO
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-normal text-white leading-tight mb-6">
                ¿Por qué una <span className="font-bold italic text-rosa">Agencia de Publicidad</span> no siempre es la mejor opción?
              </h3>
              <p className="font-sans text-sm text-slate-300 leading-relaxed font-light mb-6">
                Tras más de 10 años collaborating con agencias externas, conozco perfectamente sus debilidades. Las agencias suelen vender paquetes preestablecidos, rotan constantemente a sus diseñadores y redactores juniors, y raramente comprenden los números internos de tu negocio.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center gap-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
            <p className="font-sans text-base text-white/90 leading-relaxed mb-4">
              <strong>Trabajemos a la par de tus necesidades</strong>:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-rosa text-azul shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Comprensión Real de Procesos</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">Me involucro en tu cadena de valor, tus recursos humanos y tu estructura de costos antes de trazar un solo plan.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-rosa text-azul shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Construcción de Capacidad Interna</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">Mi objetivo no es retenerte con una cuota mensual infinita. Te ayudo a armar tu propio departamento, capacitar a tu personal y seleccionar las herramientas de IA necesarias para que seas autosuficiente.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-rosa text-azul shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">KPIs Directamente Ligados a Conversión</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">No reporto métricas de vanidad ("likes" o visualizaciones vacías). Nos enfocamos en retención, optimización del e-commerce y retorno real de inversión publicitaria (ROAS).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOMO Streaming Featured Section - highly rounded and stylized with pink details */}
        <div className="border border-slate-100 p-8 md:p-12 bg-rosa/15 rounded-[2.5rem] relative overflow-hidden shadow-xs">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-rosa/10 rounded-full blur-3xl -z-10" />
          <div className="absolute top-0 left-0 w-48 h-48 bg-ocre/5 rounded-full blur-2xl -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-azul text-white text-[9px] font-bold uppercase tracking-[0.25em] rounded-full mb-4">
                <Radio className="w-3.5 h-3.5 text-rosa animate-pulse" />
                FOMO STREAMING MEDIA
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-azul mb-4">
                FOMO Streaming: <span className="font-normal italic text-[#C68E4B]">Branding en Acción</span>
              </h3>
              <p className="font-sans text-sm md:text-base text-azul/90 leading-relaxed mb-6">
                Fui parte activa y co-creadora de <strong>FOMO Streaming</strong>, un programa dinámico e independiente donde conversábamos sobre marketing digital, branding contemporáneo, inteligencia artificial aplicada y negocios con referentes líderes de la industria. Lideramos más de 20 transmisiones en vivo que sirvieron como un faro educativo de alto valor para emprendedores y corporaciones en la región.
              </p>
              <div className="inline-block p-5 bg-white/95 border-l-4 border-rosa rounded-r-2xl shadow-xs mb-6">
                <p className="font-sans font-medium text-sm md:text-base text-azul leading-relaxed">
                  "No lo hicimos para acumular seguidores vacíos, lo hicimos porque creemos que el conocimiento compartido es lo que construye una verdadera industria profesional."
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-8 bg-white border border-slate-100 rounded-3xl shadow-xs">
              <span className="font-serif text-6xl font-light text-ocre italic leading-none mb-2">20+</span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-azul mb-4">Programas en vivo</span>
              <p className="text-xs text-azul/70 leading-relaxed font-light mb-6">
                Entrevistas en profundidad, casos de análisis en tiempo real y debates de alto nivel.
              </p>
              <a 
                href="https://www.youtube.com/@FOMOStreaming/sub_confirmation=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center px-5 py-3 bg-azul text-white hover:bg-[#C68E4B] transition-colors rounded-full font-bold uppercase tracking-widest text-[9px]"
              >
                Ver los programas
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
